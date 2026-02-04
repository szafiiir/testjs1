function getComputerChoice() {
  let max = 3;
  let computerChoice = "";
  let choiceNum = Math.floor(Math.random() * max);

  if (choiceNum == 0) {
    computerChoice = "rock";
  } else if (choiceNum == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

const promptButton = document.querySelector("#promptButton");
const log = document.querySelector("#log");

promptButton.addEventListener("click", getHumanChoice);

function getHumanChoice() {
  let promptChoice = prompt("rock, paper or scissors?");

  if (promptChoice === null) {
    log.innerText = "OK, maybe next time.";
  } else if (promptChoice.toLowerCase() === "") {
    log.innerText = "Try entering your choice again.";
  } else if (promptChoice.toLowerCase() === "rock") {
    log.innerText = "You've chosen rock.";
    return promptChoice.toLowerCase();
  } else if (promptChoice.toLowerCase() === "paper") {
    log.innerText = "You've chosen paper.";
    return promptChoice.toLowerCase();
  } else if (promptChoice.toLowerCase() === "scissors") {
    log.innerText = "You've chosen scissors.";
    return promptChoice.toLowerCase();
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {
  if (human === computer) {
    console.log("draw!");
  } else if (human === "rock" && computer === "scissors") {
    console.log("Human wins the round.");
    return (humanScore += 1);
  } else if (human === "paper" && computer === "rock") {
    console.log("Human wins the round.");
    return (humanScore += 1);
  } else if (human === "scissors" && computer === "paper") {
    console.log("Human wins the round.");
    return (humanScore += 1);
  } else {
    console.log("Computer wins the round.");
    computerScore += 1;
  }
}
