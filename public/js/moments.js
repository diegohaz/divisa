var Moment = require('/js/Moment');
var Loader = require('/js/Loader');
var Scene = require('/js/Scene');
var Item = require('/js/Item');
var Inspiration = require('/js/Inspiration');

var m = [];

// TODO: auto loader
m[0] = new Moment('m0');
m[0].loader = new Loader([
  '/img/player.png',
  's0.svg', 'map.svg', 'weapons.svg', 'window.svg', 'table.svg', 'straps.svg',
  's1.svg', 'prison.svg', 'light.svg', 'children.svg', 'lightt.svg',
  's2.svg', 'wall.svg', 'family.svg', 'house.svg',
  's3.svg', 'tents.svg', 'creates.svg', 'car.svg', 'soldiers.svg',
  's4.svg', 'dogtag.svg', 'bed.svg', 'diary.svg'
], '/img/m0/');

// Moment 1 Scene 1
m[0].scenes[0] = new Scene('m0s0');
m[0].scenes[0].zoom = 1;
m[0].scenes[0].backgrounds = [
  new Item('/img/m0/s0.svg', '100%', '100%')
];
m[0].scenes[0].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('map1', 'Mapa', '/img/m0/map.svg', 389/13, 135/13, 825/13, 15/13),
  new Inspiration('weapons1', 'Armas', '/img/m0/weapons.svg', 297/13, 171/13, 305/13, 70/13),
  new Inspiration('window1', 'Janela', '/img/m0/window.svg', 152/13, 215/13, 69/13, 57/13),
  new Inspiration('commander1', 'Comandante', '/img/m0/commander.svg', 164/13, 345/13, 830/13, 60/13),
  new Inspiration('table1', 'Mesa', '/img/m0/table.svg', 371/13, 159/13, 800/13, 245/13)
];
m[0].scenes[0].foregrounds = [
  new Item('/img/m0/straps.svg', '100%', '100%')
];

// Moment 1 Scene 2
m[0].scenes[1] = new Scene('m0s1');
m[0].scenes[1].zoom = .667;
m[0].scenes[1].backgrounds = [
  new Item('/img/m0/s1.svg', '100%', '100%')
];
m[0].scenes[1].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('children1', 'Crianças', '/img/m0/children.svg', 1110/13, 194/13, 120/13, 200/13),
  new Inspiration('light1', 'Lâmpada', '/img/m0/light.svg', 45/13, 104/13, 635/13, -30/13),
];
m[0].scenes[1].foregrounds = [
  new Item('/img/m0/prison.svg', '100%', '100%'),
  new Item('/img/m0/lightt.svg', '100%', '100%'),
  new Inspiration('rat1', 'Rato', '/img/m0/rat.svg', 55/13, 24/13, 900/13, 400/13),
];

// Moment 1 Scene 3
m[0].scenes[2] = new Scene('m0s2');
m[0].scenes[2].zoom = .333;
m[0].scenes[2].backgrounds = [
  new Item('/img/m0/s2.svg', '100%', '100%')
];
m[0].scenes[2].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('wall1', 'Muro', '/img/m0/wall.svg', 385/13, 78/13, -30/13, 320/13),
  new Inspiration('family1', 'Família', '/img/m0/family.svg', 180/13, 157/13, 800/13, 250/13),
  new Inspiration('house1', 'Casa', '/img/m0/house.svg', 220/13, 220/13, 980/13, 130/13),
];

// Moment 1 Scene 4
m[0].scenes[3] = new Scene('m0s3');
m[0].scenes[3].zoom = .667;
m[0].scenes[3].backgrounds = [
  new Item('/img/m0/s3.svg', '100%', '100%')
];
m[0].scenes[3].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('car1', 'Jipe', '/img/m0/car.svg', 285/13, 170/13, 170/13, 110/13),
  new Inspiration('crates1', 'Caixotes', '/img/m0/crates.svg', 290/13, 115/13, 460/13, 175/13),
  new Inspiration('tents1', 'Tendas', '/img/m0/tents.svg', 895/13, 430/13, 530/13, 110/13),
  new Inspiration('soldiers1', 'Soldados', '/img/m0/soldiers.svg', 440/13, 315/13, 16/13, 215/13),
];
// Moment 1 Scene 5
m[0].scenes[4] = new Scene('m0s4');
m[0].scenes[4].zoom = 1;
m[0].scenes[4].backgrounds = [
  new Item('/img/m0/s4.svg', '100%', '100%')
];
m[0].scenes[4].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('dogtag1', 'Dogtag', '/img/m0/dogtag.svg', 58/13, 36/13, 615/13, 295/13),
  new Inspiration('diary1', 'Diário', '/img/m0/diary.svg', 89/13, 83/13, 720/13, 420/13),
  new Inspiration('bed1', 'Cama', '/img/m0/bed.svg', 568/13, 229/13, 815/13, 315/13),
];




