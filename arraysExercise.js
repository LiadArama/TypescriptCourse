"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = (product) => {
    return product.reduce((sum, productEle) => sum += productEle.price, 0);
};
const arrOfProducts = [{ name: "coffee mug", price: 11.50 }, { name: "cup", price: 12 }];
console.log(getTotal(arrOfProducts));
