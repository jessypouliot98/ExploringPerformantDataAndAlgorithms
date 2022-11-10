const UNICODE_CHARACTERS = 65536; // All possible keyCode between 1 and UNICODE_CHARACTERS

export const getExtremelyLargeString = () => {
  let string = '';
  
  let index = 1;
  while (index <= UNICODE_CHARACTERS) { // From testing it seems like a while loop like this is slightly, but on average, faster than a for loop
    string += String.fromCharCode(index++);
  }

  return string;
}

export const getExtremelyLargeStringReversed = () => {
  // This is not optimal, just lazy, not actually important for the test I'm doing
  return getExtremelyLargeString().split('').reverse().join('');
}