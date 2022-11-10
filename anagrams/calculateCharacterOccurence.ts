export namespace calculateCharacterOccurence {
  export const withObject = (value: string) => {
    return value.split('').reduce((acc, char) => {
      acc[char] = (acc[char] ?? 0) + 1;
  
      return acc;
    }, {} as Record<string, number>);
  }

  export const withMap = (value: string) => {
    return value.split('').reduce((acc, char) => {
      acc.set(char, (acc.get(char) ?? 0) + 1)
  
      return acc;
    }, new Map<string, number>());
  }
}