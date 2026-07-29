// import React from 'react';
// import SEO from '../components/SEO';
// import { motion } from 'motion/react';
// import { Bell, Calendar, ChevronRight, Info, Star, Users, MapPin } from 'lucide-react';

// const BulletinBoard = () => {
//   const notices = [
//     { id: 1, date: 'Mar 15, 2026', title: 'Admissions Open for Session 2026-27', isNew: true },
//     // { id: 2, date: 'Mar 10, 2026', title: 'Annual Sports Day Postponed to April 5th', isNew: false },
//     // { id: 3, date: 'Mar 05, 2026', title: 'Parent-Teacher Meeting (PTM) for Classes I-X', isNew: false },
//     // { id: 4, date: 'Feb 28, 2026', title: 'Holi Vacation Notice: School closed from Mar 20-25', isNew: false },
//     // { id: 5, date: 'Feb 20, 2026', title: 'Science Exhibition Winners List Announced', isNew: false },
//     // { id: 6, date: 'Feb 15, 2026', title: 'Inter-School Debate Competition Registration', isNew: false },
//     // { id: 7, date: 'Feb 10, 2026', title: 'Board Exam Date Sheet Released for Class X & XII', isNew: false },
//     // { id: 8, date: 'Feb 05, 2026', title: 'New Library Books Arrival and Issue Guidelines', isNew: false },
//     // { id: 9, date: 'Jan 26, 2026', title: 'Republic Day Celebration Schedule', isNew: false },
//     // { id: 10, date: 'Jan 15, 2026', title: 'Winter Vacation Extension Notice', isNew: false },
//   ];

//   return (
//     <div className="py-20 bg-gray-50 min-h-screen">
//       <SEO 
//         title="Announcements" 
//         description="Stay updated with the latest notices and announcements from Loyola School Harnaut. View the official bulletin board for school news."
//         keywords="Loyola School Announcements, School notices Harnaut, School announcements Nalanda, School news Bihar"
//       />

//       <div className="max-w-7xl mx-auto px-4">
//         <header className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">Announcements</h1>
//           <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             The official digital notice board of Loyola School Harnaut. Stay informed about the latest happenings and announcements.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-3">
//                   <Bell className="text-[#FFD700] animate-bounce" />
//                   Latest Notices
//                 </h2>
//               </div>

//               <div className="space-y-4">
//                 {notices.map((notice, i) => (
//                   <motion.div 
//                     key={notice.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group cursor-pointer"
//                   >
//                     <div className="flex items-start gap-6">
//                       <div className="bg-white p-3 rounded-xl shadow-sm text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors">
//                         <Calendar size={24} />
//                       </div>
//                       <div className="flex-grow">
//                         <div className="flex items-center justify-between mb-2">
//                           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{notice.date}</span>
//                           <div className="flex gap-2">
//                             {notice.isNew && (
//                               <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">NEW</span>
//                             )}
//                           </div>
//                         </div>
//                         <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors leading-tight">
//                           {notice.title}
//                         </h3>
//                       </div>
//                       <ChevronRight className="text-gray-300 group-hover:text-[#003366] transition-colors" />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <aside className="space-y-8">
//             <div className="bg-[#003366] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
//               <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />
//               <h3 className="text-2xl font-bold mb-6 relative z-10">Emergency Alerts</h3>
//               <div className="space-y-4 relative z-10">
//                 <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl">
//                   <p className="text-sm font-medium">No active emergency alerts at this time. Stay safe!</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
//               <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
//                 <Star size={20} className="text-[#FFD700]" />
//                 Featured News
//               </h3>
//               <div className="space-y-6">
//                 <div className="group cursor-pointer">
//                   <div className="aspect-video rounded-2xl overflow-hidden mb-3">
//                     <img src="https://picsum.photos/seed/news1/400/225" alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                   </div>
//                   <h4 className="text-sm font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">Loyola Wins District Science Fair 2026</h4>
//                   <p className="text-xs text-gray-400 mt-1">Mar 12, 2026</p>
//                 </div>
//                 <div className="group cursor-pointer">
//                   <div className="aspect-video rounded-2xl overflow-hidden mb-3">
//                     <img src="https://picsum.photos/seed/news2/400/225" alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                   </div>
//                   <h4 className="text-sm font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">New Smart Classrooms Inaugurated</h4>
//                   <p className="text-xs text-gray-400 mt-1">Mar 08, 2026</p>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BulletinBoard;




// import React from 'react';
// import SEO from '../components/SEO';
// import { motion } from 'motion/react';
// import { Bell, Calendar, ChevronRight, Star } from 'lucide-react';

// const BulletinBoard = () => {

//   const notices = [
//     // { id: 1, date: 'Mar 15, 2026', title: 'Admissions Open for Session 2026-27', isNew: true },
//   ];

//   return (
//     <div className="py-20 bg-gray-50 min-h-screen">
//       <SEO 
//         title="Announcements" 
//         description="Stay updated with the latest notices and announcements from Loyola School Harnaut. View the official bulletin board for school news."
//         keywords="Loyola School Announcements, School notices Harnaut, School announcements Nalanda, School news Bihar"
//       />

//       <div className="max-w-7xl mx-auto px-4">

//         {/* Page Header */}
//         <header className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">
//             Announcements
//           </h1>

//           <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />

//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             The official digital notice board of Loyola School Harnaut. Stay informed about the latest happenings and announcements.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6">

//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">

//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-3">
//                   <Bell className="text-[#FFD700] animate-bounce" />
//                   Latest Notices
//                 </h2>
//               </div>

//               {/* EMPTY STATE */}
//               {notices.length === 0 ? (

