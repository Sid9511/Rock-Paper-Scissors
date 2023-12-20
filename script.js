let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



// User Choices
choices.forEach((choice) => {
        // console.log(choice);
        choice.addEventListener("click", () => {
        // console.log("choice was clicked");
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});



// Comp Choices
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rdmIdx = Math.floor(Math.random() * 3); //Math.random() : is math fuction which always generates a random number between 0 to 1. Therefore the trick is to generate a random number between any choice of numbers is to multiply it with a number greater than the end number by one. Here we need random numbers between 0 to 2 (i.e. 0,1,2, three numbers in total) so we multiply 'Math.random() * 3' with 3 to generate a random number between 0 to 2. Also we use 'Math.floor' to remove the numbers after the decimal point and getting a whole number between the required range.
  return options[rdmIdx];
};



// Draw condition
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};



// game play
const playGame = (userChoice) => {
    console.log("User Choice: ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice: ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        
        if (userChoice === "rock") {
            // compChoice = paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // compChoice = scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        } else { // userChoice === "scissors"
            // compChoice = rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};



// winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else { // compWin 
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


