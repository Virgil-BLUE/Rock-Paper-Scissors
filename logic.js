function getComputerChoice() {
    return Math.random()
}

function getHumanChoice() {
    return prompt('Rock, Paper, Scissor!')
}

let humanScore = 0

let computerScore = 0

function playRound(humanChoice, computerChoice) {

    humanChoice = getHumanChoice()

    computerChoice = getComputerChoice()

    let Answer = null

    // This section converts the computer answer(float) to rock, paper, or scissor.

    if (computerChoice >= .6666) {
        opponentChoice = 'Rock';
    } 
    
    else if (computerChoice >= .3333 && computerChoice < .6666 ) {
        opponentChoice = 'Paper';
    }

    else (opponentChoice = 'Scissors') 

    console.log(opponentChoice)

    // This section prevents any grammatical errors from popping up.

    if (humanChoice == 'Rock' || 'rock' || 'ROCK' ) {
        Answer = 'Rock'
    }

    else if (humanChoice == 'Paper' || 'paper' || 'PAPER' ) {
        Answer = 'Paper'
    }

    else if (humanChoice == 'Scissors' || 'scissors' || 'SCISSORS') {
        Answer = 'Scissors'
    }

    else(alert('That is not a valid answer!'))

    console.log(Answer)
}

playRound()
