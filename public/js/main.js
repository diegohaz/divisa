var currentLevelNumber = 1;
var currentLevel = document.getElementById('level1');
var soldier = document.getElementById('soldier');
var keys = {
  left: 37,
  right: 39
};

soldier.style.zoom = currentLevel.dataset.zoom;

var movingRight = false;
var movingLeft = false;

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode == keys.left) {
    movingLeft = true;
  } else if (evt.keyCode == keys.right) {
    movingRight = true;
  }
});

window.addEventListener('keyup', function(evt) {
  if (evt.keyCode == keys.left) {
    movingLeft = false;
  } else if (evt.keyCode == keys.right) {
    movingRight = false;
  }
});

// Constants
var STEPS = 10;
var TICK_RATE = 10;

var tick = function() {
  if (movingRight) {
    if (soldier.offsetLeft * soldier.style.zoom < window.innerWidth) {
      soldier.style.left = (soldier.offsetLeft + STEPS) + 'px';
      soldier.style.transform = 'scaleX(1)';
    } else if (currentLevelNumber < 5) {
      currentLevelNumber++;
      currentLevel.style.display = 'none';
      currentLevel = document.getElementById('level' + currentLevelNumber);
      currentLevel.style.display = 'block';
      soldier.style.left = 0;
      soldier.style.zoom = currentLevel.dataset.zoom;
    }
  }

  if (movingLeft) {
    if ((soldier.offsetLeft + soldier.offsetWidth) * soldier.style.zoom > 0) {
      soldier.style.left = (soldier.offsetLeft - STEPS) + 'px';
      soldier.style.transform = 'scaleX(-1)';
    } else if (currentLevelNumber > 1) {
      currentLevelNumber--;
      currentLevel.style.display = 'none';
      currentLevel = document.getElementById('level' + currentLevelNumber);
      currentLevel.style.display = 'block';
      soldier.style.zoom = currentLevel.dataset.zoom;
      soldier.style.left = (window.innerWidth / soldier.style.zoom - soldier.offsetWidth) + 'px';
    }
  }

  setTimeout(tick, TICK_RATE);
};

tick();