const NUMBEROFGAMES = 5;
let round = 1;
let humanScore = 0;
let computerScore = 0;


let count = 0;
// function getHumanChoice(){
    
    
//     let choicebtn = document.querySelector(".choice-btn");
    


//     return new Promise((resolve) => {


//         //choicebtn.removeEventListener("click");


//         choicebtn.addEventListener("click", (event) =>{
//             count++
//             console.log(count);
//             let target = event.target;
//             let humanImageBorder = document.querySelector(".human-border");
//             let humanImage = document.createElement("img");
//             let humanCreditLink = document.createElement("a");
//             let humanContainer = document.querySelector(".human-img-info");
//             console.log(humanContainer);
        
//             humanImage.classList.add("human-illus");
//             humanCreditLink.classList.add("human-credits")
    
        
//             switch(target.id){
//                 case "rock":
//                     humanImage.setAttribute("src", "images/rock.png");
//                     humanImageBorder.appendChild(humanImage);
//                     humanCreditLink.setAttribute("href", "https://www.freepik.com/free-psd/hand-drawn-rock-formation_206468576.htm#fromView=search&page=1&position=23&uuid=b2c50176-522e-401b-9463-4ff61d1370ad");
//                     humanCreditLink.textContent = "Image by freepik";
//                     humanContainer.appendChild(humanCreditLink);
    
//                     break;
//                 case "paper":
//                     humanImage.setAttribute("src", "images/paper.png");
//                     humanImageBorder.appendChild(humanImage);
//                     humanCreditLink.setAttribute("href","https://www.freepik.com/free-vector/blank-vintage-scroll-paper_21302279.htm#fromView=search&page=1&position=30&uuid=e674b638-d1ec-4006-bd65-3594b94d8dad");
//                     humanCreditLink.textContent = "Image by brgfx on Freepik";
//                     humanContainer.appendChild(humanCreditLink);
    
//                     break;
//                 case "scissors":
//                     humanImage.setAttribute("src", "images/scissors.png");
//                     humanImageBorder.appendChild(humanImage);
//                     humanCreditLink.setAttribute("href", "https://www.freepik.com/free-vector/scissors-tool-icon_169503561.htm#fromView=search&page=2&position=0&uuid=a42698b7-905c-46c5-89eb-0984f3237f58");
//                     humanCreditLink.textContent = "Image by freepik";
//                     humanContainer.appendChild(humanCreditLink);
    
//                     break;
//             }
    
//            resolve(target.id);
            
//         })
        
        
//     });

    

// }


function getHumanChoice() {

    let choicebtn = document.querySelector(".choice-btn");

    return new Promise((resolve) => {

        // Define the event listener function separately
        function handleClick(event) {
            count++;
            console.log(count);
            let target = event.target;
            let humanImageBorder = document.querySelector(".human-border");
            let humanImage = document.createElement("img");
            let humanCreditLink = document.createElement("a");
            let humanContainer = document.querySelector(".human-img-info");
            console.log(humanContainer);

            humanImage.classList.add("human-illus");
            humanCreditLink.classList.add("human-credits");

            switch (target.id) {
                case "rock":
                    humanImage.setAttribute("src", "images/rock.png");
                    humanImageBorder.appendChild(humanImage);
                    humanCreditLink.setAttribute("href", "https://www.freepik.com/free-psd/hand-drawn-rock-formation_206468576.htm#fromView=search&page=1&position=23&uuid=b2c50176-522e-401b-9463-4ff61d1370ad");
                    humanCreditLink.textContent = "Image by freepik";
                    humanContainer.appendChild(humanCreditLink);
                    break;
                case "paper":
                    humanImage.setAttribute("src", "images/paper.png");
                    humanImageBorder.appendChild(humanImage);
                    humanCreditLink.setAttribute("href", "https://www.freepik.com/free-vector/blank-vintage-scroll-paper_21302279.htm#fromView=search&page=1&position=30&uuid=e674b638-d1ec-4006-bd65-3594b94d8dad");
                    humanCreditLink.textContent = "Image by brgfx on Freepik";
                    humanContainer.appendChild(humanCreditLink);
                    break;
                case "scissors":
                    humanImage.setAttribute("src", "images/scissors.png");
                    humanImageBorder.appendChild(humanImage);
                    humanCreditLink.setAttribute("href", "https://www.freepik.com/free-vector/scissors-tool-icon_169503561.htm#fromView=search&page=2&position=0&uuid=a42698b7-905c-46c5-89eb-0984f3237f58");
                    humanCreditLink.textContent = "Image by freepik";
                    humanContainer.appendChild(humanCreditLink);
                    break;
            }

            resolve(target.id);

            // Remove the event listener after the first click
            choicebtn.removeEventListener("click", handleClick);
        }

        // Attach the event listener
        choicebtn.addEventListener("click", handleClick);

    });

}










