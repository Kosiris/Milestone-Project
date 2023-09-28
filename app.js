const playBoard = document.querySelector(".board");
const scoreCount = document.querySelector(".score")
// Stuff we need to get the game functioning , food spawn, snake spawn, and setting velocity for our keydown movements
let foodX, foodY;
let snakeX = 15, snakeY = 15;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let score = 0; 

//Randomizing the food position using Math.floor from 0 - 30 since there are 30 tiles in each row/column
const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 40) + 1;
    foodY = Math.floor(Math.random() * 40) + 1;
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


const initalizeGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
// adding the eaten food parts to the snakes body 
    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX, foodY]); 
        score++;
// Game scoring function and having it insert into the HTML everytime a food is eaten
        scoreCount.innerText = `Score: ${score}`;
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
// Adding this so that the snakehead appears after current changes
    snakeBody[0] = [snakeX, snakeY]
// Snake movement
    snakeX += velocityX;
    snakeY += velocityY;

    for (let i = 0; i < snakeBody.length; i++) {
        // divs are being added for each snake part
        htmlMarkup += `<div class="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    }
    
    playBoard.innerHTML = htmlMarkup;
}

const winCondition = () => {
    if (score !== 25) {
        
    }
}

// Figured out scoreboard, got rid of highscore since it'll be hard.
// Game over condition? 10 score?
changeFoodPosition()
initalizeGame();
document.addEventListener("keydown", moveSnake);