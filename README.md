# rock-paper-scissors

Creating a simple rock, paper and scissors game in console. The game will run in 5 rounds and user will play be with a computer. Increment either human score or computer score based on who wins in each rounds. After finishing the all 5 rounds print the winner.


Rock, Paper, and Scissors Algorithm

Variables to be use:
    
1. int humanScore
2. int computerScore
3. int countRound



Functions to be use:

1. playGame() -> will play 5 rounds and announced the winner at the end of the game
2. getComputerChoice() -> will randomly return rock, paper, and scissors (use Math.random)
3. getHumanChoice() -> will return rock, paper, and scissors depending on the user's input
4. playRound() -> decides who wins the round



Solution Steps:


1. Play a game for 5 rounds (playGame(5))

2. User input on the choices of Rock, Paper, and Scissors

3. Computer randomly choose Rock, Paper and Scissors

4. Play a round using the user's choice and computer's choice (playRound(getHumanChoice, getComputerChoice))

5. Based on the results increment humanScore or computerScore

6. Increment round then play another round.

7. When game finish print overall winner at the end.




Pseudocode:

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


