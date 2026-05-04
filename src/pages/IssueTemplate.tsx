import React from 'react';
import CoverHero from '../components/magazine/CoverHero';
import MagazineSection from '../components/magazine/MagazineSection';

// April Issue Editorial Assets
import pulseImg from "../assets/images/april/april-01-the-pulse.png";
import trendImg from "../assets/images/april/april-03-trend-layers.png";
import culturalImg from "../assets/images/april/april-04-cultural-spotlight.png";
import chairImg from "../assets/images/april/april-05-the-chair.png";
import techImg from "../assets/images/april/april-06-technology-consultation-shift.png";
import financialsImg from "../assets/images/april/april-06-financials.png";
import featureImg from "../assets/images/april/april-07-feature-segment.png";
import directionImg from "../assets/images/april/april-08-the-direction.png";
import issue01 from "../assets/images/issue-01.png";

const IssueTemplate: React.FC = () => {
  const sections = [
    {
      id: 'pulse',
      number: '01',
      title: 'THE PULSE',
      subtitle: 'Industry Momentum',
      imagePath: pulseImg,
      content: [
        'The heartbeat of the professional hair industry is accelerating. As we enter the second quarter of 2026, the convergence of high-fashion aesthetics and rapid technological integration is redefining the salon floor.',
        'From London to Tokyo, the shift towards hyper-personalized service models is no longer a trend—it is the baseline expectation for the modern luxury consumer.'
      ],
      layout: 'left' as const,
      theme: 'dark' as const
    },
    {
      id: 'founders-note',
      number: '02',
      title: 'FOUNDER’S NOTE',
      subtitle: 'A Word from the Founder',
      content: [
        'The goal for AXIS HAIR is simple.',
        'To become a central point for the appointments, growth, and direction of the hair industry—built on your work, your decisions, and your standard.',
        'You are the artist.',
        'Every client who sits in your chair is the canvas. And what you create does not only represent them.',
        'It represents you. Your eye. Your discipline. Your level of control.',
        'Understand what you do. Because the work being done behind the chair is no longer just about appearance—it is about identity, precision, and how people carry themselves back into the world.',
        'And now, the industry is shifting.',
        'A.I. will be here. It will continue to grow. And like anything placed in your hands, it will either guide your direction—or distract from it. Which is why control matters now more than ever. Not just of the tools. But of your path.',
        'Everything you need to evolve already exists within your reach.',
        'The question is: Will you use it intentionally?',
        'Because you are not just working. You are building something. And the professionals who understand that… are the ones who will define what this industry becomes next.',
        '— AXIS HAIR™'
      ],
      layout: 'center' as const,
      theme: 'light' as const
    },
    {
      id: 'trend-layers',
      number: '03',
      title: 'TREND LAYERS',
      subtitle: 'Texture & Form',
      imagePath: trendImg,
      content: [
        'This season, we see a return to architectural structuralism. It’s not just about color; it’s about how light interacts with the geometric layers of a cut.',
        'The "Ghost Layering" technique has evolved into a more pronounced, visible statement of intent, blending seamless transitions with bold, sharp perimeters.'
      ],
      layout: 'right' as const,
      theme: 'light' as const
    },
    {
      id: 'cultural-spotlight',
      number: '04',
      title: 'CULTURAL SPOTLIGHT',
      subtitle: 'Global Perspectives',
      imagePath: culturalImg,
      content: [
        'Hair is the ultimate cultural signifier. In our spotlight this month, we examine how heritage styling techniques from the African diaspora are being elevated into the global high-fashion narrative.',
        'Respect, education, and celebration are the pillars of this cultural evolution within the professional space.'
      ],
      layout: 'left' as const,
      theme: 'light' as const
    },
    {
      id: 'the-chair',
      number: '05',
      title: 'THE CHAIR',
      subtitle: 'The Stylist Experience',
      imagePath: chairImg,
      content: [
        'The relationship between the stylist and the client remains the industry\'s most sacred asset. However, the nature of "The Chair" is changing.',
        'We explore how ergonomics and mental wellness are becoming as vital to a stylist\'s success as their technical precision.'
      ],
      pullQuote: 'The chair is where transformation meets conversation.',
      layout: 'right' as const,
      theme: 'dark' as const
    },
    {
      id: 'technology-shift',
      number: '06',
      title: 'TECHNOLOGY & CONSULTATION SHIFT',
      subtitle: 'Consultation 2.0',
      imagePath: techImg,
      content: [
        'Digital integration is finally becoming invisible. The shift from "AI as a novelty" to "Consultation as a data-driven art form" is here.',
        'AXIS HAIR leads the charge in defining how technology enhances human touch rather than replacing it.'
      ],
      layout: 'left' as const,
      theme: 'light' as const
    },
    {
      id: 'financials',
      number: 'VI',
      title: 'FINANCIALS',
      subtitle: 'VI. Chapter',
      imagePath: financialsImg,
      content: [
        'BUILD WITH INTENTION',
        'The difference is not talent.',
        'It is awareness.',
        'Stylists who grow: – track their numbers – understand their patterns – make decisions before problems appear',
        'Technology gives you visibility.',
        'What you do with it determines your outcome.',
        'The chair can produce income.',
        'But a system produces growth.'
      ],
      layout: 'center' as const,
      theme: 'light' as const
    },
    {
      id: 'feature-segment',
      number: '08',
      title: 'FEATURE SEGMENT',
      subtitle: 'The Masterclass',
      imagePath: featureImg,
      content: [
        'A deep dive into the creative mind of Kenneth Aguillera. This segment breaks down the "Liquid Gold" collection—a masterclass in fluid movement and metallic shine.',
        'Technique meets philosophy in this exclusive 20-page exploration of craft.'
      ],
      layout: 'full' as const,
      theme: 'dark' as const
    },
    {
      id: 'the-direction',
      number: '09',
      title: 'THE DIRECTION',
      subtitle: 'Future Forecast',
      imagePath: directionImg,
      content: [
        'Where do we go from here? The Direction outlines the trajectory for the remainder of the year.',
        'Sustainability is no longer a choice; it is the blueprint. Circular beauty systems and regenerative sourcing are the next frontiers.'
      ],
      pullQuote: 'The future of hair is regenerative, architectural, and profoundly human.',
      layout: 'center' as const,
      theme: 'dark' as const
    }
  ];

  return (
    <div className="bg-[#F5F1E8] text-[#111111] overflow-hidden">
      <CoverHero 
        title="THE QUIET EDGE"
        issueDate="APRIL 2026 | VOLUME 42"
        imagePath={issue01}
        description="Exploring the intersection of architectural form, cultural identity, and the future of consultation."
      />

      {/* Hero Intro Block */}
      <div className="py-32 md:py-48 text-center px-8 bg-[#F5F1E8]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-base md:text-lg tracking-[0.3em] uppercase mb-4 opacity-80">AXIS HAIR™</p>
          <p className="text-[11px] md:text-sm tracking-[0.6em] uppercase mb-8 opacity-60">THE INDUSTRY EDIT</p>
          <p className="text-[10px] tracking-[0.4em] uppercase mb-16 opacity-40">APRIL 2026</p>
          <h1 className="text-6xl md:text-9xl font-serif uppercase tracking-tighter leading-none">THE QUIET EDGE</h1>
        </div>
      </div>
      
      <div className="relative w-full flex flex-col items-center">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
          {/* Minimal Navigation Sidebar */}
          <div className="fixed right-12 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8">
            {sections.map((s) => (
              <a 
                key={s.id} 
                href={`#${s.id}`} 
                className="w-[1px] h-6 bg-black/20 hover:bg-gold transition-all duration-700 group relative"
              >
                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[8px] tracking-[0.5em] text-gold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase">
                  {s.title}
                </span>
              </a>
            ))}
          </div>

          {sections.map((section) => (
            <MagazineSection 
              key={section.id}
              {...section}
            />
          ))}
        </div>
      </div>

      {/* Editorial Footer */}
      <footer className="py-64 bg-[#F5F1E8] text-center border-t border-black/5">
        <div className="container">
          <p className="text-gold tracking-[0.8em] uppercase text-[10px] mb-12">End of Issue</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-12 opacity-40 italic">AXIS HAIR™</h2>
          <div className="flex flex-col items-center gap-6 text-gray-500 tracking-[0.4em] text-[10px] uppercase">
            <span>The Industry Edit</span>
            <span>Issue No. 42 • April 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IssueTemplate;
