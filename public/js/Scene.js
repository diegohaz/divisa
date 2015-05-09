module.exports = Scene;

function Scene(id) {
  this.node = document.createElement('div');
  this.background = document.createElement('div');
  this.foreground = document.createElement('div');
  this.inspirations = [];
  this.zoom = 1

  this.node.classList.add('scene');
  this.node.setAttribute('id', id);

  this.background.classList.add('background');
  this.foreground.classList.add('foreground');
}

Scene.prototype.draw = function() {
  this.node.classList.remove('active');
  window.getComputedStyle(this.node).opacity;
  this.node.classList.add('active');

  this.node.appendChild(this.background);

  this.inspirations.forEach(function(inspiration) {
    inspiration.appendTo(this.node);
  }.bind(this));

  this.node.appendChild(this.foreground);
};

Scene.prototype.getWidth = function() {
  return this.node.offsetWidth;
};

Scene.prototype.appendTo = function(node) {
  node.appendChild(this.node);
};

Scene.prototype.remove = function() {
  this.node.remove();
  this.background.remove();
  this.foreground.remove();
};