function playRound(playerSelection, computerSelection) {
    // Converting strings to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    
    // Creating a dictionary
    const choices = {
        rock: 0, 
        paper: 1, 
        scissors: 2
    };

    // Check if user choice is a valid selection
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
        }
    } else {
        return "Error, invalid choice."
    }
  }

  // Function to capitalize the first letter of a word
function titleCase(word) {
    word = word.charAt(0).toUpperCase() + word.slice(1)
    return word
} 

// Function to generate a random choice for the computer player
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    var rand = Math.random() * choices.length;
    rand = Math.floor(rand)

    var compChoice = choices[rand]
    return compChoice
}


  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  