// ts-node classes.ts - in console for start

class Vehicle {
  // public drive(): void {
  //   console.log(`I'm driving`);
  // }

  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  // short option
  constructor(public color: string) {}

  public stop(): void {
    console.log(`'I have stopped`);
  }

  protected beep(): void {
    console.log('beeeep');
  }
}

// перераспределение методов
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log(` i'm a car and i'm driving`);
  }
  startDrivingProcess(): void {
    this.drive();
    this.beep();
  }
}

// const vehicle = new Vehicle();
const vehicle = new Vehicle('black');
console.log(vehicle.color);

// vehicle.drive();
// vehicle.stop();

const car = new Car(4, 'silver');
// car.drive(); mistake if private
// car.startDrivingProcess();
// car.stop();

// modificators - public, privat, protected