//                 <div className="flex flex-col items-center justify-center text-center py-20">

//                   <Bell size={60} className="text-gray-300 mb-6" />

//                   <h3 className="text-xl font-bold text-[#003366] mb-2">
//                     No Notices Available
//                   </h3>

//                   <p className="text-gray-500 max-w-md">
//                     There are currently no announcements or notices published.
//                     Please check back later for updates.
//                   </p>

//                 </div>

//               ) : (

//                 <div className="space-y-4">

//                   {notices.map((notice, i) => (

//                     <motion.div 
//                       key={notice.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group cursor-pointer"
//                     >

//                       <div className="flex items-start gap-6">

//                         <div className="bg-white p-3 rounded-xl shadow-sm text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors">
//                           <Calendar size={24} />
//                         </div>

//                         <div className="flex-grow">

//                           <div className="flex items-center justify-between mb-2">

//                             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
//                               {notice.date}
//                             </span>

//                             {notice.isNew && (
//                               <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">
//                                 NEW
//                               </span>
//                             )}

//                           </div>

//                           <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors leading-tight">
//                             {notice.title}
//                           </h3>

//                         </div>

//                         <ChevronRight className="text-gray-300 group-hover:text-[#003366] transition-colors" />

//                       </div>

//                     </motion.div>

//                   ))}

//                 </div>

//               )}

//             </div>

//           </div>


//           {/* Sidebar */}
//           <aside className="space-y-8">

//             {/* Emergency Alerts */}
//             <div className="bg-[#003366] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">

//               <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />

//               <h3 className="text-2xl font-bold mb-6 relative z-10">
//                 Emergency Alerts
//               </h3>

//               <div className="space-y-4 relative z-10">

//                 <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-2xl">
//                   <p className="text-sm font-medium">
//                     No active emergency alerts at this time. Stay safe!
//                   </p>
//                 </div>

//               </div>

//             </div>


//             {/* Featured News */}
//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">

//               <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
//                 <Star size={20} className="text-[#FFD700]" />
//                 Featured News
//               </h3>

//               <div className="space-y-6">

//                 <div className="group cursor-pointer">

//                   <div className="aspect-video rounded-2xl overflow-hidden mb-3">
//                     <img
//                       src="https://picsum.photos/seed/news1/400/225"
//                       alt="News"
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>

//                   <h4 className="text-sm font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">
//                     Loyola Wins District Science Fair 2026
//                   </h4>

//                   <p className="text-xs text-gray-400 mt-1">
//                     Mar 12, 2026
//                   </p>

//                 </div>


//                 <div className="group cursor-pointer">

//                   <div className="aspect-video rounded-2xl overflow-hidden mb-3">
//                     <img
//                       src="https://picsum.photos/seed/news2/400/225"
//                       alt="News"
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>

//                   <h4 className="text-sm font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">
//                     New Smart Classrooms Inaugurated
//                   </h4>

//                   <p className="text-xs text-gray-400 mt-1">
//                     Mar 08, 2026
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </aside>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default BulletinBoard;



// import React, { useState } from 'react';
// import SEO from '../components/SEO';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Bell, Calendar, ChevronRight, Star, X } from 'lucide-react';
// import sofOlympiadNotice from '../assets/sof.jpg'
// import classXPTMNotice from'../assets/Notice for class X PTM.pdf';
// import soloSingingCompetitionNotice from '../assets/new_notice.pdf';

// const BulletinBoard = () => {

//   const [selectedNotice, setSelectedNotice] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const notices = [
//         {
//   id: 12,
//   date: '23-07-2026',
//   title:
//     '🎤 Inter House Solo Singing Competition for Classes III–IX will be held on 25th July, 2026. Two participants from each house must be nominated. Submit participant names by 24th July, 2026.',
//   isNew: true,
//   isImportant: true,
//   isReminder: true,
//   fileType: 'pdf',
//   fileUrl: soloSingingCompetitionNotice
// },

//     {
//       id: 11,
//       date: '25-07-2026',
//       title:
//         '🔔 REMINDER: Parent-Teacher Meeting (PTM) for Class X will be held on 25th July, 2026 from 8:00 a.m. to 10:00 a.m. Parents are requested to attend the meeting with their child in school uniform and carry the school diary.',
//       isNew: true,
//       isImportant: true,
//       isReminder: true,
//       fileType: 'pdf',
//       fileUrl: classXPTMNotice
//     },
//     {
//       id: 7,
//       date: '15-07-2026',
//       title:
//         'SOF Olympiad Registration is now OPEN for all eligible students. Loyola School (School Code: BR5168). Students must register online using the school access code before the registration closes.',
//       isNew: true,
//       isImportant: true,
//       isReminder: false,
//       fileType: 'image',
//       fileUrl: sofOlympiadNotice
//     },
//     {
//       id: 8,
//       date: 'Registration Deadline',
//       title:
//         '⚠️ VERY IMPORTANT: SOF Olympiad registrations close 30 days before the selected examination date. Students are advised to complete their registration and payment well in advance to avoid missing the deadline.',
//       isNew: true,
//       isImportant: true,
//       isReminder: true,
//       fileType: 'image',
//       fileUrl: sofOlympiadNotice
//     },
//     {
//       id: 9,
//       date: 'SOF Registration Assistance',
//       title:
//         'Need help with SOF Olympiad registration? Kindly contact the SOF Registration Team at 8800012977 or email registrations@sofworld.org. For complete information, visit https://sofworld.org or follow SOF on Facebook at http://www.facebook.com/sofworld.',
//       isNew: true,
//       isImportant: true,
//       isReminder: true,
//       fileType: 'image',
//       fileUrl: sofOlympiadNotice
//     }
//   ];

