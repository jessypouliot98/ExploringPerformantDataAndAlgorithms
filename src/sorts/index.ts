import { benchmark } from '../utils/benchmark/benchmark';
import { benchmarkCompare } from './../utils/benchmark/benchmarkCompare';
import { sort } from './sort';

const randomArray100 = Array.from({ length: 100 }, Math.random);
const randomArray2000 = Array.from({ length: 2000 }, Math.random);

benchmarkCompare([
  benchmark('100items basic javascript sort default', () => [...randomArray100].sort()), // TOTAL 1.1794999986886978ms - 🥇
  benchmark('100items basic javascript sort callback', () => [...randomArray100].sort((a, b) => a < b ? -1 : 1)), // TOTAL 1.4107999987900257ms - 16.39% Slower
  benchmark('100items bubble sort', () => sort.bubble(randomArray100)), // TOTAL 6.897199999541044ms - 82.9% Slower
  benchmark('100items quick sort', () => sort.quick(randomArray100)), // TOTAL 3.4277999997138977ms - 65.59% Slower
]);

benchmarkCompare([
  benchmark('2000items basic javascript sort default', () => [...randomArray2000].sort()), // TOTAL 70.7496000006795ms - 86.45% Slower
  benchmark('2000items basic javascript sort callback', () => [...randomArray2000].sort((a, b) => a < b ? -1 : 1)), // TOTAL 31.55010000243783ms - 69.62% Slower
  benchmark('2000items bubble sort', () => sort.bubble(randomArray2000)), // TOTAL 416.97269999980927ms - 97.7% Slower
  benchmark('2000items quick sort', () => sort.quick(randomArray2000)), // TOTAL 9.585999999195337ms - 🥇
]);

/*
 * Conclusion
 * Bubble sort is never a good option
 * Basic JavaScript sort is faster than QuickSort with shorter arrays
 * Basic JavaScript sort with callback can be faster or slower than the same sort with tno callback
 * QuickSort is VERY fast on large arrays
 */