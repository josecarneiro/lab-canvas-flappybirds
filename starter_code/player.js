

class Player {
    constructor(game) {
        this.context = game.context;
        this.bird = new Image();
        this.bird.src = './images/flappy.png'
        this.width;
        this.height;
        this.playerX = 50;
        this.playerY = game.boardHeight / 4;
        this.velocityX = 0;
        this.velocityY = 2;
        this.gravity = 0.1;
        this.gravitySpeed;
    }

    drawPlayer() {
        const proportion = 0.1;
        this.width = this.bird.width * proportion;
        this.height = this.bird.height * proportion;
        this.context.drawImage(this.bird, this.playerX, this.playerY, this.width, this.height);
    }


    playerGravity() {
        this.velocityY += this.gravity;
        this.playerY += this.velocityY;
    }

    setcontrols() {
        window.addEventListener('keydown', (event) => {
            event.preventDefault();
            switch (event.keyCode) {
                case 32:
                    this.gravity = -Math.abs(this.gravity);
                    break;
            }
        });

        window.addEventListener('keyup', (event) => {
            event.preventDefault();
            switch (event.keyCode) {
                case 32:
                    this.gravity = Math.abs(this.gravity);
                    break;
            }
        });

    }


}
