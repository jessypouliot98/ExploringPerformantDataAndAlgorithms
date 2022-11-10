import chalk from "chalk";

const N = 100;

export type Benchmark = { name: string, totalMS: number };

export const benchmark = (name: string, callback: () => void, n: number = N): Benchmark => {
  console.log('')
  console.log(chalk.bgCyan(`[Benchmarking "${name}" with ${`${chalk.bold(n)}x`} executions]`));
  
  const start = performance.now();
  for (let i = 0; i < n; i++) {
    callback();
  }
  const end = performance.now();

  const totalMS = end - start;
  const avgMS = totalMS / n;

  console.log(`${chalk.cyan('AVG')}: ${chalk.yellow(`${avgMS}ms`)}`);
  console.log(`${chalk.magenta('TOTAL')}: ${chalk.yellow(`${totalMS}ms`)}`);
  console.log('')

  return { name, totalMS }
}