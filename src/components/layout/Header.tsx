import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);





  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#F5F1E8]/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="container flex justify-center items-center relative">
        <div className="absolute left-8 md:left-12" />

        <Link to="/" className="text-center group">
          <h1 className="text-2xl md:text-4xl tracking-[0.3em] font-light text-[#111111] group-hover:text-gold transition-colors">
            AXIS HAIR<span className="text-xs align-top">™</span>
          </h1>
          <p className="text-[10px] tracking-[0.5em] text-gray-400 mt-1 uppercase">
            The Industry Edit
          </p>
        </Link>

        <div className="absolute right-8 md:right-12" />
      </div>


    </header>
  );
};

export default Header;
