import { NavLink } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Unscramble' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="border-b-4 border-brutal-black bg-white sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="bg-neon p-1.5 border-2 border-brutal-black group-hover:rotate-6 transition-transform">
            <Zap fill="black" size={24} />
          </div>
          <span className="font-display text-3xl tracking-tighter uppercase leading-none">
            WORD<span className="text-neon drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">UNSCRAMBLER</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `font-display uppercase tracking-widest text-sm transition-colors hover:text-neon ${
                    isActive ? 'border-b-2 border-neon' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden brutal-border p-2 bg-neon transition-all active:translate-y-0.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b-4 border-brutal-black p-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block font-display text-2xl uppercase p-4 brutal-border ${
                  isActive ? 'bg-neon' : 'bg-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
