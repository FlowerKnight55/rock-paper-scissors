let round = 0;
let humanScore = 0;
let computerScore = 0;


//User inputs choices between Rock, Paper, and Scissors
function getHumanChoice(){
    return prompt("Enter choice (Rock, Paper, or Scissors)");
}


//Computer randomly choose Rock, Paper, and Scissors
function getComputerChoice(){

    //Randomly picks a number from 0 to 2
    let value = Math.floor(Math.random() * 2);

    //Depending on the value we return either Rock, Paper, or Scissors
    switch(value){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        default:
            return "Scissors";
        
    }
    
}

//Plays a round of the game after finish a game on to the next round.
function playRound(humanChoice, computerChoice){

    
    console.log("Round " + (round + 1));
    console.log(humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase() + " vs " + computerChoice);
    //Decides who wins the round
    if(humanChoice.toLowerCase() === computerChoice.toLowerCase()){
        console.log("It's a draw!")
    }
    else if(humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
        humanScore++;
        console.log("Human wins this round!")
    }
    else if(humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"){
        humanScore++;
        console.log("Human wins this round!");
    }
    else if(humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors"){
        humanScore++;
        console.log("Human wins this round!")
    }
    else{
        computerScore++;
        console.log("Computer wins this round!")
    }
    console.log("Human Score: " + humanScore + " - " + "Computer Score: " + computerScore);
    console.log("");
}

//Play a game for 5 rounds
function playGame(currentRound){
    while(round < currentRound){
        playRound(getHumanChoice(), getComputerChoice());
        round++;
    }
}



playGame(5);

console.log("Final Score: ");
console.log("Human Score: " + humanScore + " - " + "Computer Score: " + computerScore);
//Decides who is the winner at the end of the 5 rounds
if(humanScore > computerScore){
    console.log("Human Wins!");
}
else{
    console.log("Computer Wins!");
}