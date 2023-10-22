function game() {
    // running game 5 times
    for (let step = 0; step < 5; step++) {
        const choices = ['rock', 'paper', 'scissors'];
        
        do {
            var playerSelection = prompt("Select rock, paper, or scissors.");
            playerSelection = playerSelection.toLowerCase();
            if (!choices.includes(playerSelection)) {
                console.log("Error, invalid choice. Select rock, paper, or scissors.")
            }
        } while (!choices.includes(playerSelection));
        var computerSelection = getComputerChoice();

        // Converting strings to lowercase
        
    
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection) {
    
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
        } else {
            return ("Something bad happened.")
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

  
  game();
  