/*class Controls {
    contructor(game) {
        this.game = game;
        this.player = this.game.bird;
    }
  
    setcontrols() {

        window.addEventListener('keydown', (event) => {
            event.preventDefault();
            switch (event.keyCode) {
                case 32:
                    this.player.gravity *= -1;
                    console.log('button down  ' + this.player.gravity);
                    break;
            }
        });

        window.addEventListener('keyup', (event) => {
            event.preventDefault();
            switch (event.keyCode) {
                case 32:
                    this.player.gravity *= -1;
                    console.log('button up  ' + this.player.gravity);
                    break;
            }
        });

}
};*/