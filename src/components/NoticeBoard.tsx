// import React, { useState } from 'react';
// import { Bell, Calendar, ChevronRight, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { useNavigate } from 'react-router-dom';

// const notices = [
//   { id: 1, date: 'Mar 15, 2026', title: 'Admissions Open for Session 2026-27', isNew: true },
//   // { id: 2, date: 'Mar 10, 2026', title: 'Annual Sports Day Postponed to April 5th', isNew: false },
//   // { id: 3, date: 'Mar 05, 2026', title: 'Parent-Teacher Meeting (PTM) for Classes I-X', isNew: false },
//   // { id: 4, date: 'Feb 28, 2026', title: 'Holi Vacation Notice: School closed from Mar 20-25', isNew: false },
//   // { id: 5, date: 'Feb 20, 2026', title: 'Science Exhibition Winners List Announced', isNew: false },
//   // { id: 6, date: 'Feb 15, 2026', title: 'Inter-School Debate Competition Registration', isNew: false },
//   // { id: 7, date: 'Feb 10, 2026', title: 'Board Exam Date Sheet Released for Class X & XII', isNew: false },
//   // { id: 8, date: 'Feb 05, 2026', title: 'New Library Books Arrival and Issue Guidelines', isNew: false },
//   { id: 9, date: 'August 15, 2026', title: 'Independance Day Celebration Schedule', isNew: false },
//   // { id: 10, date: 'Jan 15, 2026', title: 'Winter Vacation Extension Notice', isNew: false },
// ];

// const NoticeBoard = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
//         <div className="bg-[#003366] text-white p-6 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <Bell className="text-[#FFD700] w-6 h-6" />
//             <h2 className="text-xl font-bold uppercase tracking-wider font-serif">Notice Board</h2>
//           </div>
//           <button
//             onClick={() => navigate('/bulletin-board')}
//             className="text-xs font-bold text-[#FFD700] hover:underline flex items-center tracking-wider"
//           >
//             VIEW ALL <ChevronRight size={16} className="ml-1" />
//           </button>
//         </div>

//         <div className="p-6 flex-1 overflow-y-auto">
//           <div className="space-y-6">
//             {notices.slice(0, 5).map((notice, index) => (
//               <motion.div
//                 key={notice.id}
//                 initial={{ x: -20, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="flex items-start space-x-4 group cursor-pointer"
//               >
//                 <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors flex-shrink-0">
//                   <Calendar size={24} strokeWidth={1.5} />
//                 </div>
//                 <div className="flex-1 pt-1">
//                   <div className="flex items-center justify-between mb-1">
//                     <span className="text-sm font-medium text-gray-400">{notice.date}</span>
//                     {notice.isNew && (
//                       <span className="bg-[#FF4D4D] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
//                         NEW
//                       </span>
//                     )}
//                   </div>
//                   <h3 className="text-base font-bold text-gray-800 group-hover:text-[#003366] transition-colors font-serif leading-snug">
//                     {notice.title}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
//           <p className="text-sm text-gray-500 italic">
//             * Please check this board regularly for latest updates.
//           </p>
//         </div>
//       </div>

//       {/* Modal for All Notices */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsModalOpen(false)}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
//             >
//               <div className="bg-[#003366] text-white p-6 sm:p-8 flex items-center justify-between shrink-0">
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-white/10 p-3 rounded-2xl">
//                     <Bell className="text-[#FFD700] w-8 h-8" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold uppercase tracking-wider font-serif">All Notices</h2>
//                     <p className="text-blue-200 text-sm mt-1">Stay updated with the latest announcements</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setIsModalOpen(false)}
//                   className="p-2 hover:bg-white/10 rounded-full transition-colors"
//                 >
//                   <X size={28} />
//                 </button>
//               </div>

//               <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-gray-50">
//                 <div className="space-y-4">
//                   {notices.map((notice, index) => (
//                     <motion.div
//                       key={notice.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-5 group cursor-pointer"
//                     >
//                       <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors flex-shrink-0">
//                         <Calendar size={28} strokeWidth={1.5} />
//                       </div>
//                       <div className="flex-1 pt-1">
//                         <div className="flex items-center justify-between mb-2">
//                           <span className="text-sm font-semibold text-[#003366]/60 uppercase tracking-wider">{notice.date}</span>
//                           {notice.isNew && (
//                             <span className="bg-[#FF4D4D] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider shadow-sm">
//                               NEW
//                             </span>
//                           )}
//                         </div>
//                         <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#003366] transition-colors font-serif leading-snug">
//                           {notice.title}
//                         </h3>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default NoticeBoard;

