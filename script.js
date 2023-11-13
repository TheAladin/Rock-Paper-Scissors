function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == "rock" && computerSelection == "scissors") {
        return("You Win! Rock beats Scissors");
    }
    if(playerSelection == "scissors" && computerSelection == "paper") {
        return("You Win! Scissors beats Paper");
    }
    if(playerSelection == "paper" && computerSelection == "rock") {
        return("You Win! Paper beats Rock");
    }
    if(playerSelection == "rock" && computerSelection == "paper") {
        return("You Lose! Paper beats Rock");
    }
    if(playerSelection == "scissors" && computerSelection == "rock") {
        return("You Lose! Rock beats Scissors");
    }
    if(playerSelection == "paper" && computerSelection == "scissors") {
        return("You Lose! Scissors beats Paper");
    }
    if(playerSelection == computerSelection) {
        return("It's a Draw!");
    }
    
}

function game() {
    let score = [0, 0];
    let result;
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Please choose your next play: ");
        let computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        console.log(result);
        if (result[4] == "W") {
            score[0]++;
        }
        else {
            score[1]++;
        }
    }
    if (score[0] > score[1]) {
        console.log("You Win the game!")
    }
    else {
        console.log("You Lose the game!")
    }
}