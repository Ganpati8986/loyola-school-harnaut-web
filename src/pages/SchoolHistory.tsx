// import React from 'react';
// import { motion } from 'motion/react';
// import { History, Calendar, Award, Building, Users, Star, ChevronRight } from 'lucide-react';
// import SEO from '../components/SEO';

// const timeline = [
//   {
//     year: "2005",
//     title: "The Foundation",
//     description: "Loyola School Harnaut was founded with a vision to provide quality education to the children of Nalanda district. Starting with just 50 students and 5 teachers.",
//     icon: <Calendar className="text-[#FFD700]" size={24} />,
//     image: "https://picsum.photos/seed/school-foundation/800/600"
//   },
//   {
//     year: "2010",
//     title: "Expansion & Growth",
//     description: "The school expanded its infrastructure with the addition of a new academic block and state-of-the-art science laboratories. Student strength reached 500.",
//     icon: <Building className="text-[#CC0000]" size={24} />,
//     image: "https://picsum.photos/seed/school-expansion/800/600"
//   },
//   {
//     year: "2011",
//     title: "CBSE Affiliation",
//     description: "A major milestone was achieved when the school received affiliation from the Central Board of Secondary Education (CBSE), New Delhi, following the C.B.S.E. syllabus.",
//     icon: <Award className="text-[#003366]" size={24} />,
//     image: "https://picsum.photos/seed/school-cbse/800/600"
//   },
//   {
//     year: "2020",
//     title: "Digital Transformation",
//     description: "The school embraced digital learning, implementing smart classrooms and online learning platforms to ensure uninterrupted education during the global pandemic.",
//     icon: <Star className="text-emerald-600" size={24} />,
//     image: "https://picsum.photos/seed/school-digital/800/600"
//   },
//   {
//     year: "2024",
//     title: "Excellence in Education",
//     description: "Today, Loyola School Harnaut stands as a beacon of excellence, with over 1500 students and a legacy of producing district toppers in board examinations.",
//     icon: <Users className="text-[#FFD700]" size={24} />,
//     image: "https://picsum.photos/seed/school-excellence/800/600"
//   }
// ];

// const SchoolHistory = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <SEO 
//         title="Our History - Loyola School Harnaut" 
//         description="Learn about the rich history and legacy of Loyola School Harnaut, from its humble beginnings to its current status as a premier educational institution."
//         keywords="Loyola School Our History, School legacy Harnaut, Loyola School history Nalanda, School foundation Bihar"
//       />

//       {/* Hero Section */}
//       <div className="relative bg-[#002147] pt-32 pb-48 overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-block px-4 py-1 bg-[#FFD700] text-[#002147] text-xs font-bold tracking-widest uppercase rounded-full mb-6"
//           >
//             Our Legacy
//           </motion.div>
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
//           >
//             Our <span className="text-[#FFD700]">History</span>
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
//           >
//             From a small vision to a grand reality. Explore the milestones that 
//             have shaped Loyola School Harnaut into what it is today.
//           </motion.p>
//         </div>
//       </div>

//       {/* Timeline Section */}
//       <div className="max-w-7xl mx-auto px-4 py-24 relative">
//         {/* Vertical Line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 top-24 bottom-24 w-1 bg-gray-100 hidden lg:block" />

