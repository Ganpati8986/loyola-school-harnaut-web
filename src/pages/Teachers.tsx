// import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Mail, Phone, User, IdCard, Briefcase, Users, Search, Filter, X } from 'lucide-react';
// import SEO from '../components/SEO';
// import { cn } from '../lib/utils';
// import ProtectedImage from '../components/ProtectedImage';
// import mam from '../assets/mam1.jpeg';
// import mam3 from '../assets/Anju Sangeeta toppo.jpeg';
// import mam4 from '../assets/Elina Murmu.jpeg';
// import mam5 from '../assets/sonali sinha.jpeg';
// import mam2 from '../assets/Miss Sara Kisku.jpeg';
// import mam1 from '../assets/kritika rai.jpeg';
// import sir1 from '../assets/ravi roshan.jpeg';
// import sir2 from '../assets/mukesh jha.jpeg';
// import sir3 from '../assets/Ms Arun Kumar.jpeg';
// import sir5 from '../assets/Anil Hembrom.jpeg';
// import sir6 from '../assets/Sunil Kumarr.jpeg';
// import sir7 from '../assets/Ealiot Lepcha.jpeg';
// import sir8 from '../assets/Dharamveer.jpeg';
// import sir9 from '../assets/Bhupendar.png';
// import sir10 from '../assets/Aditya Kumar.jpeg';
// import sir11 from '../assets/Deepak Kumar.jpeg';
// import sir12 from '../assets/Sudhir Kumar.jpeg';
// import sir13 from '../assets/Richard Lakra.jpeg';
// import sir14 from '../assets/anupam kumar.png';
// import sir15 from '../assets/harsh ranjan.jpeg';
// import sir16 from '../assets/ravi shankar sinha.jpeg';
// import sir17 from '../assets/Sunil Kumar.jpeg';
// import sir18 from '../assets/Sunil Kumarrrrrrrr.jpeg';



// const teachers = [
//   {
//     id: "LS-T001",
//     name: "Ms . Seema Kumari",
//     fatherName: "",
//     designation: "Office Staff",
//     contact: "+91 12345 67890",
//     email: "seema@gmail.com",
//     image: mam,
//     department: "Non Teaching",
//     experience: 5
//   },
//   {
//     id: "LS-T002",
//     name: "Ravi Roshan",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 98765 43210",
//     email: "ravi@loyolaschoolharnaut.com",
//     image: sir1,
//     department: " Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T003",
//     name: "Mukesh Jha",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 88888 77777",
//     email: "Teacher@loyolaschoolharnaut.com",
//     image: sir2,
//       department: " Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T004",
//     name: "Arun Kumar",
//      fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 77777 66666",
//     email: "teacher@loyolateacherschoolharnaut.com",
//     image: sir3,
//   department: " Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T005",
//     name: "Anil Hembrom",
//  fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 66666 55555",
//     email: "Hembrom.k@loyolaschoolharnaut.com",
//     image: sir5,
//     department: " Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T006",
//     name: "Kritika Rai",
//    fatherName: "",
//     designation: " Assistant Teacher",
//     contact: "+91 55555 44444",
//     email: "Rai@loyolaschoolharnaut.com",
//     image: mam1,
//      department: " Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T007",
//     name: "Sara Kisku",
//    fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 44444 33333",
//     email: "Kisku.s@loyolaschoolharnaut.com",
//     image: mam2,
//   department: " Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T008",
//     name: "Mr Sunil Kumar Singh",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 33333 22222",
//     email: "sunita.d@loyolaschoolharnaut.com",
//     image: sir6,
//   department: " Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T009",
//     name: "Mr. Robert Wilson",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 22222 11111",
//     email: "robert.w@loyolaschoolharnaut.com",
//     image: sir7,
//       department: " Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Dharamveer Sir",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "neha.g@loyolaschoolharnaut.com",
//     image: sir8,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Anju Sangeeta Toppo",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Toppo@loyolaschoolharnaut.com",
//     image: mam3,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Elina Murmu",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Murmu@loyolaschoolharnaut.com",
//     image: mam4,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Sonali Singh",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Teacher@loyolaschoolharnaut.com",
//     image: mam5,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Bhupendar Singh",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Singh@loyolaschoolharnaut.com",
//     image: sir9,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Aditya Kumar",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Kumar@loyolaschoolharnaut.com",
//     image: sir10,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Deepak Kumar",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Teacher@loyolaschoolharnaut.com",
//     image: sir11,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Sudhir Kumar",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Teacher@loyolaschoolharnaut.com",
//     image: sir12,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Richard Lakra",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Teacher@loyolaschoolharnaut.com",
//     image: sir13,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Anupam Kumar",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Teacher@loyolaschoolharnaut.com",
//     image: sir14,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Harsh Ranjan",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Teacher@loyolaschoolharnaut.com",
//     image: sir15,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Ravi Shankar Singh",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Teacher@loyolaschoolharnaut.com",
//     image: sir16,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Sunil Kumar",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Teacher@loyolaschoolharnaut.com",
//     image: sir17,
//   department: "Teacher",
//     experience: 5
//   },
//   {
//     id: "LS-T010",
//     name: "Sunil Kumar",
//     fatherName: "",
//     designation: "Assistant Teacher",
//     contact: "+91 11111 00000",
//     email: "Teacher@loyolaschoolharnaut.com",
//     image: sir18,
//   department: "Teacher",
//     experience: 5
//   }
// ];

