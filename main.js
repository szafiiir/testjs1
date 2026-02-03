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
  let prmpt = prompt("rock, paper or scissors?");

  if (prmpt === null) {
    log.innerText = "OK, maybe next time.";
  } else if (prmpt.toLowerCase() === "") {
    log.innerText = "Try entering your choice again.";
  } else if (prmpt.toLowerCase() === "rock") {
    log.innerText = "You've chosen rock.";
  } else if (prmpt.toLowerCase() === "paper") {
    log.innerText = "You've chosen paper.";
  } else if (prmpt.toLowerCase() === "scissors") {
    log.innerText = "You've chosen scissors.";
  }
}
