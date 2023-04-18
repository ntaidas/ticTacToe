let gameBoard = ['x','o','x','o','x','o','o','x','o']


 function playerFactory(name, play){
    return {name, play}
 }

 (function (){
    const grid = document.querySelector('#grid')
    for(let i=0; i <= (gameBoard.length - 1); i++){
       let square = document.createElement('div')
       square.classList.add(`square`)
       square.classList.add(`${i+1}`)
       square.textContent = gameBoard[i]
       grid.appendChild(square)
    }
 })();