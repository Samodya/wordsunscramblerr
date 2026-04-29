import { motion } from 'motion/react';
import { XCircle } from 'lucide-react';

interface PositionFiltersProps {
  length: number;
  filters: Record<number, string>;
  onFilterChange: (position: number, char: string) => void;
  onClear: () => void;
}

export default function PositionFilters({ length, filters, onFilterChange, onClear }: PositionFiltersProps) {
  const slots = Array.from({ length }, (_, i) => i + 1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 brutal-border bg-white space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-display text-xl uppercase italic">Smart Filters</h3>
          <p className="font-mono text-[10px] opacity-50 uppercase">Pin letters to specific positions to narrow results</p>
        </div>
        
        <button
          onClick={onClear}
          disabled={Object.keys(filters).length === 0}
          className="brutal-btn py-1 px-4 text-xs flex items-center gap-2 bg-red-400 hover:bg-red-500 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <XCircle size={14} />
          <span>Clear Slots</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {slots.map((pos) => (
          <div key={pos} className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] opacity-40 font-bold">{pos}</span>
            <input
              type="text"
              maxLength={1}
              value={filters[pos] || ''}
              onChange={(e) => onFilterChange(pos, e.target.value)}
              className={`w-12 h-12 text-center font-display text-2xl brutal-border shadow-none focus:outline-none transition-colors ${
                filters[pos] ? 'bg-neon border-brutal-black' : 'bg-gallery-white border-brutal-black/20'
              }`}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
