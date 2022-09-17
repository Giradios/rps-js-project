
function game() {
    for (let i = 0; i < 5; i++) {
        const array = ['Rock', 'Paper', 'Scissors'];
            let userInput = prompt('Rock, Paper, Scissors, Shoot!');
        
        /* --------------------------------------- */
        
        function playerSelection() {
            let choice = userInput.toLowerCase();
        
            return choice;
        };
        
        /* --------------------------------------- */
        
        function getComputerChoice() {
            let randomSelection = array[Math.floor(Math.random() * array.length)].toLowerCase();
        
            return randomSelection;
        };
        
        /* --------------------------------------- */
        
        function playRound(param1, param2) {
        
            let player = param1;
            const computer = param2; 
        
            const win = 'You Win This Round!';
            const lose = 'You Lose This Round!';
            const tie = 'A Tie! Both of you Chose the Same!';
        
            if (player == 'scissors' && computer == 'rock') {
                console.log('You Chose:', player);
                console.log('Computer Chose:', computer);
                console.log(lose);
                console.log('');
            } else if (player == 'scissors' && computer == 'paper') {
                console.log('You Chose:', player);
                console.log('Computer Chose:', computer);
                console.log(win);
                console.log('');
            } else if (player == 'rock' && computer == 'paper') {
                console.log('You Chose:', player);
                console.log('Computer Chose:', computer);
                console.log(lose);
                console.log('');
            } else if (player == 'rock' && computer == 'scissors') {
                console.log('You Chose:', player);
                console.log('Computer Chose:', computer);
                console.log(win);
                console.log('');
            } else if (player == 'paper' && computer == 'scissors') {
                console.log('You Chose:', player);
                console.log('Computer Chose:', computer);
                console.log(lose);
                console.log('');
            } else if (player == 'paper' && computer == 'rock') {
                console.log('You Chose:', player);
                console.log('Computer Chose:', computer);
                console.log(win);
                console.log('');
            } else if (player === computer) {
                console.log('You Chose:', player);
                console.log('Computer Chose:', computer);
                console.log(tie);
                console.log('');
            } else {
                location.reload();
            };
        }

        playRound(playerSelection(), getComputerChoice());

    }
}

game();

