module.exports = new Game();

function Game() {
  this.updateRate = 10;
  this.storage = window.localStorage;
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

Game.prototype.setControls = function(controls) {
  this.controls = controls;
};

Game.prototype.setStage = function(stage) {
  this.stage = stage;
};

Game.prototype.setMoments = function(moments) {
  this.moments = moments;
};

Game.prototype.setPlayer = function(player) {
  this.player = player;
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
    console.log(evt.detail);
  });
};

Game.prototype.update = function() {
  var moment = this.getCurrentMoment();
  var scene = moment.getCurrentScene();

  if (this.movingLeft || this.movingRight) {
    if (moment.isFirstScene() && this.movingLeft && player.pos <= 0) {
      this.player.moveTo(0);
    } else if (moment.isLastScene() && this.movingRight && player.getMaxPos() >= scene.getWidth()) {
      this.player.moveToMax(scene.getWidth());
    } else {
      this.player.move(this.movingRight || -1);
    }
  }

  if (player.pos > scene.getWidth() && !moment.isLastScene()) {
    scene = this.loadNextScene();
    this.player.moveTo(0);
  } else if (player.pos < 0 && !moment.isFirstScene()) {
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

Game.prototype.getCurrentMoment = function(storage) {
  storage = storage || this.storage;

  if (storage && storage.length) {
    this.currentMoment = parseInt(storage.getItem('currentMoment'));
  } else if (storage) {
    storage.setItem('currentMoment', this.currentMoment);
  }

  return this.moments[this.currentMoment];
};

Game.prototype.setCurrentMoment = function(moment, storage) {
  storage = storage || this.storage;

  if (storage) {
    storage.setItem('currentMoment', moment);
  }

  this.currentMoment = moment;
};

Game.prototype.loadMoment = function(moment) {
  if (!this.stage) {
    console.error('Stage must be defined to load moment');
    return;
  }

  if (!(moment in this.moments)) {
    console.error('There is not moment ' + moment);
    return;
  }

  if (moment != this.currentMoment) {
    this.removeCurrentMoment();
  }

  this.setCurrentMoment(moment)

  moment = this.getCurrentMoment();
  moment.appendTo(this.stage);
  var scene = this.loadCurrentScene();

  this.player.setZoom(scene.zoom);
  this.player.moveTo(0);

  return moment;
};

Game.prototype.loadCurrentMoment = function() {
  this.getCurrentMoment();
  return this.loadMoment(this.currentMoment);
};

Game.prototype.loadNextMoment = function() {
  return this.loadMoment(this.currentMoment + 1);
};

Game.prototype.loadScene = function(scene) {
  var scene = this.getCurrentMoment().loadScene(scene);
  this.player.setZoom(scene.zoom);

  return scene;
};

Game.prototype.loadCurrentScene = function() {
  var scene = this.getCurrentMoment().loadCurrentScene();
  this.player.setZoom(scene.zoom);

  return scene;
};

Game.prototype.loadNextScene = function() {
  var scene = this.getCurrentMoment().loadNextScene();
  this.player.setZoom(scene.zoom);

  return scene;
};

Game.prototype.loadPreviousScene = function() {
  var scene = this.getCurrentMoment().loadPreviousScene();
  this.player.setZoom(scene.zoom);

  return scene;
};

Game.prototype.removeCurrentMoment = function() {
  this.getCurrentMoment().remove();
};