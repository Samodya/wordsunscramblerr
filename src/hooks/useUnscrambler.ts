import { useState, useCallback, useEffect } from 'react';
import { loadDictionary } from '../utils/loadDictionary';
import { getFrequencyMap, areMapsEqual } from '../utils/letterFrequency';

export interface UnscramblerState {
  results: string[];
  isLoading: boolean;
  isDictionaryLoading: boolean;
  error: string | null;
}

export function useUnscrambler() {
  const [state, setState] = useState<UnscramblerState>({
    results: [],
    isLoading: false,
    isDictionaryLoading: true,
    error: null,
  });

  const [dictionary, setDictionary] = useState<Map<number, string[]> | null>(null);

  // Initialize dictionary on mount
  useEffect(() => {
    loadDictionary().then((dict) => {
      setDictionary(dict);
      setState((prev) => ({ ...prev, isDictionaryLoading: false }));
    });
  }, []);

  const unscramble = useCallback(async (input: string) => {
    if (!dictionary) {
      setState((prev) => ({ ...prev, error: 'Dictionary not loaded yet' }));
      return;
    }

    const cleanInput = input.trim().toLowerCase().replace(/[^a-z]/g, '');
    
    if (cleanInput.length < 2) {
      setState((prev) => ({ ...prev, error: 'Please enter at least 2 letters', results: [] }));
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    // Small delay to allow UI to show loading state if process is too fast
    // and to move logic to microtask
    await new Promise((resolve) => setTimeout(resolve, 50));

    const inputFreq = getFrequencyMap(cleanInput);
    const sameLengthWords = dictionary.get(cleanInput.length) || [];
    
    const matches: string[] = [];

    for (const word of sameLengthWords) {
      const wordFreq = getFrequencyMap(word);
      if (areMapsEqual(inputFreq, wordFreq)) {
        matches.push(word.toUpperCase());
      }
    }

    // Remove duplicates and sort
    const uniqueMatches = Array.from(new Set(matches)).sort();

    setState((prev) => ({
      ...prev,
      results: uniqueMatches,
      isLoading: false,
    }));
  }, [dictionary]);

  const reset = useCallback(() => {
    setState((prev) => ({ ...prev, results: [], error: null }));
  }, []);

  return { ...state, unscramble, reset };
}
