class Sorter {
  // 1 option
  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  // 2 option - the same code
  constructor(public collection: number[]) {}
  //method - bublle
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          // схема обмена значениями
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([4, -3, 11, 2]);
sorter.sort();
console.log(sorter.collection); // [ -3, 2, 4, 11 ]
