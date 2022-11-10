import { getExtremelyLargeString, getExtremelyLargeStringReversed } from "../src/anagrams/getExtremelyLargeString";
import pfs from 'fs/promises';
import fs from 'fs';

const DUPLICATION_COUNT = 20;
const ANAGRAM_FILE_A = './files/anagram/fileA.txt';
const ANAGRAM_FILE_B = './files/anagram/fileB.txt';

async function main() {
  if (fs.existsSync(ANAGRAM_FILE_A)) {
    pfs.unlink(ANAGRAM_FILE_A);
  }

  if (fs.existsSync(ANAGRAM_FILE_B)) {
    pfs.unlink(ANAGRAM_FILE_B);
  }

  const largeString = getExtremelyLargeString();
  const largeReversedString = getExtremelyLargeStringReversed();

  for (let i = 0; i < DUPLICATION_COUNT; i++) {
    await Promise.all([
      pfs.appendFile(ANAGRAM_FILE_A, largeString, { encoding: 'utf-8' }),
      pfs.appendFile(ANAGRAM_FILE_B, largeReversedString, { encoding: 'utf-8' }),
    ]);
  }
}

main();