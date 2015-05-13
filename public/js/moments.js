var Moment = require('/js/Moment');
var Loader = require('/js/Loader');
var Scene = require('/js/Scene');
var Item = require('/js/Item');
var Inspiration = require('/js/Inspiration');

var m = [];

// TODO: auto loader
m[0] = new Moment('m0');
m[0].loader = new Loader([
  'map.png', 'weapons.png', 'window.png', 'table.png', 'box.png', 'holder.png',
  's0.jpg', '/img/player.png', 's1.jpg', 'light.png', 'prison.png', 'rat.png',
  's2.jpg', 'wall.png', 'family.png', 'house.png', 's3.jpg', 'tents.png',
  'soldiers.png', 'creates.png', 'car.png'
], '/img/m0/');

// Moment 1 Scene 1
m[0].scenes[0] = new Scene('m0s0');
m[0].scenes[0].zoom = 1;
m[0].scenes[0].backgrounds = [
  new Item('/img/m0/s0.jpg', '100%', '100%')
];
m[0].scenes[0].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('map1', 'Mapa', '/img/m0/map.png', 431/19, 312/19, 1396/19, 36/19),
  new Inspiration('weapons1', 'Armas', '/img/m0/weapons.png', 463/19, 278/19, 515/19, 54/19),
  new Inspiration('window1', 'Janela', '/img/m0/window.png', 398/19, 337/19, 30/19, 30/19),
  new Inspiration('table1', 'Mesa', '/img/m0/table.png', 484/19, 148/19, 894/19, 375/19)
];
m[0].scenes[0].foregrounds = [
  // new Item('/img/m0/box.png', 247/19, 373/19, 296/19, 300/19),
  new Item('/img/m0/holder.png', 313/19, 190/19, 622/19, 54/19)
];

// Moment 1 Scene 2
m[0].scenes[1] = new Scene('m0s1');
m[0].scenes[1].zoom = .667;
m[0].scenes[1].backgrounds = [
  new Item('/img/m0/s1.jpg', '100%', '100%')
];
m[0].scenes[1].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('light1', 'Lâmpada', '/img/m0/light.png', 184/19, 193/19, 875/19, 0),
];
m[0].scenes[1].foregrounds = [
  new Item('/img/m0/prison.png', '100%', 473/19, 0, 170/19),
  new Inspiration('rat1', 'Rato', '/img/m0/rat.png', 96/19, 50/19, 1400/19, 630/19),
];

// Moment 1 Scene 3
m[0].scenes[2] = new Scene('m0s2');
m[0].scenes[2].zoom = .333;
m[0].scenes[2].backgrounds = [
  new Item('/img/m0/s2.jpg', '100%', '100%')
];
m[0].scenes[2].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('wall1', 'Muro', '/img/m0/wall.png', 396/19, 261/19, 400/19, 420/19),
  new Inspiration('family1', 'Família', '/img/m0/family.png', 246/19, 239/19, 875/19, 500/19),
  new Inspiration('house1', 'Casa', '/img/m0/house.png', 304/19, 157/19, 1520/19, 230/19),
];

// Moment 1 Scene 4
m[0].scenes[3] = new Scene('m0s3');
m[0].scenes[3].zoom = .667;
m[0].scenes[3].backgrounds = [
  new Item('/img/m0/s3.jpg', '100%', '100%')
];
m[0].scenes[3].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('tents1', 'Tendas', '/img/m0/tents.png', 855/19, 274/19, 1020/19, 200/19),
  new Inspiration('car1', 'Jipe', '/img/m0/car.png', 603/19, 328/19, 150/19, 260/19),
  new Inspiration('crates1', 'Caixotes', '/img/m0/crates.png', 262/19, 241/19, 760/19, 210/19),
  new Inspiration('soldiers1', 'Soldados', '/img/m0/soldiers.png', 477/19, 359/19, 1080/19, 350/19),
];
// Moment 1 Scene 5
m[0].scenes[4] = new Scene('m0s4');
m[0].scenes[4].zoom = 1;
m[0].scenes[4].inspirations = [
  new Inspiration('dogtag1', 'Dogtag'),
  new Inspiration('bed1', 'Cama', '/img/m0/bed.png', 411/19, 119/19, 1200/19, 600/19),
  new Inspiration('diary1', 'Diário'),
  new Inspiration('calendar1', 'Calendário')
];

