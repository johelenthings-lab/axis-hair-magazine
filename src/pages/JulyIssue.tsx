import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MagazineSection from '../components/magazine/MagazineSection';

// July Issue Assets
import issue04 from "../assets/images/july/july-cover-men-at-wedding.png";
import pulseImg from "../assets/images/july/july-pulse-formal-event-portrait.png";
import trendImg1 from "../assets/images/july/July-Indian Bride.png";
import trendImg2 from "../assets/images/july/july-trend-mirror-finish-standard.png";
import trendImg3 from "../assets/images/july/july-trend-performance-texture.png";
import spotlightImg from "../assets/images/july/July-Wedding Party at Salon.png";
import financialsImg from "../assets/images/july/july-financials-business-prep.png";
import techImg from "../assets/images/july/july-technology-consultation-planning.png";
import featureImg from "../assets/images/july/Juy-Indian Couple at Wedding.png";
import directionImg from "../assets/images/july/July-Older Couple Renewing Vows.png";

const JulyIssue: React.FC = () => {
  const fontOption: 1 | 2 | 3 = 1;
  const fontClass = `font-option-${fontOption}`;

  const sections = [
    {
      id: 'pulse',
      number: '01',
      title: 'The Event Season Shift',
      subtitle: 'THE PULSE',
      imagePath: pulseImg,
      imageClassName: 'w-full h-[65vh] md:h-[75vh] lg:h-[85vh] object-cover object-[center_20%]',
      content: [
        'There is a specific kind of silence in the salon or shop just before the first event client of the day arrives. It’s different from the usual morning rush. In July, the energy shifts from the routine of maintenance into the high-pressure territory of the "moment."',
        'The people sitting in your chair this month aren\'t just looking for a technical service—they are looking for a stabilizer. In the midst of the garment bags, the group texts, and the nerves of a major life event, you are the person who holds it all together.',
        'They are trusting you with their image, yes, but they are also trusting you with their confidence. They need a look that won\'t just photograph well, but one that will survive the wind of the ceremony, the heat of the dance floor, and the weight of the day.',
        'When we say your work has to last beyond the chair, we aren\'t talking about weeks of grow-out. We are talking about the next twelve hours of their life.'
      ],
      pullQuote: 'In July, the energy shifts from the routine of maintenance into the high-pressure territory of the "moment."',
      layout: 'full' as const,
      layoutVariant: 'cinematic' as const,
      theme: 'dark' as const
    },
    {
      id: 'trend-layers',
      number: '02',
      title: 'Beyond the Aisle: Formal Aesthetics',
      subtitle: 'TREND LAYERS',
      content: [
        'Event hair in 2026 is a study in Controlled Movement. The standard has moved away from the overly "done" and toward a sophisticated, high-performance polish that feels alive but remains immovable.',
        '### The Showcase',
        `[TREND] ${trendImg1} | The Sculpted Softness | **Look direction:** For stylists, the trend is the architectural updo—low-slung chignons and structural twists that use internal "scaffolding" to stay up while looking soft and airy to the eye. Waves are deeper and more defined, finished with a glass-like shine that reflects light in every photo. | object-[center_10%]`,
        `[TREND] ${trendImg2} | The Mirror-Finish Standard | **Look direction:** For barbers, the event season is defined by the mirror-finish fade. It’s a high-contrast, zero-gap transition paired with a surgically sharp shape-up. Beard sculpting is focused on clean architecture and hydration—ensuring the beard looks lush and intentional, even in harsh flash photography. | object-[center_-15%]`,
        `[TREND] ${trendImg3} | Performance Texture | **Look direction:** Natural curls and waves are being celebrated with high-definition moisture. We’re seeing clean parts, deep side-sweeps, and textured movement locked in with humidity-resistant vapor barriers. The goal is a finish that moves when they move, but returns to its shape every time. | object-[center_-15%]`,
        'The goal is a finish that moves when they move, but returns to its shape every time.'
      ],
      pullQuote: 'Event hair in 2026 is a study in Controlled Movement.',
      layout: 'center' as const,
      layoutVariant: 'grid' as const,
      theme: 'light' as const
    },
    {
      id: 'cultural-spotlight',
      number: '03',
      title: 'The Social Reset: The Ritual of the Prep',
      subtitle: 'CULTURAL SPOTLIGHT',
      imagePath: spotlightImg,
      titleClassName: "text-3xl md:text-5xl lg:text-[2.65rem] xl:text-[3.25rem] md:whitespace-nowrap tracking-tight leading-tight",
      content: [
        'The prep room is a chaotic, beautiful, and deeply human place. It’s a landscape of silk robes, heavy suits, garment bags hanging from doorways, and the constant hum of phones and laughter. In the middle of it all is the professional.',
        'The salon floor becomes a coordination hub; the barbershop becomes the "War Room" for the groom’s party. You see it all: the stylist managing the timing of four bridesmaids while ensuring the bride stays calm, and the barber delivering the final, crisp line to a groomsman who hasn\'t seen his friends in years.',
        'This is where the work becomes cultural. You aren\'t just cutting hair; you are anchoring a ritual. You are the calm center of the storm, providing the final touch of armor before they step out into the world.'
      ],
      pullQuote: 'You aren\'t just cutting hair; you are anchoring a ritual.',
      layout: 'full' as const,
      layoutVariant: 'cinematic' as const,
      theme: 'light' as const
    },
    {
      id: 'the-chair-financials',
      number: '04',
      title: 'Pricing the Pressure: The Business of Events',
      subtitle: 'THE CHAIR: FINANCIALS',
      imagePath: financialsImg,
      imageClassName: "object-center",
      titleClassName: "text-2xl md:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] md:whitespace-nowrap lg:tracking-tighter uppercase -ml-4 md:-ml-12",
      content: [
        'Event season is a test of your business boundaries as much as your technical skills. If you are "Building Beyond the Chair," you must stop pricing event work as if it were a standard service.',
        '### The Professional Boundaries',
        '- **Deposit Wording:** "To secure your event date and begin our prep and trial process, a 50% non-refundable deposit is required. This ensures your time is protected and our team is fully prepared for your day."',
        '- **Cancellation/No-Show Policy:** Clearly state that changes within 30 days of the event forfeit the deposit. This isn\'t about being "mean"—it\'s about protecting your overhead.',
        '- **The Trial Premium:** Never treat a trial as just a "consultation." It is a full execution. Ask yourself: "If I do the work today, am I being paid for the work today?"',
        '### Package Thinking',
        '- **The Groom’s Party Package:** A flat rate for the party that includes precision fades, hot towel shaves, and beard detailing, plus a "day-of" final shape-up.',
        '- **The Coordination Fee:** If you are managing multiple stylists or barbers for a large party, you are acting as a project manager. Add a 15-20% coordination fee to the total.',
        '- **The Post-Event "Reset" Appointment:** Book a "Recovery Service" for two weeks after the event—a deep conditioning treatment or a beard-health reset to transition the hair back to its daily state.',
        '### Money Review Prompts',
        '- **Weekly:** What is my "Profit per Hour" on event work vs. my standard chair rent or commission?',
        '- **Monthly:** How many guest referrals did my July event work generate for the fall?',
        '[BOX] Editorial Note : Editorial content is provided for informational purposes only and does not constitute financial, legal, tax, or professional business advice. Readers should consult qualified professionals for guidance specific to their situation.'
      ],
      pullQuote: 'If you are "Building Beyond the Chair," you must stop pricing event work as if it were a standard service.',
      layout: 'right' as const,
      theme: 'light' as const,
      bgColor: '#F4F0E8',
      textColor: '#2E2E2E',
      accentColor: '#96712E'
    },
    {
      id: 'technology-consultation-shift',
      number: '05',
      title: 'Visual Certainty in High-Stakes Moments',
      subtitle: 'TECHNOLOGY & CONSULTATION SHIFT',
      imagePath: techImg,
      titleClassName: "text-2xl md:text-4xl lg:text-[2.5rem] xl:text-[3rem] md:whitespace-nowrap tracking-tight leading-tight",
      content: [
        'Consultation for an event is a different beast. There is no room for "I think I know what you mean." AXIS HAIR™ helps you build that bridge between the trial and the big day, making sure everyone is on the same page long before the first pin is placed or the first line is cut.',
        '[BOX] 1. Visual Consultation Preview : **How to use it:** Use the app during the trial to map the exact direction. Take photos of the trial from all angles and upload them directly into the client\'s file. | **Why it matters:** This creates a "Visual Contract." When the client sees their trial result next to their inspiration images in the app, the anxiety of "What if it\'s different on the day?" disappears. You aren\'t just styling; you are providing certainty.',
        '[BOX] 2. Social Media Kit : **How to use it:** Your event work is your highest-performing marketing material. Use the Social Media Kit to instantly turn a finished updo or a mirror-finish fade into professional content. | **Why it matters:** By showcasing this work now, you aren\'t just celebrating today\'s client—you are attracting the bridal, groom, and gala parties of 2027. Visibility is the engine of event-season growth.'
      ],
      pullQuote: 'You aren\'t just styling; you are providing certainty.',
      layout: 'left' as const,
      layoutVariant: 'education' as const,
      theme: 'light' as const,
      bgColor: '#F4F0E8',
      textColor: '#2E2E2E',
      accentColor: '#96712E'
    },
    {
      id: 'feature-segment',
      number: '06',
      title: 'The 12-Hour Standard: Engineering Longevity',
      subtitle: 'FEATURE SEGMENT',
      imagePath: featureImg,
      titleClassName: "text-2xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] md:whitespace-nowrap lg:tracking-tight uppercase",
      content: [
        'Engineering a look that survives a 12-hour event is a technical discipline. It’s about Layering for Longevity.',
        '- **Foundation Work:** Hold doesn\'t come from the final spray; it comes from the prep. For stylists, this means blow-drying "memory" into the hair from the start. For barbers, it means pre-shave prep and post-shave cooling to ensure the skin stays calm and the beard lines stay crisp under heat and movement.',
        '- **The "Non-Stiff" Hold:** Use vapor-barrier products that block humidity but allow the hair to move. If it looks like a helmet, it won\'t photograph well. If it’s too soft, it won\'t last the first dance.',
        '- **Shine Control:** In high-flash photography, too much shine can look like grease, and too little can look like damage. Balance is everything.',
        '- **The Mobile Packing List:** If you\'re on-site, you need a "War Chest"—extra pins, anti-humidity shields, skin-calming balms, and a high-intensity portable light.',
        '- **Timing & Order of Service:** Always start with the people who have the most manageable hair and end with the principals. This ensures the bride or groom’s look is the freshest when they step out.'
      ],
      pullQuote: 'Hold doesn\'t come from the final spray; it comes from the prep.',
      layout: 'left' as const,
      layoutVariant: 'staggered' as const,
      theme: 'light' as const
    },
    {
      id: 'the-direction',
      number: '07',
      title: 'Built for the Moment, Made for the Memory',
      subtitle: 'THE DIRECTION',
      imagePath: directionImg,
      titleClassName: "text-2xl md:text-4xl lg:text-[2.5rem] xl:text-[3rem] md:whitespace-nowrap tracking-tight leading-tight",
      content: [
        'The work you do in July has a long tail. A perfect event-day look doesn\'t just result in a happy client; it results in a permanent reputation. The referrals that come from a wedding party are the highest-quality leads in the industry—they are born from a guest seeing your work endure 14 hours of celebration and asking, "Who did that?"',
        'When your work lasts beyond the chair, your name travels beyond the salon or shop. Every clean line and every perfectly placed pin is a deposit into your future positioning. July is your chance to show the world not just what you do, but the standard you keep.',
        'Set the standard. Build the memory. Make it last.'
      ],
      pullQuote: 'July is your chance to show the world not just what you do, but the standard you keep.',
      layout: 'full' as const,
      layoutVariant: 'cinematic' as const,
      theme: 'light' as const
    }
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const jumpToSection = (sectionId: string) => {
    if (!sectionId) return;
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsNavOpen(false);
  };

  const handleSectionJump = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'latest') {
      navigate('/');
    } else if (value === 'archive') {
      navigate('/archive');
    } else {
      jumpToSection(value);
    }
    e.target.value = "";
  };

  return (
    <div id="top" className="bg-[#F5F1E8] text-[#111111] overflow-hidden">
      {/* Premium Editorial July Cover Hero */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#111111]">
        {/* Background Masthead (Behind image layer) */}
        <div className="absolute inset-x-0 top-[1vh] flex justify-center z-0 opacity-100 pointer-events-none">
          <h1 className="text-[40vw] font-serif tracking-[-0.08em] text-white select-none leading-none font-black whitespace-nowrap" style={{ textShadow: '0 10px 50px rgba(0,0,0,0.5)' }}>AXIS HAIR</h1>
        </div>

        {/* Main Cover Image Layer */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-0 top-[8vh] z-10"
        >
          <img 
            src={issue04} 
            alt="July 2026 Cover" 
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: 'center top',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%)'
            }}
          />
          {/* Subtle gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10" />
        </motion.div>

        {/* Foreground Content Layout */}
        <div className="relative z-20 h-full w-full flex flex-col justify-between p-8 md:p-16 pointer-events-none">
          {/* Top Date Marker */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center"
          >
            <span className="text-white text-[12px] md:text-sm tracking-[1em] uppercase font-bold">JULY 2026</span>
          </motion.div>

          {/* Bottom Issue Title & Action */}
          <div className="flex flex-col items-center gap-16 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="text-center"
            >
              <h2 className="text-white text-6xl md:text-[10vw] font-serif font-bold mb-6 leading-none tracking-tight uppercase">EVENT SEASON</h2>
              <div className="flex items-center justify-center gap-6">
                <div className="h-[2px] w-12 md:w-24 bg-gold" />
                <p className="text-white text-[12px] md:text-xl tracking-[0.6em] uppercase font-bold font-sans">WEDDING-READY WORK</p>
                <div className="h-[2px] w-12 md:w-24 bg-gold" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="pointer-events-auto"
            >
              <a
                href="#pulse"
                className="inline-flex items-center gap-6 text-[10px] tracking-[0.6em] uppercase text-white group"
              >
                <span>Enter the Issue</span>
                <div className="h-[1px] w-12 bg-gold group-hover:w-24 transition-all duration-700" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Intro Block */}
      <div className="py-32 md:py-48 text-center px-8 bg-[#F5F1E8]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-base md:text-lg tracking-[0.3em] uppercase mb-4 opacity-80">AXIS HAIR™</p>
          <p className="text-[11px] md:text-sm tracking-[0.6em] uppercase mb-8 opacity-60">THE INDUSTRY EDIT</p>
          <p className="text-[10px] tracking-[0.4em] uppercase mb-16 opacity-40">JULY 2026</p>
          <h1 className={`text-6xl md:text-9xl ${fontClass} leading-none uppercase`}>EVENT SEASON</h1>
        </div>
      </div>

      {/* Jump to Section Navigation */}
      <div className="w-full flex justify-center py-12 bg-[#F5F1E8] border-t border-b border-black/5">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[10px] tracking-[0.6em] uppercase opacity-40 font-sans">Jump to Section</p>
          <div className="relative group">
            <select
              className="bg-transparent border-none text-gold font-serif italic text-xl md:text-2xl focus:ring-0 cursor-pointer text-center appearance-none px-12"
              onChange={handleSectionJump}
              defaultValue=""
            >
              <option value="" disabled>Select a direction</option>
              <option value="latest" className="text-black bg-[#F5F1E8] font-sans text-sm uppercase tracking-widest py-2">Latest Issue</option>
              <option value="archive" className="text-black bg-[#F5F1E8] font-sans text-sm uppercase tracking-widest py-2">Archive</option>
              <option value="top" className="text-black bg-[#F5F1E8] font-sans text-sm uppercase tracking-widest py-2">Top of Issue</option>
              {sections.map((s) => (
                <option key={s.id} value={s.id} className="text-black bg-[#F5F1E8] font-sans text-sm uppercase tracking-widest py-2">
                  {s.subtitle || s.title}
                </option>
              ))}
            </select>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gold/30 group-hover:w-24 transition-all duration-700" />
          </div>
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
          {sections.map((section) => (
            <MagazineSection
              key={section.id} 
              {...section}
              fontOption={fontOption}
            />
          ))}
        </div>
      </div>

      {/* Floating Sections Navigation */}
      <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 flex flex-col items-end gap-4">
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white/95 backdrop-blur-md border border-black/5 p-8 rounded-sm shadow-2xl w-72 mb-4"
            >
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[10px] tracking-[0.5em] uppercase opacity-40 font-sans">Navigation & Sections</p>
                  <button onClick={() => setIsNavOpen(false)} className="text-[10px] uppercase opacity-20 hover:opacity-100 transition-opacity">Close</button>
                </div>
                <button
                  onClick={() => { navigate('/'); setIsNavOpen(false); }}
                  className="text-left text-[10px] uppercase tracking-[0.3em] hover:text-gold transition-colors py-1 flex items-center group/item"
                >
                  <span className="w-0 group-hover/item:w-4 h-[1px] bg-gold transition-all duration-500 overflow-hidden inline-block" />
                  <span className="group-hover/item:translate-x-2 transition-transform duration-500 font-bold">Latest Issue</span>
                </button>
                <button
                  onClick={() => { navigate('/archive'); setIsNavOpen(false); }}
                  className="text-left text-[10px] uppercase tracking-[0.3em] hover:text-gold transition-colors py-1 flex items-center group/item"
                >
                  <span className="w-0 group-hover/item:w-4 h-[1px] bg-gold transition-all duration-500 overflow-hidden inline-block" />
                  <span className="group-hover/item:translate-x-2 transition-transform duration-500 font-bold">Archive</span>
                </button>
                <div className="h-[1px] w-full bg-black/5 my-1" />
                <button
                  onClick={() => jumpToSection('top')}
                  className="text-left text-[10px] uppercase tracking-[0.3em] hover:text-gold transition-colors py-1 flex items-center group/item"
                >
                  <span className="w-0 group-hover/item:w-4 h-[1px] bg-gold transition-all duration-500 overflow-hidden inline-block" />
                  <span className="group-hover/item:translate-x-2 transition-transform duration-500">Top of Issue</span>
                </button>
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => jumpToSection(s.id)}
                    className="text-left text-[10px] uppercase tracking-[0.3em] hover:text-gold transition-colors py-1 flex items-center group/item"
                  >
                    <span className="w-0 group-hover/item:w-4 h-[1px] bg-gold transition-all duration-500 overflow-hidden inline-block" />
                    <span className="group-hover/item:translate-x-2 transition-transform duration-500">
                      {s.subtitle || s.title}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="bg-black text-white px-8 py-4 rounded-full text-[10px] tracking-[0.4em] uppercase hover:bg-gold transition-all duration-700 shadow-2xl flex items-center gap-4 group"
        >
          <span className="group-hover:translate-x-1 transition-transform">Sections</span>
          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        </button>
      </div>

      {/* Editorial Footer */}
      <footer className="py-64 bg-[#F5F1E8] text-center border-t border-black/5">
        <div className="container">
          <h2 className="text-4xl md:text-6xl font-serif mb-12 opacity-40 italic">AXIS HAIR™</h2>
          <div className="flex flex-col items-center gap-6 text-gray-500 tracking-[0.4em] text-[10px] uppercase">
            <span>The Industry Edit</span>
            <span>Issue No. 04 • July 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JulyIssue;
