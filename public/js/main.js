var game = require('/js/Game');
var preload = new createjs.LoadQueue(false, '/img/');
var manifest = [
  {id: 'player', src: '/img/player.png'},
  {id: 'map1', src: '/img/map1.png'},
  {id: 'scene1bg', src: '/img/scene1bg.jpg'},
  {id: 'table1', src: '/img/table1.png'},
  {id: 'weapons1', src: '/img/weapons1.png'},
  {id: 'window1', src: '/img/window1.png'},
];

preload.loadManifest(manifest);
preload.setMaxConnections(5);

preload.on('progress', function(evt) {
  document.getElementById('loader').textContent = (evt.progress * 100).toFixed(1) + '%';
});

preload.on('complete', function() {
  document.getElementById('loader').remove();

  var moments = require('/js/moments');
  var player = require('/js/Player');

  game.stage = document.getElementById('game');
  game.moments = moments;
  game.player = player;
  game.controls = {
    left: [37, 65, 97],
    right: [39, 68, 100]
  };

  game.start();

  document.getElementById('restart').addEventListener('click', function() {
    game.restart();
  });
});