import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#F5F1E8]/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container flex justify-between items-center">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-[#111111] hover:text-gold transition-colors"
        >
          <Menu size={24} />
        </button>

        <Link to="/" className="text-center group">
          <h1 className="text-2xl md:text-4xl tracking-[0.3em] font-light text-[#111111] group-hover:text-gold transition-colors">
            AXIS HAIR<span className="text-xs align-top">™</span>
          </h1>
          <p className="text-[10px] tracking-[0.5em] text-gray-400 mt-1 uppercase">
            The Industry Edit
          </p>
        </Link>

        <button className="text-[#111111] hover:text-gold transition-colors">
          <Search size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 bg-[#F5F1E8] z-[60] flex flex-col p-8 md:p-16 text-[#111111]"
          >
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-xl tracking-widest text-gold">NAVIGATION</h2>
              <button onClick={() => setIsMenuOpen(false)} className="text-[#111111]">
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              <Link to="/" className="text-4xl md:text-6xl font-serif hover:text-gold transition-colors italic">Latest Issue</Link>
              <Link to="/archive" className="text-4xl md:text-6xl font-serif hover:text-gold transition-colors italic">Archive</Link>
              <Link to="/about" className="text-4xl md:text-6xl font-serif hover:text-gold transition-colors italic">About</Link>
              <Link to="/contact" className="text-4xl md:text-6xl font-serif hover:text-gold transition-colors italic">Contact</Link>
            </nav>

            <div className="mt-auto pt-16 border-t border-black/10 grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gold text-xs tracking-widest mb-4">SOCIAL</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-gold">INSTAGRAM</a>
                  <a href="#" className="hover:text-gold">PINTEREST</a>
                  <a href="#" className="hover:text-gold">TWITTER</a>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs tracking-[0.2em]">© 2026 AXIS HAIR™ ALL RIGHTS RESERVED</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
