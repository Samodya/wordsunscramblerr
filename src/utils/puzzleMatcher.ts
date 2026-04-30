import { getFrequencyMap } from './letterFrequency';

/**
 * Matches a word against length, known letters (scrambled), and excluded letters.
 */
export function matchesPuzzle(
  word: string, 
  length: number, 
  knownLetters: string, 
  excludedLetters: string
): boolean {
  if (word.length !== length) return false;

  const wordLower = word.toLowerCase();
  const knownLower = knownLetters.toLowerCase().replace(/[^a-z]/g, '');
  const excludedLower = excludedLetters.toLowerCase().replace(/[^a-z]/g, '');

  // 1. Excluded Letters Check: Word must NOT contain any of these
  if (excludedLower.length > 0) {
    for (const char of excludedLower) {
      if (wordLower.includes(char)) return false;
    }
  }

  // 2. Known Letters Check: Word must contain ALL of these (scrambled)
  if (knownLower.length > 0) {
    const wordFreq = getFrequencyMap(wordLower);
    const knownFreq = getFrequencyMap(knownLower);

    for (const [char, count] of Object.entries(knownFreq)) {
      if ((wordFreq[char] || 0) < count) return false;
    }
  }

  return true;
}