m[1] = new Moment('m1');
m[1].loader = new Loader([
  'stone.svg', 'weapons.svg', 'window.svg',
  'children.svg',
  'house.svg', 'family.svg', 'wall.svg',
  'car.svg', 'crates.svg', 'soldiers.svg',
], '/img/m1/');

// Moment 1 Scene 1
m[1].scenes[0] = new Scene('m1s0');
m[1].scenes[0].zoom = 1;
m[1].scenes[0].backgrounds = [
  new Item('/img/m0/s0.svg', '100%', '100%')
];
m[1].scenes[0].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('map2', 'Mapa', '/img/m0/map.svg', 389/13, 135/13, 825/13, 15/13),
  new Inspiration('weapons2', 'Armas', '/img/m1/weapons.svg', 297/13, 171/13, 305/13, 70/13),
  new Inspiration('window2', 'Janela', '/img/m1/window.svg', 152/13, 215/13, 69/13, 57/13),
  new Inspiration('commander2', 'Comandante', '/img/m0/commander.svg', 164/13, 345/13, 830/13, 60/13),
  new Inspiration('table2', 'Mesa', '/img/m0/table.svg', 371/13, 159/13, 800/13, 245/13),
  new Inspiration('stone2', 'Pedra', '/img/m1/stone.svg', 33/13.42, 21/13.42, 176/13.42, 354/13.42)
];
m[1].scenes[0].foregrounds = [
  new Item('/img/m0/straps.svg', '100%', '100%')
];

// Moment 1 Scene 2
m[1].scenes[1] = new Scene('m1s1');
m[1].scenes[1].zoom = .667;
m[1].scenes[1].backgrounds = [
  new Item('/img/m0/s1.svg', '100%', '100%')
];
m[1].scenes[1].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('children2', 'Crianças', '/img/m1/children.svg', 1110/13, 194/13, 120/13, 200/13),
  new Inspiration('light2', 'Lâmpada', '/img/m0/light.svg', 45/13, 104/13, 635/13, -30/13),
];
m[1].scenes[1].foregrounds = [
  new Item('/img/m0/prison.svg', '100%', '100%'),
  new Item('/img/m0/lightt.svg', '100%', '100%'),
  new Inspiration('rat2', 'Rato', '/img/m0/rat.svg', 55/13, 24/13, 900/13, 400/13),
];

// Moment 1 Scene 3
m[1].scenes[2] = new Scene('m1s2');
m[1].scenes[2].zoom = .333;
m[1].scenes[2].backgrounds = [
  new Item('/img/m0/s2.svg', '100%', '100%')
];
m[1].scenes[2].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('wall2', 'Muro', '/img/m1/wall.svg', 385/13, 78/13, -30/13, 320/13),
  new Inspiration('family2', 'Família', '/img/m1/family.svg', 180/13, 157/13, 800/13, 250/13),
  new Inspiration('house2', 'Casa', '/img/m1/house.svg', 220/13, 220/13, 980/13, 130/13),
];

// Moment 1 Scene 4
m[1].scenes[3] = new Scene('m1s3');
m[1].scenes[3].zoom = .667;
m[1].scenes[3].backgrounds = [
  new Item('/img/m0/s3.svg', '100%', '100%')
];
m[1].scenes[3].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('car2', 'Jipe', '/img/m1/car.svg', 285/13, 170/13, 170/13, 110/13),
  new Inspiration('crates2', 'Caixotes', '/img/m1/crates.svg', 290/13, 115/13, 460/13, 175/13),
  new Inspiration('tents2', 'Tendas', '/img/m0/tents.svg', 895/13, 430/13, 530/13, 110/13),
  new Inspiration('soldiers2', 'Soldados', '/img/m1/soldiers.svg', 440/13, 315/13, 16/13, 215/13),
];
// Moment 1 Scene 5
m[1].scenes[4] = new Scene('m1s4');
m[1].scenes[4].zoom = 1;
m[1].scenes[4].backgrounds = [
  new Item('/img/m0/s4.svg', '100%', '100%')
];
m[1].scenes[4].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('dogtag2', 'Dogtag', '/img/m0/dogtag.svg', 58/13, 36/13, 615/13, 295/13),
  new Inspiration('diary2', 'Diário', '/img/m0/diary.svg', 89/13, 83/13, 720/13, 420/13),
  new Inspiration('bed2', 'Cama', '/img/m0/bed.svg', 568/13, 229/13, 815/13, 315/13),
];

