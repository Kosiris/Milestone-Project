
const gameBoard = document.querySelector(".board");

let foodX, foodY;
let snakeX = 10, snakeY = 5;
let velocityX = 0, velocityY = 0; 

// Trying to pass a random number from 0 - 30 for food positioning
const foodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

// Changing velocity value based on key press


// Setting the value for the grid items, creating a food div and inserting the playboard element
const initGame = () => {
    let htmlMarkup = `<div class ="food" style ="grid-area: ${foodY} / ${foodX}"</div>`;

    
    htmlMarkup += `<div class ="head" style ="grid-area: ${snakeY} / ${snakeX}"</div>`;
    gameBoard.innerHTML = htmlMarkup;
}
foodPosition();
initGame();
document.addEventListener("keydown", changeDirection);