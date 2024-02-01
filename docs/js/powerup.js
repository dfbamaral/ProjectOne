class PowerUp {
    constructor(gameScreen) {
        this.gameScreen = gameScreen ;

        // Random position of powerups
        this.left = Math.floor(Math.random() * (this.gameScreen.offsetWidth - 50)) ;
        this.top = Math.floor(Math.random() * (this.gameScreen.offsetHeight - 50)) ;

        this.width = 80 ;
        this.height = 80 ;

        this.score = 30 ; // This is the number of point you get when eat powerup

        
        this.element = document.createElement("img");
        this.element.src = "./docs/images/curry.png" ;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        
        this.gameScreen.appendChild(this.element);

    }

    didCollide(player) {
        const powerUpRect = this.element.getBoundingClientRect() ;
        const playerRect = player.element.getBoundingClientRect() ;

        if(powerUpRect.left < playerRect.right 
            && powerUpRect.right > playerRect.left
            && powerUpRect.top < playerRect.bottom
            && powerUpRect.bottom > playerRect.top) {return true}
            else {return false};

    }
}