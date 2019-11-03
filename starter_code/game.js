

class Game {
    constructor() {
        this.board = new Board(this);
        this.context = this.board.context;
        this.boardHeight = this.board.$canvasHeight;
        this.boardWidth = this.board.$canvasWidth;
        this.bird = new Player(this);
        this.bird.setcontrols();
        this.obstacleArray = [];
        this.speedOfObstacles = 1700;
        this.obstacleTime = 0;
        this.score = 0;
        this.animation;
    }

    startGame() {
        this.animationLoop()
    }

    animationLoop(timestamp) {
        this.board.movingImage();
        this.bird.drawPlayer();
        this.creatingObstacles(timestamp);
        this.drawObstacles();
        this.drawScore();
        this.bird.playerGravity();
      
        this.animation = window.requestAnimationFrame(timestamp => this.animationLoop(timestamp));
        this.playerOutOfCanvas();
        this.checkCollision();
    }

    playerOutOfCanvas() {
        if (this.bird.playerY <= 0 || this.bird.playerY >= this.boardHeight) {
            this.board.looseBackground();
            this.context.fillText(`Your score: ${this.score}`, this.boardWidth / 2 - 100, this.boardHeight / 2 + 100);
            cancelAnimationFrame(this.animation);
        
        }
    }

    creatingObstacles(timestamp) {
        if (this.obstacleTime < timestamp - this.speedOfObstacles) {
            const obstacles = new Obstacles(this);
            obstacles.randomObstacles();
            this.obstacleArray.push(obstacles);
            this.obstacleTime = timestamp;
            console.log(this.obstacleArray);
        }
    }

    drawObstacles() {
        for (let i = 0; i < this.obstacleArray.length; i++) {
            this.obstacleArray[i].drawObstacles();
            this.obstacleArray[i].movingObstacles();
        }
    }

    drawScore() {
        this.context.fillStyle = 'white';
        this.context.font = "30px Arial";
        this.context.fillText(`Your score: ${this.score}`, this.boardWidth - 200, 50);
    }


    checkCollision() {
        if (typeof this.obstacleArray !== 'undefined' && this.obstacleArray.length > 0) {
            for (let i = 0; i < this.obstacleArray.length; i++) {
                let checkBottomYofUpperObstacle = this.obstacleArray[i].obtacleBottomY - this.obstacleArray[i].gap;
                if (this.bird.playerX === this.obstacleArray[i].X && this.bird.playerY >= this.obstacleArray[i].obtacleBottomY
                    ||
                    this.bird.playerX === this.obstacleArray[i].X && this.bird.playerY <= checkBottomYofUpperObstacle
                ) {
                    this.board.looseBackground();
                    this.context.fillText(`Your score: ${this.score}`, this.boardWidth / 2 - 100, this.boardHeight / 2 + 100);
                    cancelAnimationFrame(this.animation);
                } else if (this.bird.playerX === this.obstacleArray[i].X) {
                    this.score++;
                }
            }

        };
    };

}