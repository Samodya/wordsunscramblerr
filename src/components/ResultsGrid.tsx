import { motion, AnimatePresence } from 'motion/react';
import WordCard from './WordCard';

interface ResultsGridProps {
  words: string[];
  isFirstLoad?: boolean;
}

export default function ResultsGrid({ words, isFirstLoad = false }: ResultsGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b-2 border-brutal-black pb-2">
        <h2 className="font-display text-3xl uppercase tracking-tighter">
          Valid Matches
        </h2>
        <span className="font-mono bg-neon px-3 py-1 text-sm brutal-border shadow-none font-bold">
          {words.length} FOUND
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {words.map((word, index) => (
          <WordCard key={word} word={word} index={index} stagger={isFirstLoad} />
        ))}
      </div>
    </div>
  );
}