//   return (
//     <div className="py-20 bg-gray-50 min-h-screen">

//       <SEO
//         title="Announcements"
//         description="Stay updated with latest notices"
//       />

//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <header className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase">
//             Announcements
//           </h1>
//           <div className="w-24 h-1.5 bg-[#FFD700] mx-auto mb-6" />
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//           {/* MAIN */}
//           <div className="lg:col-span-2">

//             <div className="bg-white p-8 rounded-3xl shadow-xl">

//               <h2 className="text-2xl font-bold text-[#003366] mb-6 flex items-center gap-2">
//                 <Bell className="text-[#FFD700]" />
//                 Latest Notices
//               </h2>

//               {notices.length === 0 ? (
//                 <div className="text-center py-20">
//                   No Notices Available
//                 </div>
//               ) : (

//                 <div className="space-y-4">

//                   {notices.map((notice, i) => (

//                     <motion.div
//                       key={notice.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       className="p-6 bg-gray-50 rounded-2xl cursor-pointer hover:shadow-md flex items-center justify-between"
//                       onClick={() => {
//                         setSelectedNotice(notice);
//                         setIsModalOpen(true);
//                       }}
//                     >

//                       <div className="flex gap-4">

//                         <div className="p-3 bg-white rounded-xl">
//                           <Calendar size={24} />
//                         </div>

//                         <div>
//                           <p className="text-sm text-gray-400">{notice.date}</p>
//                           <h3 className="font-bold text-[#003366]">
//                             {notice.title}
//                           </h3>

//                           {notice.fileType === 'image' && (
//                             <span className="text-green-500 text-xs">Image</span>
//                           )}
//                           {notice.fileType === 'pdf' && (
//                             <span className="text-red-500 text-xs">PDF</span>
//                           )}
//                         </div>

//                       </div>

//                       <ChevronRight />
//                     </motion.div>

//                   ))}

//                 </div>

//               )}

//             </div>

//           </div>

//           {/* SIDEBAR */}
//           <aside className="space-y-8">

//             <div className="bg-[#003366] text-white p-6 rounded-3xl">
//               <h3 className="text-xl font-bold mb-4">Emergency Alerts</h3>
//               <ul className="space-y-3 text-sm">
//                 {/* <li className="flex items-start gap-2">
//     <span className="text-[#FFD700] mt-1">•</span>
//     SOF Olympiad Registration is now OPEN for all eligible students of Loyola School.
//   </li>

//   <li className="flex items-start gap-2">
//     <span className="text-[#FFD700] mt-1">•</span>
//     Register online using School Code <strong>BR5168</strong> and the provided Access Code before the registration deadline.
//   </li> */}

//                 <li className="flex items-start gap-2">
//                   <span className="text-[#FFD700] mt-1">•</span>
//                   SOF Olympiad Registration is now OPEN for Loyola School<strong> (School Code: BR5168). Register using the school access code. Registrations close 30 days before the selected exam date.</strong> </li>

//                 {/* <li className="flex items-start gap-2">
//     <span className="text-[#FFD700] mt-1">•</span>
//     Need assistance? Call <strong>8800012977</strong> or email <strong>registrations@sofworld.org</strong>.
//   </li> */}
//               </ul>
//             </div>

//             <div className="bg-white p-6 rounded-3xl shadow-xl">
//               <h3 className="text-xl font-bold text-[#003366] mb-4 flex gap-2">
//                 <Star className="text-[#FFD700]" />
//                 Featured News
//               </h3>

//               <img
//                 src="https://picsum.photos/400/200"
//                 alt="news"
//                 className="rounded-xl"
//               />
//             </div>

//           </aside>

//         </div>
//       </div>

//       {/* ✅ MODAL */}
//       <AnimatePresence>
//         {isModalOpen && selectedNotice && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

//             {/* Overlay */}
//             <motion.div
//               className="absolute inset-0 bg-black/60"
//               onClick={() => setIsModalOpen(false)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             {/* Modal */}
//             <motion.div
//               className="relative bg-white w-full max-w-3xl rounded-2xl max-h-[90vh] flex flex-col overflow-hidden"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//             >

//               {/* Header */}
//               <div className="bg-[#003366] text-white p-6 flex justify-between">
//                 <h2>{selectedNotice.title}</h2>
//                 <X onClick={() => setIsModalOpen(false)} className="cursor-pointer" />
//               </div>

//               {/* Body */}
//               <div className="p-6 overflow-y-auto space-y-4">

//                 <p className="text-gray-500">{selectedNotice.date}</p>

//                 {/* IMAGE */}
//                 {selectedNotice.fileType === 'image' && (
//                   <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
//                     <img
//                       src={selectedNotice.fileUrl}
//                       alt="notice"
//                       className="max-h-full max-w-full object-contain cursor-zoom-in"
//                       onClick={() => window.open(selectedNotice.fileUrl)}
//                     />
//                   </div>
//                 )}

//                 {/* PDF */}
//                 {selectedNotice.fileType === 'pdf' && (
//                   <iframe
//                     src={selectedNotice.fileUrl}
//                     title="PDF"
//                     className="w-full h-[400px] rounded-lg border"
//                   />
//                 )}

//                 {/* DOWNLOAD */}
//                 {selectedNotice.fileUrl && (
//                   <a
//                     href={selectedNotice.fileUrl}
//                     download
//                     className="inline-block bg-[#003366] text-white px-4 py-2 rounded"
//                   >
//                     Download File
//                   </a>
//                 )}

//               </div>

//             </motion.div>

//           </div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// };

// export default BulletinBoard;