// import React, { useState } from 'react';
// import { Bell, Calendar, ChevronRight, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { useNavigate } from 'react-router-dom';

// const notices = [
//   //   { id: 1, date: 'Mar 15, 2026', title: 'Admissions Open for Session 2026-27', isNew: true },
// //   // { id: 2, date: 'Mar 10, 2026', title: 'Annual Sports Day Postponed to April 5th', isNew: false },
// //   // { id: 3, date: 'Mar 05, 2026', title: 'Parent-Teacher Meeting (PTM) for Classes I-X', isNew: false },
// //   // { id: 4, date: 'Feb 28, 2026', title: 'Holi Vacation Notice: School closed from Mar 20-25', isNew: false },
// //   // { id: 5, date: 'Feb 20, 2026', title: 'Science Exhibition Winners List Announced', isNew: false },
// //   // { id: 6, date: 'Feb 15, 2026', title: 'Inter-School Debate Competition Registration', isNew: false },
// //   // { id: 7, date: 'Feb 10, 2026', title: 'Board Exam Date Sheet Released for Class X & XII', isNew: false },
// //   // { id: 8, date: 'Feb 05, 2026', title: 'New Library Books Arrival and Issue Guidelines', isNew: false },
// //   { id: 9, date: 'August 15, 2026', title: 'Independance Day Celebration Schedule', isNew: false },
// //   // { id: 10, date: 'Jan 15, 2026', title: 'Winter Vacation Extension Notice', isNew: false },
// ];

// const NoticeBoard = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">

//         {/* Header */}
//         <div className="bg-[#003366] text-white p-6 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <Bell className="text-[#FFD700] w-6 h-6" />
//             <h2 className="text-xl font-bold uppercase tracking-wider font-serif">
//               Notice Board
//             </h2>
//           </div>

//           {notices.length > 0 && (
//             <button
//               onClick={() => navigate('/bulletin-board')}
//               className="text-xs font-bold text-[#FFD700] hover:underline flex items-center tracking-wider"
//             >
//               VIEW ALL <ChevronRight size={16} className="ml-1" />
//             </button>
//           )}
//         </div>

//         {/* Notice List */}
//         <div className="p-6 flex-1 overflow-y-auto">

//           {notices.length === 0 ? (

//             <div className="flex flex-col items-center justify-center text-center py-12">
//               <Bell size={50} className="text-gray-300 mb-4" />

//               <h3 className="text-lg font-bold text-[#003366] mb-2">
//                 No Notices Available
//               </h3>

//               <p className="text-sm text-gray-500 max-w-xs">
//                 There are currently no announcements or notices published.
//                 Please check back later for updates.
//               </p>
//             </div>

//           ) : (

//             <div className="space-y-6">
//               {notices.slice(0, 5).map((notice, index) => (
//                 <motion.div
//                   key={notice.id}
//                   initial={{ x: -20, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-start space-x-4 group cursor-pointer"
//                   onClick={() => setIsModalOpen(true)}
//                 >
//                   <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors flex-shrink-0">
//                     <Calendar size={24} strokeWidth={1.5} />
//                   </div>

//                   <div className="flex-1 pt-1">
//                     <div className="flex items-center justify-between mb-1">
//                       <span className="text-sm font-medium text-gray-400">
//                         {notice.date}
//                       </span>

//                       {notice.isNew && (
//                         <span className="bg-[#FF4D4D] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
//                           NEW
//                         </span>
//                       )}
//                     </div>

//                     <h3 className="text-base font-bold text-gray-800 group-hover:text-[#003366] transition-colors font-serif leading-snug">
//                       {notice.title}
//                     </h3>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//           )}

//         </div>

//         {/* Footer */}
//         <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
//           <p className="text-sm text-gray-500 italic">
//             * Please check this board regularly for latest updates.
//           </p>
//         </div>

//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsModalOpen(false)}
//               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             />

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
//             >

//               {/* Modal Header */}
//               <div className="bg-[#003366] text-white p-6 sm:p-8 flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-white/10 p-3 rounded-2xl">
//                     <Bell className="text-[#FFD700] w-8 h-8" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold uppercase tracking-wider font-serif">
//                       All Notices
//                     </h2>
//                     <p className="text-blue-200 text-sm mt-1">
//                       Stay updated with the latest announcements
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => setIsModalOpen(false)}
//                   className="p-2 hover:bg-white/10 rounded-full transition-colors"
//                 >
//                   <X size={28} />
//                 </button>
//               </div>

