import { benchmark } from '../benchmark/benchmark';
import { getExtremelyLargeString, getExtremelyLargeStringReversed } from './getExtremelyLargeString';
import { getIsAnagram } from './getIsAnagram';

const stringA = getExtremelyLargeString();
const stringB = getExtremelyLargeStringReversed();


benchmark('isAnagram loopCompareWithMap', () => {
  getIsAnagram.loopCompareWithMap(stringA, stringB);
});

benchmark('isAnagram loopCompareWithObject', () => {
  getIsAnagram.loopCompareWithObject(stringA, stringB);
});