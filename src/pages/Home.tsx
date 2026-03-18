// import React, { useState } from 'react';
// import Hero from '../components/Hero';
// import NoticeBoard from '../components/NoticeBoard';
// import PrincipalMessage from '../components/PrincipalMessage';
// import AboutSection from '../components/AboutSection';
// import Testimonials from '../components/Testimonials';
// import SEO from '../components/SEO';
// import EnquiryForm from '../components/EnquiryForm';
// import { motion, AnimatePresence } from 'motion/react';
// import { BookOpen, Users, Trophy, GraduationCap, ArrowRight, X } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();
//   const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

//   return (
//     <div className="flex flex-col">
//       <SEO 
//         title="Home" 
//         description="Official website of Loyola School, Harnaut, Nalanda, Bihar. A premier educational institution dedicated to academic excellence and holistic development."
//         keywords="Loyola School Harnaut, School in Nalanda, Best school in Bihar, Catholic school Harnaut, Loyola School Nalanda, CBSE School Bihar"
//       />
      
//       {/* Hero Section */}
//       <Hero />

//       {/* Notice & Quick Links Section */}
//       <section className="py-24 bg-gray-50/50" aria-labelledby="notices-heading">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
//             {/* Left Side: Admission & Quick Links (Attractive Layout) */}
//             <div className="lg:col-span-7 space-y-8 flex flex-col">
//               {/* Admission Card - Enhanced */}
//               <div className="flex-1 bg-[#003366] text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group flex flex-col justify-center">
//                 {/* Decorative Elements */}
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-20 -mt-20 blur-3xl" />
//                 <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FFD700]/10 rounded-full -ml-10 -mb-10 blur-2xl" />
                
//                 <div className="relative z-10">
//                   <div className="inline-block px-4 py-1 bg-[#FFD700] text-[#003366] text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
//                     Admissions Open
//                   </div>
//                   <h3 id="admission-heading" className="text-4xl md:text-5xl font-bold mb-6 font-serif tracking-tight leading-tight">
//                     Shape Your Future <br/>
//                     <span className="text-[#FFD700]">Session 2026-27</span>
//                   </h3>
//                   <p className="text-blue-100/80 mb-10 text-lg max-w-md leading-relaxed">
//                     Join Loyola School Harnaut, where we nurture excellence and build character for a brighter tomorrow.
//                   </p>
//                   <button 
//                     onClick={() => setIsApplyModalOpen(true)}
//                     className="bg-white text-[#003366] px-8 py-4 rounded-2xl font-bold hover:bg-[#FFD700] transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl group/btn"
//                   >
//                     <span className="tracking-wider">START APPLICATION</span>
//                     <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </div>

//               {/* Quick Links Grid - Refined */}
//               <nav className="grid grid-cols-2 sm:grid-cols-4 gap-4" aria-label="Quick links">
//                 {[
//                   { icon: <BookOpen size={24} />, label: 'Academics', color: 'bg-white text-[#0066cc] hover:bg-blue-50', path: '/class-syllabus' },
//                   { icon: <Users size={24} />, label: 'Faculty', color: 'bg-white text-[#16a34a] hover:bg-green-50', path: '/teachers' },
//                   { icon: <Trophy size={24} />, label: 'Sports', color: 'bg-white text-[#ea580c] hover:bg-orange-50', path: '/activities' },
//                   { icon: <GraduationCap size={24} />, label: 'Overview', color: 'bg-white text-[#9333ea] hover:bg-purple-50', path: '/our-school' },
//                 ].map((item, i) => (
//                   <button
//                     key={i}
//                     onClick={() => {
//                       if (item.path.startsWith('/#')) {
//                         const id = item.path.split('#')[1];
//                         const element = document.getElementById(id);
//                         if (element) {
//                           element.scrollIntoView({ behavior: 'smooth' });
//                         } else {
//                           navigate(item.path);
//                         }
//                       } else {
//                         navigate(item.path);
//                       }
//                     }}
//                     className={`${item.color} p-6 rounded-2xl flex flex-col items-center justify-center space-y-3 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100 group`}
//                   >
//                     <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-white transition-colors">
//                       {item.icon}
//                     </div>
//                     <span className="font-bold text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             {/* Right Side: Notice Board */}
//             <div className="lg:col-span-5">
//               <NoticeBoard />
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Principal Message */}
//       <PrincipalMessage />

