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
        if(computerSelection === "Paper") return "Lose";
        else if (computerSelection === "Rock") return "Draw";
        else return "Win";
    }
    else if(playerSelection === "Scissors")
    {
        if(computerSelection === "Rock") return "Lose";
        else if (computerSelection === "Scissors") return "Win";
        else return "Draw";
    }
    else if(playerSelection === "Paper")
    {
        if(computerSelection === "Scissors") return "Lose";
        else if (computerSelection === "Paper") return "Win";
        else return "Draw";
    }
}

function buttonPressed(e)
{
    const button_name = this.getAttribute("class");
    const output_string = document.querySelector(".output");
    const player_score = document.querySelector(".playerScore");
    const computer_score = document.querySelector(".computerScore");
    const computerPlayFinal = computerPlay();

    if(button_name === "btn-rock")
    {
        let round_result = playRound("Rock", computerPlayFinal);
        if(round_result === "Lose")
        {
            output_string.textContent = printLosingGameResult("Rock", computerPlayFinal);
            let computer_score_num = parseInt(computer_score.textContent, 10);
            computer_score_num+=1;
            computer_score.textContent = computer_score_num.toString();
        }
        else if(round_result === "Win")
        {
            output_string.textContent = printWinningGameResult("Rock", computerPlayFinal);
            let player_score_num = parseInt(player_score.textContent, 10);
            player_score_num+=1;
            player_score.textContent = player_score_num.toString();
        }
        else{
            output_string.textContent = printDrawGameResult("Rock", computerPlayFinal);
        }
    }
    
    else if(button_name === "btn-paper")
    {
        let round_result = playRound("Paper", computerPlayFinal);
        if(round_result === "Lose")
        {
            output_string.textContent = printLosingGameResult("Paper", computerPlayFinal);
            let computer_score_num = parseInt(computer_score.textContent, 10);
            computer_score_num+=1;
            computer_score.textContent = computer_score_num.toString();
        }
        else if(round_result === "Win")
        {
            output_string.textContent = printWinningGameResult("Paper", computerPlayFinal);
            let player_score_num = parseInt(player_score.textContent, 10);
            player_score_num+=1;
            player_score.textContent = player_score_num.toString();
        }
        else{
            output_string.textContent = printDrawGameResult("Paper", computerPlayFinal);
        }
    }
    else if(button_name === "btn-scissors")
    {
        let round_result = playRound("Scissors", computerPlayFinal);
        if(round_result === "Lose")
        {
            output_string.textContent = printLosingGameResult("Scissors", computerPlayFinal);
            let computer_score_num = parseInt(computer_score.textContent, 10);
            computer_score_num+=1;
            computer_score.textContent = computer_score_num.toString();
        }
        else if(round_result === "Win")
        {
            output_string.textContent = printWinningGameResult("Scissors", computerPlayFinal);
            let player_score_num = parseInt(player_score.textContent, 10);
            player_score_num+=1;
            player_score.textContent = player_score_num.toString();        }
        else{
            output_string.textContent = printDrawGameResult("Scissors", computerPlayFinal);
        }    
    }

    if(Number(player_score.textContent) > 4) 
    {
        output_string.textContent = "Game Over, Player Wins!";
    }
    else if(Number(computer_score.textContent) > 4)
    {
        output_string.textContent = "Game Over, Computer Wins!"
    }
}

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


const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", buttonPressed));

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