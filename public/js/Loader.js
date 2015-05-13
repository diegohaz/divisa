module.exports = Loader;

function Loader(files, basePath) {
  this.node = document.createElement('div');
  this.queue = new createjs.LoadQueue(true, basePath);
  this.complete = false;
  this.onComplete = function() {};

  var loadingBar = document.createElement('div');
  loadingBar.classList.add('loading-bar');

  this.node.appendChild(loadingBar);
  this.node.classList.add('loader');

  this.queue.setMaxConnections(5);
  this.queue.loadManifest(files, false);

  this.queue.on('progress', function(evt) {
    loadingBar.style.width = evt.progress * 100 + '%';
  });

  this.queue.on('complete', function() {
    this.node.classList.remove('loading');
    this.node.classList.add('complete');

    setTimeout(function() {
      this.remove();
      this.complete = true;
      this.onComplete();
    }.bind(this), 500);
  }.bind(this));
}

Loader.prototype.load = function() {
  this.node.classList.add('loading');

  return this.queue.load();
};

Loader.prototype.isComplete = function() {
  return this.complete;
};

Loader.prototype.appendTo = function(node) {
  node.appendChild(this.node);
};

Loader.prototype.remove = function() {
  this.node.remove();
};