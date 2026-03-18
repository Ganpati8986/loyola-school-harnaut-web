// import React from 'react';
// import SEO from '../components/SEO';
// import { motion } from 'motion/react';
// import { BookOpen, Users, Trophy, Heart, Sparkles } from 'lucide-react';

// const AboutUs = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
//   };

//   return (
//     <div className="py-20 bg-gray-50 min-h-screen relative overflow-hidden">
//       <SEO 
//         title="About Us" 
//         description="Learn about Loyola School Harnaut, a private Catholic school established by the Mokameh Parish Society, dedicated to holistic education."
//         keywords="Loyola School Harnaut about, Catholic school Nalanda, CBSE school Harnaut history, Mokameh Parish Society"
//       />

//       {/* Animated Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
//         <motion.div 
//           animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-20 left-10 w-64 h-64 bg-[#FFD700] rounded-full blur-[100px]" 
//         />
//         <motion.div 
//           animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
//           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//           className="absolute top-40 right-10 w-96 h-96 bg-[#003366] rounded-full blur-[120px]" 
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         {/* Header Section */}
//         <motion.header 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="text-center mb-24 pt-10"
//         >
//           <motion.div variants={itemVariants} className="flex justify-center mb-4">
//             <span className="bg-[#003366]/10 text-[#003366] px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase flex items-center gap-2">
//               <Sparkles size={16} className="text-[#FFD700]" />
//               Welcome to our school
//             </span>
//           </motion.div>
//           <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-[#003366] mb-6 uppercase tracking-tight font-serif drop-shadow-sm">
//             About <span className="text-[#FFD700]">Us</span>
//           </motion.h1>
//           <motion.div variants={itemVariants} className="w-32 h-1.5 bg-gradient-to-r from-[#003366] via-[#FFD700] to-[#003366] mx-auto rounded-full mb-8" />
//           <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
//             Nurturing minds, building character, and shaping the future leaders of tomorrow through holistic education.
//           </motion.p>
//         </motion.header>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
//             className="space-y-8 text-lg text-gray-700 leading-relaxed bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative"
//           >
//             <div className="absolute -left-4 -top-4 text-6xl text-[#FFD700] opacity-50 font-serif">"</div>
//             <p className="relative z-10">
//               <strong className="text-[#003366] font-bold text-2xl font-serif">Loyola School, Harnaut</strong>, is a private school established by the Catholic Church, Harnaut, which is a unit of Mokameh Parish Society, under the Archdiocese of Patna, for the education of boys and girls up to the Senior Secondary level. It is open to all without distinction of caste or creed.
//             </p>
//             <p className="relative z-10">
//               The purpose of the institution is to impart to its pupils a sound, moral, intellectual and physical education, to train them to be useful and loyal citizens of India and to help them to become agents of needed social change in the society.
//             </p>
//             <p className="relative z-10">
//               Realizing that education is an all-round development of pupil, the institution constantly endeavours to direct to this and special emphasis is given on Co-curricular activities, character formation, academic excellence and social responsibilities.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
//             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 1, type: "spring", bounce: 0.3 }}
//             className="relative group"
//           >
//             <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 transform transition-transform duration-700 group-hover:scale-[1.02]">
//               <img 
//                 src="https://picsum.photos/seed/loyolaschool/800/600" 
//                 alt="Loyola School Campus" 
//                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//                 referrerPolicy="no-referrer"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/40 to-transparent flex items-end p-8 opacity-90">
//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.5, duration: 0.5 }}
//                 >
//                   <h3 className="text-white text-3xl font-bold font-serif mb-2">Excellence in Education</h3>
//                   <p className="text-[#FFD700] font-medium tracking-wider uppercase text-sm">Since Inception</p>
//                 </motion.div>
//               </div>
//             </div>
//             {/* Decorative background element */}
//             <div className="absolute -top-6 -right-6 w-full h-full border-4 border-[#FFD700] rounded-3xl z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
//             <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#003366] rounded-3xl z-0 transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2" />
//           </motion.div>
//         </div>

//         {/* Academic Details Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
//           className="bg-[#002147] rounded-[3rem] shadow-2xl p-10 md:p-16 border border-white/10 mb-24 relative overflow-hidden text-white"
//         >
//           {/* Decorative background */}
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

//           <div className="relative z-10">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Academic Framework</h2>
//               <div className="w-20 h-1 bg-[#FFD700] mx-auto rounded-full" />
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//               {[
//                 {
//                   icon: <BookOpen size={28} />,
//                   title: "CBSE Affiliation",
//                   desc: "The school got affiliated to the Central Board of Secondary Education in the year 2011 and follows the C.B.S.E. syllabus. The medium of instruction is English.",
//                   color: "text-blue-400",
//                   bg: "bg-blue-400/10"
//                 },
//                 {
//                   icon: <Heart size={28} />,
//                   title: "Value Education",
//                   desc: "Moral and Value education, which is essential for character formation, is imparted to all pupils to build a strong ethical foundation.",
//                   color: "text-green-400",
//                   bg: "bg-green-400/10"
//                 },
//                 {
//                   icon: <Users size={28} />,
//                   title: "Language Curriculum",
//                   desc: "While English is the primary medium, Sanskrit is taught as a third language from class VI to VIII, promoting cultural linguistic heritage.",
//                   color: "text-purple-400",
//                   bg: "bg-purple-400/10"
//                 },
//                 {
//                   icon: <Trophy size={28} />,
//                   title: "Holistic Subjects",
//                   desc: "Computer science, Drawing, Art & Craft, Health Education, and Physical Education are integral parts of our comprehensive curriculum.",
//                   color: "text-orange-400",
//                   bg: "bg-orange-400/10"
//                 }
//               ].map((item, index) => (
//                 <motion.div 
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
//                   className="flex items-start gap-5 group"
//                 >
//                   <div className={`${item.bg} ${item.color} p-4 rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors">{item.title}</h3>
//                     <p className="text-gray-300 leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default AboutUs;



// import React, { useRef } from 'react';
// import { motion, useInView } from 'motion/react';
// import {
//   BookOpen, Users, Trophy, Heart, Sparkles, Clock, Monitor,
//   FlaskConical, Library, Eye, Cpu, Leaf, Bike, Star,
//   MapPin, GraduationCap, Building2, Shield, Briefcase, Shirt
// } from 'lucide-react';

// // --- Reusable animation wrapper ---
// const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: false, margin: '-80px' });
//   const variants = {
//     hidden: {
//       opacity: 0,
//       y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
//       x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
//       scale: direction === 'scale' ? 0.85 : 1,
//     },
//     visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
//   };
//   return (
//     <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} className={className}>
//       {children}
//     </motion.div>
//   );
// };

// // --- Data ---
// const facilities = [
//   { icon: <FlaskConical size={18} />, label: 'Physics Laboratory' },
//   { icon: <FlaskConical size={18} />, label: 'Chemistry Laboratory' },
//   { icon: <FlaskConical size={18} />, label: 'Biology Laboratory' },
//   { icon: <FlaskConical size={18} />, label: 'Maths Laboratory' },
//   { icon: <Cpu size={18} />, label: 'Well Furnished Computer Labs' },
//   { icon: <Library size={18} />, label: 'Well Established Library' },
//   { icon: <Monitor size={18} />, label: 'Audio Visual Room' },
//   { icon: <Monitor size={18} />, label: 'Smart Class Rooms' },
//   { icon: <Eye size={18} />, label: 'CCTV Camera Surveillance' },
//   { icon: <Leaf size={18} />, label: 'Beautiful Play Ground' },
//   { icon: <Users size={18} />, label: 'Eco Club, Media Club, Literary Club, Cultural Club' },
//   { icon: <Bike size={18} />, label: 'Cycle Stand for Staff & Students' },
//   { icon: <Leaf size={18} />, label: 'Eco Friendly Environments' },
//   { icon: <GraduationCap size={18} />, label: 'Well Qualified Faculty' },
// ];

// const timings = [
//   { period: 'April – May – June', time: '6:30 AM – 12:30 PM' },
//   { period: 'July – Aug – Sept', time: '7:00 AM – 1:00 PM' },
//   { period: 'Oct – Nov', time: '8:00 AM – 2:00 PM' },
//   { period: 'Dec – Jan', time: '9:00 AM – 3:00 PM' },
//   { period: 'Feb – March', time: '8:00 AM – 2:00 PM' },
// ];

