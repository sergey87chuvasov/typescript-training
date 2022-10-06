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
