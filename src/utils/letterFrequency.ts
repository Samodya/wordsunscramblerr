/**
 * Builds a frequency map of characters in a string.
 */
export function getFrequencyMap(str: string): Record<string, number> {
  const map: Record<string, number> = {};
  for (const char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      map[char] = (map[char] || 0) + 1;
    }
  }
  return map;
}

/**
 * Compares two frequency maps for exact equality.
 */
export function areMapsEqual(map1: Record<string, number>, map2: Record<string, number>): boolean {
  const keys1 = Object.keys(map1);
  const keys2 = Object.keys(map2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (map1[key] !== map2[key]) return false;
  }

  return true;
}
