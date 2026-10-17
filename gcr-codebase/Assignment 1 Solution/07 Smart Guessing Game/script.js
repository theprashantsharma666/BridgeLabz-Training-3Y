let secretNumber = Math.floor(Math.random() * 50) + 1;

let userGuess = 25;

console.log("Secret Number: " + secretNumber);
console.log("Your Guess: " + userGuess);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}