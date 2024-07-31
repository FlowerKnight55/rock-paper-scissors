//Rock, Paper, and Scissors Algorithm

/* Variables to be use:
    
    int humanScore
    int computerScore
    int countRound

*/

/* Functions to be use:

    playGame -> will play 5 rounds and announced the winner at the end of the game
    getComputerChoice -> will randomly return rock, paper, and scissors (use Math.random)
    getHumanChoice -> will return rock, paper, and scissors depending on the user's input
    playRound -> decides who wins the round


*/


/*Solution


Play a game for 5 rounds (playGame(5))

User input on the choices of Rock, Paper, and Scissors

Computer randomly choose Rock, Paper and Scissors

Play a round using the user's choice and computer's choice (playRound(getHumanChoice, getComputerChoice))

Based on the results increment humanScore or computerScore

Increment round then play another round.

*/


//Pseudocode

/* 
SET round to 0
SET humanScore to 0
SET computerScore to 0
CALL playGame with 5 rounds
    WHILE round < 5
        CALL getHumanChoice
            GET user input (Rock, Paper, and Scissors)
        
        CALL getComputerChoice
            DETERMINE Math.random {0, 1, 2}
                IF Math.random === 0
                    GET "rock"
                ELSE IF Math.random === 1
                    GET "paper"
                ELSE IF Math.random === 2
                    GET "scissors"
                ENDIF
        CALL playRound with the arguments of getHumanChoice and getComputerChoice
            
            IF getHumanChoice === getComputerChoice
                RETURN
            ELSE IF getHumanChoice === "paper" AND getComputerChoice === "rock"
                INCREMENT humanScore
            ELSE IF getHumanChoice === "scissors" AND getComputerChoice === "paper"
                INCREMENT humanScore
            ELSE IF getHumanChoice === "rock" AND getComputerChoice === "scissors"
                INCREMENT humanScore
            ELSE
                INCREMENT computerScore
            INCREMENT round
    ENDWHILE

    
IF humanScore > computerScore
    PRINT "Human Wins!"
ELSE
    PRINT "Computer Wins!"
ENDIF


*/


let round = 0;
let humanScore = 0;
let computerScore = 0;



function getHumanChoice(){
    return prompt("Enter choice");
}

function getComputerChoice(){
    let value = Math.floor(Math.random() * 2);

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

function playRound(humanChoice, computerChoice){

    
    console.log("round" + (round + 1));
    console.log(humanChoice.chartAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase() + " " + computerChoice);

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
}

function playGame(currentRound){
    while(round < currentRound){
        playRound(getHumanChoice(), getComputerChoice());
        round++;
    }
}



playGame(5);

if(humanScore > computerScore){
    console.log("Human Wins!");
}
else{
    console.log("Computer Wins");
}