//       {/* About Section */}
//       <AboutSection />

//       {/* Features Grid - Our Core Values */}
//       <section className="py-16 md:py-20 bg-[#001a38] text-white relative overflow-hidden" aria-labelledby="values-heading">
//         {/* Decorative background elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#FFD700] rounded-full blur-[150px] opacity-10 mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
//           <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0066cc] rounded-full blur-[150px] opacity-20 mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
          
//           {/* Grid pattern overlay */}
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, margin: "-100px" }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <h2 id="values-heading" className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
//                 Our <span className="text-[#FFD700] relative inline-block">
//                   Core Values
//                   <motion.span 
//                     className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#FFD700] rounded-full"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "100%" }}
//                     viewport={{ once: false }}
//                     transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
//                   />
//                 </span>
//               </h2>
//               <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mt-6 font-light">
//                 We believe in providing an education that goes beyond textbooks, focusing on the overall development of our students.
//               </p>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             {[
//               {
//                 title: 'Academic Excellence',
//                 desc: 'Consistently high academic standards and innovative teaching methods tailored for modern learning.',
//                 icon: '🎓',
//                 delay: 0.1,
//                 color: 'from-[#FFD700]/20 to-transparent',
//                 borderColor: 'group-hover:border-[#FFD700]/50'
//               },
//               {
//                 title: 'Character Building',
//                 desc: 'Instilling core values of integrity, compassion, and social responsibility in every student.',
//                 icon: '🤝',
//                 delay: 0.3,
//                 color: 'from-[#0066cc]/20 to-transparent',
//                 borderColor: 'group-hover:border-[#0066cc]/50'
//               },
//               {
//                 title: 'Modern Infrastructure',
//                 desc: 'Smart classrooms, advanced science labs, and extensive sports facilities for holistic growth.',
//                 icon: '🏫',
//                 delay: 0.5,
//                 color: 'from-[#16a34a]/20 to-transparent',
//                 borderColor: 'group-hover:border-[#16a34a]/50'
//               },
//             ].map((feature, i) => (
//               <motion.article
//                 key={i}
//                 initial={{ opacity: 0, y: 50, scale: 0.95 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: false, margin: "-50px" }}
//                 transition={{ duration: 0.6, delay: feature.delay, type: "spring", bounce: 0.4 }}
//                 className={`group relative bg-[#002147]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 ${feature.borderColor} transition-all duration-500 shadow-2xl hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden`}
//               >
//                 {/* Hover Gradient Background */}
//                 <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
//                 <motion.div 
//                   className="relative z-10 text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 drop-shadow-2xl" 
//                   aria-hidden="true"
//                   whileHover={{ y: -5 }}
//                 >
//                   {feature.icon}
//                   {/* Icon Glow */}
//                   <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </motion.div>
                
//                 <h3 className="relative z-10 text-xl font-bold mb-3 text-[#FFD700] group-hover:text-white transition-colors duration-300 tracking-wide">
//                   {feature.title}
//                 </h3>
                
//                 <p className="relative z-10 text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
//                   {feature.desc}
//                 </p>
                
//                 {/* Decorative corner accent */}
//                 <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl" />
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <Testimonials />

