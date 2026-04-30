import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - Unscramble.it";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Read the privacy policy for Unscramble.it. We disclose our data practices and use of Google AdSense cookies.');
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 brutal-border prose prose-stone max-w-none">
      <div className="mb-12 border-b-4 border-brutal-black pb-8">
        <h1 className="font-display text-5xl uppercase mb-4 tracking-tighter">Privacy Policy</h1>
        <p className="font-mono text-xs uppercase opacity-50">Effective Date: April 29, 2026</p>
      </div>

      <div className="space-y-12 font-mono uppercase text-sm">
        <section className="space-y-4">
          <h2 className="font-display text-3xl text-brutal-black border-l-4 border-neon pl-4">1. Data Identification</h2>
          <p className="leading-relaxed">
            Word Puzzle Solver is built with a "Privacy First" architecture. We do not require account creation, and we do not store your name, address, or phone number. Any letters or word constraints you input into our tool are processed locally in your browser and are never transmitted to our remote servers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl text-brutal-black border-l-4 border-neon pl-4">2. Cookies & Advertising</h2>
          <p className="leading-relaxed">
            We use Google AdSense to serve advertisements on our site. Google, as a third-party vendor, uses cookies to serve ads based on your visit to this site and other sites on the Internet. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="underline font-bold hover:text-neon">Google Ad Settings</a>.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl text-brutal-black border-l-4 border-neon pl-4">3. Third-Party Services</h2>
          <p className="leading-relaxed">
            In addition to Google AdSense, we may use analytics services (like Google Analytics) to understand how users interact with our site. These services may collect information such as your IP address, browser type, and time spent on the site. This data is used solely to improve our lexical engine and user experience.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl text-brutal-black border-l-4 border-neon pl-4">4. User Rights</h2>
          <p className="leading-relaxed">
            You have the right to control your data. Since we do not store PII, "Deletion" is equivalent to closing your browser tab. You can manage cookie preferences through your browser settings at any time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-3xl text-brutal-black border-l-4 border-neon pl-4">5. Contact</h2>
          <p className="leading-relaxed">
            If you have questions regarding this policy, please use our <a href="/contact" className="underline font-bold hover:text-neon">Contact Form</a> or reach reaching us at hello@unscramble.it.
          </p>
        </section>
      </div>
    </div>
  );
}