//               {/* Modal Body */}
//               <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-gray-50">

//                 {notices.length === 0 ? (

//                   <div className="flex flex-col items-center justify-center text-center py-20">
//                     <Bell size={60} className="text-gray-300 mb-6" />

//                     <h3 className="text-xl font-bold text-[#003366] mb-2">
//                       No Notices Available
//                     </h3>

//                     <p className="text-gray-500 max-w-md">
//                       There are currently no notices published.
//                       Please check again later.
//                     </p>
//                   </div>

//                 ) : (

//                   <div className="space-y-4">
//                     {notices.map((notice, index) => (
//                       <motion.div
//                         key={notice.id}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                         className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-5 group cursor-pointer"
//                       >
//                         <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors flex-shrink-0">
//                           <Calendar size={28} strokeWidth={1.5} />
//                         </div>

//                         <div className="flex-1 pt-1">
//                           <div className="flex items-center justify-between mb-2">
//                             <span className="text-sm font-semibold text-[#003366]/60 uppercase tracking-wider">
//                               {notice.date}
//                             </span>

//                             {notice.isNew && (
//                               <span className="bg-[#FF4D4D] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider shadow-sm">
//                                 NEW
//                               </span>
//                             )}
//                           </div>

//                           <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#003366] transition-colors font-serif leading-snug">
//                             {notice.title}
//                           </h3>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>

//                 )}

//               </div>

//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default NoticeBoard;

// import React, { useState } from 'react';
// import { Bell, Calendar, ChevronRight, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import notice from '../assets/closed.jpg';
// import notice2 from '../assets/notice2.jpg';

// const notices = [
//   {
//     id: 1,
//     date: 'Mar 17 to Mar 20, 2026',
//     title: 'Term Break: School closed for Classes I–VIII from 17–20 March.',
//     isNew: true,
//     isImportant: true,
//     fileType: 'image',
//     fileUrl: notice
//   },
//   {
//     id: 2,
//     date: 'Mar 21, 2026',
//     title: 'Parent-Teacher Meeting (PTM) is scheduled on 21st March (Saturday), 8:00 AM – 11:00 AM',
//     isNew: true,
//     isImportant: true,
//     fileType: 'image',
//     fileUrl: notice
//   },
//   {
//     id: 3,
//     date: '2026-03-20',
//     title: 'PTM on 21st March, 8:00 AM – 11:00 AM. Students must attend in uniform with parents',
//     isNew: true,
//     isImportant: true,
//     fileType: 'image',
//     fileUrl: notice2
//   },
//   {
//     id: 4,
//     date: '2026-03-20',
//     title: 'Parents are requested to clear all pending/due fees before attending PTM',
//     isNew: true,
//     isImportant: true,
//     fileType: 'image',
//     fileUrl: notice2
//   },
//   {
//     id: 5,
//     date: '2026-03-22',
//     title: 'Books available on 22nd–24th March, 8:00 AM to 2:00 PM in school premises',
//     isNew: true,
//     isImportant: false,
//     fileType: 'image',
//     fileUrl: notice2
//   },
//   {
//     id: 6,
//     date: '2026-03-20',
//     title: 'Book list for upcoming session is shared along with this notice',
//     isNew: true,
//     isImportant: false,
//     fileType: 'image',
//     fileUrl: notice2
//   }
// ];

// const NoticeBoard = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedNotice, setSelectedNotice] = useState(null);

//   return (
//     <>
//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">

//         {/* Header */}
//         <div className="bg-[#003366] text-white p-6 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <Bell className="text-[#FFD700] w-6 h-6" />
//             <h2 className="text-xl font-bold uppercase tracking-wider font-serif">
//               Notice Board
//             </h2>
//           </div>

//           {notices.length > 0 && (
//             <button
//               onClick={() => navigate('/bulletin-board')}
//               className="text-xs font-bold text-[#FFD700] hover:underline flex items-center tracking-wider"
//             >
//               VIEW ALL <ChevronRight size={16} className="ml-1" />
//             </button>
//           )}
//         </div>

