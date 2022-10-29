import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([4, -3, 111, 2]);
// const sorter = new Sorter(numbersCollection); - del
// sorter.sort();  - - del
numbersCollection.sort();
console.log(numbersCollection.data); // [ -3, 2, 4, 111 ]

const charactersCollection = new CharactersCollection('ZxYmba');
// const sorter1 = new Sorter(charactersCollection);- - del
// sorter1.sort(); - - del
charactersCollection.sort();
console.log(charactersCollection.data); // abmxYZ

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
// const sorter2 = new Sorter(linkedList);  - del
// sorter2.sort(); - - del
linkedList.sort();
linkedList.print();
// /*
// [start:*run] -11
// [start:*run] -3
// [start:*run] 7
// [start:*run] 100
//  */