//       {/* Call to Action */}
//       <section className="py-20 bg-[#FFD700]" aria-labelledby="cta-heading">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 id="cta-heading" className="text-4xl font-bold text-[#003366] mb-6 uppercase tracking-tighter">
//             Ready to start your journey with us?
//           </h2>
//           <p className="text-[#003366]/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
//             Join Loyola School Harnaut and experience a world-class education that shapes your future.
//           </p>
//           <div className="flex justify-center">
//             <button 
//               onClick={() => navigate('/contact')}
//               className="bg-white text-[#003366] px-12 py-4 rounded-full font-bold hover:bg-[#003366] hover:text-white transition-all shadow-xl text-lg"
//             >
//               CONTACT US
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Apply Now Modal */}
//       <AnimatePresence>
//         {isApplyModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsApplyModalOpen(false)}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
//             >
//               <div className="bg-[#003366] text-white p-6 sm:p-8 flex items-center justify-between shrink-0 relative overflow-hidden">
//                 <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />
//                 <div className="relative z-10">
//                   <h2 className="text-2xl font-bold uppercase tracking-wider font-serif">Apply Now</h2>
//                   <p className="text-blue-200 text-sm mt-1">Admission Enquiry Form 2026-27</p>
//                 </div>
//                 <button 
//                   onClick={() => setIsApplyModalOpen(false)}
//                   className="p-2 hover:bg-white/10 rounded-full transition-colors relative z-10"
//                 >
//                   <X size={28} />
//                 </button>
//               </div>
              
//               <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-gray-50">
//                 <EnquiryForm theme="light" onSubmit={() => setIsApplyModalOpen(false)} />
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Home;



