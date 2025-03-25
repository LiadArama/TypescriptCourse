"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
const twoFer = (name = "you") => {
    console.log(`one for ${name}, one for me`);
};
twoFer();
twoFer("Elton");
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
const isLeapYear = (year) => {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
const per1 = {
    name: "myName",
    age: 13
};
const per2 = {
    name: "my2ndName",
    age: 24
};
const arrOfPers = [per1, per2];
for (let [index, per] of arrOfPers.entries()) {
    console.log(`${index}: ${Object.values(per)}`);
}
function getRandomElement1(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
const getRandomElement2 = (list) => {
    return list[0];
};
const getRandomElement3 = function (list) {
    return list[0];
};
function merge1(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
function mergeObjectsOnly(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const comboObj1 = mergeObjectsOnly({ name: "Liad" }, 9);
const someObj = { name: "Liad" };
