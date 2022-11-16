import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

// create an object that implements the datareader interface
const csvFileReader = new CsvFileReader('footbal.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man Unnited won ${manUnitedWins} times `); // Man Unnited won 18 times
