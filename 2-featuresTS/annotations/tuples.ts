const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// tuple form
// const cola = ['brown', true, 40];

const cola: [string, boolean, number] = ['brown', true, 40];
// cola[1] = 'black' // error

//type alias
type Drink = [string, boolean, number];
const cola1: Drink = ['brown', true, 40];
// we can create different drinks
const sprite: Drink = ['clear', true, 45];
const coffe: Drink = ['black', false, 0];

//
const carSpecs: [number, number] = [400, 3354]; // when  first we can see tuple and cant undersnd for what are these numbers - obj better (often)

const carSpecsObj = {
  horsePower: 400,
  weight: 3354,
};
