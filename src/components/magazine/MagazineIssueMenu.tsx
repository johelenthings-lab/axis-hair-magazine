import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface IssueMenuItem {
  id: string;
  title: string;
  month: string;
  year: string;
  shipped: boolean;
}

const MagazineIssueMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const issues: IssueMenuItem[] = [
    { id: '1', title: 'The Quiet Edge', month: 'April', year: '2026', shipped: true },
    { id: '2', title: 'Financials / Ownership', month: 'May', year: '2026', shipped: true },
    { id: '3', title: 'Global Trends', month: 'June', year: '2026', shipped: true },
    // July 2026 — Event Season / Wedding-Ready Work
    // Theme line: “Your work has to last beyond the chair.”
    // Editorial: Event-season styling/grooming (bridal, groom, party coordination, trial appointments, pricing, retention).
    { id: '4', title: 'Event Season / Wedding-Ready Work', month: 'July', year: '2026', shipped: false },
    { id: '5', title: 'Instrument', month: 'August', year: '2026', shipped: false },
    { id: '6', title: 'The Intake', month: 'September', year: '2026', shipped: false },
    { id: '7', title: 'The Silhouette', month: 'October', year: '2026', shipped: false },
    { id: '8', title: 'The Room', month: 'November', year: '2026', shipped: false },
    { id: '9', title: 'The Form', month: 'December', year: '2026', shipped: false },
    { id: '10', title: 'The Blueprint', month: 'January', year: '2027', shipped: false },
    { id: '11', title: 'The New Portrait', month: 'February', year: '2027', shipped: false },
    { id: '12', title: 'The Thread', month: 'March', year: '2027', shipped: false },
    { id: '13', title: 'Volume 13', month: 'April', year: '2027', shipped: false },
  ];

  const handleIssueClick = (issue: IssueMenuItem) => {
    if (issue.shipped || (import.meta.env.DEV && issue.id === '4')) {
      navigate(`/issue/${issue.id}`);
      setIsOpen(false);
    } else {
      // For Coming Soon issues, if we are on the Archive page, jump to the card.
      // Otherwise, go to archive and then jump (though cross-page anchor jump needs a bit more logic, 
      // for now we'll just go to archive if not already there).
      if (location.pathname === '/archive' || location.pathname === '/') {
        const target = document.getElementById(`issue-card-${issue.id}`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        navigate('/archive');
      }
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white/95 backdrop-blur-md border border-black/5 p-6 rounded-sm shadow-2xl w-80 mb-4 max-h-[70vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] tracking-[0.5em] uppercase opacity-40 font-sans">AXIS HAIR™ ISSUES</p>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-[10px] uppercase opacity-20 hover:opacity-100 transition-opacity"
                >
                  Close
                </button>
              </div>
              
              {issues.map((issue) => (
                <button
                  key={issue.id}
                  onClick={() => handleIssueClick(issue)}
                  className="text-left py-1 flex flex-col group/item"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-0 group-hover/item:w-4 h-[1px] bg-gold transition-all duration-500 overflow-hidden inline-block" />
                    <div className="flex flex-col group-hover/item:translate-x-2 transition-transform duration-500">
                      <span className={`text-[10px] uppercase tracking-[0.3em] ${issue.shipped ? 'font-bold' : 'opacity-40'}`}>
                        {issue.month} {issue.year}
                      </span>
                      <span className={`text-[12px] font-serif italic ${issue.shipped ? 'text-gold' : 'opacity-30'}`}>
                        {issue.shipped ? issue.title : 'Coming Soon'}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white px-8 py-4 rounded-full text-[10px] tracking-[0.4em] uppercase hover:bg-gold transition-all duration-700 shadow-2xl flex items-center gap-4 group"
      >
        <span className="group-hover:translate-x-1 transition-transform">Issues</span>
        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
      </button>
    </div>
  );
};

export default MagazineIssueMenu;
