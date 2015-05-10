module.exports = new Player();

function Player() {
  this.node = document.createElement('div');
  this.zoom = 1;
  this.reflection = null;

  this.node.setAttribute('id', 'player');
  this.node.style.transformOrigin = '50% 100%';
}

Player.prototype.appendTo = function(node) {
  node.appendChild(this.node);
};

Player.prototype.move = function(direction) {
  var steps = this.getWidth()/20;

  if (direction == 1) {
    this.node.style.left = (this.node.offsetLeft + steps) + 'px';
    this.node.style.transform = 'scale(' + this.zoom + ')';
  } else if (direction == -1) {
    this.node.style.left = (this.node.offsetLeft - steps) + 'px';
    this.node.style.transform = 'scale(-' + this.zoom + ', ' + this.zoom + ')';
  }
};

Player.prototype.moveTo = function(pos) {
  this.node.style.left = pos - this.getDiff() + 'px';
};

Player.prototype.moveToMax = function(maxPos) {
  this.node.style.left = maxPos - this.getDiff() - this.getWidth() + 'px';
};

Player.prototype.getPos = function() {
  return this.node.offsetLeft + this.getDiff();
};

Player.prototype.getMaxPos = function() {
  return this.getPos() + this.getWidth();
};

Player.prototype.getWidth = function() {
  return this.node.offsetWidth * this.zoom;
};

Player.prototype.getDiff = function() {
  return (this.node.offsetWidth - this.getWidth())/2;
};

Player.prototype.reflect = function(reflection) {
  if (this.reflection) {
    this.reflection.remove();
  }

  this.reflection = reflection;
  reflection.appendTo(this.node);
};

Player.prototype.setZoom = function(zoom) {
  this.zoom = zoom;
  this.node.style.transform = 'scale(' + zoom + ')';

  if (this.reflection) {
    this.reflection.remove();
  }
};