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
          Problem Solved
        </h1>
        <p className="font-mono text-lg leading-relaxed first-letter:text-4xl first-letter:bg-neon first-letter:p-1 first-letter:mr-1">
          Welcome to Word Puzzle Solver, the premier smart-utility for decryption games like Wordle, Crypto, and competitive crosswords. Our mission is to eliminate the 'stuck' moment by providing surgical lexical tools that support, rather than replace, your creative problem-solving.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 brutal-border bg-white space-y-4">
          <h2 className="font-display text-2xl uppercase">For Puzzle Savants</h2>
          <p className="font-mono text-sm opacity-70 leading-relaxed uppercase">
            Whether you're guessing the Crypto Word of the Day or navigating a complex NYT grid, our solver finds candidates based on exactly what you know and everything you've ruled out.
          </p>
        </div>
        <div className="p-8 brutal-border bg-neon space-y-4">
          <h2 className="font-display text-2xl uppercase">High-Speed Lexicon</h2>
          <p className="font-mono text-sm opacity-70 leading-relaxed uppercase">
            We use a comprehensive dictionary index containing over 370,000 processed entries. Our frequency-map technology ensures that multi-constraint searches resolve in milliseconds.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-4xl uppercase">Zero Latency Technology</h2>
        <p className="font-mono text-base opacity-70 leading-relaxed uppercase">
          Word Puzzle Solver is built as a highly optimized browser-side application. Unlike legacy tools that send data to a server, our engine operates directly on your device. This ensures absolute privacy and instant feedback, even on unstable connections.
        </p>
      </section>
    </div>
  );
}
