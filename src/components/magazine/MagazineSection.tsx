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
  fontOption?: 1 | 2 | 3;
}

const MagazineSection: React.FC<MagazineSectionProps> = ({ 
  id, title, subtitle, content, pullQuote, imagePath, number, theme = 'dark', layout = 'left',
  layoutVariant = 'default', fontOption = 1
}) => {
  const isDark = theme === 'dark';
  const isFounderNote = id === 'founders-note';
  const isFinancials = id === 'financials' || title.toLowerCase().includes('financials');
  const isCinematic = layoutVariant === 'cinematic' || isFinancials || id === 'feature-segment' || id === 'the-direction';
  const isStaggered = layoutVariant === 'staggered' || id === 'pulse' || (id === 'the-chair' && !isFinancials) || id === 'technology-shift';
  
  const isCentered = layout === 'center' || isFounderNote;
  const fontClass = `font-option-${fontOption}`;

  // Spacing and width logic
  const sectionMaxWidth = isFinancials ? 'max-w-none' : isCinematic ? 'max-w-[1600px]' : isStaggered ? 'max-w-[1300px]' : 'max-w-[1100px]';
  const verticalSpacing = isFounderNote || isCinematic ? 'py-32 md:py-48' : 'py-24 md:py-32';

  const renderContent = (text: string) => {
    // Handle subheaders (### Headline)
    if (text.startsWith('### ')) {
      return (
        <h3 className={`text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-gold mt-16 mb-8 border-b border-gold/10 pb-4 ${isCentered ? 'text-center' : 'text-left'}`}>
          {text.replace('### ', '')}
        </h3>
      );
    }

    // Handle list items (- Item)
    if (text.startsWith('- ')) {
      return (
        <div className={`flex gap-4 mb-4 items-start group ${isCentered ? 'justify-center' : ''}`}>
          <span className="text-gold mt-1.5">•</span>
          <span className={`flex-1 ${isCentered ? 'text-center' : 'text-left'}`}>
            {parseBold(text.replace('- ', ''))}
          </span>
        </div>
      );
    }

    // Regular paragraph
    return (
      <p className={`text-base md:text-lg font-light leading-[1.8] ${
        isDark ? 'text-white/70' : 'text-black/70'
      } ${isCentered ? 'text-center' : 'text-left'}`}>
        {parseBold(text)}
      </p>
    );
  };

  const parseBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className={`font-bold ${isDark ? 'text-white/90' : 'text-black/90'}`}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

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
          className={`mb-12 md:mb-16 ${isFinancials ? 'px-8 md:px-24' : ''}`}
        >
          <div className={`flex items-center gap-4 mb-6 ${isCentered ? 'justify-center' : ''}`}>
            <span className="text-gold font-serif italic text-lg opacity-60 tracking-widest">{number}</span>
            <div className="h-[1px] w-8 bg-gold/30" />
            <span className={`text-[10px] tracking-[0.4em] uppercase font-sans ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {subtitle || 'Editorial'}
            </span>
          </div>
          <h2 className={`${fontClass} text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 normal-case tracking-tight`}>
            {title}
          </h2>
        </motion.div>

        {/* Layout Wrapper */}
        <div className={`flex flex-col ${isStaggered && !isCentered ? 'md:flex-row md:items-start md:gap-24' : 'items-center'} ${isFinancials ? 'w-full' : ''}`}>
          
          {/* Image Content */}
          {imagePath && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className={`mb-20 overflow-hidden w-full ${isStaggered && !isCentered ? 'md:w-3/5 md:mb-0' : ''} ${isFinancials ? 'relative h-[70vh] md:h-[85vh]' : ''}`}
            >
              <img 
                src={imagePath} 
                alt={title}
                className={`w-full h-auto block transition-transform duration-[1.2s] ease-out hover:scale-[1.03] ${isCinematic ? 'shadow-none' : 'shadow-2xl'} ${isFinancials ? 'h-full object-cover' : ''}`}
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
            className={`${isFounderNote ? 'space-y-6' : 'space-y-12'} ${isCentered ? 'mx-auto' : 'mx-auto md:mx-0'} ${isStaggered && !isCentered ? 'md:w-2/5 md:pt-4' : ''} ${isFinancials ? 'pb-24 pt-12' : ''}`}
            style={{ maxWidth: isFounderNote ? '600px' : isFinancials ? '900px' : '750px' }}
          >
            {content.slice(0, content.findIndex(p => p.startsWith('### ')) === -1 ? content.length : content.findIndex(p => p.startsWith('### '))).map((paragraph, index) => (
              <React.Fragment key={index}>
                {renderContent(paragraph)}
              </React.Fragment>
            ))}

            {pullQuote && (
              <motion.div 
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className={`mt-16 pt-16 border-t border-gold/20 ${isCentered ? 'text-center' : ''}`}
              >
                <blockquote className="font-serif italic text-3xl md:text-4xl text-gold leading-tight tracking-tight">
                  "{pullQuote}"
                </blockquote>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Bottom Content Row (Subsections) */}
        {content.some(p => p.startsWith('### ')) && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className={`mt-24 md:mt-32 pt-24 md:pt-32 border-t border-gold/10 w-full max-w-[1200px] mx-auto`}
          >
            <div className="grid grid-cols-1 gap-12">
              {content.slice(content.findIndex(p => p.startsWith('### '))).map((paragraph, index) => (
                <React.Fragment key={index}>
                  {renderContent(paragraph)}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MagazineSection;
