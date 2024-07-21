// Global Variables //




function getComputerChoice() {

    let random_num = Math.random()
    let ComputerChoice = undefined
    
    if (random_num < .33) {
        let ComputerChoice = 'rock'
    } else if (random_num >= .33 && random_num < .66) {
        let ComputerChoice = 'paper'
    } else  {
        let ComputerChoice = 'scissors'
    }

    console.log(random_num)
}

getComputerChoice()