// const uniforms = [
//   {
//     day: 'Monday & Tuesday',
//     season: 'Summer',
//     accentFrom: '#92400e',
//     accentTo: '#d97706',
//     bgCard: '#fffbeb',
//     borderCol: '#fde68a',
//     boys: ['Brown full pants & Check Half shirt (I to X)', 'Black leather shoes & brown socks'],
//     girls: ['Brown skirts & Check Half Skirt (I to V)', 'Brown Salwar & Check Suit (VI to X)', 'Black leather shoes & brown socks'],
//   },
//   {
//     day: 'Wednesday & Saturday',
//     season: 'Summer',
//     accentFrom: '#0369a1',
//     accentTo: '#38bdf8',
//     bgCard: '#f0f9ff',
//     borderCol: '#bae6fd',
//     boys: ['White full pants & White Half shirt (I to X)', 'White P.T. Canvas shoes & white socks'],
//     girls: ['White skirts & White Half shirt (I to V)', 'White Salwar & White Suit (VI to X)', 'White P.T. Canvas shoes & white socks'],
//   },
// ];

// const facultyStates = ['West Bengal', 'Assam', 'Bihar', 'Jharkhand', 'Odisha', 'Kerala'];

// const academics = [
//   {
//     icon: <BookOpen size={26} />,
//     title: 'CBSE Affiliation',
//     desc: 'Affiliated to Central Board of Secondary Education since 2011. Medium of instruction is English.',
//     color: 'from-blue-500 to-cyan-400',
//     glow: 'shadow-blue-500/30',
//   },
//   {
//     icon: <Heart size={26} />,
//     title: 'Value Education',
//     desc: 'Moral and Value education essential for character formation is imparted to all pupils.',
//     color: 'from-rose-500 to-pink-400',
//     glow: 'shadow-rose-500/30',
//   },
//   {
//     icon: <Users size={26} />,
//     title: 'Language Curriculum',
//     desc: 'English as primary medium; Sanskrit taught as third language from Class VI to VIII.',
//     color: 'from-violet-500 to-purple-400',
//     glow: 'shadow-violet-500/30',
//   },
//   {
//     icon: <Trophy size={26} />,
//     title: 'Holistic Subjects',
//     desc: 'Computer Science, Drawing, Art & Craft, Health Education and Physical Education are integral.',
//     color: 'from-amber-500 to-yellow-400',
//     glow: 'shadow-amber-500/30',
//   },
// ];

// // ─── Main Component ───────────────────────────────────────────────────────────
// const AboutUs = () => {
//   return (
//     <div className="bg-[#f8f6f0] min-h-screen font-sans overflow-hidden">
//       {/* ── Floating Background Orbs ── */}
//       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//         <motion.div
//           animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//           className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#003366]/8 rounded-full blur-[120px]"
//         />
//         <motion.div
//           animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
//           className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-[#FFD700]/10 rounded-full blur-[140px]"
//         />
//         <motion.div
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
//           className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-[#003366]/6 rounded-full blur-[100px]"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

//         {/* ══ HERO HEADER ══════════════════════════════════════════════════════ */}
//         <motion.header
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-center mb-24 pt-8"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-[#003366]/10 text-[#003366] px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
//           >
//             <Sparkles size={14} className="text-[#FFD700]" />
//             Established in 2000
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="text-6xl sm:text-7xl md:text-8xl font-black text-[#003366] uppercase tracking-tighter leading-none mb-4"
//             style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
//           >
//             About <span className="text-[#FFD700] drop-shadow-[0_4px_12px_rgba(255,215,0,0.4)]">Us</span>
//           </motion.h1>

//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
//             className="w-40 h-1.5 bg-gradient-to-r from-[#003366] via-[#FFD700] to-[#003366] mx-auto rounded-full mb-8 origin-center"
//           />

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.7 }}
//             className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light"
//           >
//             Shaping competent, compassionate & committed citizens since the year 2000.
//           </motion.p>
//         </motion.header>

//         {/* ══ PROSPECTUS INFO STRIP ════════════════════════════════════════════ */}
//         <FadeIn className="mb-16">
//           <motion.div
//             whileHover={{ scale: 1.01 }}
//             transition={{ duration: 0.3 }}
//             className="bg-gradient-to-r from-[#003366] via-[#004080] to-[#003366] rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 shadow-xl"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-lg bg-[#FFD700] flex items-center justify-center shrink-0">
//                 <BookOpen size={16} className="text-[#003366]" />
//               </div>
//               <span className="text-white font-bold text-sm tracking-wide uppercase">PROSPECTUS</span>
//             </div>
//             <div className="w-px h-6 bg-white/20 hidden sm:block" />
//             <span className="text-[#FFD700] font-bold text-sm tracking-widest">ESTD. 2000</span>
//             <div className="w-px h-6 bg-white/20 hidden sm:block" />
//             <span className="text-white/80 text-sm font-medium">Affiliated to CBSE, New Delhi</span>
//             <div className="w-px h-6 bg-white/20 hidden sm:block" />
//             <span className="text-white/80 text-sm font-medium">Nursery to 10+2</span>
//           </motion.div>
//         </FadeIn>

//         {/* ══ MOTTO · VISION · MISSION ═════════════════════════════════════════ */}
//         <div className="mb-24">
//           {/* Motto + Vision cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             {/* MOTTO */}
//             <FadeIn direction="right">
//               <motion.div
//                 whileHover={{ y: -5, boxShadow: '0 25px 60px rgba(0,51,102,0.15)' }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 h-full"
//               >
//                 <div className="bg-gradient-to-r from-[#8B0000] to-[#cc1111] px-6 py-4 flex items-center gap-3">
//                   <div className="w-9 h-9 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0">
//                     <Star size={18} className="text-[#8B0000]" fill="#8B0000" />
//                   </div>
//                   <h3 className="text-xl font-black text-[#FFD700] tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif' }}>
//                     Motto
//                   </h3>
//                 </div>
//                 <div className="p-8 flex flex-col items-center justify-center text-center gap-4">
//                   {['Holistic Education', 'Diverse Learning'].map((line, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 15 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: false }}
//                       transition={{ delay: i * 0.15 + 0.2 }}
//                       className="text-2xl md:text-3xl font-black text-[#003366]"
//                       style={{ fontFamily: 'Georgia, serif' }}
//                     >
//                       {line}
//                     </motion.div>
//                   ))}
//                   <motion.div
//                     initial={{ scaleX: 0 }}
//                     whileInView={{ scaleX: 1 }}
//                     viewport={{ once: false }}
//                     transition={{ delay: 0.4, duration: 0.6 }}
//                     className="w-16 h-1 bg-gradient-to-r from-[#8B0000] to-[#FFD700] rounded-full origin-center mt-2"
//                   />
//                 </div>
//               </motion.div>
//             </FadeIn>

//             {/* OUR VISION */}
//             <FadeIn direction="left" delay={0.1}>
//               <motion.div
//                 whileHover={{ y: -5, boxShadow: '0 25px 60px rgba(0,51,102,0.15)' }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 h-full"
//               >
//                 <div className="bg-gradient-to-r from-[#8B0000] to-[#cc1111] px-6 py-4 flex items-center gap-3">
//                   <div className="w-9 h-9 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0">
//                     <Eye size={18} className="text-[#8B0000]" />
//                   </div>
//                   <h3 className="text-xl font-black text-[#FFD700] tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif' }}>
//                     Our Vision
//                   </h3>
//                 </div>
//                 <div className="p-8 flex items-center justify-center text-center">
//                   <motion.p
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: false }}
//                     transition={{ delay: 0.2, duration: 0.6 }}
//                     className="text-xl md:text-2xl font-bold text-[#003366] leading-relaxed"
//                     style={{ fontFamily: 'Georgia, serif' }}
//                   >
//                     The formation of Human person committed to{' '}
//                     <span className="text-[#8B0000]">God</span> and{' '}
//                     <span className="text-[#8B0000]">Country</span>
//                   </motion.p>
//                 </div>
//               </motion.div>
//             </FadeIn>
//           </div>

//           {/* MISSION STATEMENT full-width banner */}
//           <FadeIn direction="up" delay={0.1}>
//             <motion.div
//               whileHover={{ scale: 1.005 }}
//               transition={{ duration: 0.3 }}
//               className="bg-gradient-to-br from-[#001a33] via-[#002147] to-[#003366] rounded-[2rem] overflow-hidden shadow-2xl relative"
//             >
//               {/* Animated shimmer lines */}
//               <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {[...Array(3)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     animate={{ x: ['-100%', '200%'] }}
//                     transition={{ duration: 4 + i * 1.5, repeat: Infinity, ease: 'linear', delay: i * 1.2 }}
//                     className="absolute h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent w-full"
//                     style={{ top: `${25 + i * 25}%` }}
//                   />
//                 ))}
//               </div>

