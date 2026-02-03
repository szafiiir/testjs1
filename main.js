function getComputerChoice() {
  let max = 3;
  let choiceStr = "";
  let choiceNum = Math.floor(Math.random() * max);

  if (choiceNum == 0) {
    choiceStr = "rock";
  } else if (choiceNum == 1) {
    choiceStr = "paper";
  } else {
    choiceStr = "scissors";
  }

  return choiceStr;
}

const promptButton = document.querySelector("#promptButton");
const log = document.querySelector("#log");

promptButton.addEventListener("click", getHumanChoice);

function getHumanChoice() {
  let choicePrompt = prompt("rock, paper or scissors?");

  if (choicePrompt === null) {
    log.innerText = "OK, maybe next time.";
  } else if (choicePrompt.toLowerCase() === "") {
    log.innerText = "Try entering your choice again.";
  } else if (choicePrompt.toLowerCase() === "rock") {
    log.innerText = "You've chosen rock.";
  } else if (choicePrompt.toLowerCase() === "paper") {
    log.innerText = "You've chosen paper.";
  } else if (choicePrompt.toLowerCase() === "scissors") {
    log.innerText = "You've chosen scissors.";
  }
}