//         {/* Notice List */}
//         <div className="p-6 flex-1 overflow-y-auto">
//           {notices.length === 0 ? (
//             <div className="text-center py-10">No Notices</div>
//           ) : (
//             <div className="space-y-6">
//               {notices.slice(0, 5).map((notice, index) => (
//                 <motion.div
//                   key={notice.id}
//                   initial={{ x: -20, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-start space-x-4 group cursor-pointer"
//                   onClick={() => {
//                     setSelectedNotice(notice);
//                     setIsModalOpen(true);
//                   }}
//                 >
//                   <div className="bg-gray-50 p-3 rounded-xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white">
//                     <Calendar size={24} />
//                   </div>

//                   <div className="flex-1">
//                     {/* <div className="flex justify-between">
//                       <span className="text-sm text-gray-400">
//                         {notice.date}
//                       </span>

//                       {notice.isNew && (
//                         <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                           NEW
//                         </span>
//                       )}
//                     </div> */}

//                     <div className="flex gap-2">
//                       {notice.isNew && (
//                         <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
//                           NEW
//                         </span>
//                       )}

//                       {notice.isImportant && (
//                         <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
//                           IMPORTANT
//                         </span>
//                       )}
//                     </div>

//                     <h3 className="font-bold text-gray-800">
//                       {notice.title}
//                     </h3>

//                     {notice.fileType === 'image' && (
//                       <span className="text-green-500 text-xs">Image</span>
//                     )}
//                     {notice.fileType === 'pdf' && (
//                       <span className="text-red-500 text-xs">PDF</span>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         <div className="p-4 text-center text-sm text-gray-500 border-t">
//           * Check regularly for updates
//         </div>
//       </div>

//       {/* Modal */}
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

//             {/* Modal Box */}
//             <motion.div
//               className="relative bg-white w-full max-w-3xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//             >
//               {/* Header */}
//               <div className="bg-[#003366] text-white p-6 flex justify-between items-center">
//                 <h2 className="text-lg font-bold">
//                   {selectedNotice.title}
//                 </h2>
//                 <X
//                   className="cursor-pointer"
//                   onClick={() => setIsModalOpen(false)}
//                 />
//               </div>

//               {/* Body */}
//               <div className="p-6 space-y-4 overflow-y-auto">

//                 <p className="text-gray-500">{selectedNotice.date}</p>

//                 {/* IMAGE FIXED SIZE */}
//                 {selectedNotice.fileType === 'image' && (
//                   <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
//                     <img
//                       src={selectedNotice.fileUrl}
//                       alt="notice"
//                       className="max-h-full max-w-full object-contain rounded-lg cursor-zoom-in"
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
//                     className="inline-block bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#002244]"
//                   >
//                     Download File
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default NoticeBoard;

