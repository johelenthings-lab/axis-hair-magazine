import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CoverHero from '../components/magazine/CoverHero';
import MagazineSection from '../components/magazine/MagazineSection';

// May Issue Editorial Assets
import pulseImg from "../assets/images/may/may-01-the-pulse-v2.png";
import trendImg from "../assets/images/may/may-02-trend-layers.png";
import culturalImg from "../assets/images/may/may-03-cultural-spotlight-v2.jpg";
import trendHeroBottomLeft from "../assets/images/may/trend-hero-bottom-left.jpg";
import trendHeroTopLeft from "../assets/images/may/trend-hero-top-left.jpg";
import issue02 from "../assets/images/issue-02.png";
import financialsImg from "../assets/images/may/may-04-financials.png";
import techImg from "../assets/images/may/may-05-technology-shift.jpg";
import transformationVisual from "../assets/images/may/Feature Segment-01-v2.png";
import directionImg from "../assets/images/may/may-08-the-direction-v2.png";

// Trend Showcase Assets
import trend1 from "../assets/images/may/trend-cards/trend-1-v3.png";
import trend2 from "../assets/images/may/trend-cards/trend-2-v3.jpg";
import trend3 from "../assets/images/may/trend-cards/trend-3-v3.jpg";
import trend4 from "../assets/images/may/trend-cards/trend-4-v4.jpg";
import trend5 from "../assets/images/may/trend-cards/trend-5-v3.png";

