var Item = require('/js/Item');

module.exports = Inspiration;

Inspiration.prototype = new Item();
Inspiration.prototype.constructor = Inspiration;

function Inspiration(id, name, img, width, height, x, y) {
  this.id = id;
  this.name = name;
  this.node = document.createElement('div');
  this.label = document.createElement('div');

  this.node.classList.add('inspiration');
  this.node.setAttribute('id', id);

  this.stylize(img, width, height, x, y);
  this.node.style.pointerEvents = 'auto';

  this.label.appendChild(document.createTextNode(this.name));
  this.label.style.position = 'fixed';
  this.label.style.pointerEvents = 'none';
  this.label.classList.add('label');

  this.node.addEventListener('click', function() {
    window.dispatchEvent(new CustomEvent('inspect', {detail: this}));
  }.bind(this));

  this.node.addEventListener('mousemove', function(evt) {
    this.label.classList.add('active');
    this.label.style.left = evt.clientX + 'px';
    this.label.style.top = evt.clientY + 'px';
  }.bind(this));

  this.node.addEventListener('mouseout', function(evt) {
    this.label.classList.remove('active');
  }.bind(this));
}

Inspiration.prototype.appendTo = function(node) {
  node.appendChild(this.node);
  node.appendChild(this.label);
};

Inspiration.prototype.remove = function() {
  this.node.remove();
  this.label.remove();
};