import { motion, AnimatePresence } from 'motion/react';
import { useUnscrambler } from '../hooks/useUnscrambler';
import { usePositionFilter } from '../hooks/usePositionFilter';
import LetterInput from '../components/LetterInput';
import PositionFilters from '../components/PositionFilters';
import ResultsGrid from '../components/ResultsGrid';
import EmptyState from '../components/EmptyState';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const { results: baseResults, isLoading, isDictionaryLoading, error, unscramble, reset: baseReset } = useUnscrambler();
  const [currentWordLength, setCurrentWordLength] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  const { filteredResults, filters, updateFilter, clearFilters } = usePositionFilter(baseResults, currentWordLength);

  useEffect(() => {
    document.title = "Unscramble.it - Word Anagram Solver";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Instantly unscramble letters to find all valid English words. High-speed anagram solver with position filters and massive lexical database.');
  }, []);

  const handleUnscramble = (input: string) => {
    setCurrentWordLength(input.replace(/[^a-zA-Z]/g, '').length);
    setIsFirstLoad(true);
    clearFilters();
    unscramble(input);
  };

  const handleReset = () => {
    setCurrentWordLength(0);
    clearFilters();
    baseReset();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="space-y-4">
        <h2 className="font-display text-4xl sm:text-6xl tracking-tighter uppercase leading-none border-l-8 border-neon pl-6 py-2">
          Find the Words Hidden in Your Chaos
        </h2>
        <p className="font-mono text-sm uppercase opacity-60">
          Enter up to 15 letters and discover every valid English anagram in our massive lexical index.
        </p>
      </section>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Input Column */}
        <section className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <label className="font-display text-xl uppercase flex items-center gap-2">
              <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">01</span>
              Seed Letters
            </label>
            <LetterInput 
              onUnscramble={handleUnscramble} 
              onClear={handleReset}
              isLoading={isLoading}
              disabled={isDictionaryLoading}
            />
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-400 p-3 brutal-border shadow-none font-mono text-xs font-bold uppercase"
              >
                ERROR: {error}
              </motion.div>
            )}
          </div>

          {isDictionaryLoading && (
            <div className="flex items-center gap-3 font-mono text-xs uppercase bg-black text-white p-4 brutal-border shadow-none">
              <Loader2 className="animate-spin" size={16} />
              Indexing Dictionary Assets...
            </div>
          )}

          <div className="hidden lg:block p-6 brutal-border bg-neon/10 space-y-4">
            <h3 className="font-display text-lg uppercase">System Specs</h3>
            <ul className="font-mono text-xs space-y-2 opacity-70">
              <li>• EXACT LENGTH MATCHING</li>
              <li>• CHARACTER FREQUENCY COMPARISON</li>
              <li>• CASE INSENSITIVE ENCODING</li>
              <li>• DUPLICATE LETTER TOLERANCE</li>
            </ul>
          </div>
        </section>

        {/* Results Column */}
        <section className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <label className="font-display text-xl uppercase flex items-center gap-2">
              <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm">02</span>
              Output Stream
            </label>
            
            {isLoading ? (
              <div className="h-64 flex flex-col items-center justify-center brutal-border bg-white space-y-4">
                <div className="w-12 h-12 border-8 border-brutal-black border-t-neon animate-spin" />
                <p className="font-display text-xl uppercase animate-pulse">Processing Lexicon...</p>
              </div>
            ) : baseResults.length > 0 ? (
              <div className="space-y-8">
                <PositionFilters 
                  length={currentWordLength}
                  filters={filters}
                  onFilterChange={updateFilter}
                  onClear={clearFilters}
                />
                
                <AnimatePresence mode="wait">
                  {filteredResults.length > 0 ? (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onAnimationComplete={() => setIsFirstLoad(false)}
                    >
                      <ResultsGrid words={filteredResults} isFirstLoad={isFirstLoad} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty-filter"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <EmptyState message="No words match your filters. Try clearing a position." />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <EmptyState 
                message={error ? "VALIDATION FAILED" : !isDictionaryLoading ? "READY FOR INPUT" : "WAITING FOR ASSETS..."} 
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
