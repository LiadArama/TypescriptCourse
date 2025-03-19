type Cat = {
    numLives: number;
};
type Dog = {
    breed: string;
}

type CatDog = Cat & Dog & {age:number};
const catDog: CatDog= {
    breed: "Husky",
    numLives: 9,
    age: 8,
};