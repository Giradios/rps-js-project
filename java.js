/*
Pseudocode:

get inputFromUser
get computerChoice

if input and computer = rock + scissors
    then user wins

if input and computer = paper + scissors
    then user wins 

etc, etc.
*/

const windowPrompt = prompt('Rock, Paper, Scissors, Shoot!');

function playerChoice() {
    const choice = windowPrompt;
    return choice;
}

let playerSelection = playerChoice();

/* --------------------------------------- */

function getComputerChoice() {
    const threeChoices = ['Rock'];
    const randomSelection = threeChoices[Math.floor(Math.random() * threeChoices.length)];

    return randomSelection;
}

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    const player = playerSelection;
    const computer = computerSelection; 
    let comparison = player.toLowerCase() === computer.toLowerCase();
}

playRound(playerSelection, computerSelection);

console.log('You chose:', playerSelection);
console.log('The computer chose:', computerSelection);
