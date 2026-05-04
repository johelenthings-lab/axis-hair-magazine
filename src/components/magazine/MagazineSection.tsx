import React from 'react';
import { motion } from 'framer-motion';

interface MagazineSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  pullQuote?: string;
  imagePath?: string;
  number: string;
  theme?: 'light' | 'dark';
}

const MagazineSection: React.FC<MagazineSectionProps> = ({ 
  id, title, subtitle, content, pullQuote, imagePath, number, theme = 'dark' 
}) => {
  const isDark = theme === 'dark';

  return (
    <section 
      id={id} 
      className={`min-h-screen w-full flex flex-col items-center py-32 md:py-48 transition-colors duration-1000 ${
        isDark ? 'bg-black text-white' : 'bg-[#F5F1E8] text-[#111111]'
      }`}
    >
      <div className="container max-w-[1100px] px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-6 mb-8">
            <span className="text-gold font-serif italic text-2xl">{number}</span>
            <div className="h-[1px] w-12 bg-gold/30" />
            <span className={`text-[9px] tracking-[0.4em] uppercase ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {subtitle || 'Editorial'}
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 uppercase tracking-tight">
            {title}
          </h2>
        </motion.div>

        {/* Image Content */}
        {imagePath && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mb-16"
          >
            <img 
              src={imagePath} 
              alt={title}
              className="w-full h-auto block shadow-2xl"
              style={{ maxWidth: '1100px', margin: '2rem auto' }}
            />
          </motion.div>
        )}

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="space-y-10"
        >
          {content.map((paragraph, index) => (
            <p key={index} className={`text-xl md:text-2xl font-light leading-relaxed max-w-[800px] ${
              isDark ? 'text-white/70' : 'text-black/70'
            }`}>
              {paragraph}
            </p>
          ))}

          {pullQuote && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-16 pt-16 border-t border-gold/10"
            >
              <blockquote className="font-serif italic text-3xl md:text-5xl text-gold leading-tight max-w-[900px]">
                "{pullQuote}"
              </blockquote>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default MagazineSection;
