let userscore = 0;
let comscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorep = document.querySelector("#user-score");
const compScorep = document.querySelector("#comp-score");

const compChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rndmIdx = Math.floor(Math.random() *3);
    return options[rndmIdx];
}

const draw = () => {
    // console.log("draw");
    msg.innerText = "DRAW";
}

const playGmae= (userchoice) => {
    // console.log("userchoice=", userchoice);
    // get computer choice => modular way programing (break code in parts)
    const compChoiceId = compChoice();
    // console.log("compChoice=", compChoiceId);

    if (userchoice === compChoiceId) {
        draw();
        msg.style.backgroundColor = "#f7b733";
    } else if (userchoice === "rock" && compChoiceId === "scissors") {
        // console.log("you win");
        msg.innerText = `YOU WIN! ${userchoice} beats ${compChoiceId}`;
        msg.style.backgroundColor = "green";
        userScorep.innerText = ++userscore;
    } else if (userchoice === "paper" && compChoiceId === "rock") {
        // console.log("you win");
        msg.innerText = `YOU WIN! ${userchoice} beats ${compChoiceId}`;
        msg.style.backgroundColor = "green";
        userScorep.innerText = ++userscore;
    } else if (userchoice === "scissors" && compChoiceId === "paper") {
        // console.log("you win");
        msg.innerText = `YOU WIN! ${userchoice} beats ${compChoiceId}`;
        msg.style.backgroundColor = "green";
        userScorep.innerText = ++userscore;
    } else {
        // console.log("you lose");
        msg.innerText = `YOU LOSE! ${compChoiceId} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compScorep.innerText = ++comscore;
    }
    if (userscore === 5) {
        msg.innerText = "YOU WIN THE GAME";
        msg.style.backgroundColor = "green";
    } else if (comscore === 5) {
        msg.innerText = "YOU LOSE THE GAME";
        msg.style.backgroundColor = "red";
    }
}

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userchoice = choice.getAttribute("id");
            // console.log("clicked", choiceId);
            playGmae(userchoice);
        }) 
    })