// import React, { useState, useEffect } from 'react';
// import SEO from '../components/SEO';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Bell, Calendar, ChevronRight, Star, X, Download, Loader2 } from 'lucide-react';

// // Set these in .env.local for dev, and in your host's env vars for prod
// // const ERP_BASE_URL = "http://localhost:8080"; 
// const ERP_BASE_URL = "https://sukedu.cloud";

// const isWithinDays = (dateStr, days) => {
//   const diff = (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24);
//   return diff <= days;
// };

// const BulletinBoard = () => {

//   const [notices, setNotices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [selectedNotice, setSelectedNotice] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // PDF preview is fetched as a blob so it isn't subject to
//   // X-Frame-Options when loaded into an <iframe>.
//   const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
//   const [pdfLoading, setPdfLoading] = useState(false);
//   const [pdfError, setPdfError] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     const fetchNotices = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`https://sukedu.cloud/api/public/notices/getPublicNotice`);
//         if (!res.ok) throw new Error(`Request failed: ${res.status}`);
//         const data = await res.json();

//         const mapped = data.map((n) => {
//           const firstAttachment = n.attachments?.[0];
//           return {
//             id: n.id,
//             date: new Date(n.createdAt).toLocaleDateString('en-GB'),
//             title: n.title,
//             description: n.description,
//             isNew: isWithinDays(n.createdAt, 7),
//             isImportant: n.noticeType === 'IMPORTANT',
//             isReminder: n.noticeType === 'REMINDER',
//             fileType: firstAttachment?.fileType?.includes('pdf') ? 'pdf' : 'image',
//             fileUrl: firstAttachment ? `${ERP_BASE_URL}${firstAttachment.downloadUrl}` : null,
//           };
//         });

//         if (!cancelled) {
//           setNotices(mapped);
//           setError(null);
//         }
//       } catch (err) {
//         console.error('Failed to load notices:', err);
//         if (!cancelled) setError('Unable to load notices right now.');
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     };

//     fetchNotices();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const openModal = async (notice) => {
//     setSelectedNotice(notice);
//     setIsModalOpen(true);
//     setPdfError(false);
//     setPdfBlobUrl(null);

//     if (notice.fileType === 'pdf' && notice.fileUrl) {
//       setPdfLoading(true);
//       try {
//         const res = await fetch(notice.fileUrl);
//         if (!res.ok) throw new Error(`Failed to fetch PDF: ${res.status}`);
//         const blob = await res.blob();
//         const url = URL.createObjectURL(blob);
//         setPdfBlobUrl(url);
//       } catch (err) {
//         console.error('Failed to load PDF:', err);
//         setPdfError(true);
//       } finally {
//         setPdfLoading(false);
//       }
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedNotice(null);
//     if (pdfBlobUrl) {
//       URL.revokeObjectURL(pdfBlobUrl);
//     }
//     setPdfBlobUrl(null);
//     setPdfError(false);
//   };

//   return (
//     <div className="py-20 bg-gray-50 min-h-screen">

//       <SEO
//         title="Announcements"
//         description="Stay updated with latest notices"
//       />

//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <header className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase">
//             Announcements
//           </h1>
//           <div className="w-24 h-1.5 bg-[#FFD700] mx-auto mb-6" />
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//           {/* MAIN */}
//           <div className="lg:col-span-2">

//             <div className="bg-white p-8 rounded-3xl shadow-xl">

//               <h2 className="text-2xl font-bold text-[#003366] mb-6 flex items-center gap-2">
//                 <Bell className="text-[#FFD700]" />
//                 Latest Notices
//               </h2>

//               {loading ? (
//                 <div className="flex items-center justify-center py-20 text-gray-400">
//                   <Loader2 className="animate-spin mr-2" size={22} />
//                   Loading notices...
//                 </div>
//               ) : error ? (
//                 <div className="text-center py-20 text-red-500">{error}</div>
//               ) : notices.length === 0 ? (
//                 <div className="text-center py-20">
//                   No Notices Available
//                 </div>
//               ) : (

//                 <div className="space-y-4">

//                   {notices.map((notice, i) => (

//                     <motion.div
//                       key={notice.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       className="p-6 bg-gray-50 rounded-2xl cursor-pointer hover:shadow-md flex items-center justify-between gap-4"
//                       onClick={() => openModal(notice)}
//                     >

//                       <div className="flex gap-4 min-w-0">

//                         <div className="p-3 bg-white rounded-xl flex-shrink-0">
//                           <Calendar size={24} />
//                         </div>

//                         <div className="min-w-0">
//                           <div className="flex flex-wrap items-center gap-2 mb-1">
//                             <p className="text-sm text-gray-400">{notice.date}</p>
//                             {notice.isNew && (
//                               <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
//                                 NEW
//                               </span>
//                             )}
//                             {notice.isImportant && (
//                               <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
//                                 IMPORTANT
//                               </span>
//                             )}
//                             {notice.isReminder && (
//                               <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
//                                 REMINDER
//                               </span>
//                             )}
//                           </div>

//                           <h3 className="font-bold text-[#003366] leading-snug">
//                             {notice.title}
//                           </h3>

//                           {notice.description && (
//                             <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-2">
//                               {notice.description}
//                             </p>
//                           )}

//                           <div className="mt-2">
//                             {notice.fileType === 'image' && (
//                               <span className="text-green-500 text-xs font-medium">📷 Image</span>
//                             )}
//                             {notice.fileType === 'pdf' && (
//                               <span className="text-red-500 text-xs font-medium">📄 PDF</span>
//                             )}
//                           </div>
//                         </div>

//                       </div>

//                       <ChevronRight className="flex-shrink-0" />
//                     </motion.div>

//                   ))}

//                 </div>

