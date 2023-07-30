const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const start = document.querySelector('#start');
const computerText = document.querySelector('#computerText');
const score = document.querySelector('#score');
const round = document.querySelector('#round');

rock.addEventListener('click', playerChoice);
paper.addEventListener('click', playerChoice);
scissors.addEventListener('click', playerChoice);
let player = '';
let countScore = 0;
let countRound = 0;
const choice = ['Rock', 'Paper', 'Scissors'];

function playerChoice() {
    return player = this.id;
};
function playRound() {
    let computer = computerChoice();
    computerText.textContent = computer;

    function roundPlus() {
        countRound++;
        round.textContent = countRound;
    }
    function counterPlus() {
        countScore++;
        score.textContent = countScore;
    }
    function counterMinus() {
        countScore--;
        score.textContent = countScore;
    }
    function computerChoice() {
        return choice[Math.floor(Math.random() * choice.length)];
    };    

    if ((player === 'rock' && computer === 'Scissors') ||
        (player === 'paper' && computer === 'Rock') ||
        (player === 'scissors' && computer === 'Paper')) {
            counterPlus();
            roundPlus();
    } else if (
        (player === 'rock' && computer === 'Paper') ||
        (player === 'paper' && computer === 'Scissors') ||
        (player === 'scissors' && computer === 'Rock')) {
            counterMinus();
            roundPlus();
        } else {
            roundPlus();
        };

    if (countScore === 5) { 
        alert('You Won in ' + round.textContent + ' round\'s! Wanna Play again?');
        window.location.reload();
    } else if (countScore === -5) {
        alert('You Lost The Game in ' + round.textContent + ' round\'s!! Wanna Play again?')
        window.location.reload();
    } ;
};

start.addEventListener('click', playRound);