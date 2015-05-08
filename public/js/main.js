var moments = require('/js/moments');
var player = require('/js/Player');
var game = require('/js/Game');

game.setControls({
  left: [37, 65, 97],
  right: [39, 68, 100]
});

game.setStage(document.getElementById('game'));
game.setMoments(moments);
game.setPlayer(player);
game.start();