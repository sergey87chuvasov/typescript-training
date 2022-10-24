class Sorter {
  // 1 option
  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  // 2 option - the same code
  // common collection
  constructor(public collection: number[] | string) {}
  //method - bublle
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // guard of types
        if (this.collection instanceof Array) {
          // this.collection. - all properties [number] - has type array
          // if coolect for arr of numbers
          if (this.collection[j] > this.collection[j + 1]) {
            // схема обмена значениями только для numbers а не для string
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
        // if collect is string
        if (typeof this.collection === 'string') {
          // this.collection. // all properties to string
        }
      }
    }
  }
}

const sorter = new Sorter([4, -3, 11, 2]);
sorter.sort();
console.log(sorter.collection); // [ -3, 2, 4, 11 ]
