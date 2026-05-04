import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import all 12 covers
import issue01 from '../assets/images/issue-01.png';
import issue02 from '../assets/images/issue-02.png';
import issue03 from '../assets/images/issue-03.png';
import issue04 from '../assets/images/issue-04.png';
import issue05 from '../assets/images/issue-05.png';
import issue06 from '../assets/images/issue-06.png';
import issue07 from '../assets/images/issue-07.png';
import issue08 from '../assets/images/issue-08.png';
import issue09 from '../assets/images/issue-09.png';
import issue10 from '../assets/images/issue-10.png';
import issue11 from '../assets/images/issue-11.png';
import issue12 from '../assets/images/issue-12.png';

interface Issue {
  id: string;
  title: string;
  volume: string;
  month: string;
  year: string;
  shipped: boolean;
  image: string;
}

const Archive: React.FC = () => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const issues: Issue[] = [
    { id: '1', title: 'The Quiet Edge', volume: '01', month: 'April', year: '2026', shipped: true, image: issue01 },
    { id: '2', title: 'The Ledger', volume: '02', month: 'May', year: '2026', shipped: false, image: issue02 },
    { id: '3', title: 'The Global Line', volume: '03', month: 'June', year: '2026', shipped: false, image: issue03 },
    { id: '4', title: 'The Block', volume: '04', month: 'July', year: '2026', shipped: false, image: issue04 },
    { id: '5', title: 'Instrument', volume: '05', month: 'August', year: '2026', shipped: false, image: issue05 },
    { id: '6', title: 'The Intake', volume: '06', month: 'September', year: '2026', shipped: false, image: issue06 },
    { id: '7', title: 'The Silhouette', volume: '07', month: 'October', year: '2026', shipped: false, image: issue07 },
    { id: '8', title: 'The Room', volume: '08', month: 'November', year: '2026', shipped: false, image: issue08 },
    { id: '9', title: 'The Form', volume: '09', month: 'December', year: '2026', shipped: false, image: issue09 },
    { id: '10', title: 'The Blueprint', volume: '10', month: 'January', year: '2027', shipped: false, image: issue10 },
    { id: '11', title: 'The New Portrait', volume: '11', month: 'February', year: '2027', shipped: false, image: issue11 },
    { id: '12', title: 'The Thread', volume: '12', month: 'March', year: '2027', shipped: false, image: issue12 },
  ];

  const handleLockedClick = () => {
    setAlertMessage("This issue has not shipped yet.");
    setTimeout(() => setAlertMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#111111] pt-48 pb-32">
      <div className="container">
        
        {/* Archive Header */}
        <div className="mb-32 text-center">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.8em' }}
            style={{ fontSize: '10px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '1.5rem', fontWeight: 500 }}
          >
            THE COLLECTION
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="editorial-heading"
            style={{ marginBottom: '3rem', textAlign: 'center' }}
          >
            Archive
          </motion.h1>
          <div style={{ height: '1px', width: '128px', backgroundColor: '#D4AF37', margin: '0 auto' }} />
        </div>

        {/* Custom Alert */}
        <AnimatePresence>
          {alertMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'fixed',
                top: '8rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                backgroundColor: '#111111',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 500,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}
            >
              {alertMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Issue Grid */}
        <div className="archive-grid">
          {issues.map((issue, index) => (
            <motion.div
              key={issue.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.8 }}
              className="issue-card group"
            >
              {/* Cover Image Container */}
              <div 
                className="cover-container shadow-sm"
              >
                {issue.shipped ? (
                  <Link to={`/issue/${issue.id}`} style={{ display: 'block', height: '100%', width: '100%', position: 'relative' }}>
                    <img 
                      src={issue.image} 
                      alt={issue.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transition: 'transform 2000ms cubic-bezier(0.22, 1, 0.36, 1)' 
                      }}
                      className="group-hover:scale-105"
                    />
                    {/* Unlocked Overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0,0,0,0)',
                      transition: 'background-color 700ms',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }} className="group-hover:bg-black/20">
                      <div style={{
                        opacity: 0,
                        transition: 'all 700ms',
                        transform: 'translateY(1rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem'
                      }} className="group-hover:opacity-100 group-hover:translate-y-0">
                        <span style={{ color: 'white', fontSize: '10px', letterSpacing: '0.5em', textTransform: 'uppercase', fontWeight: 300 }}>
                          Enter the Issue →
                        </span>
                        <div style={{ height: '1px', width: '3rem', backgroundColor: '#D4AF37' }} />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div 
                    onClick={handleLockedClick}
                    style={{ height: '100%', width: '100%', position: 'relative', cursor: 'pointer' }}
                  >
                    <img 
                      src={issue.image} 
                      alt={issue.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transition: 'all 700ms'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Issue Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '10px', letterSpacing: '0.5em', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 600 }}>
                    VOL. {issue.volume}
                  </span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#9ca3af', textTransform: 'uppercase', fontWeight: 300 }}>
                    {issue.month} {issue.year}
                  </span>
                </div>
                <h3 style={{ fontSize: '2.25rem', lineHeight: 1.2, transition: 'color 500ms' }} className="group-hover:text-gold">
                  {issue.title}
                </h3>

                {/* Status Label (Moved Below) */}
                {!issue.shipped && (
                  <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(17, 17, 17, 0.05)' }}>
                    <span style={{ 
                      fontSize: '12px', 
                      letterSpacing: '0.6em', 
                      textTransform: 'uppercase', 
                      color: '#111111', 
                      fontWeight: 600,
                      display: 'block'
                    }}>
                      COMING SOON
                    </span>
                  </div>
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
