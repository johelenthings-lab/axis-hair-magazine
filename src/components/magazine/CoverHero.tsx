import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CoverHeroProps {
  title: string;
  issueDate: string;
  imagePath: string;
  description: string;
}

const CoverHero: React.FC<CoverHeroProps> = ({ title, issueDate, imagePath, description }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Parallax and Cinematic Zoom */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
        <img 
          src={imagePath} 
          alt={title}
          style={{ animation: 'kenburns 30s infinite alternate linear' }}
          className="w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
      </motion.div>

      {/* Overlay Text */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center container pointer-events-none"
      >
        <motion.p 
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.8em' }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-gold text-[10px] md:text-xs mb-12 uppercase"
        >
          {issueDate}
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[4rem] md:text-[12vw] font-serif leading-[0.8] tracking-tighter mb-12"
        >
          {title.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="max-w-xl mx-auto text-xs md:text-sm text-white/50 leading-loose tracking-[0.4em] uppercase mb-16"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <a 
            href="#pulse" 
            className="inline-flex items-center gap-6 text-[10px] tracking-[0.6em] uppercase text-white group pointer-events-auto"
          >
            <span>Enter the Issue</span>
            <div className="h-[1px] w-12 bg-gold group-hover:w-24 transition-all duration-700" />
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] tracking-[0.5em] text-gold/50 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </div>
  );
};

export default CoverHero;
