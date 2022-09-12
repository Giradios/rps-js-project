
const array = ['Rock', 'Paper', 'Scissors'];
const windowPrompt = prompt('Rock, Paper, Scissors, Shoot!');

function playerChoice() {
    const choice = windowPrompt.toLowerCase();
    console.log('You Chose:', choice)

    return choice;
}

let playerSelection = playerChoice();

/* --------------------------------------- */

function getComputerChoice() {
    const randomSelection = array[Math.floor(Math.random() * array.length)].toLowerCase();
    console.log('Computer Chose:', randomSelection);

    return randomSelection;
}

let computerSelection = getComputerChoice();

/* --------------------------------------- */

function playRound(playerSelection, computerSelection) {
    const player = playerSelection;
    const computer = computerSelection; 
    const win = 'You Win This Round!';
    const lose = 'You Lose This Round!';

    if (player == 'scissors' && computer == 'rock') {
        console.log(lose);
    } else if (player == 'scissors' && computer == 'paper') {
        console.log(win)
    } else if (player == 'rock' && computer == 'paper') {
        console.log(lose);
    } else if (player == 'rock' && computer == 'scissors') {
        console.log(win);
    } else if (player == 'paper' && computer == 'scissors') {
        console.log(lose);
    } else if (player == 'paper' && computer == 'rock') {
        console.log(win);
    } else {
        location.reload();
    };
}

playRound(playerSelection, computerSelection);

/* --------------------------------------- */

function game() {
    playRound();

    for (let i = 0; i < 5; i++) {
        if (i = 3) {
            console.log('You Won The Game!');
        } else if (i = 4) {
            console.log('You Lose The Game');
        }
    }
}

game();