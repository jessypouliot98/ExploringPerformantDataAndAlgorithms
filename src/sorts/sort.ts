const swap = (items: number[], indexA: number, indexB: number) => {
  [
    items[indexA],
    items[indexB]
  ] = [
    items[indexB],
    items[indexA]
  ];
}

const partition = (items: number[], indexA: number, indexB: number) => {
  const pivotValue = items[indexB];
  let pivotIndex = indexA; 

  for (let i = indexA; i < indexB; i++) {
    if (items[i] < pivotValue) {
      swap(items, pivotIndex, i);
      pivotIndex++;
    }
  }

  swap(items, pivotIndex, indexB);

  return pivotIndex;
};

const quickSort = (items: number[], indexA: number, indexB: number) => {
  if (indexA >= indexB) {
      return;
  }

  const index = partition(items, indexA, indexB);
  
  quickSort(items, indexA, index - 1);
  quickSort(items, index + 1, indexB);
}

export namespace sort {
  export const bubble = (array: number[]) => { // O(n^2) - contains 2 nested loops - exponential time scale - quadratic time
    const sortedArray = [...array];
    const length = array.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if(sortedArray[j] > sortedArray[j + 1]){
          swap(sortedArray, j, j + 1)
        }
      }
    }

    return sortedArray;
  }

  export const quick = (array: number[]) => { // O(n log n)
    const sortedArray = [...array];
    quickSort(sortedArray, 0, array.length - 1);
    return sortedArray;
  }
}