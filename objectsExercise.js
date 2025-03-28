"use strict";
const dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
const cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
const getProfit = (movie) => movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
console.log(getProfit(cats));
function someDemo1(x, y) {
    if (x == y) {
        x.toUpperCase();
    }
}
function getRuntim1(el) {
    console.log(typeof el);
}
getRuntim1({ title: "title" });