//         <div className="space-y-24">
//           {timeline.map((item, index) => (
//             <motion.div
//               key={item.year}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
//             >
//               {/* Image Side */}
//               <div className="lg:w-1/2 w-full">
//                 <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
//                   <img 
//                     src={item.image} 
//                     alt={item.title}
//                     className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
//                     referrerPolicy="no-referrer"
//                   />
//                   <div className="absolute inset-0 bg-[#002147]/20 group-hover:bg-transparent transition-colors duration-500" />
//                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-2 rounded-2xl shadow-xl">
//                     <span className="text-3xl font-bold text-[#003366]">{item.year}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Content Side */}
//               <div className="lg:w-1/2 w-full px-4 lg:px-12 text-center lg:text-left">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-6 shadow-sm border border-gray-100">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-4xl font-bold text-[#003366] mb-4">{item.title}</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                   {item.description}
//                 </p>
//                 <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#CC0000] font-bold uppercase tracking-widest text-xs">
//                   <span>Milestone Achieved</span>
//                   <div className="w-8 h-0.5 bg-[#CC0000]" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Founder's Message Section */}
//       <div className="bg-[#002147] py-24 text-white overflow-hidden relative">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700] opacity-5 rounded-full -mr-48 -mt-48" />
//         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
//           <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
//             <History size={40} className="text-[#002147]" />
//           </div>
//           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">A Vision for the Future</h2>
//           <p className="text-2xl text-gray-300 italic leading-relaxed mb-12">
//             "Our journey has always been about more than just buildings and books. 
//             It's about igniting the spark of curiosity in every child and nurturing 
//             them to become compassionate leaders of tomorrow."
//           </p>
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-0.5 bg-[#FFD700] mb-4" />
//             <p className="font-bold text-xl tracking-widest uppercase">The Board of Directors</p>
//             <p className="text-[#FFD700] text-sm mt-2">Loyola School Harnaut</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SchoolHistory;


import React from 'react';
import { motion } from 'motion/react';
import { 
  History, Calendar, Award, Building, Users, Star, ChevronRight,
  BookOpen, Heart, Globe, ShieldCheck, Zap, CheckCircle2, Info
} from 'lucide-react';
import SEO from '../components/SEO';

const timeline = [
  {
    year: "2005",
    title: "The Foundation",
    description: "Loyola School Harnaut was founded with a vision to provide quality education to the children of Nalanda district. Starting with just 50 students and 5 teachers.",
    icon: <Calendar className="text-[#FFD700]" size={24} />,
    image: "https://picsum.photos/seed/school-foundation/800/600"
  },
  {
    year: "2010",
    title: "Expansion & Growth",
    description: "The school expanded its infrastructure with the addition of a new academic block and state-of-the-art science laboratories. Student strength reached 500.",
    icon: <Building className="text-[#CC0000]" size={24} />,
    image: "https://picsum.photos/seed/school-expansion/800/600"
  },
  {
    year: "2011",
    title: "CBSE Affiliation",
    description: "A major milestone was achieved when the school received affiliation from the Central Board of Secondary Education (CBSE), New Delhi, following the C.B.S.E. syllabus.",
    icon: <Award className="text-[#003366]" size={24} />,
    image: "https://picsum.photos/seed/school-cbse/800/600"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "The school embraced digital learning, implementing smart classrooms and online learning platforms to ensure uninterrupted education during the global pandemic.",
    icon: <Star className="text-emerald-600" size={24} />,
    image: "https://picsum.photos/seed/school-digital/800/600"
  },
  {
    year: "2024",
    title: "Excellence in Education",
    description: "Today, Loyola School Harnaut stands as a beacon of excellence, with over 1500 students and a legacy of producing district toppers in board examinations.",
    icon: <Users className="text-[#FFD700]" size={24} />,
    image: "https://picsum.photos/seed/school-excellence/800/600"
  }
];

const SchoolHistory = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Our History - Loyola School Harnaut" 
        description="Learn about the rich history and legacy of Loyola School Harnaut, from its humble beginnings to its current status as a premier educational institution."
        keywords="Loyola School Our History, School legacy Harnaut, Loyola School history Nalanda, School foundation Bihar"
      />

      {/* Hero Section */}
      <div className="relative bg-[#002147] pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-[#FFD700] text-[#002147] text-xs font-bold tracking-widest uppercase rounded-full mb-6"
          >
            Our Legacy
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Our <span className="text-[#FFD700]">History</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            From a small vision to a grand reality. Explore the milestones that 
            have shaped Loyola School Harnaut into what it is today.
          </motion.p>
        </div>
      </div>

      {/* General Information Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-3 text-[#CC0000] font-bold uppercase tracking-[0.2em] text-sm mb-6">
                <Info size={20} />
                <span>General Information</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003366] leading-tight mb-8">
                Foundation & <span className="text-[#FFD700]">Purpose</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#FFD700] rounded-full" />
            </div>
            <div className="lg:w-2/3 space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong className="text-[#003366]">Loyola School, Harnaut</strong>, is a private school established by the Catholic Church, Harnaut, which is a unit of Mokameh Parish Society, under the Archdiocese of Patna, for the education of boys and girls up to the Senior Secondary level. It is open to all without distinction of caste or creed.
              </p>
              <p>
                The purpose of the institution is to impart to its pupils a sound, moral, intellectual and physical education, to train them to be useful and loyal citizens of India and to help them to become agents of needed social change in the society.
              </p>
              <p>
                Realizing that education is an all-round development of pupil, the institution constantly endeavours to direct to this and special emphasis is given on Co-curricular activities, character formation, academic excellence and social responsibilities. The school got affiliated to Central Board of Secondary Education in the year 2011 and follows C.B.S.E. syllabus.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="font-medium text-[#003366]">English Medium Instruction</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="font-medium text-[#003366]">Moral & Value Education</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>


      {/* Aims and Objectives Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-[#003366]/5 text-[#003366] text-xs font-bold tracking-widest uppercase rounded-full mb-4"
            >
              Our Purpose
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003366] mb-6">Aims & <span className="text-[#FFD700]">Objectives</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              To inculcate values which will enable the pupils to make right decisions in life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Moral Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-8">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Moral Values</h3>
              <ul className="space-y-4">
                {[
                  "Faith in God and Prayer", "Religious tolerance", "Self-awareness",
                  "Inner Freedom", "Love and Generosity", "Optimism and hope",
                  "Self-discipline", "Self-confidence", "Honesty & Courage"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Intellectual Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Intellectual Values</h3>
              <ul className="space-y-4">
                {[
                  "Thirst for knowledge", "Critical thinking", "Analytical & Synthesis skills",
                  "Love for reading", "Development of talents", "Possession of skills"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Social Values</h3>
              <ul className="space-y-4">
                {[
                  "Social Consciousness", "Service & Patriotism", "Civic responsibility",
                  "Respect for elders", "Team spirit", "Love for less fortunate",
                  "Cultural appreciation", "Being eco-friendly", "Hygiene"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Founder's Message Section */}
      <div className="bg-[#002147] py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700] opacity-5 rounded-full -mr-48 -mt-48" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
            <History size={40} className="text-[#002147]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">A Vision for the Future</h2>
          <p className="text-2xl text-gray-300 italic leading-relaxed mb-12">
            "Our journey has always been about more than just buildings and books. 
            It's about igniting the spark of curiosity in every child and nurturing 
            them to become compassionate leaders of tomorrow."
          </p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-0.5 bg-[#FFD700] mb-4" />
            <p className="font-bold text-xl tracking-widest uppercase">The Board of Directors</p>
            <p className="text-[#FFD700] text-sm mt-2">Loyola School Harnaut</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolHistory;

