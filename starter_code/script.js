window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    document.getElementById('game-board').innerHTML = `<canvas id='canvas' width=900 height=500></canvas>`;
    let game = new Game;
    game.startGame();
  };
};
