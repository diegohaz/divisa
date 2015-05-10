module.exports = Item;

function Item(img, width, height, x, y) {
  this.node = document.createElement('div');
  this.img = img;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;

  this.node.classList.add('item');
  this.stylize();
}

Item.prototype.stylize = function(img, width, height, x, y) {
  img = img || this.img;
  width = width || this.width;
  height = height || this.height;
  x = x || this.x;
  y = y || this.y;

  this.node.style.position = 'absolute';
  this.node.style.backgroundImage = img? 'url(' + img + ')' : null;
  this.node.style.width = parseUnity(width);
  this.node.style.height = parseUnity(height);
  this.node.style.left = parseUnity(x);
  this.node.style.top = parseUnity(y);
  this.node.style.pointerEvents = 'none';

  function parseUnity(n) {
    return (typeof n == 'number'? n + 'vw' : n);
  }
};

Item.prototype.appendTo = function(node) {
  node.appendChild(this.node);
};

Item.prototype.remove = function() {
  this.node.remove();
};