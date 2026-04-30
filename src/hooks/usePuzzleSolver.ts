import { useState, useCallback, useEffect } from 'react';
import { loadDictionary } from '../utils/loadDictionary';
import { matchesPuzzle } from '../utils/puzzleMatcher';

export interface PuzzleState {
  results: string[];
  isLoading: boolean;
  isDictionaryLoading: boolean;
  error: string | null;
}

export function usePuzzleSolver() {
  const [state, setState] = useState<PuzzleState>({
    results: [],
    isLoading: false,
    isDictionaryLoading: true,
    error: null,
  });

  const [dictionary, setDictionary] = useState<Map<number, string[]> | null>(null);

  useEffect(() => {
    loadDictionary().then((dict) => {
      setDictionary(dict);
      setState((prev) => ({ ...prev, isDictionaryLoading: false }));
    });
  }, []);

  const solve = useCallback(async (length: number, known: string, excluded: string) => {
    if (!dictionary) {
      setState((prev) => ({ ...prev, error: 'System indexing... please wait.' }));
      return;
    }

    if (length < 2 || length > 15) {
      setState((prev) => ({ ...prev, error: 'Length must be between 2 and 15' }));
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    // Async break
    await new Promise((resolve) => setTimeout(resolve, 50));

    const sameLengthWords = dictionary.get(length) || [];
    const matches: string[] = [];

    for (const word of sameLengthWords) {
      if (matchesPuzzle(word, length, known, excluded)) {
        matches.push(word.toUpperCase());
      }
    }

    setState((prev) => ({
      ...prev,
      results: Array.from(new Set(matches)).sort(),
      isLoading: false,
    }));
  }, [dictionary]);

  const reset = useCallback(() => {
    setState((prev) => ({ ...prev, results: [], error: null }));
  }, []);

  return { ...state, solve, reset };
}