function getComputerChoice(){

    return new Promise((resolve) =>{
        let computerImageBorder = document.querySelector(".computer-border");
        let computerImage = document.createElement("img");
        let computerCreditLink = document.createElement("a");
        let computerContainer = document.querySelector(".computer-img-info");

        computerImage.classList.add("computer-illus");
        computerCreditLink.classList.add("computer-credits");

        //Randomly picks a number from 0 to 2
        let value = Math.floor(Math.random() * 3);


        //Depending on the value we return either Rock, Paper, or Scissors
       
        switch(value){
            case 0:
                computerImage.setAttribute("src", "images/rock.png");
                computerImageBorder.appendChild(computerImage);
                computerCreditLink.setAttribute("href", "https://www.freepik.com/free-psd/hand-drawn-rock-formation_206468576.htm#fromView=search&page=1&position=23&uuid=b2c50176-522e-401b-9463-4ff61d1370ad");
                computerCreditLink.textContent = "Image by freepik";
                console.log(computerContainer);
                computerContainer.appendChild(computerCreditLink);
                value = "rock"
                break;
            case 1:
                computerImage.setAttribute("src", "images/paper.png");
                computerImageBorder.appendChild(computerImage);
                computerCreditLink.setAttribute("href","https://www.freepik.com/free-vector/blank-vintage-scroll-paper_21302279.htm#fromView=search&page=1&position=30&uuid=e674b638-d1ec-4006-bd65-3594b94d8dad");
                computerCreditLink.textContent = "Image by brgfx on Freepik";
                computerContainer.appendChild(computerCreditLink);
                value = "paper"
                break;
            case 2:
                computerImage.setAttribute("src", "images/scissors.png");
                computerImageBorder.appendChild(computerImage);
                computerCreditLink.setAttribute("href", "https://www.freepik.com/free-vector/scissors-tool-icon_169503561.htm#fromView=search&page=2&position=0&uuid=a42698b7-905c-46c5-89eb-0984f3237f58");
                computerCreditLink.textContent = "Image by freepik";
                computerContainer.appendChild(computerCreditLink);
                value = "scissors";
                break;
        }
        resolve(value);

    })
    
    
    
}


// async function enterChoice(){

//     return new Promise((resolve) =>{
        
//     })

//     let humanChoice = await getHumanChoice();
//     let computerChoice = await getComputerChoice();

//     await playRound(humanChoice, computerChoice);
// }


//Plays a round of the game after finish a game on to the next round.
function playRound(humanChoice, computerChoice){
    
    const winnerText = document.querySelector(".winner-text");
    const humanScoreboard = document.querySelector(".human-scoreboard");
    const computerScoreboard = document.querySelector(".computer-scoreboard");

    return new Promise((resolve) =>{
        
        //Decides who wins the round
        if(humanChoice.toLowerCase() === computerChoice.toLowerCase()){
            winnerText.textContent = "It's a draw!"
        }
        else if(humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
            humanScore++;
            winnerText.textContent = "You Win!"
        }
        else if(humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"){
            humanScore++;
            winnerText.textContent = "You Win!"
        }
        else if(humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors"){
            humanScore++;
            winnerText.textContent = "You Win!"
        }
        else{
            computerScore++;
            winnerText.textContent = "Computer Win!"
        }

        humanScoreboard.textContent = "You: " + humanScore;
        computerScoreboard.textContent = "Computer: " + computerScore;

        resolve();
    })

}


function getNextRound(){

    return new Promise((resolve) =>{
        const proceedSection = document.querySelector(".proceed-section");
        const proceedContainer = document.createElement("div");
        const proceedButton = document.createElement("button")
        proceedButton.classList.add("proceed-button");
        proceedContainer.classList.add("container");

        const humanImageInfo = document.querySelector(".human-img-info");
        const computerImageInfo = document.querySelector(".computer-img-info");

        const humanBorder = document.querySelector(".human-border");
        const computerBorder = document.querySelector(".computer-border");
        
        const humanImage = document.querySelector(".human-illus");
        const computerImage = document.querySelector(".computer-illus");

        const humanCreditLink = document.querySelector(".human-credits");
        const computerCreditLink = document.querySelector(".computer-credits");

        const winnerText = document.querySelector(".winner-text");

        const roundText = document.querySelector(".round-text");

        if(round <= NUMBEROFGAMES){
            proceedButton.textContent = "Next Round";
            proceedContainer.appendChild(proceedButton);
            proceedSection.appendChild(proceedContainer);
            round++;
            
            proceedButton.addEventListener("click", (event) =>{
                
                humanBorder.removeChild(humanImage);
                humanImageInfo.removeChild(humanCreditLink);

                computerBorder.removeChild(computerImage);
                computerImageInfo.removeChild(computerCreditLink);
                
                winnerText.textContent = "";
                roundText.textContent = "Round: " + round;

            })
            resolve();

        }
        else{
            proceedButton.textContent = "New Game?";
            proceedButton.textContent = "Next Round";
            proceedContainer.appendChild(proceedButton);
            proceedSection.appendChild(proceedContainer);
            round = 0;

        }

        
    })


}





function getFinalScore(){
    console.log("Final Score: ");
    console.log("Human Score: " + humanScore + " - " + "Computer Score: " + computerScore);
    //Decides who is the winner at the end of the 5 rounds
    if(humanScore > computerScore){
        console.log("Human Wins!");
    }
    else{
        console.log("Computer Wins!");
    }
}

//Play a game for 5 rounds
async function playGame(currentRound){
    while(round <= currentRound){
        let humanChoice = await getHumanChoice();
        let computerChoice = await getComputerChoice();

        await playRound(humanChoice, computerChoice);
        await getNextRound();
    }
    await getFinalScore();
}




playGame(NUMBEROFGAMES);