var light = new Item('/img/m0/lightt.svg', '100%', '100%');
light.node.setAttribute('id', 'light');



m[2] = new Moment('m2');
m[2].loader = new Loader([
  'map.svg',
  'children.svg',
  'house.svg', 'family.svg', 'wall.svg',
  'car.svg', 'crates.svg', 'soldiers.svg',
], '/img/m2/');

// Moment 1 Scene 1
m[2].scenes[0] = new Scene('m2s0');
m[2].scenes[0].zoom = 1;
m[2].scenes[0].backgrounds = [
  new Item('/img/m0/s0.svg', '100%', '100%')
];
m[2].scenes[0].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('map3', 'Mapa', '/img/m2/map.svg', 389/13, 135/13, 825/13, 15/13),
  new Inspiration('weapons3', 'Armas', '/img/m1/weapons.svg', 297/13, 171/13, 305/13, 70/13),
  new Inspiration('window3', 'Janela', '/img/m1/window.svg', 152/13, 215/13, 69/13, 57/13),
  new Inspiration('commander3', 'Comandante', '/img/m0/commander.svg', 164/13, 345/13, 830/13, 60/13),
  new Inspiration('table3', 'Mesa', '/img/m0/table.svg', 371/13, 159/13, 800/13, 245/13),
  new Inspiration('stone3', 'Pedra', '/img/m1/stone.svg', 33/13.42, 21/13.42, 176/13.42, 354/13.42)
];
m[2].scenes[0].foregrounds = [
  new Item('/img/m0/straps.svg', '100%', '100%')
];

// Moment 1 Scene 2
m[2].scenes[1] = new Scene('m2s1');
m[2].scenes[1].zoom = .667;
m[2].scenes[1].backgrounds = [
  new Item('/img/m0/s1.svg', '100%', '100%')
];
m[2].scenes[1].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('children3', 'Crianças', '/img/m2/children.svg', 1110/13, 194/13, 120/13, 200/13),
  new Inspiration('light3', 'Lâmpada', '/img/m0/light.svg', 45/13, 104/13, 635/13, -30/13),
];
m[2].scenes[1].foregrounds = [
  new Item('/img/m0/prison.svg', '100%', '100%'),
  light,
  new Inspiration('rat3', 'Rato', '/img/m0/rat.svg', 55/13, 24/13, 900/13, 400/13),
];

// Moment 1 Scene 3
m[2].scenes[2] = new Scene('m2s2');
m[2].scenes[2].zoom = .333;
m[2].scenes[2].backgrounds = [
  new Item('/img/m0/s2.svg', '100%', '100%')
];
m[2].scenes[2].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('wall3', 'Muro', '/img/m2/wall.svg', 385/13, 78/13, -30/13, 320/13),
  new Inspiration('family3', 'Família', '/img/m2/family.svg', 180/13, 157/13, 800/13, 250/13),
  new Inspiration('house3', 'Casa', '/img/m2/house.svg', 220/13, 220/13, 980/13, 130/13),
];

// Moment 1 Scene 4
m[2].scenes[3] = new Scene('m2s3');
m[2].scenes[3].zoom = .667;
m[2].scenes[3].backgrounds = [
  new Item('/img/m0/s3.svg', '100%', '100%')
];
m[2].scenes[3].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('car3', 'Jipe', '/img/m2/car.svg', 285/13, 170/13, 170/13, 110/13),
  new Inspiration('crates3', 'Caixotes', '/img/m2/crates.svg', 290/13, 115/13, 460/13, 175/13),
  new Inspiration('tents3', 'Tendas', '/img/m0/tents.svg', 895/13, 430/13, 530/13, 110/13),
  new Inspiration('soldiers3', 'Soldados', '/img/m2/soldiers.svg', 440/13, 315/13, 16/13, 215/13),
];
// Moment 1 Scene 5
m[2].scenes[4] = new Scene('m2s4');
m[2].scenes[4].zoom = 1;
m[2].scenes[4].backgrounds = [
  new Item('/img/m0/s4.svg', '100%', '100%')
];
m[2].scenes[4].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('dogtag3', 'Dogtag', '/img/m0/dogtag.svg', 58/13, 36/13, 615/13, 295/13),
  new Inspiration('diary3', 'Diário', '/img/m0/diary.svg', 89/13, 83/13, 720/13, 420/13),
  new Inspiration('bed3', 'Cama', '/img/m0/bed.svg', 568/13, 229/13, 815/13, 315/13),
];




