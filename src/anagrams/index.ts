import { asyncBenchmark, benchmark } from '../utils/benchmark/benchmark';
import { benchmarkCompare } from '../utils/benchmark/benchmarkCompare';
import { test } from '../utils/test/test';
import { getExtremelyLargeString, getExtremelyLargeStringReversed } from './getExtremelyLargeString';
import { getIsAnagram } from './getIsAnagram';


// Just making sure this work as expected
([
  ['abc', 'abc', true],
  ['abc', 'bca', true],
  ['abcdefg', 'cbafegd', true],
  ['abbc', 'abcc', false],
  ['abcd', 'ef', false],
] as const).forEach(([a, b, e]) => {
  test(() => getIsAnagram.loopCompareWithMap(a, b), e);
  test(() => getIsAnagram.loopCompareWithObject(a, b), e);
})

const longStringA = getExtremelyLargeString();
const longStringB = getExtremelyLargeStringReversed();

benchmarkCompare([
  benchmark('isAnagram loopCompareWithMap longString', () => {
    test(() => getIsAnagram.loopCompareWithMap(longStringA, longStringB), true);
  }), // AVG 21.990649999994783ms 🥇
  benchmark('isAnagram loopCompareWithObject longString', () => {
    test(() => getIsAnagram.loopCompareWithObject(longStringA, longStringB), true);
  }), // AVG 42.137934999987486ms
])

const shortStringA = 'abcdefg';
const shortStringB = 'cbafegd';

benchmarkCompare([
  benchmark('isAnagram loopCompareWithMap shortString', () => {
    test(() => getIsAnagram.loopCompareWithMap(shortStringA, shortStringB), true);
  }, 1_000_000), // TOTAL 1060.2436000015587ms
  benchmark('isAnagram loopCompareWithObject shortString', () => {
    test(() => getIsAnagram.loopCompareWithObject(shortStringA, shortStringB), true);
  }, 1_000_000), // TOTAL 1009.3234000001103ms 🥇
])

asyncBenchmark('isAnagram filePipeLoopCompareWithMap largeFile', async () => {
  await getIsAnagram.filePipeLoopCompareWithMap('./files/anagram/fileA.txt', './files/anagram/fileB.txt')
}, 10);

/*
 * Conclusion - Objects are slightly faster than maps in small memory footprints,
 * while maps are about TWICE as fast in large memory footprints
 */