import React, { useState } from 'react';
import Hero from '../components/Hero';
import NoticeBoard from '../components/NoticeBoard';
import PrincipalMessage from '../components/PrincipalMessage';
import AboutSection from '../components/AboutSection';
import AmenitiesSection from '../components/AmenitiesSection';
import MissionVisionSection from '../components/MissionVisionSection';
import FacultySection from '../components/FacultySection';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import EnquiryForm from '../components/EnquiryForm';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Users, Trophy, GraduationCap, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <SEO 
        title="Home" 
        description="Official website of Loyola School, Harnaut, Nalanda, Bihar. A premier educational institution dedicated to academic excellence and holistic development."
        keywords="Loyola School Harnaut, School in Nalanda, Best school in Bihar, Catholic school Harnaut, Loyola School Nalanda, CBSE School Bihar"
      />
      
      {/* Hero Section */}
      <Hero />

      {/* Notice & Quick Links Section */}
      <section className="py-24 bg-gray-50/50" aria-labelledby="notices-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Side: Admission & Quick Links (Attractive Layout) */}
            <div className="lg:col-span-7 space-y-8 flex flex-col">
              {/* Admission Card - Enhanced */}
              <div className="flex-1 bg-[#003366] text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group flex flex-col justify-center">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FFD700]/10 rounded-full -ml-10 -mb-10 blur-2xl" />
                
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1 bg-[#FFD700] text-[#003366] text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
                    Admissions Open
                  </div>
                  <h3 id="admission-heading" className="text-4xl md:text-5xl font-bold mb-6 font-serif tracking-tight leading-tight">
                    Shape Your Future <br/>
                    <span className="text-[#FFD700]">Session 2026-27</span>
                  </h3>
                  <p className="text-blue-100/80 mb-10 text-lg max-w-md leading-relaxed">
                    Join Loyola School Harnaut, where we nurture excellence and build character for a brighter tomorrow.
                  </p>
                  <button 
                    onClick={() => setIsApplyModalOpen(true)}
                    className="bg-white text-[#003366] px-8 py-4 rounded-2xl font-bold hover:bg-[#FFD700] transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl group/btn"
                  >
                    <span className="tracking-wider">START APPLICATION</span>
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Quick Links Grid - Refined */}
              <nav className="grid grid-cols-2 sm:grid-cols-4 gap-4" aria-label="Quick links">
                {[
                  { icon: <BookOpen size={24} />, label: 'Academics', color: 'bg-white text-[#0066cc] hover:bg-blue-50', path: '/class-syllabus' },
                  { icon: <Users size={24} />, label: 'Faculty', color: 'bg-white text-[#16a34a] hover:bg-green-50', path: '/teachers' },
                  { icon: <Trophy size={24} />, label: 'Sports', color: 'bg-white text-[#ea580c] hover:bg-orange-50', path: '/activities' },
                  { icon: <GraduationCap size={24} />, label: 'Amenities', color: 'bg-white text-[#9333ea] hover:bg-purple-50', path: '/#amenities' },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (item.path.startsWith('/#')) {
                        const id = item.path.split('#')[1];
                        const element = document.getElementById(id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          navigate(item.path);
                        }
                      } else {
                        navigate(item.path);
                      }
                    }}
                    className={`${item.color} p-6 rounded-2xl flex flex-col items-center justify-center space-y-3 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100 group`}
                  >
                    <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-bold text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Side: Notice Board */}
            <div className="lg:col-span-5">
              <NoticeBoard />
            </div>

          </div>
        </div>
      </section>

      {/* Principal Message */}
      <PrincipalMessage />

      {/* About Section */}
      <AboutSection />

      {/* Mission, Vision & Motto Section */}
      <MissionVisionSection />

          {/* Faculty Section */}
      <FacultySection />

      {/* Amenities Section
      <AmenitiesSection /> */}

  

      {/* Features Grid - Our Core Values */}
      <section className="py-16 md:py-20 bg-[#001a38] text-white relative overflow-hidden" aria-labelledby="values-heading">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#FFD700] rounded-full blur-[150px] opacity-10 mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0066cc] rounded-full blur-[150px] opacity-20 mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 id="values-heading" className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
                Our <span className="text-[#FFD700] relative inline-block">
                  Core Values
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#FFD700] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                  />
                </span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mt-6 font-light">
                We believe in providing an education that goes beyond textbooks, focusing on the overall development of our students.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Academic Excellence',
                desc: 'Consistently high academic standards and innovative teaching methods tailored for modern learning.',
                icon: '🎓',
                delay: 0.1,
                color: 'from-[#FFD700]/20 to-transparent',
                borderColor: 'group-hover:border-[#FFD700]/50'
              },
              {
                title: 'Character Building',
                desc: 'Instilling core values of integrity, compassion, and social responsibility in every student.',
                icon: '🤝',
                delay: 0.3,
                color: 'from-[#0066cc]/20 to-transparent',
                borderColor: 'group-hover:border-[#0066cc]/50'
              },
              {
                title: 'Modern Infrastructure',
                desc: 'Smart classrooms, advanced science labs, and extensive sports facilities for holistic growth.',
                icon: '🏫',
                delay: 0.5,
                color: 'from-[#16a34a]/20 to-transparent',
                borderColor: 'group-hover:border-[#16a34a]/50'
              },
            ].map((feature, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: feature.delay, type: "spring", bounce: 0.4 }}
                className={`group relative bg-[#002147]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 ${feature.borderColor} transition-all duration-500 shadow-2xl hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <motion.div 
                  className="relative z-10 text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 drop-shadow-2xl" 
                  aria-hidden="true"
                  whileHover={{ y: -5 }}
                >
                  {feature.icon}
                  {/* Icon Glow */}
                  <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
                
                <h3 className="relative z-10 text-xl font-bold mb-3 text-[#FFD700] group-hover:text-white transition-colors duration-300 tracking-wide">
                  {feature.title}
                </h3>
                
                <p className="relative z-10 text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.desc}
                </p>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-20 bg-[#FFD700]" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-[#003366] mb-6 uppercase tracking-tighter">
            Ready to start your journey with us?
          </h2>
          <p className="text-[#003366]/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
            Join Loyola School Harnaut and experience a world-class education that shapes your future.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-[#003366] px-12 py-4 rounded-full font-bold hover:bg-[#003366] hover:text-white transition-all shadow-xl text-lg"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* Apply Now Modal */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="bg-[#003366] text-white p-6 sm:p-8 flex items-center justify-between shrink-0 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold uppercase tracking-wider font-serif">Apply Now</h2>
                  <p className="text-blue-200 text-sm mt-1">Admission Enquiry Form 2026-27</p>
                </div>
                <button 
                  onClick={() => setIsApplyModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors relative z-10"
                >
                  <X size={28} />
                </button>
              </div>
              
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-gray-50">
                <EnquiryForm theme="light" onSubmit={() => setIsApplyModalOpen(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

