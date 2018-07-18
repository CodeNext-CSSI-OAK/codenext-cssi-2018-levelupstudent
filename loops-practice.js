// let readline = require("readline-sync");
//
//
// let correctPassword = "badabing";
// let input = "";
// let attempts = 3;
// while(input !== correctPassword && attempts > 0){
//   input = readline.question("Please enter the correct password: ");
//   attempts--;
// }
// if(attempts === 0){
//   console.log("INCORRECT! You've been kicked out !")
// } else {
//   console.log("Correct!")
// }

// let alphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";





// for(let count = 0; count <= 30 ; count++) {
//   console.log(count);
// }







// function containsSpace(str){
//   for(let i = 0; i < str.length; i++){
//     if(str.charAt(i) === " "){
//       return true;
//     }
//   }
//   return false;
// }
//
// console.log(containsSpace("star wars"));
// console.log(containsSpace("starwars"));
// console.log(containsSpace(""));
// console.log(containsSpace("   "));








function countAs(str){
  let count = 0
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === "a" || str.charAt(i) === "a") {
      count++;
    }
  }
  return count;
}
console.log(countAs("happy"));
console.log(countAs("lady gaga"));
console.log(countAs(""));


// function reverseString(str) {
//   let reversed = "";
//     for(let i = str.length - 1; i >= 0 ; i-- ) {
//     reversed += str.charAt(i);
//   }
//   return reversed;
// }
//
// console.log(reverseString("banana"));
// console.log(reverseString(" A man, a plan, a canal: Panama!"));
// console.log(reverseString("dog"));
// console.log(reverseString("racecar"));

// let count = 5
// while(count > 0 ) {
//   console.log("hello");
//   count --;
// }

  // let str = "ABCDE"
  // for(let i = 0; i < str.length; i++){
  //   console.log(str.charAt(i));
  // }
