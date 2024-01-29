class Game {
    constructor () {
        this.startScreen  = document.getElementById("game-intro") ;
        this.gameScreen = document.getElementById("game-screen") ;
        this.gameEndScreen = document.getElementById("game-end") ;

        this.player = new Player(
            this.gameScreen ,
            200 ,
            500 ,
            100 ,
            150 ,
            "./images/nerd.png"
        )

        this.width = 1200 ;
        this.height = 500 ;

        this.obstacles = [] ;

        this.score = 0 ;

        this.lives = 3 ;

        this.isPushingObstacle = false ;

        this,gameIsOver = false ;
    }

    
}