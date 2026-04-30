import { motion, AnimatePresence } from 'motion/react';
import { usePuzzleSolver } from '../hooks/usePuzzleSolver';
import { usePositionFilter } from '../hooks/usePositionFilter';
import SolverInputs from '../components/SolverInputs';
import PositionFilters from '../components/PositionFilters';
import ResultsGrid from '../components/ResultsGrid';
import EmptyState from '../components/EmptyState';
import HowItWorksSection from '../components/HowItWorksSection';
import { Loader2, Target, History } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const { results: baseResults, isLoading, isDictionaryLoading, error, solve, reset: baseReset } = usePuzzleSolver();
  const [currentWordLength, setCurrentWordLength] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  const { filteredResults, filters, updateFilter, clearFilters } = usePositionFilter(baseResults, currentWordLength);

  useEffect(() => {
    document.title = "Word Puzzle Solver — Find Words by Letters & Constraints";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Solve word puzzles using known scrambled letters, exact word length, and excluded letters. Perfect for Crypto and Wordle.');
  }, []);

  const handleSolve = (length: number, known: string, excluded: string) => {
    setCurrentWordLength(length);
    setIsFirstLoad(true);
    clearFilters();
    solve(length, known, excluded);
  };

  const handleReset = () => {
    setCurrentWordLength(0);
    clearFilters();
    baseReset();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-black text-neon px-3 py-1 font-mono text-[10px] uppercase font-bold brutal-border shadow-none">
          <History size={12} />
          <span>Real-time Lexical Engine v2.0</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-none">
          Find Any Word <br />
          <span className="text-neon drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">With Smart Constraints</span>
        </h1>
        <p className="font-mono text-sm sm:text-base uppercase opacity-60 max-w-2xl leading-relaxed">
          The ultimate utility for <span className="text-black font-bold">Crypto Word of the Day</span>, 
          <span className="text-black font-bold"> Wordle</span>, and competitive crosswords. 
          Combine length filters, scrambled pools, and position pins.
        </p>
      </section>

      {/* Main Tool Area */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Input Panel */}
        <section className="lg:col-span-5 space-y-8 sticky top-24">
          <div className="space-y-4">
            <div className="flex items-center gap-3 font-display text-2xl uppercase">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center">01</div>
              <span>Control Panel</span>
            </div>
            
            <SolverInputs 
              onSolve={handleSolve} 
              onClear={handleReset}
              isLoading={isLoading}
              disabled={isDictionaryLoading}
            />

            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-400 p-4 brutal-border shadow-none font-mono text-xs font-bold uppercase flex items-center gap-2"
              >
                <div className="bg-black text-white px-1">ERR</div>
                <span>{error}</span>
              </motion.div>
            )}
          </div>

          {isDictionaryLoading && (
            <div className="flex items-center gap-3 font-mono text-xs uppercase bg-black text-white p-4 brutal-border shadow-none animate-pulse">
              <Loader2 className="animate-spin" size={16} />
              <span>Hydrating Lexicon Assets...</span>
            </div>
          )}
        </section>

        {/* Right Column: Output & Refinement */}
        <section className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 font-display text-2xl uppercase">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center">02</div>
              <span>Filtered Stream</span>
            </div>
            
            {isLoading ? (
              <div className="h-64 flex flex-col items-center justify-center brutal-border bg-white space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 border-8 border-brutal-black border-t-neon animate-spin" />
                  <Target size={24} className="absolute inset-0 m-auto animate-pulse" />
                </div>
                <p className="font-display text-2xl uppercase tracking-widest animate-pulse">Scanning Index...</p>
              </div>
            ) : baseResults.length > 0 ? (
              <div className="space-y-12">
                <PositionFilters 
                  length={currentWordLength}
                  filters={filters}
                  onFilterChange={updateFilter}
                  onClear={clearFilters}
                />
                
                <AnimatePresence mode="wait">
                  {filteredResults.length > 0 ? (
                    <motion.div
                      key="results-grid"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onAnimationComplete={() => setIsFirstLoad(false)}
                    >
                      <ResultsGrid words={filteredResults} isFirstLoad={isFirstLoad} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty-filter-state"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <EmptyState message="No candidates match your pinning pattern. Adjust letters or clear slots." />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <EmptyState 
                message={!isDictionaryLoading ? "READY FOR COORDINATES" : "INITIALIZING SYSTEM..."} 
              />
            )}
          </div>
        </section>
      </main>

      {/* Instructions Section */}
      <HowItWorksSection />
    </div>
  );
}
