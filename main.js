function getComputerChoice() {
    let max = 3;
    let choice = Math.floor(Math.random() * max);
    if (choice == 0) {
        return console.log("rock");
    } else if (choice == 1) {
        return console.log("paper");
    }
    else {
        return console.log("scissors");
    }
}