//               {/* Header bar */}
//               <div className="bg-[#FFD700] px-8 py-4 flex items-center gap-3">
//                 <div className="w-8 h-8 bg-[#003366] rounded-lg flex items-center justify-center">
//                   <GraduationCap size={18} className="text-[#FFD700]" />
//                 </div>
//                 <h3 className="text-[#003366] font-black text-lg tracking-[0.15em] uppercase" style={{ fontFamily: 'Georgia, serif' }}>
//                   Our Mission Statement
//                 </h3>
//               </div>

//               <div className="px-8 md:px-12 py-10 relative z-10">
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: false }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   className="text-white/90 text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto"
//                 >
//                   Loyola School, Harnaut, is passionately committed to literate Harnaut and its surroundings
//                   from darkness of ignorance through education, transforming them with the help of the elders
//                   of the society into young women and men of{' '}
//                   <span className="text-[#FFD700] font-bold">Character</span>,{' '}
//                   <span className="text-[#FFD700] font-bold">Competence</span>,{' '}
//                   <span className="text-[#FFD700] font-bold">Conscience</span>,{' '}
//                   <span className="text-[#FFD700] font-bold">Compassion</span> and{' '}
//                   <span className="text-[#FFD700] font-bold">Commitment</span> and to make a significant and
//                   lasting impact on the educational scenario of the society.
//                 </motion.p>

//                 {/* 5 C pills */}
//                 <div className="flex flex-wrap justify-center gap-3 mt-8">
//                   {['Character', 'Competence', 'Conscience', 'Compassion', 'Commitment'].map((c, i) => (
//                     <motion.span
//                       key={c}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: false }}
//                       transition={{ delay: i * 0.1 + 0.4 }}
//                       whileHover={{ scale: 1.08, backgroundColor: '#FFD700', color: '#003366' }}
//                       className="px-4 py-2 rounded-full text-sm font-bold border border-[#FFD700]/40 text-[#FFD700] cursor-default transition-all duration-200"
//                     >
//                       {c}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </FadeIn>
//         </div>

//         {/* ══ ABOUT + LEADERSHIP ═══════════════════════════════════════════════ */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-24 items-start">

//           {/* Left: Story Text */}
//           <FadeIn direction="right" className="lg:col-span-3">
//             <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
//               <div className="absolute -left-2 top-8 text-[120px] leading-none text-[#FFD700]/20 font-serif select-none">"</div>
//               <div className="relative z-10 space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
//                 <p>
//                   <strong className="text-[#003366] text-xl md:text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
//                     Loyola School, Harnaut
//                   </strong>{' '}
//                   was established in the year <span className="font-semibold text-[#003366]">2000</span> by the{' '}
//                   <span className="font-semibold">Patna Diocesan Corporation</span>, a charitable registered society as a{' '}
//                   <span className="font-semibold">Christian Minority School</span>.
//                 </p>
//                 <p>
//                   With the far reaching vision of <span className="font-semibold">His Grace Benedict J. Osta S.J.</span>, from
//                   a generous contribution of <span className="font-semibold">Rev. Fr. Josef Renner</span> and under the able
//                   supervision of <span className="font-semibold">Rev. Fr. Andrews Thambi</span>, Loyola School came into
//                   being with the continuous support of the Religious of the Assumption.
//                 </p>
//                 <p>
//                   With the sole motive of <em>all-round development of students</em>, Loyola School has been in the formation
//                   of good, effective and creative citizens since 2000. The secretaries and principals have made a history at
//                   Harnaut in the field of Education.
//                 </p>
//                 <p>
//                   In <span className="font-semibold text-[#003366]">2011</span>, Loyola School was affiliated to{' '}
//                   <span className="font-semibold">C.B.S.E., New Delhi</span>. Since then, Loyola School has produced thousands
//                   of young men & women of <span className="text-[#003366] font-bold">Competence, Compassion and Commitment</span>.
//                 </p>
//                 <p>
//                   The institution is <strong>open to all without distinction of caste or creed</strong> and is a unit of{' '}
//                   <span className="font-semibold">Mokameh Parish Society</span>, under the Archdiocese of Patna.
//                 </p>
//               </div>

//               {/* 3 C badges */}
//               <div className="flex flex-wrap gap-3 mt-8 relative z-10">
//                 {['Competence', 'Compassion', 'Commitment'].map((c, i) => (
//                   <motion.span
//                     key={c}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: false }}
//                     transition={{ delay: i * 0.15 + 0.3 }}
//                     whileHover={{ scale: 1.05 }}
//                     className="px-4 py-2 rounded-full text-sm font-bold bg-[#003366] text-[#FFD700] tracking-wide shadow-md"
//                   >
//                     {c}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           </FadeIn>

