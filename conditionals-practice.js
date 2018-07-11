
let readline = require("readline-sync");
let ourNum = 5;
let userNum = Number(readline.question("Please guess a number from 1 to 10: "));
if (userNum === ourNum) {
  console.log("You guessed it! Lucky!");
if (isItHot === "yes") {
console.log("Good thing your brain is working in the heat");
}else{

} else if (userNum > ourNum ) {
  console.log(" You guessed too high ");
} else {
  console.log(" You guessed too low ");
