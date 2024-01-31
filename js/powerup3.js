class PowerUp3 {
    constructor(gameScreen) {
        this.gameScreen = gameScreen ;

        // Random position of powerup3s
        this.left = Math.floor(Math.random() * (this.gameScreen.offsetWidth - 50)) ;
        this.top = Math.floor(Math.random() * (this.gameScreen.offsetHeight - 50)) ;

        this.width = 30 ;
        this.height = 30 ;

        this.score = 30 ; // This is the number of point you get when eat powerup3

        
        this.element = document.createElement("img");
        this.element.src = "./images/lassi.png" ;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        
        this.gameScreen.appendChild(this.element);

    }

    didCollide(player) {
        const powerup3Rect = this.element.getBoundingClientRect() ;
        const playerRect = player.element.getBoundingClientRect() ;

        if(powerup3Rect.left < playerRect.right 
            && powerup3Rect.right > playerRect.left
            && powerup3Rect.top < playerRect.bottom
            && powerup3Rect.bottom > playerRect.top) {return true}
            else {return false};

    }
}