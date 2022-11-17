import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/consoleReport';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// create an object that implements the datareader interface
const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// );
const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
