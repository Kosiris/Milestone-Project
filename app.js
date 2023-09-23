const playBoard = document.querySelector(".board");

let foodX, foodY;
let snakeX = 10, snakeY = 14;
let snakeBody = [];
let velocityX = 0, velocityY = 0; 

//Randomizing the food position using Math.floor from 0 - 30 since there are 30 tiles in each row/column
const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}
//Changing snakes position based on velocity from key presses.
const moveSnake = (e) => {
    if(e.key === "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
    initalizeGame();
}
// food positioning and allowing the food position to be pushed to snake body

const initalizeGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
// adding the eaten food parts to the snakes body 
    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX, foodY]); 
    }

    snakeX += velocityX;
    snakeY += velocityY;
    htmlMarkup += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition()
initalizeGame();
document.addEventListener("keydown", moveSnake);