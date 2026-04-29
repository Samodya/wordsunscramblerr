/**
 * Memory-efficient dictionary storage grouped by word length.
 */
let cachedDictionary: Map<number, string[]> | null = null;

export async function loadDictionary(): Promise<Map<number, string[]>> {
  if (cachedDictionary) return cachedDictionary;

  try {
    const response = await fetch('/words.txt');
    if (!response.ok) throw new Error('Failed to load dictionary asset');
    
    const text = await response.text();
    const words = text.split(/\r?\n/);
    
    const dictionary = new Map<number, string[]>();
    
    for (const word of words) {
      const cleanWord = word.trim().toLowerCase();
      if (!cleanWord || cleanWord.length < 2) continue;
      
      const length = cleanWord.length;
      if (!dictionary.has(length)) {
        dictionary.set(length, []);
      }
      dictionary.get(length)?.push(cleanWord);
    }
    
    cachedDictionary = dictionary;
    return dictionary;
  } catch (error) {
    console.error('Error loading dictionary:', error);
    return new Map();
  }
}
