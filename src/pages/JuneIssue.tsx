import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CoverHero from '../components/magazine/CoverHero';
import MagazineSection from '../components/magazine/MagazineSection';

// June Issue Placeholder Assets
import issue03 from "../assets/images/issue-03.png";
import pulseImg from "../assets/images/june/june-pulse-global-influence.png";
import skImg from "../assets/images/june/june-trend-south-korea.png";
import africaImg from "../assets/images/june/june-trend-africa.png";
import londonImg from "../assets/images/june/june-trend-london.png";
import parisImg from "../assets/images/june/june-trend-paris.png";
import brazilImg from "../assets/images/june/june-trend-brazil.png";
import nyImg from "../assets/images/june/june-trend-new-york.png";
import spotlightImg from "../assets/images/june/june-cultural-spotlight-seoul.png";
import financialsImg from "../assets/images/june/june-financials-price-the-interpretation.png";
import techImg from "../assets/images/june/june-technology-reference-to-plan.png";
import featureImg from "../assets/images/june/june-feature-inspiration-to-interpretation.png";
import directionImg from "../assets/images/june/june-direction-what-comes-next.png";

const JuneIssue: React.FC = () => {
  const fontOption: 1 | 2 | 3 = 1;
  const fontClass = `font-option-${fontOption}`;

  const sections = [
    {
      id: 'founders-note',
      number: '01',
      title: 'FOUNDER’S NOTE',
      subtitle: 'A Word from the Founder',
      content: [
        'You are not just working.',
        'You are building.',
        'Every client who sits in your chair is more than a service—they are a canvas.',
        'And what you create does not only represent them.',
        'It represents you.',
        'Your eye.',
        'Your discipline.',
        'Your standard.',
        'There is a level of intention behind this work that often goes unspoken.',
        'But it is there—in every decision, every adjustment, every finished result that walks back out into the world carrying your name with it.',
        'Understand what you do.',
        'Because the industry is shifting.',
        'And the tools around you are changing faster than ever.',
        'A.I. will be here.',
        'It will continue to evolve.',
        'And like anything else placed in your hands, it will either guide your growth—or distract from it.',
        'So take control.',
        'Not just of the tools.',
        'But of your direction.',
        'Be empowered enough to see your position clearly.',
        'Disciplined enough to refine it.',
        'And confident enough to stand behind the value you bring.',
        'Because what you do holds weight.',
        'Not always loudly.',
        'Not always immediately.',
        'But consistently.',
        'And that consistency is what separates those who work…',
        'from those who build something that lasts.',
        '— AXIS HAIR™.'
      ],
      layout: 'center' as const,
      theme: 'light' as const
    },
    {
      id: 'pulse',
      number: '02',
      title: 'The Client’s Reference Point Has Changed',
      subtitle: 'THE PULSE',
      imagePath: pulseImg,
      content: [
        'The client sitting in the chair is not only influenced by what they saw in their own neighborhood anymore.',
        'They are bringing in screenshots from Seoul, color ideas from Paris, barbering references from London, movement from Brazil, texture inspiration from across Africa, and editorial sharpness from New York. Sometimes they know exactly where the reference came from. Sometimes they only know how it made them feel.',
        'That shift matters.',
        'The modern client is walking in with a wider visual language. They have seen more. Saved more. Compared more. Their idea of what is possible has been shaped before the consultation even begins.',
        'For stylists and barbers, that does not mean chasing every look that moves across a screen. It means learning how to read the reference, understand the request beneath it, and translate global inspiration into something that works for the person in front of you.',
        'The chair is still local.',
        'The influence is not.'
      ],
      pullQuote: 'The chair is still local. The influence is not.',
      layout: 'full' as const,
      layoutVariant: 'cinematic' as const,
      theme: 'dark' as const
    },
    {
      id: 'trend-layers',
      number: '03',
      title: 'The Global Style Board',
      subtitle: 'TREND LAYERS',
      imagePath: undefined, // Intro image not needed if using cards
      content: [
        'The world is not sending one trend into the chair.',
        'It is sending many.',
        'Some are soft. Some are sharp. Some are polished. Some are loud with texture, movement, color, and confidence. June is about looking at those references with fresh eyes — not to copy everything, but to understand what clients are seeing, saving, and asking for next.',
        '### The Showcase',
        `[TREND] ${skImg} | South Korea | **Look direction:** Soft polish, clean layers, glossy finish. South Korea is bringing detail to the front: airy layers, face-framing movement, root lift, soft bangs, and color that feels clean, healthy, and intentional. _Visual caption:_ Soft shape. Quiet gloss. Detail that does the work.`,
        `[TREND] ${africaImg} | Africa | **Look direction:** Texture, sculpture, protection, and precision. Across African beauty and grooming influence, texture leads the story. Braids, locs, natural shape, sculptural volume, protective styling, and sharp barbering all carry power, identity, and creativity. _Visual caption:_ Texture with presence. Shape with meaning.`,
        `[TREND] ${londonImg} | London | **Look direction:** Street edge, fashion cuts, and lived-in cool. London gives the board attitude: sharp crops, creative color, textured barbering, undone finish, and cuts that feel connected to music, fashion, and movement in the street. _Visual caption:_ A little rebellious. Still completely wearable.`,
        `[TREND] ${parisImg} | Paris | **Look direction:** Effortless polish and quiet shape. Paris keeps the mood refined: soft bobs, French fringe, clean lines, minimal styling, and that almost effortless finish that still looks considered. _Visual caption:_ Chic does not have to shout.`,
        `[TREND] ${brazilImg} | Brazil | **Look direction:** Shine, volume, movement, and warmth. Brazil brings hair that feels alive: long movement, curls with confidence, rich color, gloss, body, and styling that moves from beach energy to city glamour without losing personality. _Visual caption:_ Warmth, body, shine, and motion.`,
        `[TREND] ${nyImg} | New York | **Look direction:** Editorial sharpness and personal remix. New York does not follow one lane. It remixes everything: sleek bobs, bold short cuts, precision barbering, statement color, natural texture, and looks that feel fast, individual, and camera-ready. _Visual caption:_ Sharp, personal, and impossible to ignore.`,
        'The point is not to chase every trend.',
        'The point is to know what is moving — and understand how to translate it when it reaches your chair.'
      ],
      pullQuote: 'The world is not sending one trend into the chair. It is sending many.',
      layout: 'center' as const,
      layoutVariant: 'grid' as const,
      theme: 'light' as const
    },
    {
      id: 'cultural-spotlight',
      number: '04',
      title: 'The Soft Power of Seoul Beauty',
      subtitle: 'CULTURAL SPOTLIGHT',
      imagePath: spotlightImg,
      content: [
        'South Korea’s influence in beauty does not always arrive loudly.',
        'It often shows up in the details: the lift at the root, the softness around the face, the clean shape of a layered cut, the quiet shine of healthy color, and the way the finished look feels polished without feeling forced.',
        'That is what makes Seoul’s beauty influence so important to understand. It is not only about K-pop screenshots or K-drama references. It is about a wider beauty language built around balance, refinement, care, and precision. The cut supports the face. The color supports the skin. The styling supports the whole person.',
        'For stylists and barbers, that kind of influence asks for attention. A client may come in asking for soft bangs, airy layers, a glossy brown tone, or a cleaner silhouette without knowing the technical choices behind the look. The professional has to see what the client is really responding to.',
        'Sometimes the request is not about copying a Korean reference exactly.',
        'Sometimes it is about softness.',
        'Sometimes it is about polish.',
        'Sometimes it is about looking put together without looking overdone.',
        'That is where cultural awareness becomes part of the consultation. It helps the professional respect the origin of the reference, understand the beauty values behind it, and translate the look with care instead of flattening it into a quick trend.',
        '[BOX] Behind the chair, ask : What detail is the client drawn to? | Is it the shape, the shine, the softness, or the overall feeling? | What needs to be adapted for their texture, density, face shape, lifestyle, and maintenance routine? | How can the inspiration be respected without being copied blindly?',
        'The best interpretation does not erase where the reference came from.',
        'It understands it first.'
      ],
      pullQuote: 'In South Korea, precision is a conversation, not just a cut.',
      layout: 'full' as const,
      layoutVariant: 'cinematic' as const,
      theme: 'light' as const
    },
    {
      id: 'the-chair-financials',
      number: '05',
      title: 'Building Beyond the Chair: Price the Interpretation',
      subtitle: 'THE CHAIR: FINANCIALS',
      imagePath: financialsImg,
      imageFit: 'contain' as const,
      titleClassName: "lg:text-[2.65rem] lg:tracking-tighter uppercase",
      content: [
        'Global trends can bring excitement into the chair, but excitement alone does not pay for the time, skill, product, education, or decision-making behind the service.',
        'When a client brings a look inspired by Seoul, Paris, London, Brazil, Africa, or New York, the value is not in copying the image. The value is in interpretation. You are looking at the client’s texture, density, face shape, lifestyle, maintenance habits, budget, color history, and realistic service path. That is professional work.',
        'The more visual the industry becomes, the more important it is to price the thinking behind the result. A trend request may require extra consultation time, a staged color plan, a texture-specific approach, a gloss or treatment schedule, a reshaping appointment, or follow-up maintenance. If those pieces are not built into the service conversation, the professional carries the cost quietly.',
        'That is where financial clarity matters. Global awareness can support premium positioning, but only when it is connected to structure. The client is not only paying for the look. They are paying for the ability to make the look work for them.',
        '[BOX] Practical money moves : Add consultation language for trend-based requests: “This look requires customization, so we need to plan the service properly.” | Identify which trend requests take more time than standard services. | Create premium service categories for high-effort transformations, color corrections, texture-specific shaping, and major style changes. | Build maintenance into the first conversation, not after the client leaves. | Turn trend services into follow-up appointments: gloss refresh, toner visit, curl-shape refinement, beard/line-up maintenance, treatment plan, or style reset. | Stop absorbing extra time because the reference looked simple online.',
        '[BOX] Weekly review : Which client requests needed more explanation this week? | Which services took longer than expected? | Which trend-based looks should be priced differently? | Which clients need a follow-up recommendation? | What global-inspired work could become portfolio or content material?',
        'The chair is still the foundation.',
        'But the future is built when today’s work starts paying for the skill behind it.',
        '[BOX] Editorial Note : Editorial content is provided for informational purposes only and does not constitute financial, legal, tax, or professional business advice. Readers should consult qualified professionals for guidance specific to their situation.'
      ],
      pullQuote: 'The client is not only paying for the look. They are paying for the ability to make the look work for them.',
      layout: 'right' as const,
      theme: 'dark' as const,
      bgColor: '#111111',
      textColor: '#FFFFFF',
      accentColor: '#FF8C00'
    },
    {
      id: 'technology-consultation-shift',
      number: '06',
      title: 'From Reference Image to Real Plan',
      subtitle: 'TECHNOLOGY & CONSULTATION SHIFT',
      imagePath: techImg,
      content: [
        'Global inspiration usually arrives visually first.',
        'A client may bring a saved post, a celebrity screenshot, a Seoul-inspired layered cut, a Paris fringe, a London crop, a Brazil-influenced color mood, or a New York editorial shape. The image creates excitement, but it can also create confusion if the professional does not slow the request down and translate it properly.',
        'That is where AXIS HAIR™ becomes useful in the consultation flow. Not as a replacement for the professional eye, but as a way to organize the inspiration, clarify the direction, and help the client understand what can realistically work.',
        '[BOX] Inspiration Upload / Reference Image Support : **What it helps with:** This gives stylists and barbers a cleaner way to keep the client’s visual inspiration connected to the consultation instead of relying on scattered screenshots, memory, or rushed explanations. | **How to use it:** Save the client’s inspiration image or reference direction. Use it as the starting point for the consultation conversation. Identify what the client actually likes: shape, softness, color, texture, length, edge, polish, or overall feeling. Keep the reference attached to the service direction so the conversation stays organized. | **Why it matters:** A reference image is not the final answer. It is the opening clue.',
        '[BOX] AI Recommendation / Style Direction Support : **What it helps with:** This helps turn the inspiration into clearer professional language around structure, styling direction, maintenance, and realistic adaptation. | **How to use it:** Translate a global trend reference into client-friendly language. Support the explanation of what needs to change for the look to work. Create a clearer service direction before the appointment moves too far. Help the client understand the difference between inspiration and execution. | **Why it matters:** The goal is not to copy what the client brings in. The goal is to build a version that works for the person sitting in the chair.',
        'The strongest consultations do not shut down inspiration.',
        'They shape it.',
        'AXIS HAIR™ helps keep that process organized so the professional can stay focused on what matters most: the client, the hair, the service, and the result.'
      ],
      pullQuote: 'A reference image is not the final answer. It is the opening clue.',
      layout: 'left' as const,
      layoutVariant: 'education' as const,
      theme: 'dark' as const
    },
    {
      id: 'feature-segment',
      number: '07',
      title: 'From Inspiration to Interpretation',
      subtitle: 'FEATURE SEGMENT',
      imagePath: featureImg,
      titleClassName: "lg:text-[3.25rem] lg:tracking-tight uppercase",
      content: [
        'The client does not always know the technical name for what they want.',
        'They may not know whether the reference is about shape, color, texture, finish, density, styling, or maintenance. They only know that something about the image caught their attention.',
        'That is why the professional has to slow the request down.',
        'A global trend reference can be exciting, but it is not a service plan by itself. A photo can show the mood, but it does not show the client’s hair history. It does not show the time required, the upkeep, the cost, the product plan, or the adjustments needed for texture and lifestyle.',
        'The job is not to copy the image.',
        'The job is to interpret it.',
        '### The 5-Part Reference Breakdown',
        '- **1. Shape:** What is the silhouette? Is the client responding to the cut, the outline, the fringe, the length, or the movement?',
        '- **2. Texture:** What hair type or styling finish is involved? Is the reference showing natural texture, heat styling, extensions, product control, volume, coils, waves, or a smoother finish?',
        '- **3. Color:** Is the color natural, enhanced, filtered, lighting-dependent, high-maintenance, or achievable in stages?',
        '- **4. Maintenance:** What will this look require after the appointment? How often will the client need a refresh, trim, treatment, toner, shape-up, or styling routine?',
        '- **5. Adaptation:** What version actually works for this client’s hair, face shape, lifestyle, budget, and schedule?',
        '### Service Translation Examples',
        '[BOX] Global Interpretations : A glossy Seoul-inspired brunette may become a dimensional gloss, trim, treatment plan, and maintenance appointment. | A Paris fringe may need face-shape adjustment, density control, and styling education. | A London crop may become a precision cut with texture work and a planned grow-out strategy. | A Brazil-inspired color mood may require staged lightening, shine maintenance, and product support. | A New York editorial bob may need stronger shape planning, smoothing support, and regular refinement. | An Africa-inspired protective or textured style may require technique awareness, proper timing, respectful consultation, and maintenance planning.',
        'When inspiration is interpreted well, the client feels understood.',
        'And the professional stays in control of the service.'
      ],
      pullQuote: 'The job is not to copy the image. The job is to interpret it.',
      layout: 'left' as const,
      layoutVariant: 'staggered' as const,
      theme: 'light' as const
    },
    {
      id: 'the-direction',
      number: '08',
      title: 'What Comes Next Is Interpretation',
      subtitle: 'THE DIRECTION',
      imagePath: directionImg,
      content: [
        'The world will keep moving. References will keep traveling faster than clients can name them. A shape from one city, a color mood from another, a styling detail from somewhere else entirely — all of it will continue arriving in the chair through screens, conversations, saved posts, and expectations that did not exist a few years ago.',
        'That does not make the professional less important. It makes the professional more necessary. Because the future of this industry will not belong to the person who copies the fastest. It will belong to the person who can look at what is moving, understand where it came from, respect what it means, and decide what should actually happen next for the client in front of them.',
        'Global influence is not slowing down. The work now is to stay aware without becoming reactive. To stay inspired without losing judgment. To keep learning without flattening every reference into the same result.',
        'The chair may sit in one room. But the conversation around it is bigger than ever. And the professionals who understand that — fully — are the ones who will define what comes next.'
      ],
      pullQuote: 'The future will not belong to the person who copies the fastest. It will belong to the person who can interpret with intention.',
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
        title="GLOBAL TRENDS"
        issueDate="JUNE 2026 | VOLUME 03"
        imagePath={issue03}
        description="The world is influencing your chair. You’re not just competing locally anymore."
        fontOption={fontOption}
      />

      {/* Hero Intro Block */}
      <div className="py-32 md:py-48 text-center px-8 bg-[#F5F1E8]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-base md:text-lg tracking-[0.3em] uppercase mb-4 opacity-80">AXIS HAIR™</p>
          <p className="text-[11px] md:text-sm tracking-[0.6em] uppercase mb-8 opacity-60">THE INDUSTRY EDIT</p>
          <p className="text-[10px] tracking-[0.4em] uppercase mb-16 opacity-40">JUNE 2026</p>
          <h1 className={`text-6xl md:text-9xl ${fontClass} leading-none`}>GLOBAL TRENDS</h1>
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
            <span>Issue No. 03 • June 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JuneIssue;
