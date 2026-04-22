import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import {
  BookOpen, Users, Trophy, Heart, Sparkles, Clock, Monitor,
  FlaskConical, Library, Eye, Cpu, Leaf, Bike, Star,
  MapPin, GraduationCap, Building2, Shield, Briefcase, Shirt, Sun, Snowflake,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import ourHeritage from '../assets/img11.jpeg'

// ─── Reusable FadeIn ─────────────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }: { children: React.ReactNode, delay?: number, direction?: string, className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-10% 0px -10% 0px' });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      scale: direction === 'scale' ? 0.98 : 1,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1, 
      transition: { 
        duration: 0.4, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };
  return (
    <motion.div 
      ref={ref} 
      initial="hidden" 
      animate={inView ? 'visible' : 'hidden'} 
      variants={variants} 
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const facilities = [
  { icon: <FlaskConical size={18} />, label: 'Science Lab' },
  // { icon: <FlaskConical size={18} />, label: 'Chemistry Laboratory' },
  // { icon: <FlaskConical size={18} />, label: 'Biology Laboratory' },
  { icon: <FlaskConical size={18} />, label: 'Maths Laboratory' },
  { icon: <Cpu size={18} />, label: 'Computer Labs' },
  { icon: <Library size={18} />, label: 'Library' },
  // { icon: <Monitor size={18} />, label: 'Audio Visual Room' },
  // { icon: <Monitor size={18} />, label: 'Smart Class Rooms' },
  { icon: <Eye size={18} />, label: 'CCTV Camera Surveillance' },
  { icon: <Leaf size={18} />, label: 'Beautiful Play Ground' },
  // { icon: <Users size={18} />, label: 'Eco Club, Media Club, Literary Club, Cultural Club' },
  // { icon: <Bike size={18} />, label: 'Cycle Stand for Staff & Students' },
  { icon: <Leaf size={18} />, label: 'Eco Friendly Environments' },
  { icon: <GraduationCap size={18} />, label: 'Well Qualified Faculty' },
];

const timings = [
  { period: 'April – May – June', time: '6:30 AM – 12:30 PM' },
  { period: 'July – Aug – Sept',  time: '7:00 AM – 1:00 PM'  },
  { period: 'Oct – Nov',          time: '8:00 AM – 2:00 PM'  },
  { period: 'Dec – Jan',          time: '9:00 AM – 3:00 PM'  },
  { period: 'Feb – March',        time: '8:00 AM – 2:00 PM'  },
];

const facultyStates = ['West Bengal', 'Assam', 'Bihar', 'Jharkhand', 'Odisha', 'Kerala'];

const academics = [
  { icon: <BookOpen size={26} />, title: 'CBSE Affiliation',    desc: 'Affiliated to CBSE since 2011. Medium of instruction is English.', color: 'from-blue-600 to-cyan-500',    glow: 'shadow-blue-500/20'   },
  { icon: <Heart size={26} />,    title: 'Value Education',     desc: 'Moral and Value education essential for character formation is imparted to all pupils.', color: 'from-rose-600 to-pink-500',    glow: 'shadow-rose-500/20'   },
  { icon: <Users size={26} />,    title: 'Language Curriculum', desc: 'English as primary medium; Sanskrit taught as third language from Class VI to VIII.', color: 'from-violet-600 to-purple-500', glow: 'shadow-violet-500/20' },
  { icon: <Trophy size={26} />,   title: 'Holistic Subjects',   desc: 'Computer Science, Drawing, Art & Craft, Health Education and Physical Education.', color: 'from-amber-600 to-yellow-500', glow: 'shadow-amber-500/20'  },
];

const summerUniforms = [
  {
    day: 'Monday & Tuesday',
    accentFrom: '#003366', accentTo: '#004a94',
    boys:  ['Brown full pants & Check Half shirt (I to X)', 'Black leather shoes & brown socks'],
    girls: ['Brown skirts & Check Half Skirt (I to V)', 'Brown Salwar & Check Suit (VI to X)', 'Black leather shoes & brown socks'],
  },
  {
    day: 'Wednesday & Saturday',
    accentFrom: '#003366', accentTo: '#004a94',
    boys:  ['White full pants & White Half shirt (I to X)', 'White P.T. Canvas shoes & white socks'],
    girls: ['White skirts & White Half shirt (I to V)', 'White Salwar & White Suit (VI to X)', 'White P.T. Canvas shoes & white socks'],
  },
  {
    day: 'Thursday & Friday',
    accentFrom: '#003366', accentTo: '#004a94',
    boys:  ['Navy blue full pants & White Half shirt (I to X)', 'Black leather shoes & blue socks'],
    girls: ['Navy blue skirts & White Half shirt (I to V)', 'Navy blue Salwar & White Suit (I to X)', 'Black leather shoes & blue socks'],
  },
];

const winterUniforms = [
  {
    day: 'Monday & Tuesday',
    accentFrom: '#003366', accentTo: '#004a94',
    boys:  ['Brown full pants & Check Shirt with Brown Sweater & Navy blue Blazer (I to X)', 'Black leather shoes & brown socks'],
    girls: ['Brown skirts, Brown leggings & Check Half shirt with Brown Sweater & Navy blue Blazer (I to V)', 'Brown Salwar & Check Suit with Brown Sweater & Navy blue Blazer (VI to X)'],
  },
  {
    day: 'Wednesday',
    accentFrom: '#003366', accentTo: '#004a94',
    boys:  ['White full pants & White Half shirt with Blue Sweater & Navy blue Blazer (I to X)'],
    girls: ['White skirts, White leggings & White Half shirt with Blue Sweater & Navy Blue Blazer (I to V)', 'White Salwar & White Suit with Blue Sweater (VI to X)', 'White P.T. Canvas shoes & white socks'],
  },
  {
    day: 'Thursday & Friday',
    accentFrom: '#003366', accentTo: '#004a94',
    boys:  ['Navy blue full pants & White Shirt with Blue Sweater & Navy Blue Blazer (I to X)', 'Black leather shoes & blue socks'],
    girls: ['Navy blue skirts, blue leggings & White Shirt with Blue Sweater & Navy Blue Blazer (I to V)', 'Navy blue Salwar & White Suit with Blue Sweater & Navy Blue Blazer (VI to X)', 'Black leather shoes & blue socks'],
  },
];

// ─── Uniform Card Component ───────────────────────────────────────────────────
const UniformCard = ({ u, i }: { u: any, i: number }) => (
  <FadeIn delay={i * 0.05} direction="up">
    <motion.div
      whileHover={{ y: -8, scale: 1.01, backgroundColor: '#fdfcf0' }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col group border border-gray-100"
    >
      {/* Header */}
      <div 
        className="px-8 py-6 text-white relative overflow-hidden" 
        style={{ background: `linear-gradient(135deg, ${u.accentFrom}, ${u.accentTo})` }}
      >
        <div className="relative z-10">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 block mb-1">Dress Day</span>
          <h3 className="text-2xl font-bold serif leading-tight">{u.day}</h3>
        </div>
        
        {/* Icon */}
        <div className="absolute top-6 right-8 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <Shirt size={24} />
        </div>
      </div>

      {/* Body */}
      <div className="p-8 flex-1 space-y-8">
        {/* Boys Section */}
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#003366] bg-[#FFD700]">
            Boys
          </div>
          <ul className="space-y-3">
            {u.boys.map((item: string, j: number) => (
              <li key={j} className="text-sm text-gray-600 flex items-start gap-3 leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#FFD700]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-100" />

        {/* Girls Section */}
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#003366] bg-[#FFD700]">
            Girls
          </div>
          <ul className="space-y-3">
            {u.girls.map((item: string, j: number) => (
              <li key={j} className="text-sm text-gray-600 flex items-start gap-3 leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#FFD700]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </FadeIn>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const AboutUs = () => {
  const [uniformSeason, setUniformSeason] = useState('summer');

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-gray-900 selection:bg-[#FFD700] selection:text-[#003366]">
      <SEO 
        title="About Us" 
        description="Learn about Loyola School Harnaut, a private Catholic school established by the Mokameh Parish Society, dedicated to holistic education."
        keywords="Loyola School Harnaut about, Catholic school Nalanda, CBSE school Harnaut history, Mokameh Parish Society"
      />

      {/* ── Background Pattern ── */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#003366 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* ══ HERO SECTION ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003366]/5 border border-[#003366]/10 text-[#003366] text-xs font-bold tracking-widest uppercase">
                  <Sparkles size={14} className="text-[#FFD700]" />
                  Excellence Since 2000
                </div>
                <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-[#003366]">
                  Our <br />
                  <span className="text-[#FFD700] italic serif">Heritage.</span>
                </h1>
                <p className="text-xl text-gray-500 max-w-lg leading-relaxed font-light">
                  A legacy of shaping competent, compassionate, and committed global citizens through holistic education.
                </p>
                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <p className="text-3xl font-bold text-[#003366]">24+</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Years</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div>
                    <p className="text-3xl font-bold text-[#003366]">100%</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Dedication</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div>
                    <p className="text-3xl font-bold text-[#003366]">CBSE</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Affiliated</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-[#FFD700]/10 rounded-[3rem] blur-2xl" />
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square group">
                  <img 
                    src={ourHeritage}
                    alt="School Campus" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl text-white"
                    >
                      <p className="text-xs font-bold tracking-widest uppercase mb-1 opacity-70">Location</p>
                      <p className="text-lg font-bold">Harnaut, Nalanda, Bihar</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ BENTO GRID: HISTORY & LEADERSHIP ═══════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {/* History Card (Large) */}
            <FadeIn className="md:col-span-2 lg:col-span-2 lg:row-span-2">
              <motion.div 
                whileHover={{ y: -8, scale: 1.01, backgroundColor: '#f8fafc' }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="bg-white border border-gray-200 rounded-[2.5rem] p-10 h-full shadow-sm transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-110 transition-all duration-700">
                  <Building2 size={200} />
                </div>
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#FFD700] mb-4">The Foundation</h2>
                <h3 className="text-4xl font-bold text-[#003366] mb-8 leading-tight">A Visionary <br />Beginning.</h3>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-[#003366]">Loyola School, Harnaut</strong> was established in the year 2000 by the Patna Diocesan Corporation, a Christian Minority School.
                  </p>
                  <p>
                    Born from the far-reaching vision of His Grace Benedict J. Osta S.J., and the generous contribution of Rev. Fr. Josef Renner, the school has become a beacon of hope in the region.
                  </p>
                  <p>
                    Affiliated to CBSE since 2011, we have produced thousands of young men and women of <span className="text-[#003366] font-bold">Character, Competence, and Commitment.</span>
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-widest">ESTD. 2000</motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-widest">CBSE 2011</motion.div>
                </div>
              </motion.div>
            </FadeIn>

            {/* Principal Card */}
            <FadeIn delay={0.05} className="md:col-span-1 lg:col-span-2">
              <motion.div 
                whileHover={{ y: -8, scale: 1.01, backgroundColor: '#002a54' }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="bg-[#003366] rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group cursor-pointer transition-colors duration-300"
              >
                <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                  <GraduationCap size={120} />
                </div>
                <div className="relative z-10">
                  <span className="px-3 py-1 rounded-full bg-[#FFD700] text-[#003366] text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Principal</span>
                  <h4 className="text-2xl font-bold mb-1">Fr. Anil Kumar Kandru</h4>
                  <p className="text-white/60 text-sm mb-6">Academic & Administrative Head</p>
                  <div className="h-px w-full bg-white/10 mb-6" />
                  <p className="text-sm text-white/80 leading-relaxed italic">
                    "Leading our academic excellence with vision and dedication to holistic growth."
                  </p>
                </div>
              </motion.div>
            </FadeIn>

            {/* Secretary Card */}
            <FadeIn delay={0.1} className="md:col-span-1 lg:col-span-1">
              <motion.div 
                whileHover={{ y: -8, scale: 1.01, backgroundColor: '#fff5f5' }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="bg-white border border-gray-200 rounded-[2.5rem] p-8 shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 mb-6"
                  >
                    <Shield size={24} />
                  </motion.div>
                  <h4 className="text-xl font-bold text-[#003366] mb-1">Fr. Jose Chirackal</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Secretary</p>
                </div>
                <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                  Managing administrative operations and strategic growth.
                </p>
              </motion.div>
            </FadeIn>

            {/* Affiliation Card */}
            <FadeIn delay={0.15} className="md:col-span-1 lg:col-span-1">
              <motion.div 
                whileHover={{ y: -8, scale: 1.01, filter: 'brightness(1.05)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="bg-gradient-to-br from-[#FFD700] to-[#e6c200] rounded-[2.5rem] p-8 shadow-lg flex flex-col justify-between group cursor-pointer transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-[#003366] mb-6 group-hover:rotate-12 transition-transform">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#003366] mb-1">CBSE Affiliated</h4>
                  <p className="text-[#003366]/60 text-xs font-bold uppercase tracking-widest">New Delhi</p>
                </div>
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mt-6 flex items-center gap-2 text-[#003366] font-bold text-xs"
                >
                  {/* Learn More <ArrowRight size={14} /> */}
                </motion.div>
              </motion.div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ══ MOTTO, VISION, MISSION (EDITORIAL STYLE) ═══════════════════════════ */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <FadeIn direction="up">
              <motion.div 
                whileHover={{ y: -8, scale: 1.01, backgroundColor: '#f0f7ff' }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm transition-all duration-300 h-full flex flex-col group border border-gray-100"
              >
                <div className="px-8 py-6 bg-[#003366] text-white flex items-center justify-between">
                  <h3 className="text-xl font-bold serif italic">The Motto</h3>
                  {/* <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FFD700] font-bold text-lg"></div> */}
                </div>
                <div className="p-8 space-y-4 flex-1">
                  <p className="text-2xl font-bold text-gray-900 leading-tight">
                    Holistic Education, <br />
                    Diverse Learning.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our commitment to all-round development ensures students are prepared for life's diverse challenges.
                  </p>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.05}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.01, backgroundColor: '#f0f7ff' }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm transition-all duration-300 h-full flex flex-col group border border-gray-100"
              >
                <div className="px-8 py-6 bg-[#003366] text-white flex items-center justify-between">
                  <h3 className="text-xl font-bold serif italic">Our Vision</h3>
                  {/* <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FFD700] font-bold text-lg"></div> */}
                </div>
                <div className="p-8 space-y-4 flex-1">
                  <p className="text-2xl font-bold text-gray-900 leading-tight">
                    Formation of Human persons committed to God and Country.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We strive to create an environment where every student can discover their potential and develop into responsible global citizens.
                  </p>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.01, backgroundColor: '#f0f7ff' }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm transition-all duration-300 h-full flex flex-col group border border-gray-100"
              >
                <div className="px-8 py-6 bg-[#003366] text-white flex items-center justify-between">
                  <h3 className="text-xl font-bold serif italic">The Mission</h3>
                  {/* <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FFD700] font-bold text-lg"></div> */}
                </div>
                <div className="p-8 space-y-4 flex-1">
                  <p className="text-gray-900 text-sm leading-relaxed">
                    Loyola School, Harnaut, is passionately committed to literate Harnaut and its surroundings from darkness of ignorance through education, transforming them into young women and men of <span className="font-bold text-[#003366]">Character, Competence, Conscience, Compassion and Commitment.</span>
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Character', 'Competence', 'Conscience', 'Compassion', 'Commitment'].map((c) => (
                      <motion.span 
                        key={c} 
                        whileHover={{ scale: 1.1, backgroundColor: '#003366', color: '#FFD700' }}
                        className="text-[10px] font-bold uppercase tracking-widest text-[#FFD700] bg-gray-50 px-2 py-1 rounded cursor-default transition-colors"
                      >
                        {c}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ══ ACADEMIC FRAMEWORK ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#FFD700] mb-4">Curriculum</h2>
            <h3 className="text-5xl font-bold text-[#003366] tracking-tight">Academic Framework.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academics.map((item, i) => (
              <React.Fragment key={i}>
                <FadeIn delay={i * 0.05} direction="up">
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.01, backgroundColor: '#ffffff' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full group"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[#003366] mb-3">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </FadeIn>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FACILITIES (TECHNICAL GRID) ═══════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#FFD700]">Infrastructure</h2>
                <h3 className="text-5xl font-bold text-[#003366] leading-[0.9]">Modern <br />Facilities.</h3>
                <p className="text-gray-500 leading-relaxed">
                  We provide state-of-the-art infrastructure to ensure our students have the best environment for learning and growth.
                </p>
                <div className="pt-6">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#003366]">Fully Equipped</p>
                      <p className="text-xs text-gray-400">Ready for all subjects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facilities.map((f, i) => (
                  <React.Fragment key={i}>
                    <FadeIn delay={i * 0.05} direction="up">
                      <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-[#FFD700] transition-colors group">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#003366] group-hover:text-[#FFD700] transition-all">
                          {f.icon}
                        </div>
                        <span className="text-sm font-bold text-gray-700">{f.label}</span>
                      </div>
                    </FadeIn>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TIMINGS & FACULTY ════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#003366] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <FadeIn direction="right">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFD700] flex items-center justify-center text-[#003366]">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">School Timings.</h3>
                </div>
                <div className="space-y-3">
                  {timings.map((t, i) => (
                    <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <span className="text-sm font-bold text-[#FFD700] uppercase tracking-widest">{t.period}</span>
                      <span className="text-lg font-bold text-white">{t.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFD700] flex items-center justify-center text-[#003366]">
                    <Users size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">Diverse Faculty</h3>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10">
                  <p className="text-white/60 text-sm mb-8 leading-relaxed">
                    Our well-qualified faculty members bring diverse perspectives and expertise from various states across India.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {facultyStates.map((state, i) => (
                      <div key={i} className="flex items-center gap-3 text-white font-bold text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                        {state}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ══ OFFICE HOURS ═════════════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            whileHover={{ y: -5, boxShadow: '0 40px 80px -15px rgba(0,0,0,0.08)' }}
            className="bg-white border border-gray-200 rounded-[3rem] overflow-hidden shadow-sm relative transition-all duration-500"
          >
            <div className="p-10 bg-[#003366] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Briefcase size={200} />
              </div>
              <div className="relative z-10">
                <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#FFD700] mb-2">Information</h2>
                <h3 className="text-4xl font-bold leading-tight">Office Hours & Class Timings.</h3>
              </div>
            </div>
            <div className="p-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gray-500 leading-relaxed mb-8">
                  We maintain open communication with parents and ensure a structured environment for our students.
                </p>
                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-all"
                >
                  <h4 className="text-sm font-bold text-[#003366] uppercase tracking-widest mb-2">For Parents</h4>
                  <p className="text-gray-600">Available during the First 2 Periods & Last 2 Periods of the school day.</p>
                </motion.div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-8 h-8 rounded-lg bg-[#FFD700] flex items-center justify-center text-[#003366]"
                  >
                    <Briefcase size={18} />
                  </motion.div>
                  <h4 className="text-xl font-bold text-[#003366]">Monday to Saturday</h4>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {timings.map((t, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10, backgroundColor: '#f9fafb', borderColor: '#FFD700' }}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-100 transition-all cursor-default"
                    >
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.period}</span>
                      <span className="text-sm font-bold text-[#003366]">{t.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ SCHOOL UNIFORMS (PREMIUM TOGGLE) ══════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#FFD700]">Dress Code</h2>
              <h3 className="text-5xl font-bold text-[#003366] tracking-tight">School Uniforms.</h3>
            </div>
            <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm border border-gray-200 gap-1">
              {[
                { key: 'summer', label: 'Summer', icon: <Sun size={16} /> },
                { key: 'winter', label: 'Winter', icon: <Snowflake size={16} /> },
              ].map((s) => (
                <button 
                  key={s.key} 
                  onClick={() => setUniformSeason(s.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                    uniformSeason === s.key ? 'bg-[#003366] text-[#FFD700] shadow-lg' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {s.icon}{s.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={uniformSeason}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(uniformSeason === 'summer' ? summerUniforms : winterUniforms).map((u, i) => (
                <React.Fragment key={`${uniformSeason}-${i}`}>
                  <UniformCard u={u} i={i} />
                </React.Fragment>
              ))}
            </motion.div>
          </AnimatePresence>

          <FadeIn delay={0.3} className="mt-12">
            <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
              <p className="text-sm text-gray-500 leading-relaxed italic">
                "The School endeavours to inculcate the habit of cleanliness and neatness in students. Parents are requested to co-operate with us."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ FINAL PURPOSE BANNER ══════════════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-[#003366] rounded-[3rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 bg-[#FFD700] rounded-2xl flex items-center justify-center mx-auto shadow-xl"
                >
                  <GraduationCap size={28} className="text-[#003366]" />
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Our Purpose.</h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                  To impart a sound, <span className="text-[#FFD700] font-bold">moral, intellectual and physical education</span>; to train pupils to be useful and loyal citizens of India; and to help them become <span className="text-[#FFD700] font-bold">agents of needed social change</span> in society.
                </p>
                <div className="pt-4">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-px w-20 bg-[#FFD700] mx-auto origin-center" 
                  />
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;

