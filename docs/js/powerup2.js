class PowerUp2 {
    constructor(gameScreen) {
        this.gameScreen = gameScreen ;

        // Random position of powerup2s
        this.left = Math.floor(Math.random() * (this.gameScreen.offsetWidth - 50)) ;
        this.top = Math.floor(Math.random() * (this.gameScreen.offsetHeight - 50)) ;

        this.width = 40 ;
        this.height = 40 ;

        this.score = 15 ; // This is the number of point you get when eat powerup2

        
        this.element = document.createElement("img");
        this.element.src = "./docs/images/cafe.png" ;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        
        this.gameScreen.appendChild(this.element);

    }

    didCollide(player) {
        const powerup2Rect = this.element.getBoundingClientRect() ;
        const playerRect = player.element.getBoundingClientRect() ;

        if(powerup2Rect.left < playerRect.right 
            && powerup2Rect.right > playerRect.left
            && powerup2Rect.top < playerRect.bottom
            && powerup2Rect.bottom > playerRect.top) {return true}
            else {return false};

    }
}