import React, { useState } from "react";
import { Bell, Calendar, ChevronRight, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import notice from "../assets/closed.jpg";
import notice2 from "../assets/notice2.jpg";
import pdf from "../assets/bookList.pdf";
import pdf1 from "../assets/new24.pdf";
import pdfRamNavami from "../assets/ram.pdf";

// Example PDF import — replace with your actual PDF assets
// import noticePdf from '../assets/notice.pdf';

const notices = [
  // {
  //   id: 1,
  //   date: 'Mar 17 to Mar 20, 2026',
  //   title: 'Term Break: School closed for Classes I–VIII from 17–20 March',
  //   isNew: true,
  //   isImportant: true,
  //   isReminder: false,
  //   fileType: 'image',
  //   fileUrl: notice
  // },
  // {
  //   id: 2,
  //   date: 'Mar 21, 2026',
  //   title: 'Parent-Teacher Meeting (PTM) is scheduled on 21st March (Saturday), 8:00 AM – 11:00 AM',
  //   isNew: true,
  //   isImportant: true,
  //   isReminder: false,   // ← has both IMPORTANT + REMINDER
  //   fileType: 'image',
  //   fileUrl: notice
  // },
  // {
  //   id: 3,
  //   date: '2026-03-20',
  //   title: 'PTM on 21st March, 8:00 AM – 11:00 AM. Students must attend in uniform with parents',
  //   isNew: true,
  //   isImportant: false,
  //   isReminder: true,
  //   fileType: 'image',                    // ← PDF notice
  //   fileUrl: notice2      // replace with your actual PDF path / import
  // },
  // {
  //   id: 4,
  //   date: '2026-03-20',
  //   title: 'Parents are requested to clear all pending/due fees before attending PTM',
  //   isNew: true,
  //   isImportant: true,
  //   isReminder: false,
  //   fileType: 'image',                    // ← PDF notice
  //   fileUrl: notice2  // replace with your actual PDF path / import
  // },
  //   {
  //   "id": 9,
  //   "date": "26-03-2026",
  //   "title": "School will remain closed on 27th March 2026 on account of Ram Navami. Regular classes will resume on 28th March.",
  //   "isNew": true,
  //   "isImportant": true,
  //   "isReminder": false,
  //   "fileType": "pdf",
  //   "fileUrl": pdfRamNavami
  // },
  //     {
  //       "id": 7,
  //      "date": "24-03-2026",
  //       "title": "Commencement of New Academic Session (Class II to X) from 25th March 2026",
  //       "isNew": true,
  //       "isImportant": true,
  //       "isReminder": false,
  //       "fileType": "pdf",
  //       "fileUrl": pdf1
  //     },
  //     {
  //       "id": 8,
  //       "date": "24-03-2026",
  //       "title": "New School Timing: 8:00 AM to 2:00 PM | Teachers & Students Arrival 7:30 AM | Assembly 7:45–8:00 AM",
  //       "isNew": true,
  //       "isImportant": false,
  //       "isReminder": true,
  //       "fileType": "pdf",
  //       "fileUrl": pdf1
  //     },
  //   {
  //     id: 5,
  //     "date": "22-03-2026",
  //     title: 'Books available on 22nd–24th March, 8:00 AM to 2:00 PM in school premises',
  //     isNew: true,
  //     isImportant: false,
  //     isReminder: true,   // ← only REMINDER
  //     fileType: 'image',
  //     fileUrl: notice2
  //   },
  //   {
  //     id: 6,
  //    "date": "20-03-2026",
  //     title: 'Book list for upcoming session is shared along with this notice',
  //     isNew: true,
  //     isImportant: false,
  //     isReminder: false,
  //     fileType: 'pdf',
  //     fileUrl: pdf
  //   },
];

const NoticeBoard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const openModal = (notice) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNotice(null);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
        {/* Header */}
        <div className="bg-[#003366] text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Bell className="text-[#FFD700] w-6 h-6" />
            <h2 className=" text-lg sm:text-xl font-bold uppercase tracking-wider font-serif">
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

        {/* Notice List */}
        <div className="p-6 overflow-y-auto flex-1">
          {notices.length === 0 ? (
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

                  <div className="flex-1">
                    {/* Badges row */}
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
                      {/* ── NEW REMINDER BADGE ── */}
                      {notice.isReminder && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          REMINDER
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-gray-800">{notice.title}</h3>

                    {/* File type label */}
                    {notice.fileType === "image" && (
                      <span className="text-green-500 text-xs font-medium">
                        📷 Image
                      </span>
                    )}
                    {notice.fileType === "pdf" && (
                      <span className="text-red-500 text-xs font-medium">
                        📄 PDF
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 text-center text-sm border-t">
          <p className="text-[#003366] font-medium animate-pulse">
            * Check regularly for updates
          </p>
        </div>
      </div>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {isModalOpen && selectedNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Box */}
            <motion.div
              className="relative bg-white w-full max-w-3xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Modal Header */}
              <div className="bg-[#003366] text-white p-6 flex justify-between items-start gap-4">
                <div className="flex-1">
                  {/* Badges inside modal header */}
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
                  <h2 className="text-lg font-bold leading-snug">
                    {selectedNotice.title}
                  </h2>
                  <p className="text-sm text-blue-200 mt-1">
                    {selectedNotice.date}
                  </p>
                </div>
                <X
                  className="cursor-pointer flex-shrink-0 mt-1 hover:text-red-300 transition-colors"
                  onClick={closeModal}
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4 overflow-y-auto flex-1">
                {/* IMAGE viewer */}
                {selectedNotice.fileType === "image" &&
                  selectedNotice.fileUrl && (
                    <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
                      <img
                        src={selectedNotice.fileUrl}
                        alt="notice"
                        className="max-h-full max-w-full object-contain rounded-lg cursor-zoom-in"
                        onClick={() => window.open(selectedNotice.fileUrl)}
                      />
                    </div>
                  )}

                {/* PDF viewer — same fixed-height box as image */}
                {selectedNotice.fileType === "pdf" &&
                  selectedNotice.fileUrl && (
                    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200">
                      <iframe
                        src={selectedNotice.fileUrl}
                        title="PDF Notice"
                        className="w-full h-full"
                      />
                    </div>
                  )}

                {/* Download button for both types */}
                {selectedNotice.fileUrl && (
                  <a
                    href={selectedNotice.fileUrl}
                    download
                    className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#002244] transition-colors"
                  >
                    <Download size={16} />
                    Download File
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
