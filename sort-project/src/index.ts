import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([4, -3, 11, 2]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data); // [ -3, 2, 4, 11 ]
