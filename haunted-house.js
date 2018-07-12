// Jailyn Washington
let readline = require("readline-sync");
console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by Jailyn Washington");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse === "y" || enterHouse === "yes") {
  console.log(" You quickly go into the house the door slams shut and you immediately see a ghost")
  let run = readline.question(" Do you run? ( yes or no) ");
  if(run === "n" || run === "no") {
    console.log(" The ghost looks at you but eventually disappears into a wall ");
  } else {
    if(run === "y" || run === "yes"){
    console.log(" You were too scared. END OF GAME");
}
 }
  }
