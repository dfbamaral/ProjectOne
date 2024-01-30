class Obstacle {
    constructor(gameScreen , player) {
        this.gameScreen = gameScreen ;
        this.player = player ;

        // Random Position
        this.left = Math.floor(Math.random() * 300 + 70) ;
        
        this.top = 0 ;
        this.width = 50 ;
        this.height = 50 ;

        // Create the CSS elements 
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

        // Calcula a direção para seguir o jogador
        // Calculates the direction to follow the player
        let directionX, directionY;
        if (this.player.left > this.left) {
            directionX = 1;
        } else {
            directionX = -1;
        }
        if (this.player.top > this.top) {
            directionY = 1;
        } else {
            directionY = -1;
        }

         // Atualiza a posição do obstáculo para seguir o jogador
         // This is to update the position of the enemy and to trace the player
         this.left += directionX * 3;
         this.top += directionY * 3;
         
         // Mantém o obstáculo dentro dos limites da tela
         // This is limiting the enemy to follow player in the screen
         if (this.left < 0) {
             this.left = 0;
         } 
         
         else if (this.left + this.width > this.gameScreen.offsetWidth) {
             this.left = this.gameScreen.offsetWidth - this.width;
         }

         if (this.top < 0) {
             this.top = 0;
         } 
         else if (this.top + this.height > this.gameScreen.offsetHeight) {
             this.top = this.gameScreen.offsetHeight - this.height;
         }
         // Atualiza a posição do obstáculo no DOM
         // Update the position of Dom
         this.updatePosition();
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
        const deltaX = getRandomNumber(-20, 20);
        const deltaY = getRandomNumber(-20, 20);
  
        // Alert the new position (simulating movement)
        alert('Character moved to X: ' + deltaX + ', Y: ' + deltaY);
    
  
        // Set up a timer to move the character every 1 seconds 
        setInterval(moveCharacterRandomly, 1000);
  
        // Initial call to moveCharacterRandomly to start the movement
        moveCharacterRandomly();
    }
  
}