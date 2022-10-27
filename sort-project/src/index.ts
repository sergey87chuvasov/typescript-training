import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([4, -3, 111, 2]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data); // [ -3, 2, 4, 111 ]

const charactersCollection = new CharactersCollection('ZxYmba');
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(charactersCollection.data); // abmxYZ
