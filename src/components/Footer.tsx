import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-brutal-black bg-white mt-auto pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-4">
          <Link to="/" className="font-display text-4xl uppercase tracking-tighter">
            UNSCRAMBLE<span className="text-neon drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">.it</span>
          </Link>
          <p className="font-mono text-xs opacity-60 max-w-xs leading-relaxed uppercase">
            The world's fastest English word indexing and unscrambling engine. Built for velocity and lexical accuracy.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-lg uppercase underline decoration-neon decoration-4 underline-offset-4">Resources</h3>
          <ul className="font-mono text-sm space-y-2 uppercase">
            <li><Link to="/about" className="hover:text-neon transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-neon transition-colors">Contact Support</Link></li>
            <li><Link to="/" className="hover:text-neon transition-colors">Word Tool</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-lg uppercase underline decoration-neon decoration-4 underline-offset-4">Legal</h3>
          <ul className="font-mono text-sm space-y-2 uppercase">
            <li><Link to="/privacy-policy" className="hover:text-neon transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-neon transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-brutal-black/10">
        <p className="font-mono text-[10px] opacity-40 uppercase">
          © {currentYear} UNSCRAMBLE.IT. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4">
          <div className="w-4 h-4 bg-neon border border-brutal-black" />
          <div className="w-4 h-4 bg-brutal-black border border-brutal-black" />
          <div className="w-4 h-4 bg-red-400 border border-brutal-black" />
        </div>
      </div>
    </footer>
  );
}
