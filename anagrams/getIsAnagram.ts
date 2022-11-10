import { calculateCharacterOccurence } from "./calculateCharacterOccurence";

const isImpossibleAnagram = (a: string, b: string) => {
  return typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length;
}

const isCertainlyAnagram = (a: string, b: string) => {
  return a === b;
}

export namespace getIsAnagram {
  export const loopCompareWithObject = (a: string, b: string) => {
    if (isImpossibleAnagram(a, b)) {
      return false;
    }
  
    if (isCertainlyAnagram(a, b)) {
      return true;
    }
  
    const charactersA = calculateCharacterOccurence.withObject(a);
    const charactersB = calculateCharacterOccurence.withObject(b);
  
    return Object.entries(charactersA).every(([char, reccurenceCount]) => {
      return reccurenceCount === charactersB[char];
    });
  }

  export const loopCompareWithMap = (a: string, b: string) => {
    if (isImpossibleAnagram(a, b)) {
      return false;
    }
  
    if (isCertainlyAnagram(a, b)) {
      return true;
    }
  
    const charactersA = calculateCharacterOccurence.withMap(a);
    const charactersB = calculateCharacterOccurence.withMap(b);
  
    return Array.from(charactersA.entries()).every(([char, reccurenceCount]) => {
      return reccurenceCount === charactersB.get(char);
    });
  }
}