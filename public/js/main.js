var moments = require('/js/moments');
var player = require('/js/Player');
var game = require('/js/Game');

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