//               )}

//             </div>

//           </div>

//           {/* SIDEBAR */}
//           <aside className="space-y-8">

//             <div className="bg-[#003366] text-white p-6 rounded-3xl">
//               <h3 className="text-xl font-bold mb-4">Emergency Alerts</h3>
//               <ul className="space-y-3 text-sm">
//                 <li className="flex items-start gap-2">
//                   <span className="text-[#FFD700] mt-1">•</span>
//                   SOF Olympiad Registration is now OPEN for Loyola School<strong> (School Code: BR5168). Register using the school access code. Registrations close 30 days before the selected exam date.</strong>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white p-6 rounded-3xl shadow-xl">
//               <h3 className="text-xl font-bold text-[#003366] mb-4 flex gap-2">
//                 <Star className="text-[#FFD700]" />
//                 Featured News
//               </h3>

//               <img
//                 src="https://picsum.photos/400/200"
//                 alt="news"
//                 className="rounded-xl"
//               />
//             </div>

//           </aside>

//         </div>
//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {isModalOpen && selectedNotice && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

//             {/* Overlay */}
//             <motion.div
//               className="absolute inset-0 bg-black/60"
//               onClick={closeModal}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             {/* Modal */}
//             <motion.div
//               className="relative bg-white w-full max-w-3xl rounded-2xl max-h-[90vh] flex flex-col overflow-hidden"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//             >

//               {/* Header */}
//               <div className="bg-[#003366] text-white p-6 flex justify-between items-start gap-4">
//                 <div className="flex-1">
//                   <div className="flex flex-wrap gap-2 mb-2">
//                     {selectedNotice.isImportant && (
//                       <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
//                         IMPORTANT
//                       </span>
//                     )}
//                     {selectedNotice.isReminder && (
//                       <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded-full animate-pulse">
//                         REMINDER
//                       </span>
//                     )}
//                   </div>
//                   <h2 className="text-lg font-bold leading-snug">{selectedNotice.title}</h2>
//                   <p className="text-sm text-blue-200 mt-1">{selectedNotice.date}</p>
//                 </div>
//                 <X onClick={closeModal} className="cursor-pointer flex-shrink-0 mt-1 hover:text-red-300 transition-colors" />
//               </div>

//               {/* Body */}
//               <div className="p-6 overflow-y-auto space-y-4 flex-1">

//                 {selectedNotice.description && (
//                   <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-[#003366]/20 pl-4">
//                     {selectedNotice.description}
//                   </p>
//                 )}

//                 {/* IMAGE */}
//                 {selectedNotice.fileType === 'image' && selectedNotice.fileUrl && (
//                   <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
//                     <img
//                       src={selectedNotice.fileUrl}
//                       alt="notice"
//                       className="max-h-full max-w-full object-contain cursor-zoom-in"
//                       onClick={() => window.open(selectedNotice.fileUrl)}
//                     />
//                   </div>
//                 )}

//                 {/* PDF */}
//                 {selectedNotice.fileType === 'pdf' && selectedNotice.fileUrl && (
//                   <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-50">
//                     {pdfLoading ? (
//                       <div className="flex items-center gap-2 text-gray-400">
//                         <Loader2 className="animate-spin" size={22} />
//                         Loading PDF...
//                       </div>
//                     ) : pdfBlobUrl ? (
//                       <iframe src={pdfBlobUrl} title="PDF Notice" className="w-full h-full" />
//                     ) : pdfError ? (
//                       <p className="text-sm text-gray-400 px-6 text-center">
//                         Couldn't preview this PDF. Use the download button below instead.
//                       </p>
//                     ) : null}
//                   </div>
//                 )}

//                 {/* DOWNLOAD */}
//                 {selectedNotice.fileUrl && (
//                   <a
//                     href={selectedNotice.fileUrl}
//                     download
//                     className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#002244] transition-colors"
//                   >
//                     <Download className="w-4 h-4" />
//                     Download File
//                   </a>
//                 )}

//               </div>

//             </motion.div>

//           </div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// };

// export default BulletinBoard;


// import React, { useState, useEffect } from 'react';
// import SEO from '../components/SEO';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Bell, Calendar, ChevronRight, Star, X, Download, Loader2 } from 'lucide-react';

// // Set these in .env.local for dev, and in your host's env vars for prod
// // const ERP_BASE_URL = "http://localhost:8080"; 
// const ERP_BASE_URL = "https://sukedu.cloud";

// const isWithinDays = (dateStr, days) => {
//   const diff = (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24);
//   return diff <= days;
// };

// const getFileType = (mimeType) => {
//   if (!mimeType) return 'other';
//   if (mimeType.includes('pdf')) return 'pdf';
//   if (mimeType.startsWith('image/')) return 'image';
//   if (
//     mimeType.includes('word') ||
//     mimeType.includes('msword') ||
//     mimeType.includes('officedocument.wordprocessingml')
//   ) return 'word';
//   if (
//     mimeType.includes('excel') ||
//     mimeType.includes('spreadsheetml') ||
//     mimeType.includes('ms-excel')
//   ) return 'excel';
//   return 'other';
// };

// const BulletinBoard = () => {

//   const [notices, setNotices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [selectedNotice, setSelectedNotice] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // PDF preview is fetched as a blob so it isn't subject to
//   // X-Frame-Options when loaded into an <iframe>.
//   const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
//   const [pdfLoading, setPdfLoading] = useState(false);
//   const [pdfError, setPdfError] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     const fetchNotices = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`https://sukedu.cloud/api/public/notices/getPublicNotice`);
//         if (!res.ok) throw new Error(`Request failed: ${res.status}`);
//         const data = await res.json();

