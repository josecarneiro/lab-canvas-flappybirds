class Obstacles {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.boardWidth = game.boardWidth;
        this.boardHeight = game.boardHeight;
        this.X = game.boardWidth;
        this.proportionOfImages = 0.3;
        this.obstacleTopHeight = this.boardHeight;
        this.obstacleTopWidth;
        this.obstacleBottom;
        this.obstacleBottomHeight = this.boardHeight;
        this.obstacleBottomWidth;
        this.obstacleTopY = 0;
        this.obtacleBottomY = 300;
        this.gap = 100;
    };

    drawObstacles() {
        this.obstacleTop = new Image();
        this.obstacleTop.src = './images/obstacle_top.png';
        this.obstacleBottom = new Image();
        this.obstacleBottom.src = './images/obstacle_bottom.png';
        this.obstacleTopWidth = this.obstacleTop.width * this.proportionOfImages;
        this.obstacleBottomWidth = this.obstacleBottom.width * this.proportionOfImages;
        this.context.drawImage(this.obstacleBottom, this.X, this.obtacleBottomY, this.obstacleBottomWidth, this.obstacleBottomHeight);
        this.context.drawImage(this.obstacleTop, this.X, this.obstacleTopY, this.obstacleTopWidth, this.obstacleTopHeight);
    }

    movingObstacles() {
        this.X -= 5;
    }

    randomObstacles() {
        this.obtacleBottomY = Math.floor(Math.random() * 0.75 * this.boardHeight) + 0.2 * this.boardHeight;
        this.obstacleTopY = this.obtacleBottomY - this.gap - this.obstacleTopHeight;
    }
}