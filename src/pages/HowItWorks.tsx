import { useEffect } from 'react';
import HowItWorksSection from '../components/HowItWorksSection';

export default function HowItWorks() {
  useEffect(() => {
    document.title = "Tips & Instructions — Word Unscrambler";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Learn how to use the Word Unscrambler tool, position filters, and pro tips for best results.');
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-display text-7xl tracking-tighter uppercase leading-none border-b-8 border-neon pb-4">
          Documentation
        </h1>
        <p className="font-mono text-sm uppercase opacity-50">
          Complete guide to the Unscramble.it lexical engine.
        </p>
      </div>
      
      <HowItWorksSection />
    </div>
  );
}
