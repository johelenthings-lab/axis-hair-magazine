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
  layout?: 'left' | 'right' | 'center' | 'full';
  layoutVariant?: 'cinematic' | 'staggered' | 'grid' | 'default';
}

const MagazineSection: React.FC<MagazineSectionProps> = ({ 
  id, title, subtitle, content, pullQuote, imagePath, number, theme = 'dark', layout = 'left',
  layoutVariant = 'default'
}) => {
  const isDark = theme === 'dark';
  const isFounderNote = id === 'founders-note';
  const isFinancials = id === 'financials';
  const isCinematic = layoutVariant === 'cinematic' || isFinancials || id === 'feature-segment' || id === 'the-direction';
  const isStaggered = layoutVariant === 'staggered' || id === 'pulse' || id === 'the-chair' || id === 'technology-shift';
  
  const isCentered = layout === 'center' || isFounderNote || isFinancials;

  // Spacing and width logic
  const sectionMaxWidth = isFinancials ? 'max-w-none' : isCinematic ? 'max-w-[1600px]' : isStaggered ? 'max-w-[1300px]' : 'max-w-[1100px]';
  const verticalSpacing = isFounderNote || isCinematic ? 'py-32 md:py-48' : 'py-24 md:py-32';

  return (
    <section 
      id={id} 
      className={`w-full flex flex-col items-center my-32 md:my-40 transition-colors duration-1000 ${
        isDark ? 'bg-black text-white' : 'bg-[#F5F1E8] text-[#111111]'
      } ${verticalSpacing}`}
    >
      <div className={`w-full px-8 ${isCentered ? 'text-center' : ''} ${
        isFounderNote ? 'max-w-[800px] mx-auto' : 
        isFinancials ? 'max-w-[1600px] mx-auto px-0' : 
        sectionMaxWidth + ' mx-auto'
      }`}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className={`mb-20 md:mb-28 ${isFinancials ? 'px-8 md:px-24' : ''}`}
        >
          <div className={`flex items-center gap-4 mb-10 ${isCentered ? 'justify-center' : ''}`}>
            <span className="text-gold font-serif italic text-base opacity-50">{number}</span>
            <div className="h-[1px] w-8 bg-gold/20" />
            <span className={`text-[10px] tracking-[0.4em] uppercase ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {subtitle || 'Editorial'}
            </span>
          </div>
          <h2 className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-tight mb-8 uppercase tracking-[0.08em] max-w-4xl mx-auto">
            {title}
          </h2>
        </motion.div>

        {/* Layout Wrapper */}
        <div className={`flex flex-col ${isStaggered && !isCentered ? 'md:flex-row md:items-start md:gap-20' : 'items-center'} ${isFinancials ? 'w-full' : ''}`}>
          
          {/* Image Content */}
          {imagePath && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className={`mb-16 overflow-hidden w-full ${isStaggered && !isCentered ? 'md:w-3/5 md:mb-0' : ''} ${isFinancials ? 'relative h-[70vh] md:h-[85vh]' : ''}`}
            >
              <img 
                src={imagePath} 
                alt={title}
                className={`w-full h-auto block transition-transform duration-[0.6s] ease-in-out hover:scale-[1.01] ${isCinematic ? 'shadow-none' : 'shadow-2xl'} ${isFinancials ? 'h-full object-cover' : ''}`}
                style={{ margin: '0 auto' }}
              />
            </motion.div>
          )}

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className={`space-y-10 ${isCentered ? 'mx-auto' : 'mx-auto md:mx-0'} ${isStaggered && !isCentered ? 'md:w-2/5 md:pt-12' : ''} ${isFinancials ? 'px-8 md:px-24 pb-20' : ''}`}
            style={{ maxWidth: isFounderNote ? '600px' : isFinancials ? '900px' : '700px' }}
          >
            {content.map((paragraph, index) => (
              <p key={index} className={`text-lg md:text-xl font-light leading-[1.85] ${
                isDark ? 'text-white/80' : 'text-black/80'
              } ${isCentered ? 'text-center' : 'text-left'}`}>
                {paragraph}
              </p>
            ))}

            {pullQuote && (
              <motion.div 
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className={`mt-12 pt-12 border-t border-gold/10 ${isCentered ? 'text-center' : ''}`}
              >
                <blockquote className="font-serif italic text-2xl md:text-3xl text-gold leading-tight">
                  "{pullQuote}"
                </blockquote>
              </motion.div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MagazineSection;
