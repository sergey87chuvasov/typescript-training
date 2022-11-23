import { MatchResult } from './MatchResult';

// пример использования tupple - для описания строки описывающей матч, указывает порядок следования значений в этой структуре
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