// const Teachers = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDept, setSelectedDept] = useState('All');
//   const [minExp, setMinExp] = useState(0);
//   const [activeCard, setActiveCard] = useState<string | null>(null);

//   const departments = useMemo(() => {
//     const depts = new Set(teachers.map(t => t.department));
//     return ['All', ...Array.from(depts)];
//   }, []);

//   const filteredTeachers = useMemo(() => {
//     return teachers.filter(teacher => {
//       const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                            teacher.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                            teacher.id.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesDept = selectedDept === 'All' || teacher.department === selectedDept;
//       const matchesExp = teacher.experience >= minExp;
//       return matchesSearch && matchesDept && matchesExp;
//     });
//   }, [searchTerm, selectedDept, minExp]);

//   return (
//     <div className="min-h-screen bg-gray-50 pb-20">
//       <SEO 
//         title="Academic Staff - Loyola School Harnaut" 
//         description="Meet our dedicated and experienced academic staff members at Loyola School Harnaut."
//         keywords="Loyola School Academic Staff, School teachers Harnaut, Loyola School faculty Nalanda, Educators Bihar"
//       />

//       {/* Header Section */}
//       <div className="bg-[#002147] text-white py-20 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-serif font-bold mb-4"
//           >
//             Our Academic Staff
//           </motion.h1>
//           <motion.div 
//             initial={{ width: 0 }}
//             animate={{ width: 100 }}
//             className="h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6"
//           />
//           <p className="text-gray-300 max-w-2xl mx-auto text-lg italic">
//             "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires"
//           </p>
//         </div>
//       </div>

//       {/* Filters Section */}
//       <div className="max-w-[1600px] mx-auto px-4 -mt-10 relative z-20">
//         <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 border border-gray-100">
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-end">
//             {/* Search */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
//                 <Search size={14} className="mr-2" /> Search Staff
//               </label>
//               <div className="relative">
//                 <input 
//                   type="text"
//                   placeholder="Name, Role or ID..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002147] transition-all"
//                 />
//                 {searchTerm && (
//                   <button 
//                     onClick={() => setSearchTerm('')}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   >
//                     <X size={16} />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Department Filter */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
//                 <Filter size={14} className="mr-2" /> Department
//               </label>
//               <select 
//                 value={selectedDept}
//                 onChange={(e) => setSelectedDept(e.target.value)}
//                 className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002147] transition-all appearance-none"
//               >
//                 {departments.map(dept => (
//                   <option key={dept} value={dept}>{dept}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Experience Filter */}
//             <div className="space-y-2">
//               <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
//                 <Briefcase size={14} className="mr-2" /> Min. Experience
//               </label>
//               <div className="flex items-center space-x-4">
//                 <input 
//                   type="range"
//                   min="0"
//                   max="30"
//                   value={minExp}
//                   onChange={(e) => setMinExp(parseInt(e.target.value))}
//                   className="flex-grow accent-[#002147]"
//                 />
//                 <span className="text-sm font-bold text-[#002147] w-12">{minExp}y+</span>
//               </div>
//             </div>

