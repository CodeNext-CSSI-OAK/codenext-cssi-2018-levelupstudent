// Author: Jailyn Washington
let readline = require("readline-sync");

// global variables
let firstName;
let lastName;
let momMaidenName;
let cityBorn;
let dreamCar;
let street;
let fantasyName;

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName() {
  return firstName.substring(0,3) + lastName.substring(0,2).toLowerCase();
}

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName() {
  return momMaidenName.substring(0,2) + cityBorn.substring(0, 4).toLowerCase();
}

/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle() {
  return lastName.charAt(lastName.length - 1).toUpperCase() + lastName.charAt(lastName.length - 2) + lastName.charAt(lastName.length - 3) + dreamCar.toLowerCase();
}

/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific() {
  return street;
}

/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run() {

console.log("");
console.log("*****************************************************************");
console.log("                Fantasy Name Generator                            ");
console.log("*****************************************************************");
console.log("");
firstName = readline.question("Your First Name: ");
lastName = readline.question("Your Last Name: ");
momMaidenName = readline.question("Mom's Maiden name: ");
cityBorn = readline.question("City you were Born: ");
dreamCar = readline.question("Your Dream Car: ");
street = readline.question("Street you live by: ");

console.log("");
console.log("************************************************************")
console.log(getNewFirstName() + " " + getNewLastName() + ", " + getTitle() + " of " + getHonorific());
console.log("************************************************************")

}

// Run the program!
run();
