// Author: Jailyn Washington

let readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));

//let  ageAsAString = readline.question('What is your age?');
//let age = Number(ageAsAString);


console.log('In 2028 you will be' + (age + 10) + ' years old. ');
