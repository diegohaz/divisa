module.exports = Scene;

function Scene() {
  this.node = document.createElement('div');
  this.inspirations = [];
  this.zoom = 1

  this.node.classList.add('scene');
}

Scene.prototype.draw = function() {
  this.node.classList.remove('active');
  window.getComputedStyle(this.node).opacity;
  this.node.classList.add('active');

  this.inspirations.forEach(function(inspiration) {
    inspiration.appendTo(this.node);
  }.bind(this));
};

Scene.prototype.getWidth = function() {
  return this.node.offsetWidth;
};

Scene.prototype.appendTo = function(node) {
  node.appendChild(this.node);
};

Scene.prototype.remove = function() {
  this.node.remove();
};