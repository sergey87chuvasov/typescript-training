import fs from 'fs';

// в переменн будут содержать все файлы csv в одной строке
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

// console.log(matches);

// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';

// with big LETTER - Enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

// MatchResult.AwayWin === 'A'

// not need for us - only sample
// const getMatchResult = (match: string[]): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin;
//   } else if (match[5] === 'A') {
//     return MatchResult.AwayWin;
//   }

//   return MatchResult.Draw;
// };

let manUnitedWins = 0;

// match -отдельная запись о матче - всего 0-1-2-3-4-5-6 индексов данных
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man Unnited won ${manUnitedWins} times `); // Man Unnited won 18 times
