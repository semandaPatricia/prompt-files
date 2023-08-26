/**
 * This code snippet allows the user to play a game of rock, paper, scissors against the computer.
 * It keeps track of the game statistics such as wins, losses, and ties.
 * The game continues until the user enters 'q' to quit.
 *
 * @param {string} playerChoice - The choice made by the player (rock, paper, scissors, or 'q' to quit).
 * @param {string} computerChoice - The choice made by the computer (rock, paper, scissors).
 * @param {number} wins - The number of games won by the player.
 * @param {number} losses - The number of games lost by the player.
 * @param {number} ties - The number of games that ended in a tie.
 * @param {string[]} choices - The available choices for the game (rock, paper, scissors).
 */
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
