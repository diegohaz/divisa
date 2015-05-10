module.exports = Scene;

function Scene(id) {
  this.node = document.createElement('div');
  this.zoom = 1
  this.backgrounds = [];
  this.inspirations = [];
  this.foregrounds = [];

  this.node.classList.add('scene');
  this.node.setAttribute('id', id);
}

Scene.prototype.draw = function() {
  var items = this.backgrounds.concat(this.inspirations).concat(this.foregrounds);

  items.forEach(function(item) {
    item.appendTo(this.node);
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