m[3] = new Moment('m3');
m[3].loader = new Loader([
  'map.svg', 'stone.svg', 'window.svg',
  'children.svg',
  's2.svg', 'house.svg', 'family.svg', 'wall.svg',
  'car.svg', 'soldiers.svg',
], '/img/m3/');

// Moment 1 Scene 1
m[3].scenes[0] = new Scene('m3s0');
m[3].scenes[0].zoom = 1;
m[3].scenes[0].backgrounds = [
  new Item('/img/m0/s0.svg', '100%', '100%')
];
m[3].scenes[0].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('map4', 'Mapa', '/img/m3/map.svg', 389/13, 135/13, 825/13, 15/13),
  new Inspiration('window4', 'Janela', '/img/m3/window.svg', 152/13, 215/13, 69/13, 57/13),
  new Inspiration('commander4', 'Comandante', '/img/m0/commander.svg', 164/13, 345/13, 830/13, 60/13),
  new Inspiration('table4', 'Mesa', '/img/m0/table.svg', 371/13, 159/13, 800/13, 245/13),
  new Inspiration('stone4', 'Pedras', '/img/m3/stone.svg', 175/13.42, 59/13.42, 34/13.42, 335/13.42)
];
m[3].scenes[0].foregrounds = [
  new Item('/img/m0/straps.svg', '100%', '100%')
];

// Moment 1 Scene 2
m[3].scenes[1] = new Scene('m3s1');
m[3].scenes[1].zoom = .667;
m[3].scenes[1].backgrounds = [
  new Item('/img/m0/s1.svg', '100%', '100%')
];
m[3].scenes[1].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('children4', 'Crianças', '/img/m3/children.svg', 1110/13, 194/13, 120/13, 200/13),
  new Inspiration('light4', 'Lâmpada', '/img/m0/light.svg', 45/13, 104/13, 635/13, -30/13),
];
m[3].scenes[1].foregrounds = [
  new Item('/img/m0/prison.svg', '100%', '100%'),
  light,
];

// Moment 1 Scene 3
m[3].scenes[2] = new Scene('m3s2');
m[3].scenes[2].zoom = .333;
m[3].scenes[2].backgrounds = [
  new Item('/img/m3/s2.svg', '100%', '100%')
];
m[3].scenes[2].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('wall4', 'Muro', '/img/m3/wall.svg', 385/13, 78/13, -30/13, 320/13),
  new Inspiration('family4', 'Família', '/img/m3/family.svg', 85/13.42, 70/13.42, 828/13.42, 255/13.42),
  new Inspiration('house4', 'Casa', '/img/m3/house.svg', 220/13, 220/13, 980/13, 130/13),
];

// Moment 1 Scene 4
m[3].scenes[3] = new Scene('m3s3');
m[3].scenes[3].zoom = .667;
m[3].scenes[3].backgrounds = [
  new Item('/img/m0/s3.svg', '100%', '100%')
];
m[3].scenes[3].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('car4', 'Jipe', '/img/m3/car.svg', 285/13, 170/13, 170/13, 110/13),
  new Inspiration('crates4', 'Caixotes', '/img/m2/crates.svg', 290/13, 115/13, 460/13, 175/13),
  new Inspiration('tents4', 'Tendas', '/img/m0/tents.svg', 895/13, 430/13, 530/13, 110/13),
  new Inspiration('soldiers4', 'Soldados', '/img/m3/soldiers.svg', 440/13, 315/13, 16/13, 215/13),
];
// Moment 1 Scene 5
m[3].scenes[4] = new Scene('m3s4');
m[3].scenes[4].zoom = 1;
m[3].scenes[4].backgrounds = [
  new Item('/img/m0/s4.svg', '100%', '100%')
];
m[3].scenes[4].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('dogtag4', 'Dogtag', '/img/m0/dogtag.svg', 58/13, 36/13, 615/13, 295/13),
  new Inspiration('diary4', 'Diário', '/img/m0/diary.svg', 89/13, 83/13, 720/13, 420/13),
  new Inspiration('bed4', 'Cama', '/img/m0/bed.svg', 568/13, 229/13, 815/13, 315/13),
];




