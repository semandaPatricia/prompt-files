const prompt = require('prompt-sync')()
const value = prompt ('welcome to number guesser!');
console.log(value);

const target =Math.round(Math.random() * 100) ;

let guesses = 0;

while(true){
    const guess= Number(prompt("Guess the number (0-100): ")) ;

    guesses++ ;

    if (guess > target) {
        console.log("your guess is too high!");

    } else if (guess < target) {
        console.log("your guess is too low!");

    }else {
        console.log("you guessed it!");
        break;
    }
}

console.log ("you guessed the number in" ,guesses,"tries!") ;
