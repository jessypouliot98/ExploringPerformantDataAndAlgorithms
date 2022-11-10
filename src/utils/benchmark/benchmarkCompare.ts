import chalk from "chalk";
import { Benchmark } from "./benchmark";


export const benchmarkCompare = (benchmarks: Benchmark[]) => {
  const leader = benchmarks.reduce((lead, bench) => {
    if (bench.totalMS < lead.totalMS) {
      return bench;
    }

    return lead;
  }, benchmarks[0]);

  benchmarks.forEach((bench) => {
    const percentSlower = +((1 - (leader.totalMS/bench.totalMS)) * 100).toFixed(2);
    const text = bench.totalMS === leader.totalMS ? '🥇' : `${chalk.yellow(`${percentSlower}%`)} Slower`;
    console.log(`${chalk.bgGreen(bench.name)} ${text}`);
  })
}

export const asyncBenchmarkCompare = async (benchmarks: Promise<Benchmark>[]) => {
  return benchmarkCompare(await Promise.all(benchmarks));
}