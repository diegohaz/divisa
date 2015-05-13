var game = require('/js/Game');
var moments = require('/js/moments');
var Soldier = require('/js/players/Soldier');

game.stage = document.getElementById('game');
game.moments = moments;
game.player = new Soldier();
game.controls = {
  left: [37, 65, 97],
  right: [39, 68, 100]
};

game.start();

document.getElementById('restart').addEventListener('click', function() {
  game.restart();
  game.stage.classList.remove('sleeping');
});