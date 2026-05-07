import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CoverHero from '../components/magazine/CoverHero';
import MagazineSection from '../components/magazine/MagazineSection';

// April Issue Editorial Assets
import pulseImg from "../assets/images/april/april-01-the-pulse.png";
import trendImg from "../assets/images/april/april-03-trend-layers.png";
import culturalImg from "../assets/images/april/april-04-cultural-spotlight.png";
import chairImg from "../assets/images/april/april-05-the-chair.png";
import techImg from "../assets/images/april/april-06-technology-consultation-shift.png";
import techPhoneImg from "../assets/images/april/april-06-tech-phone.png";
import techLaptopImg from "../assets/images/april/april-06-tech-laptop.png";
import featureImg from "../assets/images/april/april-07-feature-segment.png";
import directionImg from "../assets/images/april/april-08-the-direction.png";
import issue01 from "../assets/images/issue-01.png";
// Trend Showcase Assets
import pixieImg from "../assets/images/april/trend-cards/precision-pixie.png";
import bobImg from "../assets/images/april/trend-cards/sculpted-bob.png";
import fringeImg from "../assets/images/april/trend-cards/textured-fringe.png";
import mulletImg from "../assets/images/april/trend-cards/burst-fade.png";
import lineupImg from "../assets/images/april/trend-cards/lineup-taper.png";
import curlsImg from "../assets/images/april/trend-cards/low-taper-curls.png";

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
      title: 'The Quiet Shift Behind the Chair',
      subtitle: 'THE PULSE',
      imagePath: pulseImg,
      content: [
        'The industry is not only changing in what clients ask for. It is changing in how they decide.',
        'Clients are walking in with screenshots, saved videos, filtered references, and a clearer idea of how they want to feel when they leave. They are not just booking a cut, color, shape-up, or grooming service. They are looking for confidence, clarity, and a result that feels like it belongs to them.',
        'That changes the value of the consultation.',
        'The modern chair is no longer just where the service happens. It is where trust gets built, expectations get shaped, and the professional begins guiding the client from idea to decision.',
        'That is the quiet edge.',
        'It is not louder work. It is cleaner thinking. Sharper communication. Better preparation. More intentional service.',
        'The professionals who understand that shift are no longer just reacting to what clients bring in. They are helping clients see what actually works before the service begins.'
      ],
      layout: 'left' as const,
      theme: 'dark' as const
    },
    {
      id: 'trend-layers',
      number: '02',
      title: 'The Looks Taking Over Right Now',
      subtitle: 'Trend Layers',
      imagePath: trendImg,
      content: [
        'Online, in the chair, and across social feeds, the cuts getting the most attention right now are sharp, clean, and impossible to ignore. These are the looks barbers are pushing with precision — on men and women alike.',
        '### The Showcase',
        `[TREND] ${pixieImg} | Precision Pixie | A close, clean cut with strong shape and zero softness where it does not belong. It is sharp, modern, and built to stand out without being loud.`,
        `[TREND] ${bobImg} | Sculpted Crop Bob | Short, polished, and cut with real control. It carries edge, structure, and the kind of finish that turns a simple silhouette into a statement.`,
        `[TREND] ${fringeImg} | Textured Fringe Crop | Messy in the right places, sharp everywhere else. This one keeps showing up because it feels youthful, fashion-forward, and easy to personalize.`,
        `[TREND] ${mulletImg} | Burst Fade Mullet | Still making noise online and in the shop, but with cleaner execution than before. It is bold, expressive, and all about shape.`,
        `[TREND] ${lineupImg} | Ultra-Clean Lineup Taper | Edges matter here. Crisp lines, controlled tapering, and a finish that looks fresh from every angle.`,
        `[TREND] ${curlsImg} | Low Taper Curls | Natural texture with barber-level sharpness. This look wins because it keeps the shape soft up top and precise where it counts.`
      ],
      layout: 'center' as const,
      layoutVariant: 'grid' as const,
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
      id: 'the-chair-financials',
      number: '04',
      title: 'Building Beyond\nthe Chair',
      subtitle: 'THE CHAIR: FINANCIALS',
      imagePath: chairImg,
      content: [
        'This section is our way of saying thank you.',
        'Thank you for the early mornings, the packed Saturdays, the late clients, the careful details, the last-minute adjustments, the conversations, the patience, the creativity, and the work people sometimes do not fully understand until they see the finished result.',
        'You help people look beautiful. You help people feel clean, confident, polished, expressive, professional, renewed, and ready to walk back into the world with their head a little higher. That matters.',
        'And because that work matters, your future matters too.',
        'Behind the chair, the day can move fast. One appointment rolls into the next. A cut, a color, a shape-up, a treatment, a consultation, a quick cleanup, a client running late, another client needing more than they booked. By the end of the day, the work is done — but the bigger picture can still sit untouched.',
        'That is where the financial conversation has to get more honest.',
        'Money in this industry is not only about what comes in at checkout. It is about what stays, what repeats, what grows, and what gives you more options over time. A packed schedule may look successful, but if every dollar depends on standing behind the chair without a plan, the business is still fragile.',
        'The goal is not just to work more. The goal is to build better.',
        '### Practical Moves That Build Future Stability',
        'Before the May Financial Issue arrives, here are a few immediate moves that can turn daily services into future stability:',
        '**The Rebooking Question:** “Do you want to go ahead and protect your next spot while your schedule is still open?”',
        '**The Maintenance Recommendation:** “To keep this looking right, I would not wait longer than ___ weeks before your next visit.”',
        '**At the end of each week, look at three things:**',
        '- What service brought in the most money?',
        '- What took the most time for the least return?',
        '- Who should be followed up with before they drift away?',
        '**Once a month, choose one business move:**',
        '- Raise one outdated price.',
        '- Package two services that naturally belong together.',
        '- Promote one high-value service.',
        '- Create one client follow-up list.',
        'None of this has to be complicated. But it does have to become consistent. These small adjustments are the bridge between the daily grind and a sustainable future.',
        'The chair can pay the bills, but with intention, it can also fund the next step: a better schedule, a stronger brand, a private studio, a small team, advanced education, product sales, digital offers, savings, investments, or simply more control over your time.',
        'That is the part too many professionals are not taught early enough. You are not only doing hair. You are building leverage.',
        'Every service, every rebook, every client relationship, every price adjustment, and every better business habit is either keeping you in the same cycle or helping you create more room for the future.',
        'So yes, this section is about money.',
        'But more than that, it is about making sure the work you do for everyone else is also building something for you.',
        'The chair is not the whole destination.',
        'It is the foundation.'
      ],
      layout: 'right' as const,
      theme: 'dark' as const
    },
    {
      id: 'technology-consultation-shift',
      number: '05',
      title: 'Smarter Tools\nfor the Modern Chair',
      subtitle: 'Technology & Consultation Shift',
      imagePath: techImg,
      content: [
        'Technology should not make the chair feel less personal.',
        'It should make the work around the chair clearer, faster, and easier to use.',
        'That is where AXIS HAIR™ fits into the modern workflow. Not as a replacement for the stylist or barber, but as a support system that helps organize the consultation, sharpen the conversation, and turn strong work into something clients can see, understand, and share.',
        'For this issue, the focus is simple: use smarter tools to create more clarity before the service, and more visibility after the service.',
        '### Visual Consultation Preview',
        `[SIDE_IMAGE] ${techPhoneImg} | phone`,
        '**What it is:**',
        'The Visual Consultation Preview helps stylists and barbers show possible hair directions before the service begins.',
        '**How it works:**',
        'A photo is uploaded, possible style directions are generated, and the stylist or barber can use those results to guide the consultation. Instead of relying only on screenshots, descriptions, or guesswork, the client is able to see a clearer direction before the appointment moves forward.',
        '**What it helps with:**',
        '- comparing different style directions',
        '- explaining what may or may not flatter the client',
        '- reducing hesitation before a bigger change',
        '- helping the client feel more confident in the final decision',
        '- creating a clearer starting point for the consultation',
        '**Other ways to use it:**',
        '- Show a client two possible directions before committing.',
        '- Use the preview to explain why one shape works better than another.',
        '- Save the strongest option as a reference before the service starts.',
        '- Use the consultation result to support a higher-value service recommendation.',
        '- Help nervous clients move from “I’m not sure” to “I can see it now.”',
        'The professional still leads. The tool simply helps make the conversation easier to see.',
        '### Social Media Kit / Content From the Look',
        `[SIDE_IMAGE] ${techLaptopImg} | laptop`,
        '**What it is:**',
        'The Social Media Kit helps turn finished work into usable content that supports visibility and marketing.',
        '**How it works:**',
        'After a consultation or finished look is completed, the stylist or barber can use the result as the base for content. Instead of starting from scratch, the feature helps shape that result into a more polished content direction that can support posting, storytelling, and promotion.',
        '**What it helps with:**',
        '- posting more consistently',
        '- showing the value behind the service',
        '- turning finished work into local visibility',
        '- creating captions that explain the transformation',
        '- helping potential clients understand what makes the service worth booking',
        '**Other ways to use it:**',
        '- Turn one finished look into a before-and-after style post.',
        '- Create a caption that explains the consultation decision.',
        '- Highlight the detail that made the result stronger.',
        '- Use the post to promote a maintenance service.',
        '- Save content from slower days so visibility does not disappear when the schedule gets busy.',
        'A finished look should not disappear after the client leaves the chair.',
        'If the work is strong, it can become visibility. It can become proof. It can become the post that reminds someone else to book.',
        'The point is not to let technology speak louder than the work.',
        'The point is to help the work travel further.',
        'Used well, AXIS HAIR™ gives stylists and barbers another way to prepare, explain, create, and stay visible — while keeping their own eye, hand, and judgment at the center.'
      ],
      layout: 'left' as const,
      layoutVariant: 'education' as const,
      theme: 'light' as const
    },
    {
      id: 'feature-segment',
      number: '06',
      title: 'The Barber’s Chair™\nThe Business of Precision',
      subtitle: 'FEATURE SEGMENT',
      imagePath: featureImg,
      content: [
        'In the barbershop, precision is not extra.',
        'It is the service.',
        'The fade, the lineup, the beard detail, the neckline, the blend, the way the cut holds after the client leaves — all of it tells the client whether they can trust the chair again.',
        'That is why barbering carries a different kind of pressure. The work is visible immediately. A line is either clean or it is not. A blend either moves smoothly or it does not. The finish either gives the client confidence or leaves them checking the mirror twice.',
        'This is where detail becomes business.',
        'A sharp cut does more than look good in the chair. It walks into meetings, dates, interviews, events, photos, weekends, and everyday life. It becomes part of how the client shows up.',
        'That kind of work builds reputation.',
        'Not only because it is clean, but because it is consistent.',
        'For barbers, precision is one of the strongest forms of marketing. A client who leaves with a cut that holds, a beard that frames the face, and a lineup that still looks intentional days later is carrying proof of the work everywhere they go.',
        'That is the quiet edge.',
        'The business is not only in how many people sit down.',
        'It is in how many people trust you enough to come back.',
        '### Small details that build repeat clients:',
        '- protect the neckline',
        '- check the shape from multiple angles',
        '- explain how often the cut should be maintained',
        '- recommend the next visit before the client leaves',
        '- make the finish photo-worthy without rushing the finish',
        'The Barber’s Chair™ is not just about the cut.',
        'It is about the standard clients remember after they leave.'
      ],
      layout: 'full' as const,
      theme: 'dark' as const
    },
    {
      id: 'the-direction',
      number: '08',
      title: 'What Comes Next\nIs Built With Intention',
      subtitle: 'THE DIRECTION',
      imagePath: directionImg,
      content: [
        'The next phase of this industry will not belong only to the loudest professionals.',
        'It will belong to the ones who are paying attention.',
        'The ones who understand that the chair is no longer just a place where a service happens. It is where trust is built, where confidence is shaped, where culture shows up, where business decisions are made, and where the client begins to understand what is possible.',
        'That is the quiet edge.',
        'It is not about chasing every trend or using every tool just because it exists. It is about knowing what belongs in the work, what supports the client, what strengthens the business, and what helps the professional move with more clarity.',
        'The strongest stylists and barbers will not be the ones who choose between craft and technology, culture and business, creativity and structure.',
        'They will be the ones who learn how to carry all of it with intention.',
        'A sharp consultation matters.',
        'A clean finish matters.',
        'A client who feels seen matters.',
        'A price that reflects the value of the work matters.',
        'A tool that helps the work travel further matters.',
        'A standard that can be repeated matters.',
        'This is where the future starts to separate itself.',
        'Not in noise.',
        'Not in rushing.',
        'Not in doing more without direction.',
        'But in sharper choices, better systems, stronger communication, cleaner execution, and a deeper understanding of what the client is really trusting the professional to do.',
        'The work is still personal.',
        'The craft still matters.',
        'The chair still holds weight.',
        'But what happens around the chair is changing.',
        'And the professionals who understand that — fully — are the ones who will define what comes next.'
      ],
      layout: 'full' as const,
      theme: 'dark' as const
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
    // Reset selection for repeat use
    e.target.value = "";
  };

  return (
    <div id="top" className="bg-[#F5F1E8] text-[#111111] overflow-hidden">
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
                  {s.id === 'founders-note' ? 'Founder’s Note' :
                    s.id === 'pulse' ? 'The Pulse' :
                      s.id === 'the-chair-financials' ? 'The Chair: Financials' :
                        s.id === 'technology-consultation-shift' ? 'Technology & Consultation Shift' :
                          s.subtitle || s.title}
                </option>
              ))}
            </select>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gold/30 group-hover:w-24 transition-all duration-700" />
          </div>
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
                      {s.id === 'founders-note' ? 'Founder’s Note' :
                        s.id === 'pulse' ? 'The Pulse' :
                          s.id === 'the-chair-financials' ? 'The Chair: Financials' :
                            s.id === 'technology-consultation-shift' ? 'Technology & Consultation Shift' :
                              s.subtitle || s.title}
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
