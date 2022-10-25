// export class NumbersCollection {
//   data: number[];

//   constructor(data: number[]) {
//     this.data = data;
//   }
// }

export class NumbersCollection {
  constructor(public data: number[]) {}

  // обращение к дтнне как свойству - get
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

// const collection = new NumbersCollection([1, 2, 3]);
// collection.lenght; // св-во
