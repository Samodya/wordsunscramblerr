import { useState, useMemo } from 'react';

export function usePositionFilter(baseResults: string[], wordLength: number) {
  const [filters, setFilters] = useState<Record<number, string>>({});

  const filteredResults = useMemo(() => {
    if (Object.keys(filters).length === 0) return baseResults;

    return baseResults.filter((word) => {
      return Object.entries(filters).every(([pos, char]) => {
        const index = parseInt(pos) - 1;
        return word[index] === (char as string).toUpperCase();
      });
    });
  }, [baseResults, filters]);

  const updateFilter = (position: number, char: string) => {
    const cleanChar = char.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 1);
    
    setFilters((prev) => {
      const newFilters = { ...prev };
      if (cleanChar === '') {
        delete newFilters[position];
      } else {
        newFilters[position] = cleanChar;
      }
      return newFilters;
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  return { filteredResults, filters, updateFilter, clearFilters };
}