//         const mapped = data.map((n) => {
//           const firstAttachment = n.attachments?.[0];
//           return {
//             id: n.id,
//             date: new Date(n.createdAt).toLocaleDateString('en-GB'),
//             title: n.title,
//             description: n.description,
//             isNew: isWithinDays(n.createdAt, 7),
//             isImportant: n.noticeType === 'IMPORTANT',
//             isReminder: n.noticeType === 'REMINDER',
//             fileType: getFileType(firstAttachment?.fileType),
//             fileUrl: firstAttachment ? `${ERP_BASE_URL}${firstAttachment.downloadUrl}` : null,
//           };
//         });

//         if (!cancelled) {
//           setNotices(mapped);
//           setError(null);
//         }
//       } catch (err) {
//         console.error('Failed to load notices:', err);
//         if (!cancelled) setError('Unable to load notices right now.');
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     };

//     fetchNotices();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const openModal = async (notice) => {
//     setSelectedNotice(notice);
//     setIsModalOpen(true);
//     setPdfError(false);
//     setPdfBlobUrl(null);

//     if (notice.fileType === 'pdf' && notice.fileUrl) {
//       setPdfLoading(true);
//       try {
//         const res = await fetch(notice.fileUrl);
//         if (!res.ok) throw new Error(`Failed to fetch PDF: ${res.status}`);
//         const blob = await res.blob();
//         const url = URL.createObjectURL(blob);
//         setPdfBlobUrl(url);
//       } catch (err) {
//         console.error('Failed to load PDF:', err);
//         setPdfError(true);
//       } finally {
//         setPdfLoading(false);
//       }
//     }
//     // word/excel: no blob fetch needed — Office Online Viewer fetches the
//     // public URL itself and renders it inside its own iframe.
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedNotice(null);
//     if (pdfBlobUrl) {
//       URL.revokeObjectURL(pdfBlobUrl);
//     }
//     setPdfBlobUrl(null);
//     setPdfError(false);
//   };

//   return (
//     <div className="py-20 bg-gray-50 min-h-screen">

//       <SEO
//         title="Announcements"
//         description="Stay updated with latest notices"
//       />

//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <header className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase">
//             Announcements
//           </h1>
//           <div className="w-24 h-1.5 bg-[#FFD700] mx-auto mb-6" />
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//           {/* MAIN */}
//           <div className="lg:col-span-2">

//             <div className="bg-white p-8 rounded-3xl shadow-xl">

//               <h2 className="text-2xl font-bold text-[#003366] mb-6 flex items-center gap-2">
//                 <Bell className="text-[#FFD700]" />
//                 Latest Notices
//               </h2>

//               {loading ? (
//                 <div className="flex items-center justify-center py-20 text-gray-400">
//                   <Loader2 className="animate-spin mr-2" size={22} />
//                   Loading notices...
//                 </div>
//               ) : error ? (
//                 <div className="text-center py-20 text-red-500">{error}</div>
//               ) : notices.length === 0 ? (
//                 <div className="text-center py-20">
//                   No Notices Available
//                 </div>
//               ) : (

//                 <div className="space-y-4">

//                   {notices.map((notice, i) => (

//                     <motion.div
//                       key={notice.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       className="p-6 bg-gray-50 rounded-2xl cursor-pointer hover:shadow-md flex items-center justify-between gap-4"
//                       onClick={() => openModal(notice)}
//                     >

//                       <div className="flex gap-4 min-w-0">

//                         <div className="p-3 bg-white rounded-xl flex-shrink-0">
//                           <Calendar size={24} />
//                         </div>

//                         <div className="min-w-0">
//                           <div className="flex flex-wrap items-center gap-2 mb-1">
//                             <p className="text-sm text-gray-400">{notice.date}</p>
//                             {notice.isNew && (
//                               <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
//                                 NEW
//                               </span>
//                             )}
//                             {notice.isImportant && (
//                               <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
//                                 IMPORTANT
//                               </span>
//                             )}
//                             {notice.isReminder && (
//                               <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
//                                 REMINDER
//                               </span>
//                             )}
//                           </div>

//                           <h3 className="font-bold text-[#003366] leading-snug">
//                             {notice.title}
//                           </h3>

//                           {notice.description && (
//                             <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-2">
//                               {notice.description}
//                             </p>
//                           )}

//                           <div className="mt-2">
//                             {notice.fileType === 'image' && (
//                               <span className="text-green-500 text-xs font-medium">📷 Image</span>
//                             )}
//                             {notice.fileType === 'pdf' && (
//                               <span className="text-red-500 text-xs font-medium">📄 PDF</span>
//                             )}
//                             {notice.fileType === 'word' && (
//                               <span className="text-blue-500 text-xs font-medium">📝 Word</span>
//                             )}
//                             {notice.fileType === 'excel' && (
//                               <span className="text-emerald-600 text-xs font-medium">📊 Excel</span>
//                             )}
//                           </div>
//                         </div>

//                       </div>

//                       <ChevronRight className="flex-shrink-0" />
//                     </motion.div>

//                   ))}

//                 </div>

//               )}

//             </div>

//           </div>

//           {/* SIDEBAR */}
//           <aside className="space-y-8">

//             <div className="bg-[#003366] text-white p-6 rounded-3xl">
//               <h3 className="text-xl font-bold mb-4">Emergency Alerts</h3>
//               <ul className="space-y-3 text-sm">
//                 <li className="flex items-start gap-2">
//                   <span className="text-[#FFD700] mt-1">•</span>
//                   SOF Olympiad Registration is now OPEN for Loyola School<strong> (School Code: BR5168). Register using the school access code. Registrations close 30 days before the selected exam date.</strong>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white p-6 rounded-3xl shadow-xl">
//               <h3 className="text-xl font-bold text-[#003366] mb-4 flex gap-2">
//                 <Star className="text-[#FFD700]" />
//                 Featured News
//               </h3>

