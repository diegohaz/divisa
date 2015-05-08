var Reflection = require('/js/Reflection');

module.exports = Inspiration;

function Inspiration(id, name, reflection, letterInspiration) {
  this.node = document.createElement('div');
  this.name = name;
  this.reflection = new Reflection(reflection);
  this.letterInspiration = letterInspiration || false;

  this.node.classList.add('inspiration');
  this.node.setAttribute('id', id);
  this.node.addEventListener('click', function() {
    window.dispatchEvent(new CustomEvent('inspect', {detail: this}));
  }.bind(this));
}

Inspiration.prototype.appendTo = function(node) {
  node.appendChild(this.node);
};

Inspiration.prototype.remove = function() {
  this.node.remove();
};

Inspiration.prototype.getName = function() {
  return this.name;
};

Inspiration.prototype.setName = function(name) {
  this.name = name;
};

Inspiration.prototype.getReflection = function() {
  return this.reflection;
};

Inspiration.prototype.setReflection = function(reflection) {
  this.reflection = reflection;
};

Inspiration.prototype.isLetterInspiration = function() {
  return this.letterInspiration;
};