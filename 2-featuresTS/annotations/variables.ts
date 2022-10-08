// annotations of type number
const oranges: number = 5; // let
// const oranges1: number = '5'; // mistake

let speed: string = 'low';

let hasDog: boolean = true;

let nothing: null = null; // !!!

let nothing1: undefined = undefined;

// built-in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'yellow', 'grey'];
let numbers: number[] = [1, 2, 3];
let results: boolean[] = [false, true, true];

// classes
class Car {}
let car: Car = new Car();

// object literal  - ;
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions
// void - when function return nothing - (i: number) => void its annotation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// !!! ts can understand automatically what the type of variable if we write it in one string
const color = 'red';

// when to use type annotations
// 1. functions return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. when we declare variable in one lane and initialize it later
let words = ['one', 'two', 'three'];
let isTwo: boolean;
// let isTwo = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'two') {
    isTwo = true;
  }
}

// 3. variables whose type can't be inferred (не может быть выведен)
let myNumbers = [-10, -1, 12];
let positiveNumber: boolean | number = false;
for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] > 0) {
    positiveNumber = myNumbers[i]; // !!! mistake add boolean | number
  }
}