//               <img
//                 src="https://picsum.photos/400/200"
//                 alt="news"
//                 className="rounded-xl"
//               />
//             </div>

//           </aside>

//         </div>
//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {isModalOpen && selectedNotice && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

//             {/* Overlay */}
//             <motion.div
//               className="absolute inset-0 bg-black/60"
//               onClick={closeModal}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             {/* Modal */}
//             <motion.div
//               className="relative bg-white w-full max-w-3xl rounded-2xl max-h-[90vh] flex flex-col overflow-hidden"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//             >

//               {/* Header */}
//               <div className="bg-[#003366] text-white p-6 flex justify-between items-start gap-4">
//                 <div className="flex-1">
//                   <div className="flex flex-wrap gap-2 mb-2">
//                     {selectedNotice.isImportant && (
//                       <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
//                         IMPORTANT
//                       </span>
//                     )}
//                     {selectedNotice.isReminder && (
//                       <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded-full animate-pulse">
//                         REMINDER
//                       </span>
//                     )}
//                   </div>
//                   <h2 className="text-lg font-bold leading-snug">{selectedNotice.title}</h2>
//                   <p className="text-sm text-blue-200 mt-1">{selectedNotice.date}</p>
//                 </div>
//                 <X onClick={closeModal} className="cursor-pointer flex-shrink-0 mt-1 hover:text-red-300 transition-colors" />
//               </div>

//               {/* Body */}
//               <div className="p-6 overflow-y-auto space-y-4 flex-1">

//                 {selectedNotice.description && (
//                   <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-[#003366]/20 pl-4">
//                     {selectedNotice.description}
//                   </p>
//                 )}

//                 {/* IMAGE */}
//                 {selectedNotice.fileType === 'image' && selectedNotice.fileUrl && (
//                   <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
//                     <img
//                       src={selectedNotice.fileUrl}
//                       alt="notice"
//                       className="max-h-full max-w-full object-contain cursor-zoom-in"
//                       onClick={() => window.open(selectedNotice.fileUrl)}
//                     />
//                   </div>
//                 )}

//                 {/* PDF */}
//                 {selectedNotice.fileType === 'pdf' && selectedNotice.fileUrl && (
//                   <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-50">
//                     {pdfLoading ? (
//                       <div className="flex items-center gap-2 text-gray-400">
//                         <Loader2 className="animate-spin" size={22} />
//                         Loading PDF...
//                       </div>
//                     ) : pdfBlobUrl ? (
//                       <iframe src={pdfBlobUrl} title="PDF Notice" className="w-full h-full" />
//                     ) : pdfError ? (
//                       <p className="text-sm text-gray-400 px-6 text-center">
//                         Couldn't preview this PDF. Use the download button below instead.
//                       </p>
//                     ) : null}
//                   </div>
//                 )}

//                 {/* WORD / EXCEL */}
//                 {(selectedNotice.fileType === 'word' || selectedNotice.fileType === 'excel') &&
//                   selectedNotice.fileUrl && (
//                     <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
//                       <iframe
//                         src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
//                           selectedNotice.fileUrl
//                         )}`}
//                         title="Document Preview"
//                         className="w-full h-full"
//                         frameBorder="0"
//                       />
//                     </div>
//                 )}

//                 {selectedNotice.fileType === 'other' && (
//                   <p className="text-sm text-gray-400 px-6 text-center">
//                     Preview isn't available for this file type. Use the download button below.
//                   </p>
//                 )}

//                 {/* DOWNLOAD */}
//                 {selectedNotice.fileUrl && (
//                   <a
//                     href={selectedNotice.fileUrl}
//                     download
//                     className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#002244] transition-colors"
//                   >
//                     <Download className="w-4 h-4" />
//                     Download File
//                   </a>
//                 )}

//               </div>

//             </motion.div>

//           </div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// };

// export default BulletinBoard;



