import { benchmark } from '../utils/benchmark/benchmark';
import { benchmarkCompare } from './../utils/benchmark/benchmarkCompare';
import { sort } from './sort';

const randomArray100 = Array.from({ length: 100 }, Math.random);
const randomArray2000 = Array.from({ length: 2000 }, Math.random);

benchmarkCompare([
  benchmark('100items basic javascript sort', () => [...randomArray100].sort((a, b) => a < b ? -1 : 1)), // TOTAL 1.392400000244379ms - 🥇
  benchmark('100items bubble sort', () => sort.bubble(randomArray100)), // TOTAL 7.493400000035763ms - 81.42% Slower
  benchmark('100items quick sort', () => sort.quick(randomArray100)), // TOTAL 2.815099999308586ms - 50.54% Slower
]);

benchmarkCompare([
  benchmark('2000items basic javascript sort', () => [...randomArray2000].sort((a, b) => a < b ? -1 : 1)), // TOTAL 30.905799999833107ms - 70.3% Slower
  benchmark('2000items bubble sort', () => sort.bubble(randomArray2000)), // TOTAL 419.6570000015199ms - 97.81% Slower
  benchmark('2000items quick sort', () => sort.quick(randomArray2000)), // TOTAL 9.179299999028444ms - 🥇
]);

/*
 * Conclusion
 * Bubble sort is never a good option
 * Basic JavaScript sort is faster than QuickSort with shorter arrays
 * QuickSort is VERY fast on large arrays
 */