const MayIssue: React.FC = () => {
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
      title: 'Busy Is Not the Same as Building',
      subtitle: 'THE PULSE',
      imagePath: pulseImg,
      content: [
        'A booked calendar can hide a lot of things.',
        'It can hide weak pricing, missed rebooking opportunities, and a rhythm that feels more like exhaustion than evolution. In this industry, it is easy to mistake being busy for being successful. But a full schedule is only proof that your hands are needed—it is not always proof that your business is being built.',
        'May is about the difference between having clients and building a clientele. It is about moving from the daily grind of services to the intentional structure of ownership.',
        'The chair is where the work happens, but the pattern around it is what creates the future. This month, we look at the rhythm of the room, the value of the service, and the truth about whether your work is building back for you.',
        '[BOX] Questions Worth Asking This Month : Am I booked, or am I profitable? | Are my best services priced correctly? | Are clients rebooking before they leave? | Am I tracking which services actually make money? | Am I using slow days with intention? | Is my chair helping me build something beyond this week?'
      ],
      pullQuote: 'There is a difference between having clients and building a clientele.',
      layout: 'full' as const,
      layoutVariant: 'cinematic' as const,
      theme: 'dark' as const
    },
    {
      id: 'trend-layers',
      number: '02',
      title: 'The Trend Is Not Just the Look',
      subtitle: 'TREND LAYERS',
      imagePath: trendImg,
      content: [
        'Trends are easy to notice when they show up beautifully. The color catches the light. The cut moves the right way. The shape feels current. The finish makes the client stop and look twice. That is the part everyone sees.',
        'But behind every trend that makes it to the chair, there is another layer most clients do not fully understand.',
        'The time. The planning. The product. The correction. The maintenance. The consultation. The skill required to make the result look effortless. That is where the value lives.',
        'This month, as the industry conversation turns toward money, ownership, and building beyond the chair, trends need to be looked at differently. Not just as inspiration, but as business signals.',
        'Because when a client asks for a look, they are not only asking for the final photo. They are asking for your ability to understand their hair, their lifestyle, their starting point, their maintenance habits, their budget, their confidence level, and the result they believe they are walking toward.',
        'That is not basic work. That is professional interpretation. And professional interpretation has value.',
        '### TREND LAYERS',
        `[TREND] ${trend1} | Soft Dimension | Dimensional color continues to hold attention because it feels custom. It gives movement, richness, and that polished “expensive hair” effect clients love. **Money Note:** Dimensional color should be priced for planning, product, placement, time, and maintenance education — not just the finished photo.`,
        `[TREND] ${trend2} | Precision Shape | A strong cut-focused look—whether a sculpted bob or sharp silhouette—may look simple at first glance. That is exactly why it should not be undervalued. **Money Note:** Precision is not quick just because it looks clean. Detail, balance, and consistency deserve visible value.`,
        `[TREND] ${trend3} | Healthy Hair Energy | Shine, softness, density, and clean movement are no longer just background goals. For many clients, healthy hair is the statement look. **Money Note:** Healthy hair services create natural opportunities for retention, add-ons, and future appointments when they are explained clearly.`,
        `[TREND] ${trend4} | Statement Texture | Natural texture, defined coils, and shaped volume are powerful expressions of style that fit real life. **Money Note:** Textured styling requires strategy and technique. The planning that makes a natural look stand out is part of the professional service.`,
        `[TREND] ${trend5} | Grooming Details | Sharp fades, clean lineups, and detailed beard shapes separate a regular service from a memorable one. **Money Note:** Detail work should not disappear. If it improves the finish, confidence, and maintenance of the look, it has value.`,
        'Trends can bring clients in, but the professional has to decide how those trends are translated, priced, maintained, and explained.',
        '[BOX] Before Pricing a Trend, Ask: : What does this result actually require? | How much time will it take from start to finish? | Does the client understand the maintenance? | Is product usage being accounted for? | Does this service require extra consultation time? | Is the price reflecting the skill behind the result?'
      ],
      pullQuote: 'Low-maintenance does not mean low-value.',
      layout: 'center' as const,
      layoutVariant: 'grid' as const,
      theme: 'light' as const
    },
    {
      id: 'cultural-spotlight',
      number: '03',
      title: 'Where Trust Becomes Business',
      subtitle: 'CULTURAL SPOTLIGHT',
      imagePath: culturalImg,
      content: [
        'Some clients come back because the service was good.',
        'Others come back because the person behind the chair remembered them.',
        'That difference matters.',
        'In salons and barbershops, trust is built in small moments. The way a stylist remembers how a client likes their hair to fall. The way a barber knows the shape that makes someone feel like themselves again. The way a client sits down and does not have to explain everything from the beginning.',
        'That kind of knowing has value.',
        'Not just emotional value. Business value.',
        'Because repeat clients are not only returning appointments. They are proof that the experience mattered enough to come back.',
        'A client may book for the haircut, the color, the style, the shape-up, the treatment, or the grooming service. But they return for something deeper.',
        'They return because they felt seen.',
        'They return because the result matched how they wanted to move through the world.',
        'They return because the professional understood the details — the texture, the timing, the lifestyle, the preference, and the thing they did not want repeated from somewhere else.',
        'That is culture. That is care. That is retention.',
        'And retention is one of the strongest forms of income stability a beauty professional can build.',
        'Not because clients are numbers. They are not. Because relationships create rhythm.',
        'When clients trust the experience, they are more likely to rebook, return on time, ask questions, take recommendations seriously, and send someone else your way.',
        'The greeting matters. The consultation matters. The memory matters. The finished look matters. The moment the client smiles in the mirror matters.',
        'That smile is not small. It means the work landed.',
        'It means the client sees themselves in the result.',
        'And that is where trust becomes business.',
        'Through consistency. Through attention. Through care. Through making people feel recognized, not processed.',
        'When trust is real, retention becomes natural.',
        'And when retention becomes stronger, the chair stops depending only on who is new. It begins to build from who keeps coming back.',
        '[BOX] Retention Lives in the Details : Ask how the last style held up. | Remember the client’s last concern. | Suggest the next appointment naturally. | Notice what gives the client confidence. | Make the client feel recognized, not processed. | Treat trust like part of the service.'
      ],
      pullQuote: 'Retention is human before it is financial.',
      layout: 'full' as const,
      layoutVariant: 'cinematic' as const,
      theme: 'light' as const
    },
    {
      id: 'the-chair-financials',
      number: '04',
      title: 'Building Beyond the Chair',
      subtitle: 'THE CHAIR: FINANCIALS',
      imagePath: financialsImg,
      content: [
        'You’re leaving money on the table — not because you lack talent, but because the system around your talent may need to grow.',
        'There is a lot of giving in this work.',
        'Stylists and barbers give time. They give attention. They give patience. They give skill. They give people a version of themselves they can walk back into the world with.',
        'That matters. And it deserves to build something back.',
        'The chair is important, but it should not become the whole destination. It should be the foundation. The place where trust is earned, income is created, habits are formed, and future stability begins to take shape. This is where the money conversation gets real.',
        'Because too many talented professionals are working hard, staying booked, and still not building the financial rhythm their work should be creating. That does not always happen because the service is weak. Sometimes it happens because the system around the service is weak.',
        '### Where Money Gets Left',
        '[BOX] MONEY LEAK 1: The Service Takes More Time Than It Pays For : Some services look profitable until the full time is counted. | Consultation, prep, product, cleanup, correction, and finishing all count. | Ask: How long does this service really take from start to finish? | Does the price reflect the time, product, and skill required? | If the answer is no, the service needs a pricing review.',
        '[BOX] MONEY LEAK 2: Clients Leave Without a Next Step : A finished service should not end without direction. | Before the client leaves, they should know: when to return, what to maintain, what service comes next. | Simple script: “To keep this looking fresh, I’d recommend seeing you again in about six weeks.” | Rebooking protects the result and the income rhythm.',
        '[BOX] MONEY LEAK 3: Maintenance Is Treated Like a Suggestion : Maintenance is part of the service. | Color, cuts, fades, beards, silk presses, treatments, and healthy hair all need rhythm. | Give every client one clear next step: when to return, what to use, what to avoid, what to watch for. | One useful recommendation is better than a long lecture.',
        '[BOX] MONEY LEAK 4: Follow-Up Is Random : Follow-up should not only happen when the schedule gets slow. | Higher-ticket services, first-time clients, color changes, treatments, and transformations deserve a check-in. | Simple follow-up ideas: “How did the style hold up?” | “How is the color feeling after a few washes?” | “Do you want to get your next maintenance visit on the calendar?”',
        '[BOX] MONEY LEAK 5: Slow Days Are Not Used Strategically : A slow day can still build the business. | Use slow time for: rebooking messages, client check-ins, content creation, service education, pricing review, organizing client notes, package planning. | Slow days should not disappear without a business move attached.',
        '[BOX] MONEY LEAK 6: Pricing Has Not Caught Up to Skill : If the work has improved but the price has not, the business may be carrying an outdated version of the service. | Ask: Has this service become more detailed? | Have product costs increased? | Is this price still fair to the business? | Does this price reflect the result clients are receiving? | Pricing confidence does not mean raising everything overnight. Start with one service that clearly needs review.',
        '### The 15-Minute Weekly Chair Check',
        'Financial clarity does not have to start with a complicated spreadsheet. Start with 15 minutes a week.',
        'Look back at the week and ask: What service made the most money? | What service took the most time? | Which client should have been rebooked but was not? | Which service needs a price review? | Which add-on was recommended most often? | Which slow spot can be used better next week? | Which client needs follow-up? | What is one thing this week taught me about my business?',
        '### Pricing Is Communication',
        'Pricing is not punishment. Pricing is communication. It tells the client what level of time, preparation, skill, product, detail, and result they are receiving.',
        'When pricing is unclear, the professional often ends up over-explaining, discounting, apologizing, or absorbing the cost quietly. That is not sustainable. Clear pricing helps the client understand the value and helps the professional protect the time.',
        '### Retention Is Income Stability',
        'New clients matter. But returning clients create rhythm. Retention gives the business something to stand on. It creates fewer empty gaps, less panic posting, stronger relationships, and more predictable income.',
        'Retention is built through: clear rebooking, helpful maintenance guidance, strong follow-up, consistent experience, client memory, trust, service rhythm, honest recommendations. A client who returns every four, six, or eight weeks is not just another appointment. They are part of the business foundation.',
        '### Package the Value',
        'Service packaging is not about forcing people to spend more. It is about organizing value clearly. Many clients do not need one isolated service. They need a full result.',
        '[BOX] Package Examples : Color Refresh Package: gloss, trim, treatment, and maintenance recommendation. | Full Grooming Reset: cut, beard shaping, line detail, and finishing product guidance. | Healthy Hair Foundation: hydration treatment, trim, styling plan, and home-care recommendation. | Silk Press Maintenance Package: cleanse, treatment, trim check, silk press, and humidity-care guidance. | Gray Blending Refresh: blend, grooming detail, product recommendation, and return timing. | Protective Style Prep: scalp care, detangling, trim check, prep service, and follow-up plan.',
        '### Build the Future Fund Habit',
        'The chair should support today. But it should also help prepare for what comes next. A simple future fund habit can start small.',
        'Set aside a small percentage from each service day for: taxes, tools, education, marketing, emergency cushion, business upgrades, new equipment, future expansion. Even a small habit builds a different relationship with the business. Ownership is not only about making money. It is about directing it.',
        '[BOX] This Week, Start Here : Review one service that takes more time than it pays for. | Pre-book at least three clients before they leave. | Send one follow-up message to a higher-ticket client. | Choose one slow-day revenue move before the week starts. | Create one maintenance recommendation for a repeat service. | Set aside a small amount from one service day for future business needs.',
        '### EDITORIAL NOTE',
        'Editorial content is provided for informational purposes only and does not constitute financial, legal, tax, or professional business advice. Readers should consult qualified professionals for guidance specific to their situation.'
      ],
      pullQuote: 'The chair can keep you busy. But with structure, it can help build the future.',
      layout: 'right' as const,
      theme: 'dark' as const
    },
    {
      id: 'technology-consultation-shift',
      number: '05',
      title: 'Remember Better.\nFollow Up Smarter.',
      subtitle: 'TECHNOLOGY & CONSULTATION SHIFT',
      imagePath: techImg,
      content: [
        'Retention does not happen by accident. It is built through memory, timing, and the small systems that keep clients connected after they leave the chair.',
        'The consultation does not end when the service is finished. In many ways, that is where the next appointment begins.',
        'A client may leave happy, confident, and satisfied — but if there is no record of what mattered, no reminder for when they should return, and no follow-up after a higher-value service, the relationship can go quiet.',
        'That is where simple systems matter. For May, the AXIS HAIR™ focus is retention. Not more tools for the sake of tools. Better memory. Better timing. Better client rhythm.',
        'This month highlights two AXIS HAIR™ tools that support the business after the appointment: Client Notes / Consultation History and Return Reminder / Follow-Up Workflow.',
        '### TOOL 1: Client Notes / Consultation History',
        '**Angle:** Retention starts with remembering.',
        'Clients notice when they do not have to explain everything again. A saved note can carry the details that make a repeat appointment feel personal instead of random.',
        '[BOX] Use Client Notes To Record : What the client wanted | What service was performed | What the client loved | What the client was unsure about | What maintenance was recommended | What timing works best for their return | What should be remembered before the next appointment',
        '**Business Connection:** Better client memory creates better client experience. Better client experience supports stronger retention. And stronger retention creates more stable income.',
        '**Practical Use:** After each appointment, add one useful note before moving on to the next client. It does not need to be long. Just useful.',
        'Example: “Loved soft face-framing layers. Wants low-maintenance grow-out. Recommend refresh in 8 weeks.”',
        '### TOOL 2: Return Reminder / Follow-Up Workflow',
        '**Angle:** Follow-up turns a finished service into future income.',
        'A finished look should not be the last point of contact. Follow-up keeps the relationship warm and helps clients return before the style, color, cut, or grooming detail fully loses its shape.',
        '[BOX] Use Return Reminder To Support : Maintenance reminders | Higher-ticket service check-ins | Color follow-up | Treatment follow-up | Grooming refresh timing | Clients who have not rebooked yet | Clients who may need a nudge before the relationship goes cold',
        '**Business Connection:** Follow-up protects the rhythm of the business. It helps reduce empty gaps, supports rebooking, and reminds the client that their result still matters after they leave.',
        '**Practical Use:** Choose one follow-up habit and repeat it weekly.',
        '**Short Script Examples:** | “How is the style holding up?” | “How is the color feeling after a few washes?” | “Your maintenance window is coming up soon if you want to keep the shape fresh.” | “Want me to help get your next visit on the calendar?”',
        '[BOX] Use These Two Tools This Month To : Add one useful note after every appointment. | Review client history before repeat visits. | Record what the client loved, questioned, or wanted next. | Set return reminders around maintenance timing. | Follow up after higher-value services. | Bring clients back before the relationship goes quiet. | Build client rhythm instead of relying on memory.'
      ],
      pullQuote: 'A remembered client is more likely to become a returning client.',
      layout: 'left' as const,
      theme: 'light' as const
    },
    {
      id: 'feature-segment',
      number: '07',
      title: 'Package the Value,\nNot Just the Service',
      subtitle: 'FEATURE SEGMENT',
      imagePath: transformationVisual,
      content: [
        'A smarter service menu helps clients understand what belongs together — and helps professionals stop hiding extra labor inside basic pricing.',
        'Clients do not always know how to ask for the full result.',
        'They may book the color, but also need a gloss. They may ask for the cut, but need a treatment. They may want the style, but need the prep. They may request grooming, but need the detail work that makes the finish sharper.',
        'That is where service packaging matters. A package is not about forcing people to spend more. It is about organizing value clearly.',
        'When services naturally belong together, they should be presented that way. It helps the client understand the full path, and it helps the professional protect the time, product, skill, and planning required to deliver the result well.',
        'A clear package can make the conversation easier. Instead of explaining five separate add-ons, the professional can present one complete outcome. That helps the client see what they are paying for.',
        'It also helps the business stop absorbing extra labor quietly.',
        '### Why Packaging Works',
        '[BOX] Packaging can help : Increase average ticket value | Make pricing easier to explain | Reduce undercharging | Improve client understanding | Create smoother booking conversations | Support maintenance planning | Protect time and product usage | Make premium services feel more complete',
        '### Package Ideas to Build From',
        '[BOX] Color Refresh Package : Includes: Gloss, Trim, Treatment, and Maintenance recommendation. | Best for: Clients who want shine, tone, softness, and a fresher finish without a full transformation.',
        '[BOX] Full Grooming Reset : Includes: Cut, Beard shaping, Line detail, and Finishing product guidance. | Best for: Clients who want the full polished result, not just a quick clean-up.',
        '[BOX] Healthy Hair Foundation : Includes: Hydration treatment, Trim, Styling plan, and Home-care recommendation. | Best for: Clients focused on strength, softness, growth goals, and long-term hair health.',
        '[BOX] Silk Press Maintenance Package : Includes: Cleanse, Treatment, Trim check, Silk press, and Humidity-care guidance. | Best for: Clients who want a smooth finish with better protection and maintenance support.',
        '[BOX] Gray Blending Refresh : Includes: Blend, Grooming detail, Product recommendation, and Return timing. | Best for: Clients who want a polished, natural-looking refresh without harsh grow-out.',
        '[BOX] Protective Style Prep : Includes: Scalp care, Detangling, Trim check, Prep service, and Follow-up plan. | Best for: Clients preparing for braids, twists, extensions, or longer-wear protective styles.',
        '### Before You Build a Package, Ask:',
        '[BOX] This Week, Review Your Menu : What services naturally belong together? | What result is the client really asking for? | What work am I currently giving away for free? | Which services require more time than clients realize? | What maintenance step should be included? | What package would make the client’s choice easier? | What package would protect my time better?',
        'The strongest packages are not random bundles. They are thoughtful service paths.',
        'They help clients understand what it takes to get the result they want, and they help professionals price the full value of the work instead of quietly carrying the extra weight.',
        'A better service menu does not just list what you do. It shows clients how to move toward the result they came for.',
        '[BOX] This Month, Review Your Menu : Choose one service that often requires add-ons. | Identify what usually needs to happen before, during, or after that service. | Turn those steps into one clear package. | Give the package a simple, client-friendly name. | Make sure the price reflects the full result, not just the main service. | Test the package with clients who already ask for that type of result.'
      ],
      pullQuote: 'A smarter service menu helps clients see the value before they question the price.',
      layout: 'right' as const,
      layoutVariant: 'grid' as const,
      theme: 'light' as const
    },
    {
      id: 'the-direction',
      number: '08',
      title: 'What Comes After Being Busy',
      subtitle: 'THE DIRECTION',
      imagePath: directionImg,
      content: [
        'A full book can feel like the goal, and for many professionals, it is part of the goal. It means people trust the work. It means the chair has movement. It means the name, the service, and the experience are reaching people. But after busy comes a different question: what is the work building?',
        'That is the question May leaves behind. The next level is not always about doing more. Sometimes it is about seeing the work differently and paying closer attention to the systems around it. A price that reflects the value matters. A client who returns on rhythm matters. A follow-up that keeps the relationship warm matters. A service menu that explains the full result matters. A slow day that becomes planning instead of panic matters.',
        'None of it has to be loud to be powerful. The professionals who build with intention are not only looking at the appointment in front of them. They are paying attention to what repeats, what leaks, what brings clients back, what drains time, and what deserves to be handled with more structure.',
        'The future of this industry will not belong only to the busiest professionals. It will belong to the ones who understand what their work is worth and build with that understanding. Not in panic. Not in noise. Not by chasing everything at once. But through clearer choices, stronger systems, smarter pricing, better follow-up, and more intentional service.',
        'Because the chair can keep a professional busy. Direction is what helps the work become something more.'
      ],
      pullQuote: 'The future will not belong only to the busiest professionals. It will belong to the ones who build with intention.',
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
      <CoverHero
        title="FINANCIALS / OWNERSHIP"
        issueDate="MAY 2026 | VOLUME 02"
        imagePath={issue02}
        description="Exploring the bridge between talent and structure, and why your chair should be building something solid for your future."
        fontOption={fontOption}
      />

      {/* Hero Intro Block */}
      <div className="py-32 md:py-48 text-center px-8 bg-[#F5F1E8]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-base md:text-lg tracking-[0.3em] uppercase mb-4 opacity-80">AXIS HAIR™</p>
          <p className="text-[11px] md:text-sm tracking-[0.6em] uppercase mb-8 opacity-60">THE INDUSTRY EDIT</p>
          <p className="text-[10px] tracking-[0.4em] uppercase mb-16 opacity-40">MAY 2026</p>
          <h1 className={`text-6xl md:text-9xl ${fontClass} leading-none`}>FINANCIALS / OWNERSHIP</h1>
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
          {/* Minimal Navigation Sidebar */}
          <div className="fixed right-12 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="w-[1px] h-6 bg-black/20 hover:bg-gold transition-all duration-700 group relative"
              >
                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[8px] tracking-[0.5em] text-gold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase">
                  {s.subtitle || s.title}
                </span>
              </a>
            ))}
          </div>

          {sections.map((section) => {
            if (section.id === 'trend-layers') {
              const trends = section.content.filter(p => p.startsWith('[TREND]')).map(p => {
                const parts = p.replace('[TREND] ', '').split(' | ');
                return { img: parts[0], title: parts[1], caption: parts[2] };
              });
              const closingSentence = section.content.find(p => p.startsWith('Trends can bring clients in'));

              return (
                <div key={section.id} id={section.id} className="py-24 md:py-32 bg-[#F5F1E8] text-black">
                  <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    {/* Top Hero Section */}
                    <div className="mb-16 text-center lg:text-left">
                      <p className="text-[11px] tracking-[0.4em] uppercase text-[#B5995E] font-medium mb-3">
                        TREND LAYERS
                      </p>
                      <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] ${fontClass} leading-tight tracking-tight whitespace-normal lg:whitespace-nowrap`}>
                        THE TREND IS NOT JUST THE LOOK
                      </h2>
                    </div>

                    {/* 2x2 Editorial Image Grid */}
                    <div className="relative mb-12 overflow-hidden w-full bg-black/5">
                      <img 
                        src={trendImg} 
                        alt="Trend Layers Hero" 
                        className="w-full h-auto opacity-90"
                      />
                      {/* Top-Left Overlay */}
                      <div className="absolute top-0 left-0 w-1/2 h-1/2 overflow-hidden border-r border-b border-black/10">
                        <img 
                          src={trendHeroTopLeft} 
                          alt="Hero Top Left Patch" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      {/* Bottom-Left Overlay */}
                      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 overflow-hidden border-r border-t border-black/10">
                        <img 
                          src={trendHeroBottomLeft} 
                          alt="Hero Bottom Left Patch" 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>

                    <div className="max-w-[800px] mx-auto mb-32">
                      <p className="text-sm md:text-base italic text-center opacity-70 leading-relaxed">
                        “From sculpted texture to silver precision, the strongest trends right now are personal, polished, and full of point of view.”
                      </p>
                    </div>

                    {/* Second Section: Trend Showcase Cards */}
                    <div className="mt-40">
                      <div className="mb-16 text-center">
                        <p className="text-[11px] tracking-[0.4em] uppercase text-[#B5995E] font-medium mb-3">
                          TREND LAYERS
                        </p>
                        <h3 className={`text-2xl md:text-4xl ${fontClass} tracking-tight`}>
                          THE BUSINESS OF TRENDS
                        </h3>
                      </div>

                      {/* Balanced 3x2 Grid */}
                      <div className="space-y-12 md:space-y-20">
                        {/* Top Row: 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                          {trends.slice(0, 3).map((trend, i) => (
                            <div key={i} className="flex flex-col gap-6 group">
                              <div className="overflow-hidden rounded-sm bg-black/5 aspect-[4/5]">
                                <img src={trend.img} alt={trend.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                              </div>
                              <div className="space-y-3">
                                <h4 className="text-gold tracking-[0.2em] uppercase text-sm md:text-base font-bold">{trend.title}</h4>
                                <p className="text-sm md:text-base leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500 text-black">
                                  {trend.caption.split(' **Money Note:** ').map((part, j) => (
                                    <span key={j} className="block mt-2 first:mt-0">
                                      {j === 1 ? <><strong className="text-black/80 font-bold uppercase text-[10px] tracking-wider block mb-1">Money Note</strong>{part}</> : part}
                                    </span>
                                  ))}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Row: 2 Cards Centered */}
                        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 max-w-[1000px] mx-auto">
                          {trends.slice(3, 5).map((trend, i) => (
                            <div key={i} className="flex flex-col gap-6 group w-full md:w-[calc(33.333%-2rem)]">
                              <div className="overflow-hidden rounded-sm bg-black/5 aspect-[4/5]">
                                <img src={trend.img} alt={trend.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                              </div>
                              <div className="space-y-3">
                                <h4 className="text-gold tracking-[0.2em] uppercase text-sm md:text-base font-bold">{trend.title}</h4>
                                <p className="text-sm md:text-base leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500 text-black">
                                  {trend.caption.split(' **Money Note:** ').map((part, j) => (
                                    <span key={j} className="block mt-2 first:mt-0">
                                      {j === 1 ? <><strong className="text-black/80 font-bold uppercase text-[10px] tracking-wider block mb-1">Money Note</strong>{part}</> : part}
                                    </span>
                                  ))}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Closing Sentence */}
                      {closingSentence && (
                        <div className="mt-16 md:mt-24 pt-12 border-t border-black/5 text-center">
                          <p className="text-xs md:text-sm tracking-wide opacity-50 max-w-[600px] mx-auto leading-relaxed">
                            {closingSentence}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Takeaway Card & Pull Quote - Tightened Spacing */}
                    <div className="mt-20 md:mt-24 max-w-[800px] mx-auto space-y-16">
                      {section.content.filter(p => p.startsWith('[BOX]')).map((boxText, i) => {
                        const parts = boxText.replace('[BOX] ', '').split(' : ');
                        const boxTitle = parts[0];
                        const boxBody = parts[1];
                        return (
                          <div key={i} className="p-8 md:p-12 bg-black/5 border border-black/5 hover:border-[#B5995E]/30 transition-all duration-700 rounded-sm group">
                            <h4 className="text-[#B5995E] tracking-[0.3em] uppercase text-[10px] mb-6 font-bold">{boxTitle}</h4>
                            <div className="text-sm md:text-base leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity text-black">
                              {boxBody.split(' | ').map((line, j) => (
                                <div key={j} className="flex gap-3 mb-3 items-start last:mb-0">
                                  <span className="text-[#B5995E] mt-1">•</span>
                                  <span className="flex-1">{line}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}

                      {section.pullQuote && (
                        <div className="pt-8 border-t border-black/5 text-center">
                          <blockquote className="font-serif italic text-2xl md:text-4xl text-[#B5995E] leading-tight tracking-tight">
                            "{section.pullQuote}"
                          </blockquote>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <MagazineSection
                key={section.id}
                {...section}
                fontOption={fontOption}
              />
            );
          })}
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
            <span>Issue No. 02 • May 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MayIssue;
