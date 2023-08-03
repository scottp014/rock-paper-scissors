// user choice of rock, paper, scissors, or bomb
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput ==='bomb') {
        return userInput;
    } else {
        console.log('Error!');
    }
};

// console.log(getUserChoice('paper')); 
// get random compuer choice

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
};
 
// computerChoice = console.log(getComputerChoice()); 
// determine winner of user vs computer

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie.';
    }
    
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won :(';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won :(';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won :(';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'bomb') {
        return 'You automatically win!';
    }
};

// console.log(determineWinner('paper', 'scissors'));
// function to play the game

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw ' + userChoice);
    console.log('The computer threw ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