m[4] = new Moment('m4');
m[4].loader = new Loader([
  'car.svg', 'children.svg', 'crates.svg', 'house.svg', 'map.svg', 's2.svg',
  'soldiers.svg', 'wall.svg', 'weapons.svg',
], '/img/m4/');

// Moment 1 Scene 1
m[4].scenes[0] = new Scene('m4s0');
m[4].scenes[0].zoom = 1;
m[4].scenes[0].backgrounds = [
  new Item('/img/m0/s0.svg', '100%', '100%')
];
m[4].scenes[0].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('map5', 'Mapa', '/img/m4/map.svg', 389/13, 135/13, 825/13, 15/13),
  new Inspiration('weapons5', 'Armas', '/img/m4/weapons.svg', 297/13, 171/13, 305/13, 70/13),
  new Inspiration('window5', 'Janela', '/img/m3/window.svg', 152/13, 215/13, 69/13, 57/13),
  new Inspiration('commander5', 'Comandante', '/img/m0/commander.svg', 164/13, 345/13, 830/13, 60/13),
  new Inspiration('table5', 'Mesa', '/img/m0/table.svg', 371/13, 159/13, 800/13, 245/13),
  new Inspiration('stone5', 'Pedras', '/img/m3/stone.svg', 175/13.42, 59/13.42, 34/13.42, 335/13.42)
];
m[4].scenes[0].foregrounds = [
  new Item('/img/m0/straps.svg', '100%', '100%')
];

// Moment 1 Scene 2
m[4].scenes[1] = new Scene('m4s1');
m[4].scenes[1].zoom = .667;
m[4].scenes[1].backgrounds = [
  new Item('/img/m0/s1.svg', '100%', '100%')
];
m[4].scenes[1].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('children5', 'Crianças', '/img/m4/children.svg', 1110/13, 194/13, 120/13, 200/13),
  new Inspiration('light5', 'Lâmpada', '/img/m0/light.svg', 45/13, 104/13, 635/13, -30/13),
];
m[4].scenes[1].foregrounds = [
  new Item('/img/m0/prison.svg', '100%', '100%'),
];

// Moment 1 Scene 3
m[4].scenes[2] = new Scene('m4s2');
m[4].scenes[2].zoom = .333;
m[4].scenes[2].backgrounds = [
  new Item('/img/m4/s2.svg', '100%', '100%')
];
m[4].scenes[2].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('wall5', 'Muro', '/img/m4/wall.svg', 385/13, 78/13, -30/13, 320/13),
  new Inspiration('family5', 'Família', '/img/m3/family.svg', 85/13.42, 70/13.42, 828/13.42, 255/13.42),
  new Inspiration('house5', 'Casa', '/img/m4/house.svg', 220/13, 220/13, 980/13, 130/13),
];

// Moment 1 Scene 4
m[4].scenes[3] = new Scene('m4s3');
m[4].scenes[3].zoom = .667;
m[4].scenes[3].backgrounds = [
  new Item('/img/m0/s3.svg', '100%', '100%')
];
m[4].scenes[3].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('car5', 'Jipe', '/img/m4/car.svg', 285/13, 170/13, 170/13, 110/13),
  new Inspiration('crates5', 'Caixotes', '/img/m2/crates.svg', 290/13, 115/13, 460/13, 175/13),
  new Inspiration('tents5', 'Tendas', '/img/m0/tents.svg', 895/13, 430/13, 530/13, 110/13),
  new Inspiration('soldiers5', 'Soldados', '/img/m4/soldiers.svg', 440/13, 315/13, 16/13, 215/13),
];
// Moment 1 Scene 5
m[4].scenes[4] = new Scene('m4s4');
m[4].scenes[4].zoom = 1;
m[4].scenes[4].backgrounds = [
  new Item('/img/m0/s4.svg', '100%', '100%')
];
m[4].scenes[4].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('dogtag5', 'Dogtag', '/img/m0/dogtag.svg', 58/13, 36/13, 615/13, 295/13),
  new Inspiration('diary5', 'Diário', '/img/m0/diary.svg', 89/13, 83/13, 720/13, 420/13),
  new Inspiration('bed5', 'Cama', '/img/m0/bed.svg', 568/13, 229/13, 815/13, 315/13),
];




