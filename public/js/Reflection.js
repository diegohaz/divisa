module.exports = Reflection;

function Reflection(text, letterReflection) {
  this.node = document.createElement('div');
  this.text = document.createTextNode(text);
  this.letterReflection = letterReflection;
  this.time = 5000;
  this.timeout = null;

  this.node.classList.add('reflection');
  this.node.appendChild(this.text);
}

Reflection.prototype.appendTo = function(node) {
  node.appendChild(this.node);
  this.node.style.zoom = 'reset';

  this.node.classList.remove('active');
  window.getComputedStyle(this.node).opacity;
  this.node.classList.add('active');

  clearTimeout(this.timeout);
  this.timeout = setTimeout(function() {
    this.remove();
  }.bind(this), this.time);
};

Reflection.prototype.remove = function() {
  this.node.remove();
};

Reflection.prototype.isLetterReflection = function() {
  return !!this.letterReflection;
};