import React, { useState, useEffect } from "react";
import { Bell, Calendar, ChevronRight, X, Download, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// const ERP_BASE_URL = "http://localhost:8080"; 

const ERP_BASE_URL = "https://sukedu.cloud";

const isWithinDays = (dateStr, days) => {
  const diff = (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24);
  return diff <= days;
};

const getFileType = (mimeType) => {
  if (!mimeType) return "other";
  if (mimeType.includes("pdf")) return "pdf";
  if (mimeType.startsWith("image/")) return "image";
  if (
    mimeType.includes("word") ||
    mimeType.includes("msword") ||
    mimeType.includes("officedocument.wordprocessingml")
  ) return "word";
  if (
    mimeType.includes("excel") ||
    mimeType.includes("spreadsheetml") ||
    mimeType.includes("ms-excel")
  ) return "excel";
  return "other";
};

const NoticeBoard = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  // PDF preview is fetched as a blob so it isn't subject to
  // X-Frame-Options when loaded into an <iframe>.
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchNotices = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://sukedu.cloud/api/public/notices/getPublicNotice`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();

        const mapped = data.map((n) => {
          const firstAttachment = n.attachments?.[0];
          return {
            id: n.id,
            date: new Date(n.createdAt).toLocaleDateString("en-GB"),
            title: n.title,
            description: n.description,
            isNew: isWithinDays(n.createdAt, 7),
            isImportant: n.noticeType === "IMPORTANT",
            isReminder: n.noticeType === "REMINDER",
            fileType: getFileType(firstAttachment?.fileType),
            fileUrl: firstAttachment ? `${ERP_BASE_URL}${firstAttachment.downloadUrl}` : null,
          };
        });

        if (!cancelled) {
          setNotices(mapped);
          setError(null);
        }
      } catch (err) {
        console.error("Failed to load notices:", err);
        if (!cancelled) setError("Unable to load notices right now.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchNotices();
    return () => {
      cancelled = true;
    };
  }, []);

  const openModal = async (notice) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
    setPdfError(false);
    setPdfBlobUrl(null);

    if (notice.fileType === "pdf" && notice.fileUrl) {
      setPdfLoading(true);
      try {
        const res = await fetch(notice.fileUrl);
        if (!res.ok) throw new Error(`Failed to fetch PDF: ${res.status}`);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setPdfBlobUrl(url);
      } catch (err) {
        console.error("Failed to load PDF:", err);
        setPdfError(true);
      } finally {
        setPdfLoading(false);
      }
    }
    // word/excel: no blob fetch needed — Office Online Viewer fetches the
    // public URL itself and renders it inside its own iframe.
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNotice(null);
    if (pdfBlobUrl) {
      URL.revokeObjectURL(pdfBlobUrl);
    }
    setPdfBlobUrl(null);
    setPdfError(false);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
        <div className="bg-[#003366] text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Bell className="text-[#FFD700] w-6 h-6" />
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider font-serif">
              Notice Board
            </h2>
          </div>
          {notices.length > 0 && (
            <button
              onClick={() => navigate("/bulletin-board")}
              className="text-xs font-bold text-[#FFD700] hover:underline flex items-center tracking-wider"
            >
              VIEW ALL <ChevronRight size={16} className="ml-1" />
            </button>
          )}
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {loading ? (
            <div className="flex items-center justify-center py-10 text-gray-400">
              <Loader2 className="animate-spin mr-2" size={20} />
              Loading notices...
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">{error}</div>
          ) : notices.length === 0 ? (
            <div className="text-center py-10">No Notices</div>
          ) : (
            <div className="space-y-6">
              {notices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                  onClick={() => openModal(notice)}
                >
                  <div className="bg-gray-50 p-3 rounded-xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors duration-200">
                    <Calendar size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-1">
                      {notice.isNew && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                      {notice.isImportant && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          IMPORTANT
                        </span>
                      )}
                      {notice.isReminder && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          REMINDER
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-gray-800 leading-snug">{notice.title}</h3>

                    {notice.description && (
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-2">
                        {notice.description}
                      </p>
                    )}

                    <div className="mt-2">
                      {notice.fileType === "image" && (
                        <span className="text-green-500 text-xs font-medium">📷 Image</span>
                      )}
                      {notice.fileType === "pdf" && (
                        <span className="text-red-500 text-xs font-medium">📄 PDF</span>
                      )}
                      {notice.fileType === "word" && (
                        <span className="text-blue-500 text-xs font-medium">📝 Word</span>
                      )}
                      {notice.fileType === "excel" && (
                        <span className="text-emerald-600 text-xs font-medium">📊 Excel</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 text-center text-sm border-t">
          <p className="text-[#003366] font-medium animate-pulse">
            * Check regularly for updates
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="absolute inset-0 bg-black/60"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative bg-white w-full max-w-3xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="bg-[#003366] text-white p-6 flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedNotice.isImportant && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        IMPORTANT
                      </span>
                    )}
                    {selectedNotice.isReminder && (
                      <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        REMINDER
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold leading-snug">{selectedNotice.title}</h2>
                  <p className="text-sm text-blue-200 mt-1">{selectedNotice.date}</p>
                </div>
                <X
                  className="cursor-pointer flex-shrink-0 mt-1 hover:text-red-300 transition-colors"
                  onClick={closeModal}
                />
              </div>

              <div className="p-6 space-y-4 overflow-y-auto flex-1">
                {selectedNotice.description && (
                  <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-[#003366]/20 pl-4">
                    {selectedNotice.description}
                  </p>
                )}

                {selectedNotice.fileType === "image" && selectedNotice.fileUrl && (
                  <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
                    <img
                      src={selectedNotice.fileUrl}
                      alt="notice"
                      className="max-h-full max-w-full object-contain rounded-lg cursor-zoom-in"
                      onClick={() => window.open(selectedNotice.fileUrl)}
                    />
                  </div>
                )}

                {selectedNotice.fileType === "pdf" && selectedNotice.fileUrl && (
                  <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-50">
                    {pdfLoading ? (
                      <div className="flex items-center gap-2 text-gray-400">
                        <Loader2 className="animate-spin" size={22} />
                        Loading PDF...
                      </div>
                    ) : pdfBlobUrl ? (
                      <iframe src={pdfBlobUrl} title="PDF Notice" className="w-full h-full" />
                    ) : pdfError ? (
                      <p className="text-sm text-gray-400 px-6 text-center">
                        Couldn't preview this PDF. Use the download button below instead.
                      </p>
                    ) : null}
                  </div>
                )}

                {(selectedNotice.fileType === "word" || selectedNotice.fileType === "excel") &&
                  selectedNotice.fileUrl && (
                    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                      <iframe
                        src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                          selectedNotice.fileUrl
                        )}`}
                        title="Document Preview"
                        className="w-full h-full"
                        frameBorder="0"
                      />
                    </div>
                )}

                {selectedNotice.fileType === "other" && (
                  <p className="text-sm text-gray-400 px-6 text-center">
                    Preview isn't available for this file type. Use the download button below.
                  </p>
                )}

                {selectedNotice.fileUrl && (
                  <a
                    href={selectedNotice.fileUrl}
                    download
                    className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#002244] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NoticeBoard;