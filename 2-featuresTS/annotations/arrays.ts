const colors = ['red', 'blue', 'white']; // не явно

const colors2: string[] = ['red', 'blue', 'white']; // явно

const colors3: string[] = []; // обязательно if arr is empty - or will be 'any'

// hard arr
const dates = [new Date(), new Date()];

// 2 мерный arr
const friutsByColor = [['tomato'], ['apple'], ['lemon']]; // string [], []
// if empty
const friutsByColor2: string[][] = [];

// why we need arrays in ts
// 1 - help with inference when we extracting values - может помочь нам сделать значение типа когда мы извлекаем значение (pop(), indexof() we exstract el - and we know what it type is)
const color = colors[0]; // string automatically
const color1 = colors.pop(); // string

// 2 - prevent incompatible values - предотвратить несовместимые значение
colors.push(true); //! mistake! bool not str

// 3 - we can get help using map forEach reduce
colors.map((color: string): string => {
  return color.toUpperCase();
});

// 4 flexibility - arr can contain a different types - if we dont know what will be in future in ths arr
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2021-11-11');
importantDates.push(new Date());
// but
importantDates.push(2); // will be a mistake
