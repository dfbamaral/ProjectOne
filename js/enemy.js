class Obstacle {
    constructor(gameScreen) {
        this.gameScreen = gameScreen ;
       
        // Random Position
        this.left = Math.floor(Math.random() * 300 + 70) ;
        
        this.top = 0 ;
        this.width = 50 ;
        this.height = 50 ;

        // Create the HTML elements and create default styling
        this.element = document.createElement("img") ;
        this.element.src = "./images/css-logo.png" ;
        this.element.style.position = "absolute" ;
        this.element.style.width = `${this.width}px` ;
        this.element.style.height = `${this.height}px` ;
        this.element.style.left = `${this.left}px` ;
        this.element.style.top = `${this.top}px` ;

        this.gameScreen.appendChild(this.element) ;
        
    }

    move() {
        // Move obstacles down 
        this.top += 3 ;
        this.left += 3 ;
        this.height += 5 ;
        this.width += 5 ;

        // Handle The Right Side of the screen: Enemy stops in the right border
        if (this.left + this.width > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - this.width ;
        }

        // Handle The Left Side of the Screen: Enemy stops in the left border
        else if(this.left <= 0) {
            this.left = 0 ;
        }
        
        // Handle The Bottom Side of the Screen: Enemy stop in the bottom 
        if (this.top + this.height > this.gameScreen.offsetHeight) {
            this.top = this.gameScreen.offsetHeight - this.height ;
        }

        // Handle The Top Side of the Screen: Enemy stop in the top
        else if (this.top <= 0) {
            this.top = 0 ;
        }

        this.updatePosition() ;
    }

    updatePosition() {
        this.element.style.left = `${this.left}px` ;
        this.element.style.top = `${this.top}px`
    }

    // Function to generate a random number between min and max (inclusive)
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
  // Function to move the character randomly
    moveCharacterRandomly() {
    // Generate random movements in X and Y directions
        var deltaX = getRandomNumber(-10, 10);
        var deltaY = getRandomNumber(-10, 10);
  
        // Alert the new position (simulating movement)
        alert('Character moved to X: ' + deltaX + ', Y: ' + deltaY);
    
  
     // Set up a timer to move the character every 2 seconds (2000 milliseconds)
        setInterval(moveCharacterRandomly, 2000);
  
    // Initial call to moveCharacterRandomly to start the movement
        moveCharacterRandomly();
    }
  
}