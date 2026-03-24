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



import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Calendar, ChevronRight, Star, X } from 'lucide-react';
import noticeImg from '../assets/closed.jpg';
import notice2 from '../assets/notice2.jpg';
import pdf from '../assets/bookList.pdf';

const BulletinBoard = () => {

  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const notices = [
  // {
  //   id: 1,
  //   date: 'Mar 17 to Mar 20, 2026',
  //   title: 'Term Break: School closed for Classes I–VIII from 17–20 March',
  //   isNew: false,
  //   isImportant: true,
  //   isReminder: false,
  //   fileType: 'image',
  //   fileUrl: noticeImg
  // },
  // {
  //   id: 2,
  //   date: 'Mar 21, 2026',
  //   title: 'Parent-Teacher Meeting (PTM) is scheduled on 21st March (Saturday), 8:00 AM – 11:00 AM',
  //   isNew: false,
  //   isImportant: true,
  //   isReminder: false,   // ← has both IMPORTANT + REMINDER
  //   fileType: 'image',
  //   fileUrl: noticeImg
  // },
  // {
  //   id: 3,
  //   date: '2026-03-20',
  //   title: 'PTM on 21st March, 8:00 AM – 11:00 AM. Students must attend in uniform with parents',
  //   isNew: false,
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
  {
    id: 5,
    date: '2026-03-22',
    title: 'Books available on 22nd–24th March, 8:00 AM to 2:00 PM in school premises',
    isNew: true,
    isImportant: false,
    isReminder: true,   // ← only REMINDER
    fileType: 'image',
    fileUrl: notice2
  },
  {
    id: 6,
    date: '2026-03-20',
    title: 'Book list for upcoming session is shared along with this notice',
    isNew: true,
    isImportant: false,
    isReminder: false,
    fileType: 'pdf',                   
    fileUrl: pdf 
  }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">

      <SEO
        title="Announcements"
        description="Stay updated with latest notices"
      />

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase">
            Announcements
          </h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto mb-6" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* MAIN */}
          <div className="lg:col-span-2">

            <div className="bg-white p-8 rounded-3xl shadow-xl">

              <h2 className="text-2xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                <Bell className="text-[#FFD700]" />
                Latest Notices
              </h2>

              {notices.length === 0 ? (
                <div className="text-center py-20">
                  No Notices Available
                </div>
              ) : (

                <div className="space-y-4">

                  {notices.map((notice, i) => (

                    <motion.div
                      key={notice.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 bg-gray-50 rounded-2xl cursor-pointer hover:shadow-md flex items-center justify-between"
                      onClick={() => {
                        setSelectedNotice(notice);
                        setIsModalOpen(true);
                      }}
                    >

                      <div className="flex gap-4">

                        <div className="p-3 bg-white rounded-xl">
                          <Calendar size={24} />
                        </div>

                        <div>
                          <p className="text-sm text-gray-400">{notice.date}</p>
                          <h3 className="font-bold text-[#003366]">
                            {notice.title}
                          </h3>

                          {notice.fileType === 'image' && (
                            <span className="text-green-500 text-xs">Image</span>
                          )}
                          {notice.fileType === 'pdf' && (
                            <span className="text-red-500 text-xs">PDF</span>
                          )}
                        </div>

                      </div>

                      <ChevronRight />
                    </motion.div>

                  ))}

                </div>

              )}

            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            <div className="bg-[#003366] text-white p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Emergency Alerts</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] mt-1">•</span>
                  Book list for upcoming session is shared along with this notice
                </li>
{/* 
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] mt-1">•</span>
                  PTM on 21st March, 8:00–11:00 AM.
                </li> */}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold text-[#003366] mb-4 flex gap-2">
                <Star className="text-[#FFD700]" />
                Featured News
              </h3>

              <img
                src="https://picsum.photos/400/200"
                alt="news"
                className="rounded-xl"
              />
            </div>

          </aside>

        </div>
      </div>

      {/* ✅ MODAL */}
      <AnimatePresence>
        {isModalOpen && selectedNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-white w-full max-w-3xl rounded-2xl max-h-[90vh] flex flex-col overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >

              {/* Header */}
              <div className="bg-[#003366] text-white p-6 flex justify-between">
                <h2>{selectedNotice.title}</h2>
                <X onClick={() => setIsModalOpen(false)} className="cursor-pointer" />
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto space-y-4">

                <p className="text-gray-500">{selectedNotice.date}</p>

                {/* IMAGE */}
                {selectedNotice.fileType === 'image' && (
                  <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
                    <img
                      src={selectedNotice.fileUrl}
                      alt="notice"
                      className="max-h-full max-w-full object-contain cursor-zoom-in"
                      onClick={() => window.open(selectedNotice.fileUrl)}
                    />
                  </div>
                )}

                {/* PDF */}
                {selectedNotice.fileType === 'pdf' && (
                  <iframe
                    src={selectedNotice.fileUrl}
                    title="PDF"
                    className="w-full h-[400px] rounded-lg border"
                  />
                )}

                {/* DOWNLOAD */}
                {selectedNotice.fileUrl && (
                  <a
                    href={selectedNotice.fileUrl}
                    download
                    className="inline-block bg-[#003366] text-white px-4 py-2 rounded"
                  >
                    Download File
                  </a>
                )}

              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BulletinBoard;