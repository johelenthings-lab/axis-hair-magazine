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

  const isIssueOne = location.pathname === '/issue/1';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#F5F1E8]/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className={`container flex ${isIssueOne ? 'justify-between' : 'justify-between'} items-center`}>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-[#111111] hover:text-gold transition-colors"
        >
          <Menu size={24} />
        </button>

        {!isIssueOne ? (
          <Link to="/" className="text-center group">
            <h1 className="text-2xl md:text-4xl tracking-[0.3em] font-light text-[#111111] group-hover:text-gold transition-colors">
              AXIS HAIR<span className="text-xs align-top">™</span>
            </h1>
            <p className="text-[10px] tracking-[0.5em] text-gray-400 mt-1 uppercase">
              The Industry Edit
            </p>
          </Link>
        ) : <div className="flex-1" />}

        {!isIssueOne && (
          <button className="text-[#111111] hover:text-gold transition-colors">
            <Search size={24} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full md:w-[450px] bg-[#F5F1E8] z-[60] flex flex-col p-8 md:p-12 text-[#111111] shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-[10px] tracking-[0.6em] text-gold uppercase">Navigation</h2>
                <button onClick={() => setIsMenuOpen(false)} className="text-[#111111] hover:text-gold transition-colors">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                <Link to="/" className="text-3xl md:text-4xl font-serif hover:text-gold transition-colors italic">Latest Issue</Link>
                <Link to="/archive" className="text-3xl md:text-4xl font-serif hover:text-gold transition-colors italic">Archive</Link>
                <Link to="/about" className="text-3xl md:text-4xl font-serif hover:text-gold transition-colors italic">About</Link>
                <Link to="/contact" className="text-3xl md:text-4xl font-serif hover:text-gold transition-colors italic">Contact</Link>
              </nav>

              <div className="mt-auto pt-12 border-t border-black/5 space-y-8">
                <div>
                  <p className="text-gold text-[8px] tracking-[0.4em] mb-4 uppercase">Social</p>
                  <div className="flex gap-6 text-[10px] tracking-widest">
                    <a href="#" className="hover:text-gold transition-colors">IG</a>
                    <a href="#" className="hover:text-gold transition-colors">PN</a>
                    <a href="#" className="hover:text-gold transition-colors">TW</a>
                  </div>
                </div>
                <div className="text-[8px] tracking-[0.2em] text-gray-400 uppercase">
                  <p>© 2026 AXIS HAIR™</p>
                  <p>All Rights Reserved</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
