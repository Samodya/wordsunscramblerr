import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Globe, Clock } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Unscramble.it";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Connect with the Unscramble.it team. Send us feedback, report missing words, or ask questions about our lexical processor.');
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <section className="space-y-4">
        <h1 className="font-display text-6xl tracking-tighter uppercase leading-none border-l-8 border-neon pl-6 py-2">
          Liaison Node
        </h1>
        <p className="font-mono text-sm uppercase opacity-60 max-w-2xl">
          Encountered a bug? Missing a word? Or just want to say hi? Use the form below to transmit your message to our core team.
        </p>
      </section>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 brutal-border bg-neon space-y-6">
            <h2 className="font-display text-2xl uppercase">System Channels</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Mail className="mt-1" />
                <div>
                  <p className="font-display uppercase text-sm">Direct Mail</p>
                  <p className="font-mono text-xs font-bold">hello@unscramble.it</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Globe className="mt-1" />
                <div>
                  <p className="font-display uppercase text-sm">Global Status</p>
                  <p className="font-mono text-xs font-bold uppercase text-black/60">Systems Nominal</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="mt-1" />
                <div>
                  <p className="font-display uppercase text-sm">Response Window</p>
                  <p className="font-mono text-xs font-bold uppercase">24-48 Hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 brutal-border bg-white space-y-4">
            <h3 className="font-display text-lg uppercase underline decoration-neon decoration-2 underline-offset-4">FAQ Trace</h3>
            <ul className="font-mono text-xs space-y-3 opacity-70 uppercase">
              <li>• Are all words official? (Yes, via WESL)</li>
              <li>• Mobile Support? (Full cross-device)</li>
              <li>• Offline mode? (Coming soon)</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
