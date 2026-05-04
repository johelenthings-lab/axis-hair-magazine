import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import coverImg from '../assets/images/cover.png';

interface Issue {
  id: string;
  title: string;
  volume: string;
  month: string;
  year: string;
  subtitle?: string;
  shipped: boolean;
  image: string;
}

const Archive: React.FC = () => {
  const issues: Issue[] = [
    { id: 'april-2026', title: 'The Quiet Edge', volume: '42', month: 'April', year: '2026', subtitle: 'The Industry Edit', shipped: true, image: coverImg },
    { id: 'may-2026', title: 'The Ledger', volume: '43', month: 'May', year: '2026', subtitle: 'Global Vision', shipped: false, image: coverImg },
    { id: 'june-2026', title: 'The Global Line', volume: '44', month: 'June', year: '2026', subtitle: 'International Style', shipped: false, image: coverImg },
    { id: 'july-2026', title: 'The Block', volume: '45', month: 'July', year: '2026', subtitle: 'Architectural Form', shipped: false, image: coverImg },
    { id: 'august-2026', title: 'Instrument', volume: '46', month: 'August', year: '2026', subtitle: 'Technical Mastery', shipped: false, image: coverImg },
    { id: 'september-2026', title: 'The Intake', volume: '47', month: 'September', year: '2026', subtitle: 'Market Analysis', shipped: false, image: coverImg },
    { id: 'october-2026', title: 'The Silhouette', volume: '48', month: 'October', year: '2026', subtitle: 'Shape & Shadow', shipped: false, image: coverImg },
    { id: 'november-2026', title: 'The Room', volume: '49', month: 'November', year: '2026', subtitle: 'Spatial Design', shipped: false, image: coverImg },
    { id: 'december-2026', title: 'The Form', volume: '50', month: 'December', year: '2026', subtitle: 'Pure Aesthetics', shipped: false, image: coverImg },
    { id: 'january-2027', title: 'The Blueprint', volume: '51', month: 'January', year: '2027', subtitle: 'Strategic Vision', shipped: false, image: coverImg },
    { id: 'february-2027', title: 'The New Portrait', volume: '52', month: 'February', year: '2027', subtitle: 'Identity Edit', shipped: false, image: coverImg },
    { id: 'march-2027', title: 'The Thread', volume: '53', month: 'March', year: '2027', subtitle: 'Connectivity', shipped: false, image: coverImg },
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-48 pb-32">
      <div className="container">
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.6em' }}
            className="text-[10px] uppercase text-gray-400 mb-4 text-center"
          >
            The Collection
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif text-center mb-8"
          >
            ARCHIVE
          </motion.h1>
          <div className="h-[1px] w-24 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {issues.map((issue, index) => (
            <motion.div
              key={issue.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 group bg-gray-50">
                {issue.shipped ? (
                  <Link to={`/issue/${issue.id}`} className="block h-full w-full">
                    <img 
                      src={issue.image} 
                      alt={issue.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  </Link>
                ) : (
                  <div className="h-full w-full relative">
                    <img 
                      src={issue.image} 
                      alt={issue.title}
                      className="w-full h-full object-cover grayscale opacity-10"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                      <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400">
                        This issue has not shipped yet
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.8em] text-white/20 pointer-events-none uppercase">
                  AXIS HAIR
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-medium">Vol. {issue.volume}</span>
                  <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">{issue.month} {issue.year}</span>
                </div>
                <h3 className="text-3xl font-serif mt-2">{issue.title}</h3>
                {issue.subtitle && (
                  <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mt-1">{issue.subtitle}</p>
                )}
                {issue.shipped && (
                  <Link 
                    to={`/issue/${issue.id}`}
                    className="text-[10px] tracking-[0.5em] uppercase text-black mt-6 border-b border-black/10 pb-2 w-max hover:border-gold transition-colors"
                  >
                    Explore Issue
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;
