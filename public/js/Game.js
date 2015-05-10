module.exports = new Game();

function Game() {
  this.updateRate = 10;
  this.currentMoment = 0;
  this.stage  = null;
  this.player = null;
  this.movingRight = false;
  this.movingLeft = false;
  this.moments = [];
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
  this.loadCurrentMoment(function() {
    this.loadPlayer(this.player, this.stage);
    this.update();

    // TODO: Organize into different functions
    window.addEventListener('touchstart', function(evt) {
      var touchControls = document.querySelectorAll('.touch-control');

      for (var i = 0; i < touchControls.length; i++) {
        var touchControl = touchControls[i];
        var keyCode = 0;

        touchControl.classList.add('active');

        function absorbEvent(event) {
          e = event || window.event;
          e.preventDefault && e.preventDefault();
          e.stopPropagation && e.stopPropagation();
          e.cancelBubble = true;
          e.returnValue = false;
          return false;
        }

        touchControl.ontouchstart = absorbEvent;
        touchControl.ontouchmove = absorbEvent;
        touchControl.ontouchend = absorbEvent;
        touchControl.ontouchcancel = absorbEvent;

        touchControl.addEventListener('touchstart', function(e) {
          if (this.classList.contains('left')) {
            keyCode = game.controls.left[0];
          } else {
            keyCode = game.controls.right[0];
          }

          window.dispatchEvent(new CustomEvent('keydown', {detail: keyCode}));

          return absorbEvent(e);
        });

        touchControl.addEventListener('touchend', function() {
          if (this.classList.contains('left')) {
            keyCode = game.controls.left[0];
          } else {
            keyCode = game.controls.right[0];
          }

          window.dispatchEvent(new CustomEvent('keyup', {detail: keyCode}));
        });
      }
    });

    window.addEventListener('keydown', function(evt) {
      var key = evt.detail ? evt.detail : evt.keyCode;

      if (~this.controls.left.indexOf(key)) {
        this.movingLeft = true;
        this.player.node.classList.remove('right');
        this.player.node.classList.add('moving', 'left');
      } else if (~this.controls.right.indexOf(key)) {
        this.movingRight = true;
        this.player.node.classList.remove('left');
        this.player.node.classList.add('moving', 'right');
      }
    }.bind(this));

    window.addEventListener('keyup', function(evt) {
      var key = evt.detail ? evt.detail : evt.keyCode;

      if (~this.controls.left.indexOf(key)) {
        this.movingLeft = false;
        this.movingRight || this.player.node.classList.remove('moving');
      } else if (~this.controls.right.indexOf(key)) {
        this.movingRight = false;
        this.movingLeft || this.player.node.classList.remove('moving');
      }
    }.bind(this));

    window.addEventListener('inspect', function(evt) {
      var detail = evt.detail;
      var reflection = this.player.reflect(detail.id);

      if (reflection.isLetterReflection()) {
        this.addLetterReflection(reflection);
      }
    }.bind(this));
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
  var player = this.player;
  var moment = this.getCurrentMoment(true);
  var scene = moment.getCurrentScene(true);

  setTimeout(this.update.bind(this), this.updateRate);

  if (moment.loader && !moment.loader.isComplete()) {
    return;
  }

  if (this.movingLeft || this.movingRight) {
    if (moment.isFirstScene() && this.movingLeft && player.getPos() <= 0) {
      player.moveTo(0);
    } else if (moment.isLastScene() && this.movingRight && player.getMaxPos() >= scene.getWidth()) {
      player.moveToMax(scene.getWidth());
    } else {
      player.move(this.movingRight || -1);
    }
  }

  if (player.getPos() > scene.getWidth() && !moment.isLastScene()) {
    scene = this.loadNextScene();
    player.moveTo(1);
  } else if (player.getPos() < 0 && !moment.isFirstScene()) {
    scene = this.loadPreviousScene();
    player.moveToMax(scene.getWidth());
  }
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

Game.prototype.loadMoment = function(moment, callback) {
  if (moment == this.currentMoment) {
    var momentObj = this.getCurrentMoment(true);
  } else {
    this.removeCurrentMoment();
    this.setCurrentMoment(moment);

    var momentObj = this.moments[moment];
  }

  momentObj.appendTo(this.stage, function() {
    momentObj.prepareScenes();

    var scene = this.loadCurrentScene();

    this.player.setZoom(scene.zoom);
    this.player.moveTo(0);

    callback(momentObj);
  }.bind(this));
};

Game.prototype.loadCurrentMoment = function(callback) {
  return this.loadMoment(this.getCurrentMoment(), callback);
};

Game.prototype.loadNextMoment = function(callback) {
  return this.loadMoment(this.getCurrentMoment() + 1, callback);
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
  this.player.move(-1);

  return scene;
};

Game.prototype.removeCurrentMoment = function() {
  this.getCurrentMoment(true).remove();
};