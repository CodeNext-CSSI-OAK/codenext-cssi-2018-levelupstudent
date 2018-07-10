// Author: Jailyn Washington

let readline = require ('readline-sync');

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

console.log("BeeP BEeP! I Am A ChAngE MaChInE!");

let change = Number(readline.question('Please enter cents as a positive integers:'));

let y = change
console.log(y + " change makes:");

let a = Math.floor(y / 25);
console.log( a + " quarters ");

y = y % 25;
let b = Math.floor(y / 10);
console.log( b + " dimes ");

y = y % 10;
let c = Math.floor(y / 5);
console.log( c + " nickels ");

y = y % 5;
let d = Math.floor(y / 1);
console.log( d + " pennies ");

console.log("bEEp beEp! I hOpe YoU ArE SaTiSFIed WiTh ThiS sERVicE!");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
