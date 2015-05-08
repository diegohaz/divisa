module.exports = Moment;

function Moment() {
  this.node = document.createElement('div');
  this.storage = window.localStorage;
  this.currentScene = 0;
  this.scenes = [];

  this.node.classList.add('moment');
}

Moment.prototype.isFirstScene = function() {
  return this.currentScene == 0;
};

Moment.prototype.isLastScene = function() {
  return this.currentScene == this.scenes.length - 1;
};

Moment.prototype.getCurrentScene = function(storage) {
  storage = storage || this.storage;

  if (storage && storage.getItem('currentScene')) {
    this.currentScene = parseInt(storage.getItem('currentScene'));
  } else if (storage) {
    storage.setItem('currentScene', this.currentScene);
  }

  return this.scenes[this.currentScene];
};

Moment.prototype.setCurrentScene = function(scene, storage) {
  storage = storage || this.storage;

  if (storage) {
    storage.setItem('currentScene', scene);
  }

  this.currentScene = scene;
};

Moment.prototype.loadScene = function(scene) {
  if (!(scene in this.scenes)) {
    console.error('There is not scene ' + scene);
    return;
  }

  if (scene != this.currentScene) {
    this.removeCurrentScene();
  }

  this.setCurrentScene(scene)

  scene = this.getCurrentScene();
  scene.appendTo(this.node);
  scene.draw();

  return scene;
};

Moment.prototype.loadCurrentScene = function() {
  this.getCurrentScene();
  return this.loadScene(this.currentScene);
};

Moment.prototype.loadNextScene = function() {
  return this.loadScene(this.currentScene + 1);
};

Moment.prototype.loadPreviousScene = function() {
  return this.loadScene(this.currentScene - 1);
};

Moment.prototype.removeCurrentScene = function() {
  this.getCurrentScene().remove();
};

Moment.prototype.appendTo = function(node) {
  node.appendChild(this.node);
};

Moment.prototype.remove = function() {
  this.node.remove();
};