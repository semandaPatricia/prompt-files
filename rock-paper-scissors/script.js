const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

const choices = ["rock", "paper", "scissors"];

while (true) {
    const playerChoice = prompt("Enter rock, paper, scissors (or q to quit):");
    if (playerChoice.toLowerCase() === "q") {
        break;
    }

    if (!choices.includes(playerChoice)) {
        console.log("please enter a valid choice. ");
        continue;
    }

    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];

    if (computerChoice === playerChoice) {
        console.log("draw!");
        ties++;
    } else if (
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("won!");
        wins++;
    } else {
        console.log("lost!");
        losses++;
    }
}

console.log("Wins:", wins, "Losses:", losses, "Ties:", ties)
