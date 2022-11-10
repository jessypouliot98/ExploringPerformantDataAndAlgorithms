export const test = (callback: () => unknown, expectedValue: unknown) => {
  const result = callback();

  if (result !== expectedValue) {
    throw new Error(`Result(${JSON.stringify(result)}) is not equal to Expected(${expectedValue})`);
  }
}

export const asyncTest = async (callback: () => Promise<unknown>, expectedValue: unknown) => {
  const result = await callback();
  return test(() => result, expectedValue);
}