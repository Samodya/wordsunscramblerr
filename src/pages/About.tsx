import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About Us - Unscramble.it";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Learn about Unscramble.it, our mission to provide lightning-fast lexical tools, and the technology behind our word engine.');
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <section className="space-y-6">
        <h1 className="font-display text-6xl tracking-tighter uppercase leading-none border-b-8 border-neon pb-4">
          Lexical Purity
        </h1>
        <p className="font-mono text-lg leading-relaxed first-letter:text-4xl first-letter:bg-neon first-letter:p-1 first-letter:mr-1">
          Welcome to Unscramble.it, the high-performance anagram engine designed for puzzle enthusiasts, Scrabble champions, and word lovers. Our mission is direct: to provide the fastest, most accurate word indexing tool available on the web.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 brutal-border bg-white space-y-4">
          <h2 className="font-display text-2xl uppercase">Who It's For</h2>
          <p className="font-mono text-sm opacity-70 leading-relaxed uppercase">
            Whether you're breaking a stalemate in a word game, completing a difficult crossword, or helping a child with their vocabulary, Unscramble.it is built to support your lexical journey.
          </p>
        </div>
        <div className="p-8 brutal-border bg-neon space-y-4">
          <h2 className="font-display text-2xl uppercase">Our Lexicon</h2>
          <p className="font-mono text-sm opacity-70 leading-relaxed uppercase">
            We use a comprehensive dictionary index containing over 370,000 valid English words. Our algorithms pre-filter by length and frequency to ensure results are delivered in milliseconds.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-4xl uppercase">The Technology</h2>
        <p className="font-mono text-base opacity-70 leading-relaxed uppercase">
          Unscramble.it is a modern Single Page Application (SPA) built using React. Our unique "Frequency Map" algorithm compares the exact letter counts of your input against our pre-indexed library. No server round-trips are required for lookups—everything happens right in your high-speed browser environment.
        </p>
      </section>
    </div>
  );
}