//           {/* Right: Leadership Cards */}
//           <FadeIn direction="left" delay={0.15} className="lg:col-span-2">
//             <div className="space-y-6">
//               {/* Principal */}
//               <motion.div
//                 whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,51,102,0.15)' }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex items-center gap-5"
//               >
//                 <div className="relative shrink-0">
//                   <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#003366] to-[#0066cc] flex items-center justify-center shadow-lg">
//                     <GraduationCap size={36} className="text-white" />
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center">
//                     <Star size={12} className="text-[#003366]" fill="#003366" />
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold tracking-widest uppercase text-[#FFD700] bg-[#003366] px-2 py-0.5 rounded-full inline-block mb-1">Principal</p>
//                   <h3 className="text-xl font-black text-[#003366]">Fr. Asit Lakra</h3>
//                   <p className="text-sm text-gray-500 mt-0.5">Academic & Administrative Head</p>
//                 </div>
//               </motion.div>

//               {/* Secretary */}
//               <motion.div
//                 whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,51,102,0.15)' }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex items-center gap-5"
//               >
//                 <div className="relative shrink-0">
//                   <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8B0000] to-[#cc2222] flex items-center justify-center shadow-lg">
//                     <Shield size={36} className="text-white" />
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center">
//                     <Star size={12} className="text-[#003366]" fill="#003366" />
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold tracking-widest uppercase text-white bg-[#8B0000] px-2 py-0.5 rounded-full inline-block mb-1">Secretary</p>
//                   <h3 className="text-xl font-black text-[#003366]">Fr. Jose Chirackal</h3>
//                   <p className="text-sm text-gray-500 mt-0.5">Administrative Secretary</p>
//                 </div>
//               </motion.div>

//               {/* Affiliation badge */}
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-gradient-to-br from-[#003366] to-[#001a33] rounded-3xl p-6 shadow-xl text-white text-center"
//               >
//                 <Building2 size={28} className="mx-auto mb-2 text-[#FFD700]" />
//                 <p className="text-xs tracking-widest uppercase text-[#FFD700] font-bold mb-1">Affiliated To</p>
//                 <p className="text-xl font-black">C.B.S.E., New Delhi</p>
//                 <p className="text-sm text-gray-300 mt-1">Since 2011 · English Medium</p>
//               </motion.div>
//             </div>
//           </FadeIn>
//         </div>

//         {/* ══ ACADEMIC FRAMEWORK ═══════════════════════════════════════════════ */}
//         <FadeIn className="mb-24">
//           <div className="bg-gradient-to-br from-[#001a33] via-[#002147] to-[#003366] rounded-[3rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
//             <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD700]/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-[80px]" />
//             <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-[80px]" />

//             <div className="relative z-10">
//               <div className="text-center mb-12">
//                 <p className="text-[#FFD700] text-xs font-bold tracking-[0.25em] uppercase mb-3">Our Curriculum</p>
//                 <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
//                   Academic Framework
//                 </h2>
//                 <div className="w-16 h-1 bg-[#FFD700] mx-auto rounded-full" />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
//                 {academics.map((item, i) => (
//                   <div key={i}>
//                     <FadeIn delay={i * 0.12} direction="up">
//                       <motion.div
//                         whileHover={{ y: -4 }}
//                         className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 shadow-lg ${item.glow}`}
//                       >
//                         <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
//                           {item.icon}
//                         </div>
//                         <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//                         <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//                       </motion.div>
//                     </FadeIn>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </FadeIn>

//         {/* ══ FACILITIES ═══════════════════════════════════════════════════════ */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
//           <FadeIn direction="right">
//             <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 h-full">
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="w-10 h-10 rounded-xl bg-[#003366] flex items-center justify-center">
//                   <Star size={20} className="text-[#FFD700]" fill="#FFD700" />
//                 </div>
//                 <h2 className="text-3xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>
//                   Ultra Modern Facilities
//                 </h2>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {facilities.map((f, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -15 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: false }}
//                     transition={{ delay: i * 0.05, duration: 0.4 }}
//                     whileHover={{ x: 4 }}
//                     className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#003366]/5 transition-colors duration-200 group cursor-default"
//                   >
//                     <span className="text-[#003366] mt-0.5 shrink-0 group-hover:text-[#FFD700] transition-colors">
//                       {f.icon}
//                     </span>
//                     <span className="text-sm text-gray-700 font-medium leading-snug">{f.label}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </FadeIn>

//           {/* School Timings + Faculty */}
//           <div className="space-y-8">
//             <FadeIn direction="left" delay={0.1}>
//               <div className="bg-gradient-to-br from-[#003366] to-[#001a33] rounded-[2.5rem] p-8 shadow-xl text-white relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
//                 <div className="flex items-center gap-3 mb-7 relative z-10">
//                   <div className="w-10 h-10 rounded-xl bg-[#FFD700] flex items-center justify-center">
//                     <Clock size={20} className="text-[#003366]" />
//                   </div>
//                   <h2 className="text-2xl font-black" style={{ fontFamily: 'Georgia, serif' }}>School Timings</h2>
//                 </div>
//                 <div className="space-y-3 relative z-10">
//                   {timings.map((t, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: 20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: false }}
//                       transition={{ delay: i * 0.1 + 0.2 }}
//                       className="flex items-center justify-between bg-white/8 border border-white/10 rounded-xl px-4 py-3"
//                     >
//                       <span className="text-sm font-bold text-[#FFD700]">{t.period}</span>
//                       <span className="text-sm font-semibold text-white">{t.time}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>

//             <FadeIn direction="left" delay={0.2}>
//               <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
//                 <div className="flex items-center gap-3 mb-7">
//                   <div className="w-10 h-10 rounded-xl bg-[#FFD700] flex items-center justify-center">
//                     <MapPin size={20} className="text-[#003366]" />
//                   </div>
//                   <h2 className="text-2xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>
//                     Faculty From
//                   </h2>
//                 </div>
//                 <div className="grid grid-cols-2 gap-3">
//                   {facultyStates.map((state, i) => (
//                     <motion.div
//                       key={state}
//                       initial={{ opacity: 0, scale: 0.85 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: false }}
//                       transition={{ delay: i * 0.08 + 0.2 }}
//                       whileHover={{ scale: 1.04, backgroundColor: '#003366', color: '#FFD700' }}
//                       className="flex items-center gap-2 bg-[#003366]/5 text-[#003366] font-bold text-sm px-4 py-3 rounded-xl cursor-default transition-all duration-200"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-[#FFD700] shrink-0" />
//                       {state}
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//           </div>
//         </div>

//         {/* ══ OFFICE HOURS ═════════════════════════════════════════════════════ */}
//         <FadeIn className="mb-24">
//           <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700]/8 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
//             <div className="relative z-10">
//               {/* Header */}
//               <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#003366] to-[#0066cc] flex items-center justify-center shadow-lg shrink-0">
//                   <Briefcase size={26} className="text-[#FFD700]" />
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFD700] bg-[#003366] px-3 py-1 rounded-full inline-block mb-1">Information</p>
//                   <h2 className="text-3xl md:text-4xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>
//                     Office Hours & Class Timings
//                   </h2>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Office Hours */}
//                 <motion.div
//                   whileHover={{ y: -3 }}
//                   className="bg-gradient-to-br from-[#003366] to-[#001a33] rounded-2xl p-7 text-white relative overflow-hidden"
//                 >
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
//                   <div className="flex items-center gap-3 mb-5 relative z-10">
//                     <div className="w-9 h-9 bg-[#FFD700] rounded-xl flex items-center justify-center">
//                       <Briefcase size={18} className="text-[#003366]" />
//                     </div>
//                     <h3 className="text-xl font-black" style={{ fontFamily: 'Georgia, serif' }}>Office Hours</h3>
//                   </div>
//                   <div className="relative z-10 space-y-3">
//                     <div className="bg-white/10 border border-white/15 rounded-xl p-4">
//                       <p className="text-[#FFD700] font-bold text-sm mb-1">Monday to Saturday</p>
//                       <p className="text-white font-semibold">For Parents: First 2 Periods & Last 2 Periods</p>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Class Timings */}
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-9 h-9 bg-[#FFD700] rounded-xl flex items-center justify-center">
//                       <Clock size={18} className="text-[#003366]" />
//                     </div>
//                     <h3 className="text-xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>Class Timings</h3>
//                   </div>
//                   {timings.map((t, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: 20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: false }}
//                       transition={{ delay: i * 0.08 + 0.1 }}
//                       whileHover={{ x: 4, backgroundColor: '#003366' }}
//                       className="flex items-center justify-between bg-[#003366]/5 border border-[#003366]/10 rounded-xl px-4 py-3 group transition-all duration-200"
//                     >
//                       <span className="text-sm font-bold text-[#003366] group-hover:text-[#FFD700] transition-colors">{t.period}</span>
//                       <span className="text-sm font-semibold text-gray-600 group-hover:text-white transition-colors">{t.time}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </FadeIn>

//         {/* ══ SCHOOL UNIFORMS ══════════════════════════════════════════════════ */}
//         <FadeIn className="mb-24">
//           <div className="relative">
//             {/* Section Header */}
//             <div className="text-center mb-10">
//               <div className="inline-flex items-center gap-2 bg-[#003366]/10 text-[#003366] px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4">
//                 <Shirt size={14} className="text-[#FFD700]" />
//                 Dress Code
//               </div>
//               <h2 className="text-4xl md:text-5xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>
//                 School <span className="text-[#FFD700]">Uniforms</span>
//               </h2>
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 viewport={{ once: false }}
//                 transition={{ duration: 0.7, ease: 'easeOut' }}
//                 className="w-24 h-1 bg-gradient-to-r from-[#003366] via-[#FFD700] to-[#003366] mx-auto rounded-full mt-4 origin-center"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {uniforms.map((u, i) => (
//                 <div key={i}>
//                 <FadeIn delay={i * 0.15} direction={i % 2 === 0 ? 'right' : 'left'}>
//                   <motion.div
//                     whileHover={{ y: -5, boxShadow: '0 25px 60px rgba(0,51,102,0.12)' }}
//                     transition={{ duration: 0.3 }}
//                     className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100"
//                   >
//                     {/* Card header gradient */}
//                     <div
//                       className="p-6 text-white relative overflow-hidden"
//                       style={{ background: `linear-gradient(135deg, ${u.accentFrom}, ${u.accentTo})` }}
//                     >
//                       <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
//                       <div className="relative z-10 flex items-center justify-between">
//                         <div>
//                           <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-1">{u.season} Uniform</p>
//                           <h3 className="text-xl font-black">{u.day}</h3>
//                         </div>
//                         <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
//                           <Shirt size={24} className="text-white" />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Boys */}
//                     <div className="p-6 border-b border-gray-100">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full text-white"
//                           style={{ background: u.accentFrom }}>Boys</span>
//                       </div>
//                       <ul className="space-y-2">
//                         {u.boys.map((item, j) => (
//                           <motion.li
//                             key={j}
//                             initial={{ opacity: 0, x: -10 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: false }}
//                             transition={{ delay: j * 0.08 + 0.2 }}
//                             className="flex items-start gap-2 text-sm text-gray-700"
//                           >
//                             <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: u.accentFrom }} />
//                             {item}
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Girls */}
//                     <div className="p-6">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full text-white"
//                           style={{ background: u.accentTo }}>Girls</span>
//                       </div>
//                       <ul className="space-y-2">
//                         {u.girls.map((item, j) => (
//                           <motion.li
//                             key={j}
//                             initial={{ opacity: 0, x: -10 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: false }}
//                             transition={{ delay: j * 0.08 + 0.2 }}
//                             className="flex items-start gap-2 text-sm text-gray-700"
//                           >
//                             <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: u.accentTo }} />
//                             {item}
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>
//                   </motion.div>
//                 </FadeIn>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </FadeIn>

//         {/* ══ MISSION BANNER ═══════════════════════════════════════════════════ */}
//         <FadeIn>
//           <motion.div
//             whileHover={{ scale: 1.005 }}
//             transition={{ duration: 0.4 }}
//             className="bg-gradient-to-r from-[#FFD700] via-[#ffd900] to-[#e6c200] rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden text-center"
//           >
//             <div className="absolute inset-0 overflow-hidden">
//               {[...Array(6)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
//                   className="absolute border-2 border-[#003366]/10 rounded-full"
//                   style={{
//                     width: `${150 + i * 80}px`,
//                     height: `${150 + i * 80}px`,
//                     top: '50%',
//                     left: '50%',
//                     marginLeft: `-${(150 + i * 80) / 2}px`,
//                     marginTop: `-${(150 + i * 80) / 2}px`,
//                   }}
//                 />
//               ))}
//             </div>
//             <div className="relative z-10">
//               <motion.div
//                 animate={{ rotate: [0, 5, -5, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//                 className="w-16 h-16 bg-[#003366] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
//               >
//                 <GraduationCap size={32} className="text-[#FFD700]" />
//               </motion.div>
//               <h2 className="text-3xl md:text-5xl font-black text-[#003366] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
//                 Our Purpose
//               </h2>
//               <p className="text-[#003366]/80 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
//                 To impart a sound, <strong>moral, intellectual and physical education</strong>; to train pupils to be{' '}
//                 useful and loyal citizens of India; and to help them become{' '}
//                 <strong>agents of needed social change</strong> in society — through holistic education open to all.
//               </p>
//             </div>
//           </motion.div>
//         </FadeIn>

//       </div>
//     </div>
//   );
// };

// export default AboutUs;




// import React, { useRef, useState } from 'react';
// import { motion, useInView, AnimatePresence } from 'motion/react';
// import {
//   BookOpen, Users, Trophy, Heart, Sparkles, Clock, Monitor,
//   FlaskConical, Library, Eye, Cpu, Leaf, Bike, Star,
//   MapPin, GraduationCap, Building2, Shield, Briefcase, Shirt, Sun, Snowflake
// } from 'lucide-react';

// // ─── Reusable FadeIn ─────────────────────────────────────────────────────────
// const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: false, margin: '-80px' });
//   const variants = {
//     hidden: {
//       opacity: 0,
//       y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
//       x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
//       scale: direction === 'scale' ? 0.85 : 1,
//     },
//     visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
//   };
//   return (
//     <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} className={className}>
//       {children}
//     </motion.div>
//   );
// };

// // ─── Data ─────────────────────────────────────────────────────────────────────
// const facilities = [
//   { icon: <FlaskConical size={18} />, label: 'Physics Laboratory' },
//   { icon: <FlaskConical size={18} />, label: 'Chemistry Laboratory' },
//   { icon: <FlaskConical size={18} />, label: 'Biology Laboratory' },
//   { icon: <FlaskConical size={18} />, label: 'Maths Laboratory' },
//   { icon: <Cpu size={18} />, label: 'Well Furnished Computer Labs' },
//   { icon: <Library size={18} />, label: 'Well Established Library' },
//   { icon: <Monitor size={18} />, label: 'Audio Visual Room' },
//   { icon: <Monitor size={18} />, label: 'Smart Class Rooms' },
//   { icon: <Eye size={18} />, label: 'CCTV Camera Surveillance' },
//   { icon: <Leaf size={18} />, label: 'Beautiful Play Ground' },
//   { icon: <Users size={18} />, label: 'Eco Club, Media Club, Literary Club, Cultural Club' },
//   { icon: <Bike size={18} />, label: 'Cycle Stand for Staff & Students' },
//   { icon: <Leaf size={18} />, label: 'Eco Friendly Environments' },
//   { icon: <GraduationCap size={18} />, label: 'Well Qualified Faculty' },
// ];

// const timings = [
//   { period: 'April – May – June', time: '6:30 AM – 12:30 PM' },
//   { period: 'July – Aug – Sept',  time: '7:00 AM – 1:00 PM'  },
//   { period: 'Oct – Nov',          time: '8:00 AM – 2:00 PM'  },
//   { period: 'Dec – Jan',          time: '9:00 AM – 3:00 PM'  },
//   { period: 'Feb – March',        time: '8:00 AM – 2:00 PM'  },
// ];

// const facultyStates = ['West Bengal', 'Assam', 'Bihar', 'Jharkhand', 'Odisha', 'Kerala'];

// const academics = [
//   { icon: <BookOpen size={26} />, title: 'CBSE Affiliation',    desc: 'Affiliated to CBSE since 2011. Medium of instruction is English.', color: 'from-blue-500 to-cyan-400',    glow: 'shadow-blue-500/30'   },
//   { icon: <Heart size={26} />,    title: 'Value Education',     desc: 'Moral and Value education essential for character formation is imparted to all pupils.', color: 'from-rose-500 to-pink-400',    glow: 'shadow-rose-500/30'   },
//   { icon: <Users size={26} />,    title: 'Language Curriculum', desc: 'English as primary medium; Sanskrit taught as third language from Class VI to VIII.', color: 'from-violet-500 to-purple-400', glow: 'shadow-violet-500/30' },
//   { icon: <Trophy size={26} />,   title: 'Holistic Subjects',   desc: 'Computer Science, Drawing, Art & Craft, Health Education and Physical Education.', color: 'from-amber-500 to-yellow-400', glow: 'shadow-amber-500/30'  },
// ];

// // ─── UNIFORMS ─────────────────────────────────────────────────────────────────
// const summerUniforms = [
//   {
//     day: 'Monday & Tuesday',
//     accentFrom: '#92400e', accentTo: '#d97706',
//     boys:  ['Brown full pants & Check Half shirt (I to X)', 'Black leather shoes & brown socks'],
//     girls: ['Brown skirts & Check Half Skirt (I to V)', 'Brown Salwar & Check Suit (VI to X)', 'Black leather shoes & brown socks'],
//   },
//   {
//     day: 'Wednesday & Saturday',
//     accentFrom: '#0369a1', accentTo: '#38bdf8',
//     boys:  ['White full pants & White Half shirt (I to X)', 'White P.T. Canvas shoes & white socks'],
//     girls: ['White skirts & White Half shirt (I to V)', 'White Salwar & White Suit (VI to X)', 'White P.T. Canvas shoes & white socks'],
//   },
//   {
//     day: 'Thursday & Friday',
//     accentFrom: '#1e3a5f', accentTo: '#3b82f6',
//     boys:  ['Navy blue full pants & White Half shirt (I to X)', 'Black leather shoes & blue socks'],
//     girls: ['Navy blue skirts & White Half shirt (I to V)', 'Navy blue Salwar & White Suit (I to X)', 'Black leather shoes & blue socks'],
//   },
// ];

// const winterUniforms = [
//   {
//     day: 'Monday & Tuesday',
//     accentFrom: '#92400e', accentTo: '#d97706',
//     boys:  ['Brown full pants & Check Shirt with Brown Sweater & Navy blue Blazer (I to X)', 'Black leather shoes & brown socks'],
//     girls: ['Brown skirts, Brown leggings & Check Half shirt with Brown Sweater & Navy blue Blazer (I to V)', 'Brown Salwar & Check Suit with Brown Sweater & Navy blue Blazer (VI to X)'],
//   },
//   {
//     day: 'Wednesday',
//     accentFrom: '#0369a1', accentTo: '#38bdf8',
//     boys:  ['White full pants & White Half shirt with Blue Sweater & Navy blue Blazer (I to X)'],
//     girls: ['White skirts, White leggings & White Half shirt with Blue Sweater & Navy Blue Blazer (I to V)', 'White Salwar & White Suit with Blue Sweater (VI to X)', 'White P.T. Canvas shoes & white socks'],
//   },
//   {
//     day: 'Thursday & Friday',
//     accentFrom: '#1e3a5f', accentTo: '#3b82f6',
//     boys:  ['Navy blue full pants & White Shirt with Blue Sweater & Navy Blue Blazer (I to X)', 'Black leather shoes & blue socks'],
//     girls: ['Navy blue skirts, blue leggings & White Shirt with Blue Sweater & Navy Blue Blazer (I to V)', 'Navy blue Salwar & White Suit with Blue Sweater & Navy Blue Blazer (VI to X)', 'Black leather shoes & blue socks'],
//   },
// ];

// // ─── Uniform Card Component ───────────────────────────────────────────────────
// const UniformCard = ({ u, i }) => (
//   <div key={i}>
//     <FadeIn delay={i * 0.12} direction={i % 2 === 0 ? 'right' : 'left'}>
//       <motion.div
//         whileHover={{ y: -5, boxShadow: '0 25px 60px rgba(0,51,102,0.12)' }}
//         transition={{ duration: 0.3 }}
//         className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col"
//       >
//         {/* Header */}
//         <div className="p-5 text-white relative overflow-hidden flex items-center justify-between"
//           style={{ background: `linear-gradient(135deg, ${u.accentFrom}, ${u.accentTo})` }}>
//           <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
//           <div className="relative z-10">
//             <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-0.5">Dress Day</p>
//             <h3 className="text-lg font-black">{u.day}</h3>
//           </div>
//           <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center relative z-10">
//             <Shirt size={22} className="text-white" />
//           </div>
//         </div>

//         {/* Boys */}
//         <div className="px-5 pt-5 pb-4 border-b border-gray-100">
//           <span className="text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full text-white inline-block mb-3"
//             style={{ background: u.accentFrom }}>Boys</span>
//           <ul className="space-y-1.5">
//             {u.boys.map((item, j) => (
//               <motion.li key={j} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: false }} transition={{ delay: j * 0.07 + 0.15 }}
//                 className="flex items-start gap-2 text-sm text-gray-700 leading-snug">
//                 <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: u.accentFrom }} />
//                 {item}
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* Girls */}
//         <div className="px-5 pt-4 pb-5 flex-1">
//           <span className="text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full text-white inline-block mb-3"
//             style={{ background: u.accentTo }}>Girls</span>
//           <ul className="space-y-1.5">
//             {u.girls.map((item, j) => (
//               <motion.li key={j} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: false }} transition={{ delay: j * 0.07 + 0.15 }}
//                 className="flex items-start gap-2 text-sm text-gray-700 leading-snug">
//                 <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: u.accentTo }} />
//                 {item}
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//     </FadeIn>
//   </div>
// );

// // ─── Main Component ───────────────────────────────────────────────────────────
// const AboutUs = () => {
//   const [uniformSeason, setUniformSeason] = useState('summer');

//   return (
//     <div className="bg-[#f8f6f0] min-h-screen font-sans overflow-hidden">

//       {/* Floating Orbs */}
//       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//         <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//           className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#003366]/8 rounded-full blur-[120px]" />
//         <motion.div animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
//           className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-[#FFD700]/10 rounded-full blur-[140px]" />
//         <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
//           className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-[#003366]/6 rounded-full blur-[100px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

//         {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
//         <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
//           className="text-center mb-20 pt-8">
//           <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-[#003366]/10 text-[#003366] px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8">
//             <Sparkles size={14} className="text-[#FFD700]" />Established in 2000 · CBSE Affiliated · Nursery to 10+2
//           </motion.div>
//           <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
//             className="text-7xl sm:text-8xl md:text-[10rem] font-black text-[#003366] uppercase tracking-tighter leading-none mb-6"
//             style={{ fontFamily: 'Georgia, serif' }}>
//             About <span className="text-[#FFD700] drop-shadow-[0_4px_20px_rgba(255,215,0,0.5)]">Us</span>
//           </motion.h1>
//           <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
//             className="w-48 h-1.5 bg-gradient-to-r from-[#003366] via-[#FFD700] to-[#003366] mx-auto rounded-full mb-10 origin-center" />
//           <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
//             className="text-xl sm:text-2xl md:text-3xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light mb-14">
//             Shaping competent, compassionate & committed citizens since the year 2000.
//           </motion.p>
//           {/* Stats Row */}
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
//             className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
//             {[
//               { num: '2000', label: 'Year Founded' },
//               { num: '10+2', label: 'Classes Offered' },
//               { num: 'CBSE', label: 'Board Affiliation' },
//               { num: '5 C\'s', label: 'Core Values' },
//             ].map((s, i) => (
//               <motion.div key={i} whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,51,102,0.12)' }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-2xl px-4 py-5 shadow-md border border-gray-100 text-center">
//                 <div className="text-2xl sm:text-3xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>{s.num}</div>
//                 <div className="text-xs text-gray-500 font-semibold tracking-wider uppercase mt-1">{s.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.header>

//         {/* ══ MOTTO · VISION · MISSION ════════════════════════════════════════ */}
//         <div className="mb-24">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//             <FadeIn direction="right">
//               <motion.div whileHover={{ y: -6, boxShadow: '0 30px 80px rgba(0,51,102,0.18)' }} transition={{ duration: 0.3 }}
//                 className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 h-full">
//                 <div className="bg-gradient-to-r from-[#8B0000] to-[#cc1111] px-8 py-6 flex items-center gap-4">
//                   <div className="w-12 h-12 bg-[#FFD700] rounded-2xl flex items-center justify-center shrink-0">
//                     <Star size={22} className="text-[#8B0000]" fill="#8B0000" />
//                   </div>
//                   <div>
//                     <p className="text-[#FFD700]/70 text-xs font-bold tracking-widest uppercase">School</p>
//                     <h3 className="text-2xl font-black text-[#FFD700]" style={{ fontFamily: 'Georgia, serif' }}>Motto</h3>
//                   </div>
//                 </div>
//                 <div className="p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[200px]">
//                   {['Holistic Education', 'Diverse Learning'].map((line, i) => (
//                     <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: false }} transition={{ delay: i * 0.15 + 0.2 }}
//                       className="text-3xl md:text-4xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>{line}</motion.div>
//                   ))}
//                   <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }}
//                     transition={{ delay: 0.4, duration: 0.6 }}
//                     className="w-20 h-1.5 bg-gradient-to-r from-[#8B0000] to-[#FFD700] rounded-full origin-center mt-2" />
//                 </div>
//               </motion.div>
//             </FadeIn>

//             <FadeIn direction="left" delay={0.1}>
//               <motion.div whileHover={{ y: -6, boxShadow: '0 30px 80px rgba(0,51,102,0.18)' }} transition={{ duration: 0.3 }}
//                 className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 h-full">
//                 <div className="bg-gradient-to-r from-[#8B0000] to-[#cc1111] px-8 py-6 flex items-center gap-4">
//                   <div className="w-12 h-12 bg-[#FFD700] rounded-2xl flex items-center justify-center shrink-0">
//                     <Eye size={22} className="text-[#8B0000]" />
//                   </div>
//                   <div>
//                     <p className="text-[#FFD700]/70 text-xs font-bold tracking-widest uppercase">Our</p>
//                     <h3 className="text-2xl font-black text-[#FFD700]" style={{ fontFamily: 'Georgia, serif' }}>Vision</h3>
//                   </div>
//                 </div>
//                 <div className="p-10 flex items-center justify-center text-center min-h-[200px]">
//                   <motion.p initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: false }} transition={{ delay: 0.2, duration: 0.6 }}
//                     className="text-2xl md:text-3xl font-bold text-[#003366] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
//                     The formation of Human person committed to{' '}
//                     <span className="text-[#8B0000]">God</span> and <span className="text-[#8B0000]">Country</span>
//                   </motion.p>
//                 </div>
//               </motion.div>
//             </FadeIn>
//           </div>

//           <FadeIn direction="up" delay={0.1}>
//             <motion.div whileHover={{ scale: 1.005 }} transition={{ duration: 0.3 }}
//               className="bg-gradient-to-br from-[#001a33] via-[#002147] to-[#003366] rounded-[2rem] overflow-hidden shadow-2xl relative">
//               <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {[...Array(3)].map((_, i) => (
//                   <motion.div key={i} animate={{ x: ['-100%', '200%'] }}
//                     transition={{ duration: 4 + i * 1.5, repeat: Infinity, ease: 'linear', delay: i * 1.2 }}
//                     className="absolute h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent w-full"
//                     style={{ top: `${25 + i * 25}%` }} />
//                 ))}
//               </div>
//               <div className="bg-[#FFD700] px-8 py-4 flex items-center gap-3">
//                 <div className="w-8 h-8 bg-[#003366] rounded-lg flex items-center justify-center">
//                   <GraduationCap size={18} className="text-[#FFD700]" />
//                 </div>
//                 <h3 className="text-[#003366] font-black text-lg tracking-[0.15em] uppercase" style={{ fontFamily: 'Georgia, serif' }}>
//                   Our Mission Statement
//                 </h3>
//               </div>
//               <div className="px-8 md:px-12 py-10 relative z-10">
//                 <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: false }} transition={{ duration: 0.7, delay: 0.2 }}
//                   className="text-white/90 text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto">
//                   Loyola School, Harnaut, is passionately committed to literate Harnaut and its surroundings from darkness of ignorance through education, transforming them with the help of the elders of the society into young women and men of{' '}
//                   <span className="text-[#FFD700] font-bold">Character</span>,{' '}
//                   <span className="text-[#FFD700] font-bold">Competence</span>,{' '}
//                   <span className="text-[#FFD700] font-bold">Conscience</span>,{' '}
//                   <span className="text-[#FFD700] font-bold">Compassion</span> and{' '}
//                   <span className="text-[#FFD700] font-bold">Commitment</span> and to make a significant and lasting impact on the educational scenario of the society.
//                 </motion.p>
//                 <div className="flex flex-wrap justify-center gap-3 mt-8">
//                   {['Character', 'Competence', 'Conscience', 'Compassion', 'Commitment'].map((c, i) => (
//                     <motion.span key={c} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: false }} transition={{ delay: i * 0.1 + 0.4 }}
//                       whileHover={{ scale: 1.08, backgroundColor: '#FFD700', color: '#003366' }}
//                       className="px-4 py-2 rounded-full text-sm font-bold border border-[#FFD700]/40 text-[#FFD700] cursor-default transition-all duration-200">{c}</motion.span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </FadeIn>
//         </div>

//         {/* ══ ABOUT + LEADERSHIP ══════════════════════════════════════════════ */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-24 items-start">
//           <FadeIn direction="right" className="lg:col-span-3">
//             <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
//               <div className="absolute -left-2 top-8 text-[120px] leading-none text-[#FFD700]/20 font-serif select-none">"</div>
//               <div className="relative z-10 space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
//                 <p><strong className="text-[#003366] text-xl md:text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Loyola School, Harnaut</strong>{' '}
//                   was established in the year <span className="font-semibold text-[#003366]">2000</span> by the <span className="font-semibold">Patna Diocesan Corporation</span>, a charitable registered society as a <span className="font-semibold">Christian Minority School</span>.</p>
//                 <p>With the far reaching vision of <span className="font-semibold">His Grace Benedict J. Osta S.J.</span>, from a generous contribution of <span className="font-semibold">Rev. Fr. Josef Renner</span> and under the able supervision of <span className="font-semibold">Rev. Fr. Andrews Thambi</span>, Loyola School came into being with the continuous support of the Religious of the Assumption.</p>
//                 <p>With the sole motive of <em>all-round development of students</em>, the secretaries and principals have made a history at Harnaut in the field of Education.</p>
//                 <p>In <span className="font-semibold text-[#003366]">2011</span>, Loyola School was affiliated to <span className="font-semibold">C.B.S.E., New Delhi</span>. Since then, Loyola School has produced thousands of young men & women of <span className="text-[#003366] font-bold">Competence, Compassion and Commitment</span>.</p>
//                 <p>The institution is <strong>open to all without distinction of caste or creed</strong> and is a unit of <span className="font-semibold">Mokameh Parish Society</span>, under the Archdiocese of Patna.</p>
//               </div>
//               <div className="flex flex-wrap gap-3 mt-8 relative z-10">
//                 {['Competence', 'Compassion', 'Commitment'].map((c, i) => (
//                   <motion.span key={c} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: false }} transition={{ delay: i * 0.15 + 0.3 }}
//                     whileHover={{ scale: 1.05 }}
//                     className="px-4 py-2 rounded-full text-sm font-bold bg-[#003366] text-[#FFD700] tracking-wide shadow-md">{c}</motion.span>
//                 ))}
//               </div>
//             </div>
//           </FadeIn>

//           <FadeIn direction="left" delay={0.15} className="lg:col-span-2">
//             <div className="space-y-6">
//               {[
//                 { role: 'Principal',  name: 'Fr. Asit Lakra',    sub: 'Academic & Administrative Head', bgGrad: 'from-[#003366] to-[#0066cc]', badgeBg: '#003366', badgeTxt: '#FFD700', Icon: GraduationCap },
//                 { role: 'Secretary', name: 'Fr. Jose Chirackal', sub: 'Administrative Secretary',        bgGrad: 'from-[#8B0000] to-[#cc2222]', badgeBg: '#8B0000', badgeTxt: '#fff',    Icon: Shield },
//               ].map((p, i) => (
//                 <motion.div key={i} whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,51,102,0.15)' }} transition={{ duration: 0.3 }}
//                   className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex items-center gap-5">
//                   <div className="relative shrink-0">
//                     <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${p.bgGrad} flex items-center justify-center shadow-lg`}>
//                       <p.Icon size={36} className="text-white" />
//                     </div>
//                     <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center">
//                       <Star size={12} className="text-[#003366]" fill="#003366" />
//                     </div>
//                   </div>
//                   <div>
//                     <span className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-full inline-block mb-1"
//                       style={{ background: p.badgeBg, color: p.badgeTxt }}>{p.role}</span>
//                     <h3 className="text-xl font-black text-[#003366]">{p.name}</h3>
//                     <p className="text-sm text-gray-500 mt-0.5">{p.sub}</p>
//                   </div>
//                 </motion.div>
//               ))}
//               <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-[#003366] to-[#001a33] rounded-3xl p-6 shadow-xl text-white text-center">
//                 <Building2 size={28} className="mx-auto mb-2 text-[#FFD700]" />
//                 <p className="text-xs tracking-widest uppercase text-[#FFD700] font-bold mb-1">Affiliated To</p>
//                 <p className="text-xl font-black">C.B.S.E., New Delhi</p>
//                 <p className="text-sm text-gray-300 mt-1">Since 2011 · English Medium</p>
//               </motion.div>
//             </div>
//           </FadeIn>
//         </div>

//         {/* ══ ACADEMIC FRAMEWORK ══════════════════════════════════════════════ */}
//         <FadeIn className="mb-24">
//           <div className="bg-gradient-to-br from-[#001a33] via-[#002147] to-[#003366] rounded-[3rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
//             <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD700]/8 rounded-full -translate-y-1/2 translate-x-1/3 blur-[80px]" />
//             <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-[80px]" />
//             <div className="relative z-10">
//               <div className="text-center mb-12">
//                 <p className="text-[#FFD700] text-xs font-bold tracking-[0.25em] uppercase mb-3">Our Curriculum</p>
//                 <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Academic Framework</h2>
//                 <div className="w-16 h-1 bg-[#FFD700] mx-auto rounded-full" />
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
//                 {academics.map((item, i) => (
//                   <div key={i}>
//                     <FadeIn delay={i * 0.12} direction="up">
//                       <motion.div whileHover={{ y: -4 }}
//                         className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 shadow-lg ${item.glow}`}>
//                         <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}>{item.icon}</div>
//                         <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//                         <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
//                       </motion.div>
//                     </FadeIn>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </FadeIn>

//         {/* ══ FACILITIES ══════════════════════════════════════════════════════ */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
//           <FadeIn direction="right">
//             <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 h-full">
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="w-10 h-10 rounded-xl bg-[#003366] flex items-center justify-center">
//                   <Star size={20} className="text-[#FFD700]" fill="#FFD700" />
//                 </div>
//                 <h2 className="text-3xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>Ultra Modern Facilities</h2>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {facilities.map((f, i) => (
//                   <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: false }} transition={{ delay: i * 0.05, duration: 0.4 }}
//                     whileHover={{ x: 4 }}
//                     className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#003366]/5 transition-colors duration-200 group cursor-default">
//                     <span className="text-[#003366] mt-0.5 shrink-0 group-hover:text-[#FFD700] transition-colors">{f.icon}</span>
//                     <span className="text-sm text-gray-700 font-medium leading-snug">{f.label}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </FadeIn>

//           <div className="space-y-8">
//             <FadeIn direction="left" delay={0.1}>
//               <div className="bg-gradient-to-br from-[#003366] to-[#001a33] rounded-[2.5rem] p-8 shadow-xl text-white relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
//                 <div className="flex items-center gap-3 mb-7 relative z-10">
//                   <div className="w-10 h-10 rounded-xl bg-[#FFD700] flex items-center justify-center"><Clock size={20} className="text-[#003366]" /></div>
//                   <h2 className="text-2xl font-black" style={{ fontFamily: 'Georgia, serif' }}>School Timings</h2>
//                 </div>
//                 <div className="space-y-3 relative z-10">
//                   {timings.map((t, i) => (
//                     <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: false }} transition={{ delay: i * 0.1 + 0.2 }}
//                       className="flex items-center justify-between bg-white/8 border border-white/10 rounded-xl px-4 py-3">
//                       <span className="text-sm font-bold text-[#FFD700]">{t.period}</span>
//                       <span className="text-sm font-semibold text-white">{t.time}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>

//             <FadeIn direction="left" delay={0.2}>
//               <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
//                 <div className="flex items-center gap-3 mb-7">
//                   <div className="w-10 h-10 rounded-xl bg-[#FFD700] flex items-center justify-center"><MapPin size={20} className="text-[#003366]" /></div>
//                   <h2 className="text-2xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>Faculty From</h2>
//                 </div>
//                 <div className="grid grid-cols-2 gap-3">
//                   {facultyStates.map((state, i) => (
//                     <motion.div key={state} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: false }} transition={{ delay: i * 0.08 + 0.2 }}
//                       whileHover={{ scale: 1.04, backgroundColor: '#003366', color: '#FFD700' }}
//                       className="flex items-center gap-2 bg-[#003366]/5 text-[#003366] font-bold text-sm px-4 py-3 rounded-xl cursor-default transition-all duration-200">
//                       <div className="w-2 h-2 rounded-full bg-[#FFD700] shrink-0" />
//                       {state}
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//           </div>
//         </div>

//         {/* ══ OFFICE HOURS ════════════════════════════════════════════════════ */}
//         <FadeIn className="mb-24">
//           <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700]/8 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
//             <div className="relative z-10">
//               <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#003366] to-[#0066cc] flex items-center justify-center shadow-lg shrink-0">
//                   <Briefcase size={26} className="text-[#FFD700]" />
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FFD700] bg-[#003366] px-3 py-1 rounded-full inline-block mb-1">Information</p>
//                   <h2 className="text-3xl md:text-4xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>Office Hours & Class Timings</h2>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <motion.div whileHover={{ y: -3 }} className="bg-gradient-to-br from-[#003366] to-[#001a33] rounded-2xl p-7 text-white relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
//                   <div className="flex items-center gap-3 mb-5 relative z-10">
//                     <div className="w-9 h-9 bg-[#FFD700] rounded-xl flex items-center justify-center"><Briefcase size={18} className="text-[#003366]" /></div>
//                     <h3 className="text-xl font-black" style={{ fontFamily: 'Georgia, serif' }}>Office Hours</h3>
//                   </div>
//                   <div className="relative z-10 bg-white/10 border border-white/15 rounded-xl p-4">
//                     <p className="text-[#FFD700] font-bold text-sm mb-1">Monday to Saturday</p>
//                     <p className="text-white font-semibold">For Parents: First 2 Periods & Last 2 Periods</p>
//                   </div>
//                 </motion.div>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-9 h-9 bg-[#FFD700] rounded-xl flex items-center justify-center"><Clock size={18} className="text-[#003366]" /></div>
//                     <h3 className="text-xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>Class Timings</h3>
//                   </div>
//                   {timings.map((t, i) => (
//                     <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: false }} transition={{ delay: i * 0.08 + 0.1 }}
//                       whileHover={{ x: 4, backgroundColor: '#003366' }}
//                       className="flex items-center justify-between bg-[#003366]/5 border border-[#003366]/10 rounded-xl px-4 py-3 group transition-all duration-200">
//                       <span className="text-sm font-bold text-[#003366] group-hover:text-[#FFD700] transition-colors">{t.period}</span>
//                       <span className="text-sm font-semibold text-gray-600 group-hover:text-white transition-colors">{t.time}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </FadeIn>

//         {/* ══ SCHOOL UNIFORMS ═════════════════════════════════════════════════ */}
//         <FadeIn className="mb-24">
//           <div className="relative">
//             <div className="text-center mb-10">
//               <div className="inline-flex items-center gap-2 bg-[#003366]/10 text-[#003366] px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4">
//                 <Shirt size={14} className="text-[#FFD700]" />Dress Code
//               </div>
//               <h2 className="text-4xl md:text-5xl font-black text-[#003366]" style={{ fontFamily: 'Georgia, serif' }}>
//                 School <span className="text-[#FFD700]">Uniforms</span>
//               </h2>
//               <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }}
//                 transition={{ duration: 0.7 }}
//                 className="w-24 h-1 bg-gradient-to-r from-[#003366] via-[#FFD700] to-[#003366] mx-auto rounded-full mt-4 origin-center" />
//             </div>

//             {/* Season Toggle */}
//             <div className="flex justify-center mb-10">
//               <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-lg border border-gray-100 gap-1">
//                 {[
//                   { key: 'summer', label: 'Summer Uniform', icon: <Sun size={16} /> },
//                   { key: 'winter', label: 'Winter Uniform', icon: <Snowflake size={16} /> },
//                 ].map((s) => (
//                   <motion.button key={s.key} onClick={() => setUniformSeason(s.key)}
//                     whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
//                     className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
//                       uniformSeason === s.key ? 'bg-[#003366] text-[#FFD700] shadow-md' : 'text-gray-500 hover:text-[#003366]'
//                     }`}>
//                     {s.icon}{s.label}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>

//             {/* Cards */}
//             <AnimatePresence mode="wait">
//               <motion.div key={uniformSeason}
//                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4 }}
//                 className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//                 {(uniformSeason === 'summer' ? summerUniforms : winterUniforms).map((u, i) => (
//                   <div key={`${uniformSeason}-${i}`}>
//                     <UniformCard u={u} i={i} />
//                   </div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>

//             {/* Note */}
//             <FadeIn delay={0.2} className="mt-8">
//               <div className="bg-gradient-to-r from-[#003366]/8 to-[#FFD700]/10 border border-[#003366]/15 rounded-2xl px-6 py-4 flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-lg bg-[#003366] flex items-center justify-center shrink-0 mt-0.5">
//                   <Star size={16} className="text-[#FFD700]" fill="#FFD700" />
//                 </div>
//                 <p className="text-sm text-gray-700 leading-relaxed">
//                   <span className="font-bold text-[#003366]">Note: </span>
//                   The School endeavours to inculcate the habit of cleanliness and neatness in students.{' '}
//                   <span className="font-semibold">Parents are requested to co-operate with us.</span>
//                 </p>
//               </div>
//             </FadeIn>
//           </div>
//         </FadeIn>

//         {/* ══ MISSION BANNER ══════════════════════════════════════════════════ */}
//         <FadeIn>
//           <motion.div whileHover={{ scale: 1.005 }} transition={{ duration: 0.4 }}
//             className="bg-gradient-to-r from-[#FFD700] via-[#ffd900] to-[#e6c200] rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden text-center">
//             <div className="absolute inset-0 overflow-hidden">
//               {[...Array(6)].map((_, i) => (
//                 <motion.div key={i} animate={{ rotate: 360 }}
//                   transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
//                   className="absolute border-2 border-[#003366]/10 rounded-full"
//                   style={{ width: `${150 + i * 80}px`, height: `${150 + i * 80}px`,
//                     top: '50%', left: '50%',
//                     marginLeft: `-${(150 + i * 80) / 2}px`,
//                     marginTop: `-${(150 + i * 80) / 2}px` }} />
//               ))}
//             </div>
//             <div className="relative z-10">
//               <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//                 className="w-16 h-16 bg-[#003366] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
//                 <GraduationCap size={32} className="text-[#FFD700]" />
//               </motion.div>
//               <h2 className="text-3xl md:text-5xl font-black text-[#003366] mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our Purpose</h2>
//               <p className="text-[#003366]/80 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
//                 To impart a sound, <strong>moral, intellectual and physical education</strong>; to train pupils to be useful and loyal citizens of India; and to help them become{' '}
//                 <strong>agents of needed social change</strong> in society — through holistic education open to all.
//               </p>
//             </div>
//           </motion.div>
//         </FadeIn>

//       </div>
//     </div>
//   );
// };

// export default AboutUs;



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
  { icon: <FlaskConical size={18} />, label: 'Physics Laboratory' },
  { icon: <FlaskConical size={18} />, label: 'Chemistry Laboratory' },
  { icon: <FlaskConical size={18} />, label: 'Biology Laboratory' },
  { icon: <FlaskConical size={18} />, label: 'Maths Laboratory' },
  { icon: <Cpu size={18} />, label: 'Well Furnished Computer Labs' },
  { icon: <Library size={18} />, label: 'Well Established Library' },
  { icon: <Monitor size={18} />, label: 'Audio Visual Room' },
  { icon: <Monitor size={18} />, label: 'Smart Class Rooms' },
  { icon: <Eye size={18} />, label: 'CCTV Camera Surveillance' },
  { icon: <Leaf size={18} />, label: 'Beautiful Play Ground' },
  { icon: <Users size={18} />, label: 'Eco Club, Media Club, Literary Club, Cultural Club' },
  { icon: <Bike size={18} />, label: 'Cycle Stand for Staff & Students' },
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
                  <h4 className="text-2xl font-bold mb-1">Fr. Asit Lakra</h4>
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
                  Learn More <ArrowRight size={14} />
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

