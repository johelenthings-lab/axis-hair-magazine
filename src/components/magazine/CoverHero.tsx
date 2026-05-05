import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CoverHeroProps {
  title: string;
  issueDate: string;
  imagePath: string;
  description: string;
  fontOption?: 1 | 2 | 3;
}

const CoverHero: React.FC<CoverHeroProps> = ({ title, issueDate, imagePath, description, fontOption = 1 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const isModernChair = title.toLowerCase().includes('modern chair') || title.toLowerCase().includes('quiet edge');
  const fontClass = `font-option-${fontOption}`;

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#F5F1E8]">
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
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Split Editorial Layout Overlay */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-2 md:p-8"
      >
        {/* Top Tier: Issue Metadata */}
        <div className={`flex justify-between items-start pt-0 w-full`}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-white text-[10px] md:text-xs uppercase tracking-[0.8em] whitespace-nowrap pl-12"
          >
            {issueDate}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="text-white/60 text-[8px] md:text-[10px] uppercase tracking-[0.6em] text-right pr-12"
          >
            AXIS HAIR™ Editorial
          </motion.p>
        </div>

        {/* Middle Tier: The Title */}
        <div className={`flex ${isModernChair ? 'justify-end pr-2 md:pr-4' : 'justify-center'} items-center`}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className={`${isModernChair ? 'text-[2.5rem] md:text-[7vw] text-right' : 'text-[4rem] md:text-[12vw] text-center'} ${fontClass} leading-[0.8] text-white`}
          >
            {title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </motion.h2>
        </div>

        {/* Bottom Tier: Description & Action */}
        <div className={`flex flex-col ${isModernChair ? 'items-end pr-2 md:pr-4' : 'items-center'} gap-8 mb-16`}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className={`max-w-xs md:max-w-xl text-[10px] md:text-sm text-white/50 leading-loose tracking-[0.4em] uppercase ${isModernChair ? 'text-right' : 'text-center'}`}
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
        </div>
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
