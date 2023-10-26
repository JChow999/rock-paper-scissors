const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const subtitle = document.querySelector("#subtitle");
const playerScoreText = document.querySelector("#yourScore");
const compScoreText = document.querySelector("#compScore");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

function playRound(playerSelection, computerSelection) {
    // These if statements are to determine the winner the game to announce the results
    choices = {
        rock: 0,
        paper: 1,
        scissors: 2,
    }
    console.log(playerScore, computerScore)
    playerScoreText.textContent = `Your Score: ${playerScore}`;
    compScoreText.textContent = `Your Score: ${computerScore}`;

    if (playerScore >= 5) {
        subtitle.textContent = "You Won! 🎉"
        return
    } else if (computerScore >= 5) {
        subtitle.textContent = "You lost! 🙁"
        return
    } 

    if (playerSelection == computerSelection) {
        return "It's a Tie!"
    } else if (choices[playerSelection] == 0 && choices[computerSelection] == 2) {
        playerScore++
        return `You Win! ${titleCase(playerSelection)} beats ${titleCase(computerSelection)}!`
    } else if (choices[playerSelection] == 2 && choices[computerSelection] == 0) {
        computerScore++
        return `You Lose! ${titleCase(computerSelection)} beats ${titleCase(playerSelection)}!`
    } else if (choices[playerSelection] < choices[computerSelection]) {
        computerScore++
        return `You Lose! ${titleCase(computerSelection)} beats ${titleCase(playerSelection)}!`
    } else if (choices[playerSelection] > choices[computerSelection]) {
        playerScore++
        return `You Win! ${titleCase(playerSelection)} beats ${titleCase(computerSelection)}!` 
    } else {
        return ("Something bad happened.")
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

// function game() {
//     let playerSelection = ""

//     let computerSelection = getComputerChoice();

    
    
//     console.log(playerScore, computerScore)
// }


  