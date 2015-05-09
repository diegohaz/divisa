module.exports = new Game();

function Game() {
  this.updateRate = 10;
  this.reflections = [];
  this.letterReflections = 0;
  this.currentMoment = 0;
  this.stage  = null;
  this.player = null;
  this.moments = [];
  this.moving = 0;
  this.controls = {
    left: [],
    right: []
  };
}

Game.prototype.getCurrentMoment = function(returnObject) {
  if (!(this.currentMoment in this.moments)) {
    console.error('There is not moment ' + this.currentMoment);
    return;
  }

  if (returnObject) {
    return this.moments[this.currentMoment];
  }

  return this.currentMoment;
};

Game.prototype.setCurrentMoment = function(value) {
  if (!(value in this.moments)) {
    console.error('There is not moment ' + value);
    return;
  }

  this.currentMoment = value;
};

Game.prototype.getLetterReflections = function() {
  return this.letterReflections;
};

Game.prototype.addLetterReflection = function(reflection) {
  if (!~this.reflections.indexOf(reflection) && this.getLetterReflections() <= this.getCurrentMoment()) {
    this.reflections.push(reflection);
    this.letterReflections++;
  }
};

Game.prototype.clearReflections = function() {
  this.reflections = [];
  this.letterReflections = 0;
};

Game.prototype.start = function() {
  this.loadPlayer(this.player, this.stage);
  this.loadCurrentMoment();
  this.update();

  window.addEventListener('keydown', function(evt) {
    if (~this.controls.left.indexOf(evt.keyCode)) {
      this.movingLeft = true;
      this.player.node.classList.remove('right');
      this.player.node.classList.add('moving', 'left');
    } else if (~this.controls.right.indexOf(evt.keyCode)) {
      this.movingRight = true;
      this.player.node.classList.remove('left');
      this.player.node.classList.add('moving', 'right');
    }
  }.bind(this));

  window.addEventListener('keyup', function(evt) {
    if (~this.controls.left.indexOf(evt.keyCode)) {
      this.movingLeft = false;
      this.movingRight || this.player.node.classList.remove('moving');
    } else if (~this.controls.right.indexOf(evt.keyCode)) {
      this.movingRight = false;
      this.movingLeft || this.player.node.classList.remove('moving');
    }
  }.bind(this));

  window.addEventListener('inspect', function(evt) {
    var Reflection = require('/js/Reflection');
    var detail = evt.detail;

    if (detail instanceof Reflection) {
      if (detail.isLetterReflection()) {
        this.addLetterReflection(detail);
      }

      this.player.reflect(detail)
    }
  }.bind(this));
};

Game.prototype.restart = function() {
  var moment = this.getCurrentMoment(true);

  moment.getCurrentScene(true).remove();
  moment.setCurrentScene(0);
  moment.remove();

  this.clearReflections();
  this.setCurrentMoment(0);
  this.loadCurrentMoment();

  this.player.moveTo(0);
  this.player.node.classList.remove('moving', 'left', 'right');
};

Game.prototype.update = function() {
  var moment = this.getCurrentMoment(true);
  var scene = moment.getCurrentScene(true);

  if (this.movingLeft || this.movingRight) {
    if (moment.isFirstScene() && this.movingLeft && this.player.pos <= 0) {
      this.player.moveTo(0);
    } else if (moment.isLastScene() && this.movingRight && this.player.getMaxPos() >= scene.getWidth()) {
      this.player.moveToMax(scene.getWidth());
    } else {
      this.player.move(this.movingRight || -1);
    }
  }

  if (this.player.pos > scene.getWidth() && !moment.isLastScene()) {
    scene = this.loadNextScene();
    this.player.moveTo(0);
  } else if (this.player.pos < 0 && !moment.isFirstScene()) {
    scene = this.loadPreviousScene();
    this.player.moveToMax(scene.getWidth());
  }

  setTimeout(this.update.bind(this), this.updateRate);
};

Game.prototype.loadPlayer = function(player, stage) {
  player = player || this.player;
  stage = stage || this.stage;

  if (!player || !stage) {
    console.error('Player and stage must be defined');
    return;
  }

  player.appendTo(stage);

  return player;
};

Game.prototype.loadMoment = function(moment) {
  if (moment == this.currentMoment) {
    var momentObj = this.getCurrentMoment(true);
  } else {
    this.removeCurrentMoment();
    this.setCurrentMoment(moment);

    var momentObj = this.moments[moment];
  }

  momentObj.appendTo(this.stage);

  var scene = this.loadCurrentScene();

  this.player.setZoom(scene.zoom);
  this.player.moveTo(0);

  return momentObj;
};

Game.prototype.loadCurrentMoment = function() {
  return this.loadMoment(this.getCurrentMoment());
};

Game.prototype.loadNextMoment = function() {
  return this.loadMoment(this.getCurrentMoment() + 1);
};

Game.prototype.loadScene = function(scene) {
  var scene = this.getCurrentMoment(true).loadScene(scene);
  this.player.setZoom(scene.zoom);

  return scene;
};

Game.prototype.loadCurrentScene = function() {
  var scene = this.getCurrentMoment(true).loadCurrentScene();
  this.player.setZoom(scene.zoom);

  return scene;
};

Game.prototype.loadNextScene = function() {
  var scene = this.getCurrentMoment(true).loadNextScene();
  this.player.setZoom(scene.zoom);

  return scene;
};

Game.prototype.loadPreviousScene = function() {
  var scene = this.getCurrentMoment(true).loadPreviousScene();
  this.player.setZoom(scene.zoom);

  return scene;
};

Game.prototype.removeCurrentMoment = function() {
  this.getCurrentMoment(true).remove();
};