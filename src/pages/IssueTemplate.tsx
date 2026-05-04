import React from 'react';
import CoverHero from '../components/magazine/CoverHero';
import MagazineSection from '../components/magazine/MagazineSection';
import coverImg from '../assets/images/cover.png';
import trendImg from '../assets/images/trend.png';

const IssueTemplate: React.FC = () => {
  const sections = [
    {
      id: 'pulse',
      number: '01',
      title: 'The Pulse',
      subtitle: 'Industry Momentum',
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
      title: 'Founder’s Note',
      subtitle: 'A Vision for AXIS',
      content: [
        'AXIS HAIR was born from a singular belief: that the tools we use should be as beautiful and precise as the art we create. Our mission has always been to bridge the gap between technical mastery and creative intuition.',
        'In this issue, we dive deeper into that philosophy, exploring how architectural form and digital consultation are coming together to create a new standard of excellence.'
      ],
      pullQuote: 'Precision is no longer about control—it is about confidence held in restraint.',
      layout: 'center' as const,
      theme: 'light' as const
    },
    {
      id: 'trend-layers',
      number: '03',
      title: 'Trend Layers',
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
      title: 'Cultural Spotlight',
      subtitle: 'Global Perspectives',
      imagePath: trendImg, // Placeholder for cultural image
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
      title: 'The Chair',
      subtitle: 'The Stylist Experience',
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
      title: 'Technology Shift',
      subtitle: 'Consultation 2.0',
      imagePath: trendImg, // Placeholder
      content: [
        'Digital integration is finally becoming invisible. The shift from "AI as a novelty" to "Consultation as a data-driven art form" is here.',
        'AXIS HAIR leads the charge in defining how technology enhances human touch rather than replacing it.'
      ],
      layout: 'left' as const,
      theme: 'light' as const
    },
    {
      id: 'feature-segment',
      number: '07',
      title: 'Feature Segment',
      subtitle: 'The Masterclass',
      imagePath: coverImg,
      content: [
        'A deep dive into the creative mind of Kenneth Aguillera. This segment breaks down the "Liquid Gold" collection—a masterclass in fluid movement and metallic shine.',
        'Technique meets philosophy in this exclusive 20-page exploration of craft.'
      ],
      layout: 'full' as const,
      theme: 'dark' as const
    },
    {
      id: 'the-direction',
      number: '08',
      title: 'The Direction',
      subtitle: 'Future Forecast',
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
    <div className="bg-black text-white overflow-hidden">
      <CoverHero 
        title="THE QUIET EDGE"
        issueDate="APRIL 2026 | VOLUME 42"
        imagePath={coverImg}
        description="Exploring the intersection of architectural form, cultural identity, and the future of consultation."
      />
      
      <div className="relative">
        {/* Minimal Navigation Sidebar */}
        <div className="fixed right-12 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-8">
          {sections.map((s) => (
            <a 
              key={s.id} 
              href={`#${s.id}`} 
              className="w-[1px] h-6 bg-white/20 hover:bg-gold transition-all duration-700 group relative"
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

      {/* Editorial Footer */}
      <footer className="py-64 bg-black text-center border-t border-white/5">
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
