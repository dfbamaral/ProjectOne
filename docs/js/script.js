window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
  
    let game ;
  
    startButton.addEventListener("click", function () {
      startGame();
    });
  
    restartButton.addEventListener("click" , function () {
      // JS, in the current tab, is going to refresh (reload) the page.
      
      location.reload() ;
    }) ;
  
    function startGame() {
      //console.log("start game");
      game = new Game () ;
      game.start() ;
    }
  
    function handleKeydown (event) {
      const key = event.key ;
      const possibleKeys = [
        "ArrowLeft",
        "ArrowUp" ,
        "ArrowRight" ,
        "ArrowDown"
      ]
  
      if(possibleKeys.includes(key)) {
        event.preventDefault() ;
  
        if(game) {
          switch(key) {
            case "ArrowLeft" :
              game.player.directionX = -8 ;
              break ;
            case "ArrowUp" :
              game.player.directionY = -8 ;
              break ;
            case "ArrowRight" :
              game.player.directionX = 8 ;
            case "ArrowDown" :
              game.player.directionY = 8 ;
          }
        }
      }
  
    }
  
    function handleKeyup (event) {
      const key = event.key ;
      const possibleKeys = [
        "ArrowLeft",
        "ArrowUp" ,
        "ArrowRight" ,
        "ArrowDown"
      ]
  
      if(possibleKeys.includes(key)) {
        event.preventDefault() ;
  
        if(game) {
          switch(key) {
            case "ArrowLeft" :
              game.player.directionX = 0 ;
              break ;
            case "ArrowUp" :
              game.player.directionY = 0 ;
              break ;
            case "ArrowRight" :
              game.player.directionX = 0 ;
              break ;
            case "ArrowDown" :
              game.player.directionY = 0 ;
              break ; 
          }
        }
      }
  
    }
  
    window.addEventListener("keydown" , handleKeydown) ;
    window.addEventListener("keyup" , handleKeyup) ;
  
  };
  