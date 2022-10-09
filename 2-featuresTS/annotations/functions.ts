const add = (a: number, b: number): number => {
  return a + b;
};

// ts see return a + b and automatically understand
const add2 = (a: number, b: number) => {
  return a + b;
};

// return void - nothing
const subtract = (a: number, b: number) => {
  a - b;
};

// fixed
const subtract1 = (a: number, b: number): number => {
  return a - b;
};

// new syntax
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void - func return nothing ---  & never
const logger = (message: string): void => {
  console.log(message);
  // return null;
  // return undefined
};

// never - because func will never return somth
const throwError = (message: string): never => {
  throw new Error(message);
};

// desruction
// destruct and annotait it is two different statement ':'
const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);

// es2015
const logWeather1 = ({ date, weather }): void => {
  console.log(date);
  console.log(weather);
};

logWeather1(todayWeather);

// annotation for object
