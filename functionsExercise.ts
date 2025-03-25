// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

const twoFer = (name: string = "you"):void =>{
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
const isLeapYear = (year: number): boolean => {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

type Persoon ={
    name: string;
    age:number;
}

const per1: Persoon = {
    name: "myName",
    age: 13
};

const per2: Persoon = {
    name: "my2ndName",
    age: 24
};

const arrOfPers: Persoon[] = [per1, per2];
for(let [index, per] of arrOfPers.entries()){
    console.log(`${index}: ${Object.values(per)}`);
}

function getRandomElement1<T>(list:T[]) : T {
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx];
}

const getRandomElement2 = <T>(list:T[]):T=>{
    return list[0];
}
const getRandomElement3 = function<T>(list:T[]):T{
    return list[0];
}

function merge1<T, U>(obj1: T, obj2: U){
    return {
        ...obj1, 
        ...obj2
    };
}
function mergeObjectsOnly<T extends object, U extends object>(obj1: T, obj2: U){ //  we can also create an interface and extend to it instead of the built in object for example. 
    return {
        ...obj1, 
        ...obj2
    };
}

const comboObj1 = mergeObjectsOnly({name:"Liad"}, 9);
const someObj: object = {name: "Liad"}

