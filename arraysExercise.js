// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (product) {
    return product.reduce(function (sum, productEle) { return sum += productEle.price; }, 0);
};
var arrOfProducts = [{ name: "coffee mug", price: 11.50 }, { name: "cup", price: 12 }];
console.log(getTotal(arrOfProducts));