//             {/* Results Count */}
//             <div className="flex items-center justify-end h-full pb-3">
//               <p className="text-sm text-gray-500 font-medium">
//                 Showing <span className="text-[#002147] font-bold">{filteredTeachers.length}</span> educators
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Teachers Grid - 5 Columns on Ultra Wide */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
//           <AnimatePresence mode="popLayout">
//             {filteredTeachers.map((teacher, index) => (
//               <motion.div
//                 key={teacher.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 onClick={() => setActiveCard(activeCard === teacher.id ? null : teacher.id)}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100 relative cursor-pointer md:cursor-default"
//               >
//                 {/* Image Container */}
//                 <div className="relative h-[320px] overflow-hidden">
//                   <ProtectedImage watermark={'Loyola School Harnaut'}
//                     src={teacher.image} 
//                     alt={teacher.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     referrerPolicy="no-referrer"
//                   />

//                   {/* Initial Overlay (Name & Designation) */}
//                   <div className={cn(
//                     "absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent opacity-90 transition-opacity duration-500",
//                     activeCard === teacher.id ? "opacity-0" : "group-hover:opacity-0"
//                   )} />
//                   <div className={cn(
//                     "absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500",
//                     activeCard === teacher.id ? "translate-y-full" : "group-hover:translate-y-full"
//                   )}>
//                     <span className="bg-[#FFD700] text-[#002147] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-2 inline-block">
//                       {teacher.department}
//                     </span>
//                     <h3 className="text-lg font-bold text-white leading-tight">
//                       {teacher.name}
//                     </h3>
//                     <p className="text-[#FFD700] font-bold text-[10px] uppercase tracking-widest mt-1">
//                       {teacher.designation}
//                     </p>
//                   </div>

//                   {/* Hover Details Overlay */}
//                   <div className={cn(
//                     "absolute inset-0 bg-[#002147]/95 flex flex-col justify-center p-6 translate-y-full transition-transform duration-500 ease-out",
//                     activeCard === teacher.id ? "translate-y-0" : "group-hover:translate-y-0"
//                   )}>
//                     <div className="mb-4">
//                       <h3 className="text-xl font-bold text-white mb-0.5 leading-tight">{teacher.name}</h3>
//                       <p className="text-[#FFD700] font-bold text-[9px] uppercase tracking-widest">{teacher.designation}</p>
//                       <div className="w-8 h-0.5 bg-[#FFD700] mt-3 rounded-full" />
//                     </div>

//                     <div className="space-y-3">
//                       <div className="flex items-center text-xs text-gray-300">
//                         <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center mr-3 shrink-0">
//                           <Users size={12} className="text-[#FFD700]" />
//                         </div>
//                         <div>
//                           <p className="text-[8px] uppercase tracking-wider text-gray-500 font-bold">Experience</p>
//                           <p className="font-medium text-white">{teacher.experience} Years</p>
//                         </div>
//                       </div>

//                       <div className="flex items-center text-xs text-gray-300">
//                         <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center mr-3 shrink-0">
//                           <IdCard size={12} className="text-[#FFD700]" />
//                         </div>
//                         <div>
//                           <p className="text-[8px] uppercase tracking-wider text-gray-500 font-bold">Emp ID</p>
//                           <p className="font-medium text-white">{teacher.id}</p>
//                         </div>
//                       </div>

//                       <div className="flex items-center text-xs text-gray-300">
//                         <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center mr-3 shrink-0">
//                           <Phone size={12} className="text-[#FFD700]" />
//                         </div>
//                         <div>
//                           <p className="text-[8px] uppercase tracking-wider text-gray-500 font-bold">Contact</p>
//                           <a href={`tel:${teacher.contact}`} className="font-medium text-white hover:text-[#FFD700] transition-colors">
//                             {teacher.contact}
//                           </a>
//                         </div>
//                       </div>

//                       <div className="flex items-center text-xs text-gray-300">
//                         <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center mr-3 shrink-0">
//                           <Mail size={12} className="text-[#FFD700]" />
//                         </div>
//                         <div>
//                           <p className="text-[8px] uppercase tracking-wider text-gray-500 font-bold">Email</p>
//                           <a href={`mailto:${teacher.email}`} className="font-medium text-white hover:text-[#FFD700] transition-colors truncate block max-w-[140px]">
//                             {teacher.email}
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Bottom Accent */}
//                 <div className={cn(
//                   "h-1 w-full bg-[#002147] transition-colors duration-500",
//                   activeCard === teacher.id ? "bg-[#FFD700]" : "group-hover:bg-[#FFD700]"
//                 )} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* Empty State */}
//         {filteredTeachers.length === 0 && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20"
//           >
//             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
//               <Search size={40} />
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">No educators found</h3>
//             <p className="text-gray-500">Try adjusting your filters or search term.</p>
//             <button 
//               onClick={() => {
//                 setSearchTerm('');
//                 setSelectedDept('All');
//                 setMinExp(0);
//               }}
//               className="mt-6 text-[#002147] font-bold hover:underline"
//             >
//               Clear all filters
//             </button>
//           </motion.div>
//         )}
//       </div>

