import React from 'react';
import { motion } from 'framer-motion';

interface MagazineSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  pullQuote?: string;
  imagePath?: string;
  layout?: 'left' | 'right' | 'center' | 'full';
  number: string;
  theme?: 'light' | 'dark';
}

const MagazineSection: React.FC<MagazineSectionProps> = ({ 
  id, title, subtitle, content, pullQuote, imagePath, layout = 'left', number, theme = 'dark' 
}) => {
  const isDark = theme === 'dark';

  return (
    <section 
      id={id} 
      className={`min-h-screen w-full flex items-center py-32 md:py-64 transition-colors duration-1000 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="container">
        <div className={`grid md:grid-cols-12 gap-16 md:gap-32 items-center ${
          layout === 'right' ? 'md:flex-row-reverse' : ''
        }`}>
          
          {/* Text Content */}
          <div className={`col-span-12 ${
            layout === 'center' || layout === 'full' ? 'md:col-span-8 md:col-start-3 text-center' : 
            layout === 'right' ? 'md:col-span-5 md:col-start-8' : 'md:col-span-5 md:col-start-1'
          }`}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`flex items-center gap-8 mb-16 ${layout === 'center' || layout === 'full' ? 'justify-center' : ''}`}>
                <span className="text-gold font-serif italic text-3xl">{number}</span>
                <div className="h-[1px] w-24 bg-gold/20" />
                <span className={`text-[10px] tracking-[0.6em] uppercase ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {subtitle || 'Editorial'}
                </span>
              </div>

              <h2 className={`font-serif leading-[0.9] mb-16 ${
                layout === 'full' ? 'text-[5rem] md:text-[12vw]' : 'text-5xl md:text-8xl'
              }`}>
                {title}
              </h2>
              
              <div className={`space-y-12 ${layout === 'center' || layout === 'full' ? 'mx-auto' : ''}`}>
                {content.map((paragraph, index) => (
                  <p key={index} className={`text-xl md:text-2xl font-light leading-relaxed ${
                    isDark ? 'text-white/60' : 'text-black/60'
                  }`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {pullQuote && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="mt-20 pt-20 border-t border-gold/10"
                >
                  <blockquote className="font-serif italic text-3xl md:text-5xl text-gold leading-tight">
                    "{pullQuote}"
                  </blockquote>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Image Content */}
          {imagePath && layout !== 'full' && (
            <div className={`col-span-12 md:col-span-6 ${
              layout === 'right' ? 'md:order-1 md:col-start-1' : 'md:col-start-7'
            }`}>
              <motion.div
                initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
              >
                <img 
                  src={imagePath} 
                  alt={title}
                  style={{ animation: 'kenburns 40s infinite alternate linear' }}
                  className="w-full h-full object-cover grayscale brightness-90"
                />
                <div className={`absolute inset-0 ${isDark ? 'bg-black/10' : 'bg-white/5'} mix-blend-multiply`} />
              </motion.div>
            </div>
          )}

          {/* Full Width Image Content */}
          {imagePath && layout === 'full' && (
            <div className="col-span-12 mt-32">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[80vh] w-full overflow-hidden"
              >
                <img 
                  src={imagePath} 
                  alt={title}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default MagazineSection;
