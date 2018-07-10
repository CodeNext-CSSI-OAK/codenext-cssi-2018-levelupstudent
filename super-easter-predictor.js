// Author: Jailyn Washington

let readline = require ('readline-sync');

let year = Number(readline.question('Please enter a year greater that 1582:'))

console.log("Welcome to Super Easter Predictor!")

let y = year
//console.log("y = " + y);

let a = y % 19;
//console.log(" y = " + a);

let b = Math.floor(y / 100);
//console.log(" b = " + b);

let c = y % 100;
//console.log(" c = " + c);

let d = Math.floor(b / 4);
//console.log(" d = " + d);

let e = b % 4;
//console.log(" e = " + e);

let f = Math.round((b + 8) / 25);
//console.log(" f = " + f);

let g = Math.floor((b - f) / 3);
//console.log(" g = "+ g);

let h = Math.floor((19 * a + b - d - g + 15) %30);
//console.log(" h = " + h);

let i = Math.floor((c) / 4);
//console.log(" i = " + i);

let k = c % 4;
//console.log(" k = " + k);

let r = Math.floor((32 + 2 * e + 2 * i - h - k) % 7);
//console.log(" r = " + r);

let m = Math.floor((a + 11 * h + 22 * r) / 451 );
//console.log(" m = " + m);

let n = Math.floor((h + r - 7 * m + 114) / 31);
//console.log(" n = " + n);

let p = ((h + r - 7 * m + 114) % 31);
//console.log(" p = " + p);
console.log("In " + y + " Easter falls on " + n + "/" + (p + 1));
console.log("Goodbye!");