m[5] = new Moment('m5');
m[5].loader = new Loader([
  'car.svg', 'children.svg', 'crates.svg', 'family.svg', 'house.svg',
  'map.svg', 'soldiers.svg', 'wall.svg', 'weapons.svg',
], '/img/m5/');

// Moment 1 Scene 1
m[5].scenes[0] = new Scene('m5s0');
m[5].scenes[0].zoom = 1;
m[5].scenes[0].backgrounds = [
  new Item('/img/m0/s0.svg', '100%', '100%')
];
m[5].scenes[0].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('map6', 'Mapa', '/img/m5/map.svg', 389/13, 135/13, 825/13, 15/13),
  new Inspiration('weapons6', 'Armas', '/img/m5/weapons.svg', 297/13, 171/13, 305/13, 70/13),
  new Inspiration('window6', 'Janela', '/img/m3/window.svg', 152/13, 215/13, 69/13, 57/13),
  new Inspiration('commander6', 'Comandante', '/img/m0/commander.svg', 164/13, 345/13, 830/13, 60/13),
  new Inspiration('table6', 'Mesa', '/img/m0/table.svg', 371/13, 159/13, 800/13, 245/13),
  new Inspiration('stone6', 'Pedras', '/img/m3/stone.svg', 175/13.42, 59/13.42, 34/13.42, 335/13.42)
];
m[5].scenes[0].foregrounds = [
  new Item('/img/m0/straps.svg', '100%', '100%')
];

// Moment 1 Scene 2
m[5].scenes[1] = new Scene('m5s1');
m[5].scenes[1].zoom = .667;
m[5].scenes[1].backgrounds = [
  new Item('/img/m0/s1.svg', '100%', '100%')
];
m[5].scenes[1].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('children6', 'Crianças', '/img/m5/children.svg', 1110/13, 194/13, 120/13, 200/13),
  new Inspiration('light6', 'Lâmpada', '/img/m0/light.svg', 45/13, 104/13, 635/13, -30/13),
];
m[5].scenes[1].foregrounds = [
  new Item('/img/m0/prison.svg', '100%', '100%'),
];

// Moment 1 Scene 3
m[5].scenes[2] = new Scene('m5s2');
m[5].scenes[2].zoom = .333;
m[5].scenes[2].backgrounds = [
  new Item('/img/m4/s2.svg', '100%', '100%')
];
m[5].scenes[2].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('wall6', 'Muro', '/img/m5/wall.svg', 385/13, 78/13, -30/13, 320/13),
  new Inspiration('family6', 'Família', '/img/m5/family.svg', 85/13.42, 70/13.42, 828/13.42, 255/13.42),
  new Inspiration('house6', 'Casa', '/img/m5/house.svg', 220/13, 220/13, 980/13, 130/13),
];

// Moment 1 Scene 4
m[5].scenes[3] = new Scene('m5s3');
m[5].scenes[3].zoom = .667;
m[5].scenes[3].backgrounds = [
  new Item('/img/m0/s3.svg', '100%', '100%')
];
m[5].scenes[3].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('car6', 'Jipe', '/img/m5/car.svg', 285/13, 170/13, 170/13, 110/13),
  new Inspiration('crates6', 'Caixotes', '/img/m2/crates.svg', 290/13, 115/13, 460/13, 175/13),
  new Inspiration('tents6', 'Tendas', '/img/m0/tents.svg', 895/13, 430/13, 530/13, 110/13),
  new Inspiration('soldiers6', 'Soldados', '/img/m5/soldiers.svg', 440/13, 230/13, 16/13, 290/13),
];
// Moment 1 Scene 5
m[5].scenes[4] = new Scene('m5s4');
m[5].scenes[4].zoom = 1;
m[5].scenes[4].backgrounds = [
  new Item('/img/m0/s4.svg', '100%', '100%')
];
m[5].scenes[4].inspirations = [
  // id, name, img, width, height, x, y
  new Inspiration('dogtag6', 'Dogtag', '/img/m0/dogtag.svg', 58/13, 36/13, 615/13, 295/13),
  new Inspiration('diary6', 'Diário', '/img/m0/diary.svg', 89/13, 83/13, 720/13, 420/13),
  new Inspiration('bed6', 'Cama', '/img/m0/bed.svg', 568/13, 229/13, 815/13, 315/13),
];


module.exports = m;