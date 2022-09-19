const array = ['Rock', 'Paper', 'Scissors'];
let playerWin = 0;
let computerWin = 0;
let gameTie = 0;

function game() {
    for (let i = 0; i < 5; i++) { 
        let userInput = prompt('Rock, Paper, Scissors, Shoot!');
        
        function playerSelection() {
            let choice = userInput.toLowerCase();
        
            return choice;
        };
        
        function getComputerChoice() {
            let randomSelection = array[Math.floor(Math.random() * array.length)].toLowerCase();
        
            return randomSelection;
        };
        
        function playRound(param1, param2) {
        
            let player = param1;
            const computer = param2; 
        
            const win = 'You Win This Round!';
            const lose = 'You Lose This Round!';
            const tie = 'A Tie! Both of you Chose the Same!';
        
            if (player == 'scissors' && computer == 'rock' 
            || player == 'rock' && computer == 'paper'
            || player == 'paper' && computer == 'scissors') {
                console.log('You Chose:', player);
                console.log('Computer Chose:', computer);
                console.log(lose);
                console.log('');
                ++computerWin;
            } else if (player == 'scissors' && computer == 'paper'
            || player == 'rock' && computer == 'scissors'
            || player == 'paper' && computer == 'rock') {
                console.log('You Chose:', player);
                console.log('Computer Chose:', computer);
                console.log(win);
                console.log('');
                ++playerWin;
            } else if (player == computer) {
                console.log('You Chose:', player);
                console.log('Computer Chose:', computer);
                console.log(tie);
                console.log('');
                ++gameTie;
            } else {
                location.reload();
            };
        };

        playRound(playerSelection(), getComputerChoice());
    };

    if (playerWin == 3) {
        alert('You Win! Play again?');
        location.reload();
    } else if (computerWin == 3) {
        alert('You Lost! Play again?');
        location.reload();
    } else if (playerWin == 2 && computerWin == 2 && gameTie == 1 
        || playerWin == 1 && computerWin == 2 && gameTie == 2 
        || playerWin == 2 && computerWin == 1 && gameTie == 2
        || gameTie == 3, 4, 5) {
        alert('You Both Lost! Wanna try again?')
        location.reload();
    } else {
        alert('An Error Occured!')
        location.reload();
    };
};

game();