// TODO: auto loader
m[1] = new Moment('m1');
m[1].loader = new Loader([
  'map.png', 'weapons.png', 'window.png', 'table.png', 'box.png', 'holder.png',
  's0.jpg', '/img/player.png', 's1.jpg', 'light.png', 'prison.png', 'rat.png',
], '/img/m0/');

// Moment 1 Scene 1
m[1].scenes[0] = new Scene('m1s0');
m[1].scenes[0].zoom = 1;
m[1].scenes[0].backgrounds = [
  new Item('/img/m0/s0.jpg', '100%', '100%')
];
m[1].scenes[0].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('map1', 'Mapa', '/img/m0/map.png', 431/19, 312/19, 1396/19, 36/19),
  new Inspiration('weapons1', 'Armas', '/img/m0/weapons.png', 463/19, 278/19, 515/19, 54/19),
  new Inspiration('window1', 'Janela', '/img/m0/window.png', 398/19, 337/19, 30/19, 30/19),
  new Inspiration('table1', 'Mesa', '/img/m0/table.png', 484/19, 148/19, 894/19, 375/19)
];
m[1].scenes[0].foregrounds = [
  // new Item('/img/m0/box.png', 247/19, 373/19, 296/19, 300/19),
  new Item('/img/m0/holder.png', 313/19, 190/19, 622/19, 54/19)
];

// Moment 1 Scene 2
m[1].scenes[1] = new Scene('m1s1');
m[1].scenes[1].zoom = .667;
m[1].scenes[1].backgrounds = [
  new Item('/img/m0/s1.jpg', '100%', '100%')
];
m[1].scenes[1].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('light1', 'Lâmpada', '/img/m0/light.png', 184/19, 193/19, 875/19, 0),
];
m[1].scenes[1].foregrounds = [
  new Item('/img/m0/prison.png', '100%', 473/19, 0, 170/19),
  new Inspiration('rat1', 'Rato', '/img/m0/rat.png', 96/19, 50/19, 1400/19, 630/19),
];

// Moment 1 Scene 3
m[1].scenes[2] = new Scene('m1s2');
m[1].scenes[2].zoom = .333;
m[1].scenes[2].backgrounds = [
  new Item('/img/m0/s2.svg', '100%', '100%')
];
m[1].scenes[2].inspirations = [
  new Inspiration('graffiti1', 'Pichação'),
  new Inspiration('family1', 'Família'),
  new Inspiration('house1', 'Casa')
];

// Moment 1 Scene 4
m[1].scenes[3] = new Scene('m1s3');
m[1].scenes[3].zoom = .667;
m[1].scenes[3].backgrounds = [
  new Item('/img/m0/s3.svg', '100%', '100%')
];
m[1].scenes[3].inspirations = [
  new Inspiration('tents1', 'Barracas'),
  new Inspiration('soldiers1', 'Soldados'),
  new Inspiration('car1', 'Jipe'),
  new Inspiration('crates1', 'Caixotes')
];

// Moment 1 Scene 5
m[1].scenes[4] = new Scene('m1s4');
m[1].scenes[4].zoom = 1;
m[1].scenes[4].inspirations = [
  new Inspiration('dogtag1', 'Dogtag'),
  new Inspiration('bed1', 'Cama', '/img/m0/bed.png', 411/19, 119/19, 1200/19, 600/19),
  new Inspiration('diary1', 'Diário'),
  new Inspiration('calendar1', 'Calendário')
];

module.exports = m;