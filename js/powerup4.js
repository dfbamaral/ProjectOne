class PowerUp4 {
    constructor(gameScreen) {
        this.gameScreen = gameScreen ;

        // Random position of powerup4s
        this.left = Math.floor(Math.random() * (this.gameScreen.offsetWidth - 50)) ;
        this.top = Math.floor(Math.random() * (this.gameScreen.offsetHeight - 50)) ;

        this.width = 30 ;
        this.height = 30 ;

        this.score = 5 ; // This is the number of point you get when eat powerup4

        
        this.element = document.createElement("img");
        this.element.src = "./images/nata.png" ;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        
        this.gameScreen.appendChild(this.element);

    }

    didCollide(player) {
        const powerup4Rect = this.element.getBoundingClientRect() ;
        const playerRect = player.element.getBoundingClientRect() ;

        if(powerup4Rect.left < playerRect.right 
            && powerup4Rect.right > playerRect.left
            && powerup4Rect.top < playerRect.bottom
            && powerup4Rect.bottom > playerRect.top) {return true}
            else {return false};

    }
}