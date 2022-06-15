//Computer that randomly returns rock, paper, or scissors
function computerPlay()
{
    let randHandNumber = getRandomInt(3);
    switch(randHandNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper"
        case 2:
            return "Scissors";
        default:
            return "Bug";
    }
}
//let player choose hand then play
function playRound(playerSelection, computerSelection)
{
    if(playerSelection === "Rock")
    {
        if(computerSelection === "Paper") return printLosingGameResult(playerSelection, computerSelection);
        else if (computerSelection === "Rock") return printDrawGameResult(playerSelection, computerSelection);
        else return printWinningGameResult(playerSelection, computerSelection);
    }
    else if(playerSelection === "Scissors")
    {
        if(computerSelection === "Rock") return printLosingGameResult(playerSelection, computerSelection);
        else if (computerSelection === "Scissors") return printDrawGameResult(playerSelection, computerSelection);
        else return printWinningGameResult(playerSelection, computerSelection);
    }
    else if(playerSelection === "Paper")
    {
        if(computerSelection === "Scissors") return printLosingGameResult(playerSelection, computerSelection);
        else if (computerSelection === "Paper") return printDrawGameResult(playerSelection, computerSelection);
        else return printWinningGameResult(playerSelection, computerSelection);
    }
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; ++i)
    {
       let playerInput = prompt("Please type in your selection for Rock, Paper, Scissors: ");
       let capitalizePlayerInput = capitalize(playerInput);

       while((capitalizePlayerInput != "Rock") && (capitalizePlayerInput != "Scissors") && (capitalizePlayerInput != "Paper"))
       {
           let playerInput = prompt("Please type in your selection for Rock, Paper, Scissors correctly: " + "\n");
           capitalizePlayerInput = capitalize(playerInput);
       } 

       let computerInput = computerPlay();
       let roundString = playRound(capitalizePlayerInput, computerInput);

       if(roundString === "You Win! " + capitalizePlayerInput + " beats " + computerInput) playerScore+=1;
       else if(roundString === "You Lose! " + computerInput + " beats " + capitalizePlayerInput) computerScore+=1;
    }
    if(computerScore > playerScore) console.log("Computer wins");
    else if(playerScore > computerScore) console.log("Player wins");
    else console.log("Draw");
}

game();

function printWinningGameResult(playerSelection, computerSelection)
{
    return "You Win! " + playerSelection + " beats " + computerSelection;
}
function printLosingGameResult(playerSelection, computerSelection)
{
    return "You Lose! " + computerSelection + " beats " + playerSelection;
}
function printDrawGameResult(playerSelection, computerSelection)
{
    return "You Draw! " + computerSelection + " ties " + playerSelection;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//capitalize first letter and nothing else to compare strings effectively
function capitalize(string_in)
{
    if(string_in.length > 1)
    {
    let string_lower = string_in.toLowerCase();
    return string_lower.charAt(0).toUpperCase() + string_lower.slice(1);
    }
}