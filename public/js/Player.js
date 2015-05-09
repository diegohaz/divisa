module.exports = new Player();

function Player() {
  this.node = document.createElement('div');
  this.pos = 0;
  this.zoom = 1;
  this.reflection = null;

  this.node.setAttribute('id', 'player');
  this.pos = this.node.offsetLeft;
}

Player.prototype.appendTo = function(node) {
  node.appendChild(this.node);
};

Player.prototype.move = function(direction) {
  var steps = this.node.offsetWidth/20;

  if (direction == 1) {
    this.node.style.left = (this.node.offsetLeft + steps) + 'px';
  } else if (direction == -1) {
    this.node.style.left = (this.node.offsetLeft - steps) + 'px';
  }

  this.pos = this.node.offsetLeft * this.zoom;
};

Player.prototype.moveTo = function(pos) {
  this.node.style.left = (pos/this.zoom) + 'px';
  this.pos = pos;
};

Player.prototype.moveToMax = function(maxPos) {
  this.node.style.left = ((maxPos - this.node.offsetWidth * this.zoom)/this.zoom) + 'px';
  this.pos = maxPos - this.node.offsetWidth * this.zoom;
};

Player.prototype.getMaxPos = function() {
  return this.pos + this.node.offsetWidth * this.zoom;
};

Player.prototype.reflect = function(reflection) {
  if (this.reflection) {
    this.reflection.remove();
  }

  this.reflection = reflection;
  reflection.appendTo(this.node);
};

Player.prototype.setZoom = function(zoom) {
  this.node.style.zoom = zoom;
  this.zoom = zoom;

  if (this.reflection) {
    this.reflection.remove();
  }
};