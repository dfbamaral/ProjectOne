class Player {
    constructor (gameScreen , left , top , width , height , imgSrc) {

        // gameScreen HTML
        this.gameScreen = gameScreen ;

        // position Value
        this.left = left ;
        this.top = top ;
        
        // Player Dimension Values
        this.width = width ;
        this.height = height ;

        this.element = document.createElement("img") ;
        this.element.src = imgSrc ;
        this.element.style.position = "absolute" ;
        
        this.element.style.width = `${this.width}px` ;
        this.element.style.height = `${this.height}px` ;
        this.element.style.left = `${this.left}px` ;
        this.element.style.top = `${this.top}px` ;

        this.directionX = 0 ;
        this.directionY = 0 ;
        
        this.gameScreen.appendChild(this.element) ;

    }

    move(){
        this.left += this.directionX ;
        this.top += this.directionY ;

        // Handle The Right Side of the screen: Car stops in the right border
        if (this.left + this.width > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - this.width ;
        }

        // Handle The Left Side of the Screen: Car stops in the left border
        else if(this.left <= 0) {
            this.left = 0 ;
        }
        
        // Handle The Bottom Side of the Screen: Car stop in the bottom 
        if (this.top + this.height > this.gameScreen.offsetHeight) {
            this.top = this.gameScreen.offsetHeight - this.height ;
        }

        // Handle The Top Side of the Screen: car stop in the top
        else if (this.top <= 0) {
            this.top = 0 ;
        }

        this.updatePosition() ;
    }

    updatePosition(){
        this.element.style.left = `${this.left}px` ;
        this.element.style.top = `${this.top}px` ;
    }

    didCollode(obstacle) {
        const playerRect = this.element.getBoundingClientRect() ;
        const obstacleRect = obstacle.element.getBoundingClientRect() ;

        if(playerRect.left < obstacleRect.right 
            && playerRect.right > obstacleRect.left
            && playerRect.top < obstacleRect.bottom
            && playerRect.bottom > obstacleRect.top) {return true}
            else {return false};

    }

    
} ;