//       {/* Call to Action */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         className="max-w-4xl mx-auto px-4 mt-20 text-center"
//       >
//         <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-dashed border-gray-200">
//           <h2 className="text-2xl font-bold text-[#003366] mb-4">Want to join our team?</h2>
//           <p className="text-gray-600 mb-8">
//             We are always looking for passionate educators who want to make a difference. 
//             Check our careers page for current openings.
//           </p>
//           <a 
//             href="/careers" 
//             className="inline-flex items-center px-8 py-3 bg-[#CC0000] text-white font-bold rounded-full hover:bg-[#002147] transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             View Career Openings
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Teachers;



import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Briefcase, Search, Filter, X } from 'lucide-react';
import SEO from '../components/SEO';
import ProtectedImage from '../components/ProtectedImage';
import mam from '../assets/mam1.jpeg';
import mam3 from '../assets/Anju Sangeeta toppo.jpeg';
import mam4 from '../assets/Elina Murmu.jpeg';
import mam5 from '../assets/sonali sinha.jpeg';
import mam2 from '../assets/Miss Sara Kisku.jpeg';
import mam1 from '../assets/kritika rai.jpeg';
import sir1 from '../assets/ravi roshan.jpeg';
import sir2 from '../assets/mukesh jha.jpeg';
import sir3 from '../assets/Ms Arun Kumar.jpeg';
import sir5 from '../assets/Anil.jpeg';
import sir6 from '../assets/Sunil Kumarr.jpeg';
import sir7 from '../assets/Ealiot Lepcha.jpeg';
import sir8 from '../assets/Dharamveer.jpeg';
import sir9 from '../assets/Bhupendar.png';
import sir10 from '../assets/Aditya Kumar.jpeg';
import sir11 from '../assets/Deepak Kumar.jpeg';
import sir12 from '../assets/Sudhir Kumar.jpeg';
import sir13 from '../assets/Richard Lakra.jpeg';
import sir14 from '../assets/anupam kumar.png';
import sir15 from '../assets/harsh ranjan.jpeg';
import sir16 from '../assets/ravi shankar sinha.jpeg';
import sir17 from '../assets/Sunil Kumar.jpeg';
import sir18 from '../assets/Sunil Kumarrrrrrrr.jpeg';
import mam6 from '../assets/Nisha Kumari.jpeg';
import mam7 from '../assets/Usha Devi.jpeg';
import mam8 from '../assets/Reena Devi.jpeg';
import mam9 from '../assets/Asmila Xalxo.jpeg';
import mam10 from '../assets/Aparana Minj.jpg';
import mam11 from '../assets/Pritisha uraon.jpg';
import mam12 from '../assets/Sonam Devi.jpeg';
import mam13 from '../assets/Rajani Mah.jpeg';
import mam14 from '../assets/Babita devi.jpeg';
import mam15 from '../assets/Sitara Kumari.jpeg';
import mam16 from '../assets/sister deepa.jpeg';
import sir19 from '../assets/prince2.jpeg';
import sir20 from '../assets/Ranjit Pradhan.jpeg';

