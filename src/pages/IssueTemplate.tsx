import React from 'react';
import CoverHero from '../components/magazine/CoverHero';
import MagazineSection from '../components/magazine/MagazineSection';

// April Issue Editorial Assets
import pulseImg from "../assets/images/april/april-01-the-pulse.png";
import trendImg from "../assets/images/april/april-03-trend-layers.png";
import culturalImg from "../assets/images/april/april-04-cultural-spotlight.png";
import chairImg from "../assets/images/april/april-05-the-chair.png";
import techImg from "../assets/images/april/april-06-technology-consultation-shift.png";
import featureImg from "../assets/images/april/april-07-feature-segment.png";
import directionImg from "../assets/images/april/april-08-the-direction.png";
import issue01 from "../assets/images/issue-01.png";

const IssueTemplate: React.FC = () => {
  // FONT TEST OPTIONS: 1 (Baseline), 2 (Playfair), 3 (DM Serif)
  const fontOption: 1 | 2 | 3 = 1;
  const fontClass = `font-option-${fontOption}`;

  const sections = [
    {
      id: 'founders-note',
      number: '00',
      title: 'FOUNDER’S NOTE',
      subtitle: 'A Word from the Founder',
      content: [
        'You are not just working.',
        'You are building.',
        'Every client who sits in your chair is more than a service—they are a canvas. And what you create does not only represent them.',
        'It represents you.',
        'Your eye. Your discipline. Your standard.',
        'There is a level of intention behind this work that often goes unspoken. But it is there—in every decision, every adjustment, every finished result that walks back out into the world carrying your name with it.',
        'Understand what you do.',
        'Because the industry is shifting.',
        'And the tools around you are changing faster than ever.',
        'A.I. will be here. It will continue to evolve. And like anything else placed in your hands, it will either guide your growth—or distract from it.',
        'So take control.',
        'Not just of the tools. But of your direction.',
        'Be empowered enough to see your position clearly. Disciplined enough to refine it. And confident enough to stand behind the value you bring.',
        'Because what you do holds weight. Not always loudly. Not always immediately. But consistently.',
        'And that consistency is what separates those who work… from those who build something that lasts.',
        '— AXIS HAIR™'
      ],
      layout: 'center' as const,
      theme: 'light' as const
    },
    {
      id: 'pulse',
      number: '01',
      title: 'The Industry Is Moving From Service to Experience',
      subtitle: 'THE PULSE',
      imagePath: pulseImg,
      content: [
        'Clients are no longer booking only a cut, color, style, or grooming service. They are booking confidence, clarity, trust, and a full professional experience.',
        'Today’s client often arrives with screenshots, saved videos, celebrity references, social media inspiration, and sometimes ideas that do not translate cleanly to their hair, lifestyle, or maintenance level. The modern stylist or barber is no longer only performing the service. They are translating the client’s vision into something realistic, wearable, personal, and worth returning for.',
        'That shift changes the value of the consultation. It is no longer just the opening conversation. It is the moment where expectations are shaped, confidence is built, and the professional begins leading the experience.'
      ],
      layout: 'left' as const,
      theme: 'dark' as const
    },
    {
      id: 'trend-layers',
      number: '02',
      title: 'Fast Trends Need Smarter Translation',
      subtitle: 'TREND LAYERS',
      imagePath: trendImg,
      content: [
        'Trends move fast now. A look can travel from a celebrity post to a client’s camera roll before the day is over. TikTok, Instagram, Pinterest, runway beauty, street style, and AI-generated inspiration are all shaping what clients ask for.',
        'But trend awareness is only the beginning. The real skill is knowing what fits the person in the chair. Face shape, density, texture, color history, lifestyle, budget, confidence, and maintenance all matter. A trend that looks effortless online may require planning, upkeep, and professional judgment in real life.',
        'This is where tools like AXIS HAIR™ can support the conversation. By helping organize inspiration and create clearer visual direction, the stylist or barber can guide the client toward options that feel exciting without losing reality.'
      ],
      layout: 'right' as const,
      theme: 'light' as const
    },
    {
      id: 'cultural-spotlight',
      number: '03',
      title: 'More Than a Cut',
      subtitle: 'CULTURAL SPOTLIGHT',
      imagePath: culturalImg,
      content: [
        'A barbershop has its own soundtrack. Clippers buzzing. Someone laughing from the next chair. A debate starting before the cape is even snapped. The barber greeting a client by name. The quick mirror check. The first look after the lineup is finished.',
        'For many clients, the barbershop is not just an appointment. It is a reset. It is the place where you catch the conversation, give your two cents, hear what everybody thinks, and leave feeling sharper than when you walked in.',
        'A clean fade, a sharp lineup, a beard detail, or a fresh grooming service can change how someone carries themselves for the rest of the day. It is not only about looking good. It is about confidence, connection, and feeling put back together.',
        'That is why the chair still matters. It is craft, but it is also community. It is service, but it is also culture. And as the industry moves into smarter tools and faster trends, that human experience should not disappear. It should be protected, elevated, and carried forward.'
      ],
      layout: 'left' as const,
      theme: 'light' as const
    },
    {
      id: 'the-chair',
      number: '04',
      title: 'Where Trust Becomes Revenue',
      subtitle: 'THE CHAIR: FINANCIALS',
      imagePath: chairImg,
      content: [
        'Before a client agrees to the service, the price, or the maintenance, they first have to believe the professional understands the vision.',
        'The consultation is no longer just the first few minutes before the appointment begins. It is the first business checkpoint. This is where the client decides if they feel heard, if the price makes sense, if the service feels worth it, and if they trust the professional sitting across from them.',
        'When the consultation is unclear, everything after it gets harder. The client hesitates. The stylist or barber spends extra time explaining the same thing twice. The price feels harder to defend. Maintenance becomes an afterthought. Expectations get blurry. And when expectations are blurry, confidence drops on both sides of the chair.',
        'A stronger consultation does the opposite. It gives the client language for what they want. It gives the professional room to explain what is realistic. It turns the price into part of the plan instead of a surprise at the end. It helps the client understand not only the look, but the process, the upkeep, and the value behind the service.',
        'That is where trust becomes revenue. Clients are more likely to approve a service when they can clearly see the direction. They are more likely to respect premium pricing when they understand the work behind the result. They are more likely to rebook when maintenance has already been explained before they leave the chair.',
        'This is where tools like AXIS HAIR™ become useful. AXIS HAIR™ gives stylists and barbers a way to support the consultation with visual direction, client clarity, and better service planning. It does not replace the professional eye. It helps organize the conversation so the professional can lead with more confidence.',
        'The money is not only in the finished look. The money is in the trust built before the service begins.'
      ],
      pullQuote: 'The chair is where transformation meets conversation.',
      layout: 'right' as const,
      theme: 'dark' as const
    },
    {
      id: 'technology-shift',
      number: '05',
      title: 'AI Belongs Beside the Stylist, Not Above Them',
      subtitle: 'TECHNOLOGY & CONSULTATION SHIFT',
      imagePath: techImg,
      content: [
        'The fear around AI is real, but the better conversation is about control. AI should not be treated as the artist, the expert, or the final decision-maker. The stylist or barber remains the professional. The tool supports the process.',
        'Used well, AI can help with visualization, communication, organization, content creation, and client education. It can help a client compare directions. It can help a professional explain maintenance more clearly. It can help reduce confusion before the service begins. What it should not do is replace taste, training, intuition, or professional judgment.',
        'Use AI to your advantage. Do not hand it your authority.',
        'AXIS HAIR™ is built around that idea. It gives the professional a smarter way to guide the consultation, support client confidence, and create a more prepared experience without removing the human expertise that makes the service valuable.'
      ],
      layout: 'left' as const,
      theme: 'light' as const
    },
    {
      id: 'feature-segment',
      number: '06',
      title: 'The Barber’s Chair™: The Business of Precision',
      subtitle: 'FEATURE SEGMENT',
      imagePath: featureImg,
      content: [
        'Precision is not only technical. It is also business.',
        'For barbers, the consultation may be short, but it still shapes the entire client experience. A clean fade, beard detail, lineup, texture adjustment, or grooming plan depends on understanding more than the requested style. It depends on timing, consistency, lifestyle, face shape, maintenance, and the client’s expectations between visits.',
        'The barber who creates a clear client experience is not just cutting hair. They are building loyalty. A repeat client returns because the service feels consistent, the communication feels easy, and the result feels understood before the first pass of the clipper.',
        'AXIS HAIR™ can support that rhythm by helping organize client preferences, strengthen consultation flow, and turn finished looks into content that keeps the chair visible.'
      ],
      layout: 'full' as const,
      theme: 'dark' as const
    },
    {
      id: 'the-direction',
      number: '07',
      title: 'The Future Belongs to the Organized Creative',
      subtitle: 'THE DIRECTION',
      imagePath: directionImg,
      content: [
        'Talent still matters. Craft still matters. The hand, the eye, the instinct, the timing, and the personal connection will always be at the center of beauty and grooming.',
        'But the modern professional also needs systems. The next era belongs to stylists and barbers who can communicate clearly, use tools wisely, protect their time, and create client trust before, during, and after the appointment.',
        'The future is not about choosing between creativity and technology. It is about using technology to protect creativity, strengthen the business, and improve the client experience.',
        'This month, the practical move is simple: use AXIS HAIR™ to test one stronger consultation flow, one visual preview process, or one piece of client-ready content. Start small. Build the habit. Let the system support the craft.'
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
        issueDate="APRIL 2026 | VOLUME 01"
        imagePath={issue01}
        description="How today’s stylists and barbers are blending craft, business, culture, and smarter tools to shape the next era of client experience."
        fontOption={fontOption}
      />

      {/* Hero Intro Block */}
      <div className="py-32 md:py-48 text-center px-8 bg-[#F5F1E8]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-base md:text-lg tracking-[0.3em] uppercase mb-4 opacity-80">AXIS HAIR™</p>
          <p className="text-[11px] md:text-sm tracking-[0.6em] uppercase mb-8 opacity-60">THE INDUSTRY EDIT</p>
          <p className="text-[10px] tracking-[0.4em] uppercase mb-16 opacity-40">APRIL 2026</p>
          <h1 className={`text-6xl md:text-9xl ${fontClass} leading-none`}>THE QUIET EDGE</h1>
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
              fontOption={fontOption}
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
            <span>Issue No. 01 • April 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IssueTemplate;
