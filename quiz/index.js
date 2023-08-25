const prompt = require('prompt-sync')()
const value = prompt ('welcome to the EURO quiz!');
console.log(value);

let correctAnswers = 0;
const totalQuestions = 3;



const answer1 = prompt ('What is the smallest country in europe?')
const correctAnswer1 ='vatican city'

if ( answer1.toLowerCase() === correctAnswer1) {
    console.log("you got it right!")
    correctAnswers++
} else {
    console.log("you got it wrong!")
}

const answer2 = prompt ('What is the biggest country in europe?')
const correctAnswer2 ='russia'
if ( answer2.toLowerCase() === correctAnswer2) {
    console.log("you got it right!")
    correctAnswers++
} else {
    console.log("you got it wrong!")
}

const answer3 = prompt ('What is the most spoken language in europe?')
const correctAnswer3 ='GERMAN'
if ( answer3.toUpperCase() === correctAnswer3) {
    console.log("you got it right!")
    correctAnswers++
} else {
    console.log("you got it wrong!")
}



console.log("you got",correctAnswers,"questions correct!")
console.log("you scored",Math.round((correctAnswers/totalQuestions) * 100),"%")