const teachers = [
  // Female Teachers
  { id: "2246906", name: "Fr. ASIT LAKRA", designation: "PRINCIPAL", email: "asitraj9@gmail.com", image: sir19, department: "Teacher", experience: 5 },
  { id: "2988789", name: "Sr. DIPA SARDAR", designation: "VICE PRINCIPAL", email: "DIPA30763@GMAIL.COM", image: mam16, department: "Teacher", experience: 5 },
  { id: "3254486", name: "SEEMA KUMARI", designation: "Office Staff", email: "SEEMAK8641@GMAIL.COM", image: mam, department: "Non Teaching", experience: 5 },
  { id: "2244167", name: "KRITIKA RAI", designation: "Assistant Teacher", email: "kritikarai223@gmail.com", image: mam1, department: "Teacher", experience: 5 },
  { id: "2246964", name: "SARA KISKU", designation: "Assistant Teacher", email: "saku2507@gmail.com", image: mam2, department: "Teacher", experience: 5 },
  { id: "73754", name: "ANJU SANGEETA TOPPO", designation: "Assistant Teacher", email: " anju221984@gmail.com", image: mam3, department: "Teacher", experience: 5 },
  { id: "73877", name: "ELINA MURMU", designation: "Assistant Teacher", email: "elinamurmu2015@gmail.com", image: mam4, department: "Teacher", experience: 5 },
  { id: "2988307", name: "SONALI SINHA", designation: "Assistant Teacher", email: " 26SONALISINHA@GMAIL.COM", image: mam5, department: "Teacher", experience: 5 },
  { id: "73874", name: "MRS. NISHA KUMARI", designation: "Assistant Teacher", email: " nisha98018@gmail.com", image: mam6, department: "Teacher", experience: 5 },
  { id: "2670988", name: "APARNA MINJ", designation: "Assistant Teacher", email: " aparnaminj@gmail.com", image: mam10, department: "Teacher", experience: 5 },
  { id: "2671013", name: " PRITISHA URAU", designation: "Assistant Teacher", email: "pritishaurau@gmail.com", image: mam11, department: "Teacher", experience: 5 },
  { id: "2449306", name: "RAJANI MAHATO", designation: "Assistant Teacher", email: " rajani1984mahto@gmail.com", image: mam13, department: "Teacher", experience: 5 },
  { id: "73761", name: "MRS. SITARA KUMARI", designation: "Assistant Teacher", email: "sitarakumari84090@gmail.com", image: mam15, department: "Teacher", experience: 5 },


  // Male Teachers
  { id: "2247168", name: "RAVI RAUSHAN KUMAR", designation: "Assistant Teacher", email: "prince2211992@gmail.com", image: sir1, department: "Teacher", experience: 5 },
  { id: "2247027", name: "MUKESH KUMAR JHA", designation: "Assistant Teacher", email: "mukjha6@gmail.com", image: sir2, department: "Teacher", experience: 5 },
  { id: "73879", name: "ARUN KUMAR DAS", designation: "Assistant Teacher", email: "arunkrdas31279@gmail.com", image: sir3, department: "Teacher", experience: 5 },
  { id: "2988331", name: "ANIL KUMAR HEMBRAM", designation: "Assistant Teacher", email: "NIL.HEMBRAM90@GMAIL.COM", image: sir5, department: "Teacher", experience: 5 },
  { id: "2988331", name: "Sunil Kumar", designation: "Office Staff", email: "NIL.HEMBRAM90@GMAIL.COM", image: sir6, department: "Non Teaching", experience: 5 },
  { id: "2902111", name: "EALIOT LEPCHA", designation: "Assistant Teacher", email: "theealiot@gmail.com", image: sir7, department: "Teacher", experience: 5 },
  { id: "1910647", name: "DHARAMVIR SHAH", designation: "Assistant Teacher", email: "dharamvirshah8709126390@gmail.com", image: sir8, department: "Teacher", experience: 5 },
  { id: "2738765", name: "BHUPENDRA SINGH", designation: "Assistant Teacher", email: "bhusingh007@gmail.com", image: sir9, department: "Teacher", experience: 5 },
  { id: "2684123", name: "ADITYA KUMAR", designation: "Assistant Teacher", email: "adityakumar241092@gmail.com", image: sir10, department: "Teacher", experience: 5 },
  { id: "2684123", name: "DEEPAK KUMAR", designation: "Assistant Teacher", email: "adityakumar241092@gmail.com", image: sir11, department: "Teacher", experience: 5 },
  { id: "73740", name: "SUDHIR KUMAR SHASTRI", designation: "Assistant Teacher", email: "sudhirshastri64@gmail.com", image: sir12, department: "Teacher", experience: 5 },
  { id: "2244163", name: "RICHARD LAKRA", designation: "Assistant Teacher", email: "lakrarichard1@gmail.com", image: sir13, department: "Teacher", experience: 5 },
  { id: "2544348", name: "ANUPAM KUMAR", designation: "Assistant Teacher", email: "kumaranupam@gmail.com", image: sir14, department: "Teacher", experience: 5 },
  { id: "2684143", name: "HARSH RANJAN KUMAR", designation: "Assistant Teacher", email: "yadavharsh5695@gmail.com", image: sir15, department: "Teacher", experience: 5 },
  { id: "73753", name: "RAVI SHANKAR KUMAR", designation: "Assistant Teacher", email: "sinharavishankar58@gmail.com", image: sir16, department: "Teacher", experience: 5 },
  { id: "73741", name: "SUNIL KUMAR", designation: "Assistant Teacher", email: "sinilkr1977@gmail.com", image: sir17, department: "Teacher", experience: 5 },
  { id: "73739", name: "Ranjit Pradhan", designation: "Assistant Teacher", email: "ranjitpradhan571979@gmail.com", image: sir20, department: "Teacher", experience: 5 },
  { id: "73741", name: "SUSHIL SAMUEL", designation: "", email: "samuel@gmail.com", image: sir18, department: "Peon", experience: 5 },

  // supporting staff
  { id: "LS-T025", name: "Usha Devi", designation: "", email: "usha@loyolaschoolharnaut.com", image: mam7, department: "Supporting Staff", experience: 5 },
  { id: "LS-T026", name: "Reena Devi", designation: "", email: "reena@loyolaschoolharnaut.com", image: mam8, department: "Supporting Staff", experience: 5 },
  { id: "LS-T027", name: "Asmila Xalxo", designation: "", email: "asmila@loyolaschoolharnaut.com", image: mam9, department: "Supporting Staff", experience: 5 },
  { id: "LS-T032", name: "Babita Devi", designation: "", email: "babita@loyolaschoolharnaut.com", image: mam14, department: "Supporting Staff", experience: 5 },
  { id: "LS-T030", name: "Sonam Devi", designation: "", email: "sonam@loyolaschoolharnaut.com", image: mam12, department: "Supporting Staff", experience: 5 },
];

