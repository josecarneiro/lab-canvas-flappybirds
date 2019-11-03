

class Board {

  constructor(game) {
    this.game = game;
    this.$canvas = document.getElementById('canvas');
    this.context = this.$canvas.getContext('2d');
    this.image;
    this.imageHeight;
    this.imageWidth;
    this.x = 0;
    this.speed = -1;
    this.$canvasWidth = this.$canvas.width;
    this.$canvasHeight = this.$canvas.height;
  }

  drawBackground() {
    this.image = new Image();
    this.image.src = './images/bg.png'
    let proportion = 1;
    this.imageHeight = this.image.height * proportion;
    this.imageWidth = this.image.width * proportion;

    this.context.drawImage(this.image, this.x, 0);
    if (this.speed < 0) {
      this.context.drawImage(this.image, this.x + this.$canvasWidth, 0)
    } else {
      this.context.drawImage(this.image, this.x - this.$canvasWidth, 0)
    }
  }

  move() {
    this.x += this.speed;
    this.x %= this.$canvasWidth;
  }

  clear() {
    this.context.clearRect(0, 0, this.$canvasWidth, this.$canvasHeight)
  }

  movingImage() {
    this.move();
    this.clear();
    this.drawBackground();
  }

  looseBackground() {
    this.clear;
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.$canvasWidth, this.$canvasHeight);
    this.context.fillStyle = 'white';
    this.context.font = "40px Georgia";
    this.context.fillText('GAME OVER', this.$canvasWidth / 2 - 130, this.$canvasHeight / 2)
  }
}

/*

var backgroundImage = {
    img: img,
    x: 0,
    speed: -1,

    move: function() {
      this.x += this.speed;
      this.x %= canvas.width;
    },

    draw: function() {
      ctx.drawImage(this.img, this.x, 0);
      if (this.speed < 0) {
        ctx.drawImage(this.img, this.x + canvas.width, 0);
      } else {
        ctx.drawImage(this.img, this.x - this.img.width, 0);
      }
    },
  };

  function updateCanvas() {
    backgroundImage.move();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImage.draw();

    requestAnimationFrame(updateCanvas);
  }

  // start calling updateCanvas once the image is loaded
  img.onload = updateCanvas;
  */