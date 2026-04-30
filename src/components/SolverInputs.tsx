import React from 'react';
import { Search, RotateCcw, X } from 'lucide-react';

interface SolverInputsProps {
  onSolve: (length: number, known: string, excluded: string) => void;
  onClear: () => void;
  isLoading: boolean;
  disabled: boolean;
}

export default function SolverInputs({ onSolve, onClear, isLoading, disabled }: SolverInputsProps) {
  const [length, setLength] = React.useState<number>(5);
  const [known, setKnown] = React.useState('');
  const [excluded, setExcluded] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSolve(length, known, excluded);
  };

  const handleClearAll = () => {
    setLength(5);
    setKnown('');
    setExcluded('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-8 brutal-border bg-white">
      {/* Word Length */}
      <div className="space-y-2">
        <label className="font-display text-sm uppercase flex justify-between">
          <span>Word Length</span>
          <span className="text-neon drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] font-mono">{length} Letters</span>
        </label>
        <input
          type="range"
          min="2"
          max="15"
          value={length}
          disabled={disabled}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full h-4 bg-gallery-white brutal-border appearance-none cursor-pointer accent-neon"
        />
        <div className="flex justify-between font-mono text-[10px] opacity-40">
          <span>2</span>
          <span>15</span>
        </div>
      </div>

      {/* Known Letters */}
      <div className="space-y-2">
        <label className="font-display text-sm uppercase">Known Letters (Scrambled)</label>
        <div className="relative">
          <input
            type="text"
            value={known}
            disabled={disabled}
            onChange={(e) => setKnown(e.target.value.replace(/[^a-zA-Z]/g, ''))}
            placeholder="e.g., CATION"
            className="brutal-input text-base h-14 uppercase tracking-widest pl-4 pr-12"
          />
          {known && (
            <button 
              type="button" 
              onClick={() => setKnown('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100"
            >
              <X size={18} />
            </button>
          )}
        </div>
        <p className="font-mono text-[10px] opacity-50 uppercase">Order doesn't matter. Must contain these.</p>
      </div>

      {/* Excluded Letters */}
      <div className="space-y-2">
        <label className="font-display text-sm uppercase">Excluded Letters (Optional)</label>
        <div className="relative">
          <input
            type="text"
            value={excluded}
            disabled={disabled}
            onChange={(e) => setExcluded(e.target.value.replace(/[^a-zA-Z]/g, ''))}
            placeholder="e.g., XYZ"
            className="brutal-input text-base h-14 uppercase tracking-widest pl-4 pr-12 border-red-200"
          />
          {excluded && (
            <button 
              type="button" 
              onClick={() => setExcluded('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100"
            >
              <X size={18} />
            </button>
          )}
        </div>
        <p className="font-mono text-[10px] opacity-50 uppercase text-red-400">Word will NOT contain any of these.</p>
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={disabled || isLoading}
          className="brutal-btn flex-1 flex items-center justify-center gap-2 h-16 group"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-4 border-brutal-black border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Search size={22} className="group-hover:scale-110 transition-transform" />
              <span>FIND WORDS</span>
            </>
          )}
        </button>
        
        <button
          type="button"
          onClick={handleClearAll}
          disabled={disabled}
          className="brutal-btn bg-gallery-white border-dashed w-16 p-0 flex items-center justify-center shadow-none hover:bg-red-400 hover:border-solid hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          title="Clear All Inputs"
        >
          <RotateCcw size={22} />
        </button>
      </div>
    </form>
  );
}
