module.exports = Reflection;

function Reflection(text) {
  this.node = document.createElement('div');
  this.text = document.createTextNode(text);

  this.node.classList.add('reflection');
  this.node.appendChild(this.text);
}

Reflection.prototype.appendTo = function(node) {
  node.appendChild(this.node);
};

Reflection.prototype.remove = function() {
  this.node.remove();
};