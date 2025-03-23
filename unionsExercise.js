"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
const score = false;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
const stuff = ["1"];
// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors = [{ h: 1, s: 2, l: 3 }, { r: 1, g: 2, b: 3 }];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (arr) => console.log(`Hello ${arr}`);
greet("Liad");
greet(["Liad", "Omer"]);
