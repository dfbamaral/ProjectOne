class Game {
    constructor () {
        this.startScreen  = document.getElementById("game-intro") ;
        this.gameScreen = document.getElementById("game-screen") ;
        this.gameEndScreen = document.getElementById("game-end") ;

        this.player = new Player(
            this.gameScreen ,
            90 ,
            90 ,
            90 ,
            90 ,
            "./images/maincharacter.png"
        )

        this.width = 1200 ;
        this.height = 500 ;

        this.obstacles = [] ;
        this.obstacles2 = [] ;
        this.obstacles3 = [] ;

        this.score = 0 ;

        this.lives = 5 ;

        this.isPushingObstacle = false ;
        this.isPushingObstacle2 = false ;
        this.isPushingObstacle3 = false ;

        this.gameIsOver = false ;

        this.soundtrack = null ;
        this.videos = null ;
        this.laugh = null ;

        this.powerUp = null ;
        this.powerUp2 = null ;
        this.powerUp3 = null ;
        this.powerUp4 = null ;

        this.isStarted = false;

        this.timerInterval = null ;

        this.timeLeft = 60 ;
    }

    start(){
        // Sets the height and width of the game screen.||||||||||

        this.gameScreen.style.height = `${this.height}px` ;
        this.gameScreen.style.width = `${this.width}px` ;

        // Hides the start screen.||||||||||||||||||||||||||||||||

        this.startScreen.style.display = "none" ;

        // Shows the game screen.|||||||||||||||||||||||||||||||||

        this.gameScreen.style.display = "block" ;

        this.soundtrack = document.getElementById("soundtrack") ;
        this.soundtrack.play() ;

        

        this.timerInterval = setInterval(() => {
            this.timeLeft--
        }, 1000) ;

        // Starts the game loop 

        this.gameLoop() ; 
    }    
    
    gameLoop() {
        if(this.gameIsOver) {
            return ;
        }

        this.update() ;

        window.requestAnimationFrame(() => this.gameLoop()) ;
    }

    update() {
        /* Score, lives Scoreboard */
        let score = document.getElementById("score") ;
        let lives = document.getElementById("lives") ;

        /* Every Frame of the game, i want to check if the car is moving */
        this.player.move() ;
        
//-------------------------------POWERUPS---------------------------------//

        if(!this.isStarted){
            setInterval(()=>{
                if(this.isStarted && this.powerUp){
                    this.powerUp.element.remove();
                    this.powerUp = null;
                }
                this.powerUp = new PowerUp(this.gameScreen)  
            } , 15000)

            setInterval(() => {
                if(this.isStarted && this.powerUp2){
                    this.powerUp2.element.remove();
                    this.powerUp2 = null;
                }
                this.powerUp2 = new PowerUp2(this.gameScreen)
            } , 8000)

            setInterval(() => {
                if(this.isStarted && this.powerUp3){
                    this.powerUp3.element.remove();
                    this.powerUp3 = null;
                }
                this.powerUp3 = new PowerUp3(this.gameScreen)
            } , 6000)

            setInterval(() => {
                if(this.isStarted && this.powerUp4){
                    this.powerUp4.element.remove();
                    this.powerUp4 = null;
                }
                this.powerUp4 = new PowerUp4(this.gameScreen)
            } , 3000)

        }

        if(this.powerUp && this.powerUp.didCollide(this.player)){
            this.score += 30 ;
            this.powerUp.element.remove();
            this.powerUp = null;
        }

        if(this.powerUp2 && this.powerUp2.didCollide(this.player)){
            this.score +=15 ;
            this.powerUp2.element.remove();
            this.powerUp2 = null;
        }

        if(this.powerUp3 && this.powerUp3.didCollide(this.player)){
            this.score += 10 ;
            this.powerUp3.element.remove();
            this.powerUp3 = null;
        }

        if(this.powerUp4 && this.powerUp4.didCollide(this.player)){
            this.score += 5 ;
            this.powerUp4.element.remove();
            this.powerUp4 = null;
        }

//----------------------------------ENEMY 1--------------------------------------//

        // Iterate over the obstacles array and make them move
        for(let i = 0 ; i < this.obstacles.length ; i++) {
            const obstacle = this.obstacles[i] ;
            obstacle.move(this.player) ;

            if(this.player.didCollode(obstacle)){
                obstacle.element.remove() ;

                this.obstacles.splice(i , 1) ;

                this.lives-- ;
            }

            else if(obstacle.top > this.height) {
                this.score++ ;

                //Remove the obstacle HTML element from the HTML.
                obstacle.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after one and half second.
        else if(!this.obstacles.length && !this.isPushingObstacle) {
            this.isPushingObstacle = true ;
            setTimeout(() => {
                this.obstacles.push(new Obstacle(this.gameScreen , this.player)) ;
                this.isPushingObstacle = false ;  

            } , 1500) ;
        }

//----------------------------ENEMY 2-------------------------------//

        // Iterate over the obstacles array and make them move
        for(let i = 0 ; i < this.obstacles2.length ; i++) {
            const obstacle2 = this.obstacles2[i] ;
            obstacle2.move(this.player) ;

            if(this.player.didCollode(obstacle2)){
                obstacle2.element.remove() ;

                this.obstacles2.splice(i , 1) ;

                this.lives-- ;
            }

            else if(obstacle2.top > this.height) {
                this.score++ ;

                //Remove the obstacle HTML element from the HTML.
                obstacle2.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles2.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after one and half second.
        else if(!this.obstacles2.length && !this.isPushingObstacle2) {
            this.isPushingObstacle2 = true ;
            setTimeout(() => {
                this.obstacles2.push(new Obstacle2(this.gameScreen , this.player)) ;
                this.isPushingObstacle2 = false ;  

            } , 3500) ;
        }

//-----------------------------------ENEMY 3-----------------------------------------//

        // Iterate over the obstacles array and make them move
        for(let i = 0 ; i < this.obstacles3.length ; i++) {
            const obstacle3 = this.obstacles3[i] ;
            obstacle3.move(this.player) ;

            if(this.player.didCollode(obstacle3)){
                obstacle3.element.remove() ;

                this.obstacles3.splice(i , 1) ;

                this.lives-- ;
            }

            else if(obstacle3.top > this.height) {
                this.score++ ;

                //Remove the obstacle HTML element from the HTML.
                obstacle3.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles3.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after one and half second.
        else if(!this.obstacles3.length && !this.isPushingObstacle3) {
            this.isPushingObstacle3 = true ;
            setTimeout(() => {
                this.obstacles3.push(new Obstacle3(this.gameScreen , this.player)) ;
                this.isPushingObstacle3 = false ;  

            } , 30000) ;
        }
        score.innerHTML = this.score ;
        lives.innerHTML = this.lives ; 

        this.isStarted = true;


//------------------------------Time----------------------------// 
        if(this.timeLeft <= 0) {
            this.endGame()
        }
    }

    startTimer() {
        this.timeId = setInterval(() => {
            this.update();
        }, 30000);
    }

    endGame() {
        //Change the gameIsOver status. if its true, remmember that -->
        // -->this is going to break the animation loop
        this.gameIsOver = true ;

        // Remove my Player from the HTML
        this.player.element.remove() ;

        //Remove all the obstacles from the HTML
        this.obstacles.forEach((obstacle , index) => {
            this.obstacles.splice(index , 1) ;
            obstacle.element.remove() ;
        }) ;

        this.obstacles2.forEach((obstacle2 , index) => {
            this.obstacles2.splice(index , 1) ;
            obstacle2.element.remove() ;
        })

        this.obstacles3.forEach((obstacle3 , index) => {
            this.obstacles3.splice(index , 1) ;
            obstacle3.element.remove() ;
        }) ;

        // Hide the current game screen
        this.gameScreen.style.display = "none" ;

        // In Order, to display the Game End Screen. 
        this.gameEndScreen.style.display = "block" ;

        // SOUND AND VIDEO

        this.soundtrack.pause() ;

        this.laugh = document.getElementById("laugh") ;
        this.laugh.play() ;

        this.videos = document.getElementById("videos") ;
        this.videos.play()
    }
    
}