const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let playerScore = 0;
let computerScore = 0;

function game() {
    // for (let step = 0; step < 5; step++) {
        const choices = ['rock', 'paper', 'scissors'];
        let playerSelection = ""
        do {
            rock.addEventListener('click', () => console.log("rock"));
            paper.addEventListener('click', () => playerSelection='paper');
            scissors.addEventListener('click', () => playerSelection='scissors');
            console.log(playerSelection)
            }
        while (!choices.includes(playerSelection));
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        playerSelection = ""
    // }
}

function playRound(playerSelection, computerSelection) {
    const choices = {
        rock: 0, 
        paper: 1, 
        scissors: 2
    };

    // These if statements are to determine the winner the game to announce the results
    if (choices.hasOwnProperty(playerSelection)) {
        if (playerSelection == computerSelection) {
            return "It's a Tie!"
        } else if (choices[playerSelection] == 0 && choices[computerSelection] == 2) {
            return `You Win! ${titleCase(playerSelection)} beats ${titleCase(computerSelection)}!`
        } else if (choices[playerSelection] == 2 && choices[computerSelection] == 0) {
            return `You Lose! ${titleCase(computerSelection)} beats ${titleCase(playerSelection)}!`
        } else if (choices[playerSelection] < choices[computerSelection]) {
            return `You Lose! ${titleCase(computerSelection)} beats ${titleCase(playerSelection)}!`
        } else if (choices[playerSelection] > choices[computerSelection]) {
            return `You Win! ${titleCase(playerSelection)} beats ${titleCase(computerSelection)}!`
        } else {
            return ("Something bad happened.")
        }
    } else {
        return "Error, invalid choice."
    }
  }

  // Function to capitalize the first letter of a word to reduce code length in template literals
function titleCase(word) {
    word = word.charAt(0).toUpperCase() + word.slice(1)
    return word
} 

// Generates random choice for computer so game can decide winner
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let rand = Math.random() * choices.length;
    rand = Math.floor(rand)

    let compChoice = choices[rand]
    return compChoice
}

  
game();
  