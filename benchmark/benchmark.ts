import chalk from "chalk";

const N = 100;

export const benchmark = (name: string, callback: () => void, n: number = N) => {
  const start = performance.now();

  for (let i = 0; i < n; i++) {
    callback();
  }

  const end = performance.now();

  const totalMS = end - start;
  const avgMS = totalMS / n;

  console.log('')
  console.log(chalk.bgCyan(`[Benchmarking "${name}" with ${n}x executions]`));
  console.log(`${chalk.cyan('AVG')}: ${chalk.yellow(`${avgMS}ms`)}`);
  console.log(`${chalk.magenta('TOTAL')}: ${chalk.yellow(`${totalMS}ms`)}`);
  console.log('')
}