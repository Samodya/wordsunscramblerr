import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service - Unscramble.it";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Review the terms of service for using Unscramble.it, including lexical index disclaimers and usage rights.');
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 brutal-border prose prose-stone max-w-none">
      <div className="mb-12 border-b-4 border-brutal-black pb-8">
        <h1 className="font-display text-5xl uppercase mb-4 tracking-tighter">Terms of Service</h1>
        <p className="font-mono text-xs uppercase opacity-50">Effective Date: April 29, 2026</p>
      </div>

      <div className="space-y-12 font-mono uppercase text-sm">
        <section className="space-y-4">
          <h2 className="font-display text-3xl text-brutal-black border-l-4 border-neon pl-4">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing Unscramble.it, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl text-brutal-black border-l-4 border-neon pl-4">2. Use License</h2>
          <p className="leading-relaxed">
            Permission is granted to temporarily use Unscramble.it for personal, non-commercial transitory lexical analysis only. This is the grant of a license, not a transfer of title.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may not use our lexical index for commercial database building.</li>
            <li>You may not attempt to decompile or reverse engineer any software contained on Unscramble.it.</li>
            <li>You may not use automated scripts to "scrape" results from our interface.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl text-brutal-black border-l-4 border-neon pl-4">3. Disclaimer</h2>
          <p className="leading-relaxed">
            The lexical materials on Unscramble.it are provided on an 'as is' basis. While our dictionary is comprehensive, it is not exhaustive. Unscramble.it does not warrant the performance or accuracy of word matches for official tournament play.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl text-brutal-black border-l-4 border-neon pl-4">4. Limitations</h2>
          <p className="leading-relaxed">
            In no event shall Unscramble.it or its suppliers be liable for any damages arising out of the use or inability to use our unscrambling tools.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl text-brutal-black border-l-4 border-neon pl-4">5. Governing Law</h2>
          <p className="leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>
      </div>
    </div>
  );
}
