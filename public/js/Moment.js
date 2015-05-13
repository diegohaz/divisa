module.exports = Moment;

function Moment(id) {
  this.node = document.createElement('div');
  this.preparator = document.createElement('div');
  this.loader = null;
  this.currentScene = 3;
  this.scenes = [];

  this.node.classList.add('moment');
  this.node.setAttribute('id', id);
}

Moment.prototype.isFirstScene = function() {
  return this.getCurrentScene() == 0;
};

Moment.prototype.isLastScene = function() {
  return this.getCurrentScene() == this.scenes.length - 1;
};

Moment.prototype.getCurrentScene = function(returnObject) {
  if (!(this.currentScene in this.scenes)) {
    console.error('There is not scene ' + this.currentScene);
    return;
  }

  if (returnObject) {
    return this.scenes[this.currentScene];
  }

  return this.currentScene;
};

Moment.prototype.setCurrentScene = function(scene) {
  if (!(scene in this.scenes)) {
    console.error('There is not scene ' + scene);
    return;
  }

  this.currentScene = scene;
};

Moment.prototype.loadScene = function(scene) {
  if (scene == this.getCurrentScene()) {
    var sceneObj = this.getCurrentScene(true);
  } else {
    this.removeCurrentScene();
    this.setCurrentScene(scene);

    var sceneObj = this.scenes[scene];
  }

  sceneObj.appendTo(this.node);

  return sceneObj;
};

Moment.prototype.loadCurrentScene = function() {
  return this.loadScene(this.getCurrentScene());
};

Moment.prototype.loadNextScene = function() {
  return this.loadScene(this.getCurrentScene() + 1);
};

Moment.prototype.loadPreviousScene = function() {
  return this.loadScene(this.getCurrentScene() - 1);
};

Moment.prototype.removeCurrentScene = function() {
  this.getCurrentScene(true).remove();
};

Moment.prototype.appendTo = function(node, callback) {
  if (this.loader) {
    if (!this.loader.isComplete()) {
      this.loader.appendTo(node);
      this.loader.load();

      this.loader.queue.on('complete', function() {
        this.prepareScenes();
      }.bind(this));

      this.loader.onComplete = function() {
        node.appendChild(this.node);
        callback();
      }.bind(this);

    } else {
      node.appendChild(this.node);
      callback();
    }
  } else {
    node.appendChild(this.node);
    callback();
  }
};

Moment.prototype.remove = function() {
  this.node.remove();
};

Moment.prototype.prepareScenes = function() {
  this.preparator.style.position = 'fixed';
  this.preparator.style.visibility = 'hidden';
  this.preparator.style.pointerEvents = 'none';
  document.body.appendChild(this.preparator);

  for (var i = 0; i < this.scenes.length; i++) {
    var scene = this.scenes[i];
    scene.appendTo(this.preparator);
    scene.draw();
  }
};