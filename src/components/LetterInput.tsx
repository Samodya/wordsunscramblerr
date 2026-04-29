import React, { useState } from 'react';
import { Delete, Search } from 'lucide-react';

interface LetterInputProps {
  onUnscramble: (input: string) => void;
  onClear: () => void;
  isLoading: boolean;
  disabled: boolean;
}

export default function LetterInput({ onUnscramble, onClear, isLoading, disabled }: LetterInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onUnscramble(input);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, '');
    if (value.length <= 15) {
      setInput(value);
    }
  };

  const handleClear = () => {
    setInput('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="ENTER LETTERS..."
          className="brutal-input text-2xl uppercase tracking-widest h-20 sm:text-4xl"
          autoFocus
          disabled={disabled}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {input.length > 0 && (
            <span className="font-mono text-sm opacity-50 bg-black/5 px-2 py-1">
              {input.length} LETTERS
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={disabled || !input || isLoading}
          className="brutal-btn flex-1 flex items-center justify-center gap-2 h-14 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-4 border-brutal-black border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Search size={20} className="group-hover:rotate-12 transition-transform" />
              UNSCRAMBLE
            </>
          )}
        </button>
        
        <button
          type="button"
          onClick={handleClear}
          disabled={disabled || !input}
          className="brutal-btn bg-red-400 hover:bg-red-500 w-14 flex items-center justify-center p-0 disabled:opacity-50"
        >
          <Delete size={24} />
        </button>
      </div>
    </form>
  );
}
