import { motion } from 'motion/react';
import { HelpCircle, Star, Target, Lightbulb, MessageSquare, Info } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      id: '01',
      title: 'Enter Your Letters',
      desc: 'Type your scrambled letters (2-15 characters). We strip spaces and symbols automatically.',
      example: 'TSELA'
    },
    {
      id: '02',
      title: 'Click Unscramble',
      desc: 'Hit the button or press Enter. Our engine scans 370k+ words for exact anagram matches.',
      example: 'Processing...'
    },
    {
      id: '03',
      title: 'Explore Results',
      desc: 'Browse the grid of valid words. Use position filters to narrow down the perfect play.',
      example: 'STEAL, TALES...'
    }
  ];

  return (
    <section className="space-y-16 py-12">
      {/* Main Heading */}
      <div className="space-y-4">
        <h2 className="font-display text-5xl uppercase tracking-tighter border-l-8 border-neon pl-6">
          How to Use Unscramble.it
        </h2>
        <p className="font-mono text-sm opacity-60 uppercase">Master the art of lexical decryption in seconds.</p>
      </div>

      {/* Subsection 1: Getting Started */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <HelpCircle size={24} className="text-neon" />
          <h3 className="font-display text-3xl uppercase">Getting Started — 3 Simple Steps</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="brutal-border bg-white p-6 space-y-4 relative overflow-hidden group">
              <span className="font-display text-6xl opacity-5 absolute -right-2 -bottom-2 group-hover:opacity-10 transition-opacity">
                {step.id}
              </span>
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-display text-xl mb-4">
                {step.id}
              </div>
              <h4 className="font-display text-xl uppercase">{step.title}</h4>
              <p className="font-mono text-xs opacity-70 leading-relaxed uppercase">{step.desc}</p>
              <div className="bg-gallery-white p-2 text-center">
                <code className="font-mono text-[10px] font-bold text-neon bg-black px-2 py-0.5">{step.example}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subsection 2: Using Position Filters */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Target size={24} className="text-neon" />
          <h3 className="font-display text-3xl uppercase">Refine Your Results — Position Filters</h3>
        </div>
        
        <div className="brutal-border bg-white p-8 space-y-6">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-sm uppercase leading-relaxed">
              After you unscramble, you'll see a row of filter slots below the input — one for each letter you entered. Use these to pin a specific letter to a specific position and instantly narrow down your results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gallery-white p-6 brutal-border border-dashed shadow-none">
            <div className="space-y-4">
              <h4 className="font-display text-lg uppercase italic underline">Example Walkthrough</h4>
              <ol className="font-mono text-xs space-y-3 uppercase list-decimal pl-4 opacity-80">
                <li>You enter: <code className="font-bold text-neon bg-black px-1">TSELA</code> (5 letters)</li>
                <li>Results show: <code className="italic">LEAST, STEAL, TALES, STALE, SLATE</code></li>
                <li>Click on position 1 slot and type <code className="bg-neon px-1">L</code></li>
                <li>Results filter to show only words starting with L: <code className="font-bold">LEAST</code></li>
                <li>Pin position 3 slot and type <code className="bg-neon px-1">A</code></li>
                <li>Results narrow to words with L in pos 1 AND A in pos 3: <code className="font-bold">LEAST</code></li>
              </ol>
            </div>
            <div className="flex justify-center">
              <div className="flex gap-2">
                {['L', '', 'A', '', ''].map((char, i) => (
                  <div key={i} className={`w-10 h-10 brutal-border flex items-center justify-center font-display text-xl shadow-none ${char ? 'bg-neon' : 'bg-white/50 border-dashed'}`}>
                    {char}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subsection 3: Tips & Use Cases Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pro Tips */}
        <div className="brutal-border bg-white p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Star size={24} className="text-neon" />
            <h3 className="font-display text-2xl uppercase">Pro Tips for Best Results</h3>
          </div>
          <ul className="font-mono text-xs space-y-4 uppercase opacity-80">
            <li className="flex gap-3"><span className="text-neon">✓</span> <strong>Use all letters:</strong> We find words that use exactly the characters provided. 5 letters in = 5 letter results.</li>
            <li className="flex gap-3"><span className="text-neon">✓</span> <strong>Case Agnostic:</strong> Type however you like. Upper, lower, or mixed — we normalize everything.</li>
            <li className="flex gap-3"><span className="text-neon">✓</span> <strong>Auto-Cleaning:</strong> Don't worry about symbols or spaces. We strip the junk automatically.</li>
            <li className="flex gap-3"><span className="text-neon">✓</span> <strong>Optional Filters:</strong> Filters are purely for narrowing. Browse the full list if you prefer.</li>
            <li className="flex gap-3"><span className="text-neon">✓</span> <strong>Multiple Pins:</strong> You can fill as many position slots as you need for surgical precision.</li>
            <li className="flex gap-3"><span className="text-neon">✓</span> <strong>Official Lexicon:</strong> Our data is cross-referenced with major competitive word game dictionaries.</li>
          </ul>
        </div>

        {/* Common Uses */}
        <div className="brutal-border bg-neon p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Lightbulb size={24} className="text-brutal-black" />
            <h3 className="font-display text-2xl uppercase">Common System Integrations</h3>
          </div>
          <div className="font-mono text-xs space-y-4 uppercase">
            <div className="space-y-1">
              <p className="font-bold underline decoration-2">Scrabble & Tile Games</p>
              <p className="opacity-80 leading-relaxed">Unscramble your tile rack and use position filters to find words that hook onto existing board letters.</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold underline decoration-2">Wordle & Daily Puzzles</p>
              <p className="opacity-80 leading-relaxed">Stuck on a green or yellow? Enter your candidates and pin those known letters into their slots.</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold underline decoration-2">Crossword Mastery</p>
              <p className="opacity-80 leading-relaxed">Find words fitting exact lengths and known intersections. Position filters act as your grid guide.</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold underline decoration-2">Vocab Training</p>
              <p className="opacity-80 leading-relaxed">Test your own speed against our engine. See if you can find the anagram before we do.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subsection 4: Troubleshooting FAQs */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <MessageSquare size={24} className="text-neon" />
          <h3 className="font-display text-3xl uppercase">Troubleshooting — FAQs</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { q: "Why did I get zero results?", a: "It's possible no valid English words use exactly those letters. Try reducing your input or checking for typos." },
            { q: "Can I search for shorter words?", a: "Yes, but only if you enter fewer letters. We match input length exactly to results length." },
            { q: "How large is the dictionary?", a: "Our index contains over 370,000 processed lexical entries, optimized for rapid client-side traversal." },
            { q: "Does the app function offline?", a: "Affirmative. Once the lexicon is indexed in your browser session, no internet connection is required for lookups." },
            { q: "Is there an export feature?", a: "Not currently. You can manually copy individual word cards or the entire result stream as needed." }
          ].map((faq, i) => (
            <div key={i} className="brutal-border bg-white p-6 space-y-2">
              <h4 className="font-display text-lg uppercase text-neon drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">Q: {faq.q}</h4>
              <p className="font-mono text-xs opacity-70 uppercase leading-relaxed">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Feedback Note */}
      <div className="p-6 brutal-border border-dashed shadow-none flex items-center gap-4 bg-gallery-white">
        <div className="bg-black text-white p-2">
          <Info size={16} />
        </div>
        <p className="font-mono text-[10px] uppercase opacity-50">
          Our system is designed for lexical accuracy. Filters use O(1) synchronous lookup on the existing result set.
        </p>
      </div>
    </section>
  );
}