const getInitials = (name: string) => {
  const cleaned = name.replace(/^(Mr\.?|Ms\.?|Mrs\.?|Rev\.?|Fr\.?)\s*/i, '').trim();
  const parts = cleaned.split(' ').filter(Boolean);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [minExp, setMinExp] = useState(0);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const departments = useMemo(() => {
    const depts = new Set(teachers.map((t) => t.department));
    return ['All', ...Array.from(depts)];
  }, []);

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchesSearch =
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = selectedDept === 'All' || teacher.department === selectedDept;
      const matchesExp = teacher.experience >= minExp;
      return matchesSearch && matchesDept && matchesExp;
    });
  }, [searchTerm, selectedDept, minExp]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <SEO
        title="Academic Staff - Loyola School Harnaut"
        description="Meet our dedicated and experienced academic staff members at Loyola School Harnaut."
        keywords="Loyola School Academic Staff, School teachers Harnaut, Loyola School faculty Nalanda, Educators Bihar"
      />

      {/* Header */}
      <div className="bg-[#002147] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Our Academic Staff
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            className="h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6"
          />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg italic">
            "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires."
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-[1600px] mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-8 md:mb-12 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 items-end">
            <div className="space-y-2 col-span-2 md:col-span-1">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                <Search size={14} className="mr-2" /> Search Staff
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name, Role or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002147] transition-all"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                <Filter size={14} className="mr-2" /> Dept.
              </label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#002147] transition-all appearance-none"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                <Briefcase size={14} className="mr-2" /> Min. Exp
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="range" min="0" max="30" value={minExp}
                  onChange={(e) => setMinExp(parseInt(e.target.value))}
                  className="flex-grow accent-[#002147]"
                />
                <span className="text-sm font-bold text-[#002147] w-10">{minExp}y+</span>
              </div>
            </div> */}

            <div className="hidden lg:flex items-center justify-end h-full pb-3">
              <p className="text-sm text-gray-500 font-medium">
                Showing <span className="text-[#002147] font-bold">{filteredTeachers.length}</span> educators
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 font-medium mt-3 md:hidden">
            Showing <span className="text-[#002147] font-bold">{filteredTeachers.length}</span> educators
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 sm:gap-3 md:gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTeachers.map((teacher, index) => {
              const cardKey = teacher.id + index;
              const isTapped = activeCard === cardKey;

              return (
                <motion.div
                  key={cardKey}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  onClick={() => setActiveCard(isTapped ? null : cardKey)}
                  className="relative rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-5 flex flex-col items-center text-center overflow-hidden group
                    bg-white border border-gray-100 shadow-sm
                    hover:-translate-y-1 md:hover:-translate-y-2
                    hover:shadow-[0_16px_48px_rgba(0,33,71,0.35)]
                    transition-all duration-500 ease-out cursor-pointer select-none"
                >
                  {/* Dark navy fill slides up on hover / tap */}
                  <div className={`absolute inset-0 bg-[#002147] rounded-2xl transition-transform duration-500 ease-out
                    ${isTapped ? 'translate-y-0' : 'translate-y-full'} group-hover:translate-y-0`}
                  />

                  {/* Gold top accent */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#FFD700] rounded-full z-10
                    transition-all duration-500
                    ${isTapped ? 'w-3/4' : 'w-8'} group-hover:w-3/4`}
                  />

                  {/* Avatar */}
                  <div className="relative mb-3 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
                    {/* Initials */}
                    <div className={`absolute inset-0 rounded-full bg-[#e8edf4] border-2 border-[#c8d4e3]
                      flex items-center justify-center transition-opacity duration-300
                      ${isTapped ? 'opacity-0' : 'opacity-100'} group-hover:opacity-0`}
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#002147] tracking-wide leading-none select-none">
                        {getInitials(teacher.name)}
                      </span>
                    </div>

                    {/* Photo */}
                    <div className={`absolute inset-0 rounded-full overflow-hidden border-2 border-[#FFD700]/60
                      shadow-md transition-opacity duration-500
                      ${isTapped ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}
                    >
                      <ProtectedImage
                        src={teacher.image}
                        alt={teacher.name}
                        watermark="Loyola School Harnaut"
                        className="w-full h-full object-cover scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-grow z-10 w-full space-y-0.5">
                    <span className={`text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.15em] block
                      transition-colors duration-300
                      ${isTapped ? 'text-[#FFD700]' : 'text-[#002147]'} group-hover:text-[#FFD700]`}
                    >
                      {teacher.department}
                    </span>

                    <h3 className={`text-[10px] sm:text-xs md:text-sm font-bold leading-tight tracking-tight
                      transition-colors duration-300
                      ${isTapped ? 'text-white' : 'text-[#002147]'} group-hover:text-white`}
                    >
                      {teacher.name}
                    </h3>

                    <p className={`text-[7px] sm:text-[8px] font-semibold uppercase tracking-wider hidden sm:block
                      transition-colors duration-300
                      ${isTapped ? 'text-[#FFD700]/70' : 'text-gray-400'} group-hover:text-[#FFD700]/70`}
                    >
                      {teacher.designation}
                    </p>

                    <div className="pt-1.5 sm:pt-2 hidden sm:flex items-center justify-center gap-1">
                      <Briefcase size={8} className={`transition-colors duration-300 ${isTapped ? 'text-[#FFD700]/60' : 'text-gray-400'} group-hover:text-[#FFD700]/60`} />
                      <span className={`text-[8px] font-medium transition-colors duration-300 ${isTapped ? 'text-white/50' : 'text-gray-400'} group-hover:text-white/50`}>
                        {teacher.id}
                      </span>
                    </div>
                  </div>

                  {/* Divider + Mail button — hidden by default, shown on hover/tap */}
                  <div className={`w-full z-10 overflow-hidden transition-all duration-500 ease-out
                    ${isTapped ? 'max-h-16 opacity-100 mt-2.5' : 'max-h-0 opacity-0 mt-0'}
                    group-hover:max-h-16 group-hover:opacity-100 group-hover:mt-2.5`}
                  >
                    <div className={`w-full mb-2.5 border-t transition-colors duration-300
                      ${isTapped ? 'border-white/10' : 'border-white/10'} group-hover:border-white/10`}
                    />
                    <div className="flex items-center justify-center">
                      <motion.a
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        href={`mailto:${teacher.email}`}
                        title={teacher.email}
                        onClick={(e) => e.stopPropagation()}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/10 flex items-center justify-center
                          text-white/70 hover:bg-[#FFD700] hover:text-[#002147] transition-all duration-300"
                      >
                        <Mail size={11} className="sm:w-3 sm:h-3" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredTeachers.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
              <Search size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No educators found</h3>
            <p className="text-gray-500">Try adjusting your filters or search term.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedDept('All'); setMinExp(0); }}
              className="mt-6 text-[#002147] font-bold hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-2 border-dashed border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-4">Want to join our team?</h2>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            We are always looking for passionate educators who want to make a difference. Check our careers page for current openings.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center px-6 md:px-8 py-3 bg-[#CC0000] text-white font-bold rounded-full hover:bg-[#002147] transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            View Career Openings
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Teachers;



