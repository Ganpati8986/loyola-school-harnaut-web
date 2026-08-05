// // import React, { useState } from "react";
// // import { Bell, Calendar, ChevronRight, X, Download } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useNavigate } from "react-router-dom";
// // import sofOlympiadNotice from "../assets/sof.jpg";

// // // Example PDF import — replace with your actual PDF assets
// // import classXPTMNotice from '../assets/Notice for class X PTM.pdf';
// // import soloSingingCompetitionNotice from '../assets/new_notice.pdf';
// // const notices = [
// //   // {
// //   //   id: 10,
// //   //   date: '22-07-2026',
// //   //   title:
// //   //     'Parent-Teacher Meeting (PTM) for Class X is scheduled on 25th July, 2026 from 8:00 a.m. to 10:00 a.m. Students must attend in proper school uniform and bring their school diary along with their parents. Attendance of all parents is mandatory.',
// //   //   isNew: true,
// //   //   isImportant: true,
// //   //   isReminder: false,
// //   //   fileType: 'image',
// //   //   fileUrl: classXPTMNotice
// //   // },
// //       {
// //   id: 12,
// //   date: '23-07-2026',
// //   title:
// //     '🎤 Inter House Solo Singing Competition for Classes III–IX will be held on 25th July, 2026. Two participants from each house must be nominated. Submit participant names by 24th July, 2026.',
// //   isNew: true,
// //   isImportant: true,
// //   isReminder: true,
// //   fileType: 'pdf',
// //   fileUrl: soloSingingCompetitionNotice
// // },
// //   {
// //     id: 11,
// //     date: '25-07-2026',
// //     title:
// //       '🔔 REMINDER: Parent-Teacher Meeting (PTM) for Class X will be held on 25th July, 2026 from 8:00 a.m. to 10:00 a.m. Parents are requested to attend the meeting with their child in school uniform and carry the school diary.',
// //     isNew: true,
// //     isImportant: true,
// //     isReminder: true,
// //     fileType: 'pdf',
// //     fileUrl: classXPTMNotice
// //   },
// //   {
// //     id: 7,
// //     date: '15-07-2026',
// //     title:
// //       'SOF Olympiad Registration is now OPEN for all eligible students. Loyola School (School Code: BR5168). Students must register online using the school access code before the registration closes.',
// //     isNew: true,
// //     isImportant: true,
// //     isReminder: false,
// //     fileType: 'image',
// //     fileUrl: sofOlympiadNotice
// //   },
// //   {
// //     id: 8,
// //     date: 'Registration Deadline',
// //     title:
// //       '⚠️ VERY IMPORTANT: SOF Olympiad registrations close 30 days before the selected examination date. Students are advised to complete their registration and payment well in advance to avoid missing the deadline.',
// //     isNew: true,
// //     isImportant: true,
// //     isReminder: true,
// //     fileType: 'image',
// //     fileUrl: sofOlympiadNotice
// //   },
// // {
// //   id: 9,
// //   date: 'SOF Registration Assistance',
// //   title:
// //     'Need help with SOF Olympiad registration? Kindly contact the SOF Registration Team at 8800012977 or email registrations@sofworld.org. For complete information, visit https://sofworld.org or follow SOF on Facebook at http://www.facebook.com/sofworld.',
// //   isNew: true,
// //   isImportant: true,
// //   isReminder: true,
// //   fileType: 'image',
// //   fileUrl: sofOlympiadNotice
// // }
// // ];

// // const NoticeBoard = () => {
// //   const navigate = useNavigate();
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedNotice, setSelectedNotice] = useState(null);

// //   const openModal = (notice) => {
// //     setSelectedNotice(notice);
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedNotice(null);
// //   };

// //   return (
// //     <>
// //       <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
// //         {/* Header */}
// //         <div className="bg-[#003366] text-white p-6 flex items-center justify-between">
// //           <div className="flex items-center space-x-3">
// //             <Bell className="text-[#FFD700] w-6 h-6" />
// //             <h2 className=" text-lg sm:text-xl font-bold uppercase tracking-wider font-serif">
// //               Notice Board
// //             </h2>
// //           </div>

// //           {notices.length > 0 && (
// //             <button
// //               onClick={() => navigate("/bulletin-board")}
// //               className="text-xs font-bold text-[#FFD700] hover:underline flex items-center tracking-wider"
// //             >
// //               VIEW ALL <ChevronRight size={16} className="ml-1" />
// //             </button>
// //           )}
// //         </div>

// //         {/* Notice List */}
// //         <div className="p-6 overflow-y-auto flex-1">
// //           {notices.length === 0 ? (
// //             <div className="text-center py-10">No Notices</div>
// //           ) : (
// //             <div className="space-y-6">
// //               {notices.map((notice, index) => (
// //                 <motion.div
// //                   key={notice.id}
// //                   initial={{ x: -20, opacity: 0 }}
// //                   whileInView={{ x: 0, opacity: 1 }}
// //                   transition={{ delay: index * 0.1 }}
// //                   className="flex items-start space-x-4 group cursor-pointer"
// //                   onClick={() => openModal(notice)}
// //                 >
// //                   <div className="bg-gray-50 p-3 rounded-xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors duration-200">
// //                     <Calendar size={24} />
// //                   </div>

// //                   <div className="flex-1">
// //                     {/* Badges row */}
// //                     <div className="flex flex-wrap gap-2 mb-1">
// //                       {notice.isNew && (
// //                         <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
// //                           NEW
// //                         </span>
// //                       )}
// //                       {notice.isImportant && (
// //                         <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
// //                           IMPORTANT
// //                         </span>
// //                       )}
// //                       {/* ── NEW REMINDER BADGE ── */}
// //                       {notice.isReminder && (
// //                         <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
// //                           REMINDER
// //                         </span>
// //                       )}
// //                     </div>

// //                     <h3 className="font-bold text-gray-800">{notice.title}</h3>

// //                     {/* File type label */}
// //                     {notice.fileType === "image" && (
// //                       <span className="text-green-500 text-xs font-medium">
// //                         📷 Image
// //                       </span>
// //                     )}
// //                     {notice.fileType === "pdf" && (
// //                       <span className="text-red-500 text-xs font-medium">
// //                         📄 PDF
// //                       </span>
// //                     )}
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* Footer */}
// //         <div className="p-4 text-center text-sm border-t">
// //           <p className="text-[#003366] font-medium animate-pulse">
// //             * Check regularly for updates
// //           </p>
// //         </div>
// //       </div>

// //       {/* ── MODAL ── */}
// //       <AnimatePresence>
// //         {isModalOpen && selectedNotice && (
// //           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
// //             {/* Overlay */}
// //             <motion.div
// //               className="absolute inset-0 bg-black/60"
// //               onClick={closeModal}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //             />

// //             {/* Modal Box */}
// //             <motion.div
// //               className="relative bg-white w-full max-w-3xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //             >
// //               {/* Modal Header */}
// //               <div className="bg-[#003366] text-white p-6 flex justify-between items-start gap-4">
// //                 <div className="flex-1">
// //                   {/* Badges inside modal header */}
// //                   <div className="flex flex-wrap gap-2 mb-2">
// //                     {selectedNotice.isImportant && (
// //                       <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
// //                         IMPORTANT
// //                       </span>
// //                     )}
// //                     {selectedNotice.isReminder && (
// //                       <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded-full animate-pulse">
// //                         REMINDER
// //                       </span>
// //                     )}
// //                   </div>
// //                   <h2 className="text-lg font-bold leading-snug">
// //                     {selectedNotice.title}
// //                   </h2>
// //                   <p className="text-sm text-blue-200 mt-1">
// //                     {selectedNotice.date}
// //                   </p>
// //                 </div>
// //                 <X
// //                   className="cursor-pointer flex-shrink-0 mt-1 hover:text-red-300 transition-colors"
// //                   onClick={closeModal}
// //                 />
// //               </div>

// //               {/* Modal Body */}
// //               <div className="p-6 space-y-4 overflow-y-auto flex-1">
// //                 {/* IMAGE viewer */}
// //                 {selectedNotice.fileType === "image" &&
// //                   selectedNotice.fileUrl && (
// //                     <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
// //                       <img
// //                         src={selectedNotice.fileUrl}
// //                         alt="notice"
// //                         className="max-h-full max-w-full object-contain rounded-lg cursor-zoom-in"
// //                         onClick={() => window.open(selectedNotice.fileUrl)}
// //                       />
// //                     </div>
// //                   )}

// //                 {/* PDF viewer — same fixed-height box as image */}
// //                 {selectedNotice.fileType === "pdf" &&
// //                   selectedNotice.fileUrl && (
// //                     <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200">
// //                       <iframe
// //                         src={selectedNotice.fileUrl}
// //                         title="PDF Notice"
// //                         className="w-full h-full"
// //                       />
// //                     </div>
// //                   )}

// //                 {/* Download button for both types */}
// //                 {selectedNotice.fileUrl && (
// //                   <a
// //                     href={selectedNotice.fileUrl}
// //                     download
// //                     className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#002244] transition-colors"
// //                   >
// //                     <Download size={16} />
// //                     Download File
// //                   </a>
// //                 )}
// //               </div>
// //             </motion.div>
// //           </div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default NoticeBoard;




// // import React, { useState, useEffect } from "react";
// // import { Bell, Calendar, ChevronRight, X, Download, Loader2 } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useNavigate } from "react-router-dom";

// // // const ERP_BASE_URL = "http://localhost:8080"; 

// // const ERP_BASE_URL = "https://sukedu.cloud";

// // const isWithinDays = (dateStr, days) => {
// //   const diff = (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24);
// //   return diff <= days;
// // };

// // const NoticeBoard = () => {
// //   const navigate = useNavigate();
// //   const [notices, setNotices] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedNotice, setSelectedNotice] = useState(null);

// //   // PDF preview is fetched as a blob so it isn't subject to
// //   // X-Frame-Options when loaded into an <iframe>.
// //   const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
// //   const [pdfLoading, setPdfLoading] = useState(false);
// //   const [pdfError, setPdfError] = useState(false);

// //   useEffect(() => {
// //     let cancelled = false;

// //     const fetchNotices = async () => {
// //       try {
// //         setLoading(true);
// //         const res = await fetch(`https://sukedu.cloud/api/public/notices/getPublicNotice`);
// //         if (!res.ok) throw new Error(`Request failed: ${res.status}`);
// //         const data = await res.json();

// //         const mapped = data.map((n) => {
// //           const firstAttachment = n.attachments?.[0];
// //           return {
// //             id: n.id,
// //             date: new Date(n.createdAt).toLocaleDateString("en-GB"),
// //             title: n.title,
// //             description: n.description,
// //             isNew: isWithinDays(n.createdAt, 7),
// //             isImportant: n.noticeType === "IMPORTANT",
// //             isReminder: n.noticeType === "REMINDER",
// //             fileType: firstAttachment?.fileType?.includes("pdf") ? "pdf" : "image",
// //             fileUrl: firstAttachment ? `${ERP_BASE_URL}${firstAttachment.downloadUrl}` : null,
// //           };
// //         });

// //         if (!cancelled) {
// //           setNotices(mapped);
// //           setError(null);
// //         }
// //       } catch (err) {
// //         console.error("Failed to load notices:", err);
// //         if (!cancelled) setError("Unable to load notices right now.");
// //       } finally {
// //         if (!cancelled) setLoading(false);
// //       }
// //     };

// //     fetchNotices();
// //     return () => {
// //       cancelled = true;
// //     };
// //   }, []);

// //   const openModal = async (notice) => {
// //     setSelectedNotice(notice);
// //     setIsModalOpen(true);
// //     setPdfError(false);
// //     setPdfBlobUrl(null);

// //     if (notice.fileType === "pdf" && notice.fileUrl) {
// //       setPdfLoading(true);
// //       try {
// //         const res = await fetch(notice.fileUrl);
// //         if (!res.ok) throw new Error(`Failed to fetch PDF: ${res.status}`);
// //         const blob = await res.blob();
// //         const url = URL.createObjectURL(blob);
// //         setPdfBlobUrl(url);
// //       } catch (err) {
// //         console.error("Failed to load PDF:", err);
// //         setPdfError(true);
// //       } finally {
// //         setPdfLoading(false);
// //       }
// //     }
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedNotice(null);
// //     if (pdfBlobUrl) {
// //       URL.revokeObjectURL(pdfBlobUrl);
// //     }
// //     setPdfBlobUrl(null);
// //     setPdfError(false);
// //   };

// //   return (
// //     <>
// //       <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
// //         <div className="bg-[#003366] text-white p-6 flex items-center justify-between">
// //           <div className="flex items-center space-x-3">
// //             <Bell className="text-[#FFD700] w-6 h-6" />
// //             <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider font-serif">
// //               Notice Board
// //             </h2>
// //           </div>
// //           {notices.length > 0 && (
// //             <button
// //               onClick={() => navigate("/bulletin-board")}
// //               className="text-xs font-bold text-[#FFD700] hover:underline flex items-center tracking-wider"
// //             >
// //               VIEW ALL <ChevronRight size={16} className="ml-1" />
// //             </button>
// //           )}
// //         </div>

// //         <div className="p-6 overflow-y-auto flex-1">
// //           {loading ? (
// //             <div className="flex items-center justify-center py-10 text-gray-400">
// //               <Loader2 className="animate-spin mr-2" size={20} />
// //               Loading notices...
// //             </div>
// //           ) : error ? (
// //             <div className="text-center py-10 text-red-500">{error}</div>
// //           ) : notices.length === 0 ? (
// //             <div className="text-center py-10">No Notices</div>
// //           ) : (
// //             <div className="space-y-6">
// //               {notices.map((notice, index) => (
// //                 <motion.div
// //                   key={notice.id}
// //                   initial={{ x: -20, opacity: 0 }}
// //                   whileInView={{ x: 0, opacity: 1 }}
// //                   transition={{ delay: index * 0.1 }}
// //                   className="flex items-start space-x-4 group cursor-pointer"
// //                   onClick={() => openModal(notice)}
// //                 >
// //                   <div className="bg-gray-50 p-3 rounded-xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors duration-200">
// //                     <Calendar size={24} />
// //                   </div>
// //                   <div className="flex-1 min-w-0">
// //                     <div className="flex flex-wrap gap-2 mb-1">
// //                       {notice.isNew && (
// //                         <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
// //                           NEW
// //                         </span>
// //                       )}
// //                       {notice.isImportant && (
// //                         <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
// //                           IMPORTANT
// //                         </span>
// //                       )}
// //                       {notice.isReminder && (
// //                         <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
// //                           REMINDER
// //                         </span>
// //                       )}
// //                     </div>

// //                     <h3 className="font-bold text-gray-800 leading-snug">{notice.title}</h3>

// //                     {notice.description && (
// //                       <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-2">
// //                         {notice.description}
// //                       </p>
// //                     )}

// //                     <div className="mt-2">
// //                       {notice.fileType === "image" && (
// //                         <span className="text-green-500 text-xs font-medium">📷 Image</span>
// //                       )}
// //                       {notice.fileType === "pdf" && (
// //                         <span className="text-red-500 text-xs font-medium">📄 PDF</span>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         <div className="p-4 text-center text-sm border-t">
// //           <p className="text-[#003366] font-medium animate-pulse">
// //             * Check regularly for updates
// //           </p>
// //         </div>
// //       </div>

// //       <AnimatePresence>
// //         {isModalOpen && selectedNotice && (
// //           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
// //             <motion.div
// //               className="absolute inset-0 bg-black/60"
// //               onClick={closeModal}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //             />
// //             <motion.div
// //               className="relative bg-white w-full max-w-3xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //             >
// //               <div className="bg-[#003366] text-white p-6 flex justify-between items-start gap-4">
// //                 <div className="flex-1">
// //                   <div className="flex flex-wrap gap-2 mb-2">
// //                     {selectedNotice.isImportant && (
// //                       <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
// //                         IMPORTANT
// //                       </span>
// //                     )}
// //                     {selectedNotice.isReminder && (
// //                       <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded-full animate-pulse">
// //                         REMINDER
// //                       </span>
// //                     )}
// //                   </div>
// //                   <h2 className="text-lg font-bold leading-snug">{selectedNotice.title}</h2>
// //                   <p className="text-sm text-blue-200 mt-1">{selectedNotice.date}</p>
// //                 </div>
// //                 <X
// //                   className="cursor-pointer flex-shrink-0 mt-1 hover:text-red-300 transition-colors"
// //                   onClick={closeModal}
// //                 />
// //               </div>

// //               <div className="p-6 space-y-4 overflow-y-auto flex-1">
// //                 {selectedNotice.description && (
// //                   <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-[#003366]/20 pl-4">
// //                     {selectedNotice.description}
// //                   </p>
// //                 )}

// //                 {selectedNotice.fileType === "image" && selectedNotice.fileUrl && (
// //                   <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
// //                     <img
// //                       src={selectedNotice.fileUrl}
// //                       alt="notice"
// //                       className="max-h-full max-w-full object-contain rounded-lg cursor-zoom-in"
// //                       onClick={() => window.open(selectedNotice.fileUrl)}
// //                     />
// //                   </div>
// //                 )}

// //                 {selectedNotice.fileType === "pdf" && selectedNotice.fileUrl && (
// //                   <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-50">
// //                     {pdfLoading ? (
// //                       <div className="flex items-center gap-2 text-gray-400">
// //                         <Loader2 className="animate-spin" size={22} />
// //                         Loading PDF...
// //                       </div>
// //                     ) : pdfBlobUrl ? (
// //                       <iframe src={pdfBlobUrl} title="PDF Notice" className="w-full h-full" />
// //                     ) : pdfError ? (
// //                       <p className="text-sm text-gray-400 px-6 text-center">
// //                         Couldn't preview this PDF. Use the download button below instead.
// //                       </p>
// //                     ) : null}
// //                   </div>
// //                 )}

// //                 {selectedNotice.fileUrl && (
// //                   <a
// //                     href={selectedNotice.fileUrl}
// //                     download
// //                     className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#002244] transition-colors"
// //                   >
// //                     <Download className="w-4 h-4" />
// //                     Download
// //                   </a>
// //                 )}
// //               </div>
// //             </motion.div>
// //           </div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default NoticeBoard;



// import React, { useState, useEffect, useRef } from "react";
// import { Bell, Calendar, ChevronRight, X, Download, Loader2, ExternalLink } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// // const ERP_BASE_URL = "http://localhost:8080";

// const ERP_BASE_URL = "https://sukedu.cloud";

// const isWithinDays = (dateStr, days) => {
//   const diff = (Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24);
//   return diff <= days;
// };

// const getFileType = (mimeType) => {
//   if (!mimeType) return "other";
//   if (mimeType.includes("pdf")) return "pdf";
//   if (mimeType.startsWith("image/")) return "image";
//   if (
//     mimeType.includes("word") ||
//     mimeType.includes("msword") ||
//     mimeType.includes("officedocument.wordprocessingml")
//   ) return "word";
//   if (
//     mimeType.includes("excel") ||
//     mimeType.includes("spreadsheetml") ||
//     mimeType.includes("ms-excel")
//   ) return "excel";
//   return "other";
// };

// // Office viewer sometimes fails silently on servers that block/rewrite it.
// // Google's viewer is used as a second attempt before we give up and show
// // a manual "open in new tab" fallback.
// const OFFICE_VIEWER = (url) =>
//   `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
// const GOOGLE_VIEWER = (url) =>
//   `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;

// // How long to wait for the office viewer iframe before assuming it failed.
// // Iframes don't reliably fire onError for content-level failures (auth
// // rejections, CORS, wrong content-type), so a timeout is the only practical
// // signal here.
// const VIEWER_TIMEOUT_MS = 7000;

// const NoticeBoard = () => {
//   const navigate = useNavigate();
//   const [notices, setNotices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedNotice, setSelectedNotice] = useState(null);

//   const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
//   const [pdfLoading, setPdfLoading] = useState(false);
//   const [pdfError, setPdfError] = useState(false);

//   // office/excel viewer state: 'office' -> 'google' -> 'failed'
//   const [docViewerStage, setDocViewerStage] = useState("office");
//   const [docViewerLoaded, setDocViewerLoaded] = useState(false);
//   const docViewerTimerRef = useRef(null);

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
//             date: new Date(n.createdAt).toLocaleDateString("en-GB"),
//             title: n.title,
//             description: n.description,
//             isNew: isWithinDays(n.createdAt, 7),
//             isImportant: n.noticeType === "IMPORTANT",
//             isReminder: n.noticeType === "REMINDER",
//             fileType: getFileType(firstAttachment?.fileType),
//             fileUrl: firstAttachment ? `${ERP_BASE_URL}${firstAttachment.downloadUrl}` : null,
//           };
//         });

//         if (!cancelled) {
//           setNotices(mapped);
//           setError(null);
//         }
//       } catch (err) {
//         console.error("Failed to load notices:", err);
//         if (!cancelled) setError("Unable to load notices right now.");
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     };

//     fetchNotices();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const clearDocViewerTimer = () => {
//     if (docViewerTimerRef.current) {
//       clearTimeout(docViewerTimerRef.current);
//       docViewerTimerRef.current = null;
//     }
//   };

//   const startDocViewerTimeout = (nextStage) => {
//     clearDocViewerTimer();
//     docViewerTimerRef.current = setTimeout(() => {
//       // If we never got a load signal in time, escalate to the next stage.
//       setDocViewerStage((cur) => (cur === "office" ? "google" : "failed"));
//     }, VIEWER_TIMEOUT_MS);
//   };

//   const openModal = async (notice) => {
//     setSelectedNotice(notice);
//     setIsModalOpen(true);
//     setPdfError(false);
//     setPdfBlobUrl(null);
//     setDocViewerStage("office");
//     setDocViewerLoaded(false);

//     if (notice.fileType === "pdf" && notice.fileUrl) {
//       setPdfLoading(true);
//       try {
//         const res = await fetch(notice.fileUrl);
//         if (!res.ok) throw new Error(`Failed to fetch PDF: ${res.status}`);
//         const blob = await res.blob();
//         const url = URL.createObjectURL(blob);
//         setPdfBlobUrl(url);
//       } catch (err) {
//         console.error("Failed to load PDF:", err);
//         setPdfError(true);
//       } finally {
//         setPdfLoading(false);
//       }
//     }

//     if ((notice.fileType === "word" || notice.fileType === "excel") && notice.fileUrl) {
//       startDocViewerTimeout();
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
//     clearDocViewerTimer();
//     setDocViewerStage("office");
//     setDocViewerLoaded(false);
//   };

//   // When the iframe actually fires onLoad, we still can't be 100% sure the
//   // content rendered (vs. an error page inside the viewer), so we just
//   // cancel the timeout — if the viewer shows an error page internally,
//   // the user has the "open in new tab" / download fallback right below it.
//   const handleDocViewerLoad = () => {
//     clearDocViewerTimer();
//     setDocViewerLoaded(true);
//   };

//   return (
//     <>
//       <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
//         <div className="bg-[#003366] text-white p-6 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <Bell className="text-[#FFD700] w-6 h-6" />
//             <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider font-serif">
//               Notice Board
//             </h2>
//           </div>
//           {notices.length > 0 && (
//             <button
//               onClick={() => navigate("/bulletin-board")}
//               className="text-xs font-bold text-[#FFD700] hover:underline flex items-center tracking-wider"
//             >
//               VIEW ALL <ChevronRight size={16} className="ml-1" />
//             </button>
//           )}
//         </div>

//         <div className="p-6 overflow-y-auto flex-1">
//           {loading ? (
//             <div className="flex items-center justify-center py-10 text-gray-400">
//               <Loader2 className="animate-spin mr-2" size={20} />
//               Loading notices...
//             </div>
//           ) : error ? (
//             <div className="text-center py-10 text-red-500">{error}</div>
//           ) : notices.length === 0 ? (
//             <div className="text-center py-10">No Notices</div>
//           ) : (
//             <div className="space-y-6">
//               {notices.map((notice, index) => (
//                 <motion.div
//                   key={notice.id}
//                   initial={{ x: -20, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-start space-x-4 group cursor-pointer"
//                   onClick={() => openModal(notice)}
//                 >
//                   <div className="bg-gray-50 p-3 rounded-xl text-[#003366] group-hover:bg-[#003366] group-hover:text-white transition-colors duration-200">
//                     <Calendar size={24} />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <div className="flex flex-wrap gap-2 mb-1">
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
//                       {notice.isReminder && (
//                         <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
//                           REMINDER
//                         </span>
//                       )}
//                     </div>

//                     <h3 className="font-bold text-gray-800 leading-snug">{notice.title}</h3>

//                     {notice.description && (
//                       <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-2">
//                         {notice.description}
//                       </p>
//                     )}

//                     <div className="mt-2">
//                       {notice.fileType === "image" && (
//                         <span className="text-green-500 text-xs font-medium">📷 Image</span>
//                       )}
//                       {notice.fileType === "pdf" && (
//                         <span className="text-red-500 text-xs font-medium">📄 PDF</span>
//                       )}
//                       {notice.fileType === "word" && (
//                         <span className="text-blue-500 text-xs font-medium">📝 Word</span>
//                       )}
//                       {notice.fileType === "excel" && (
//                         <span className="text-emerald-600 text-xs font-medium">📊 Excel</span>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="p-4 text-center text-sm border-t">
//           <p className="text-[#003366] font-medium animate-pulse">
//             * Check regularly for updates
//           </p>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isModalOpen && selectedNotice && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//             <motion.div
//               className="absolute inset-0 bg-black/60"
//               onClick={closeModal}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />
//             <motion.div
//               className="relative bg-white w-full max-w-3xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//             >
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
//                 <X
//                   className="cursor-pointer flex-shrink-0 mt-1 hover:text-red-300 transition-colors"
//                   onClick={closeModal}
//                 />
//               </div>

//               <div className="p-6 space-y-4 overflow-y-auto flex-1">
//                 {selectedNotice.description && (
//                   <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-[#003366]/20 pl-4">
//                     {selectedNotice.description}
//                   </p>
//                 )}

//                 {selectedNotice.fileType === "image" && selectedNotice.fileUrl && (
//                   <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
//                     <img
//                       src={selectedNotice.fileUrl}
//                       alt="notice"
//                       className="max-h-full max-w-full object-contain rounded-lg cursor-zoom-in"
//                       onClick={() => window.open(selectedNotice.fileUrl)}
//                     />
//                   </div>
//                 )}

//                 {selectedNotice.fileType === "pdf" && selectedNotice.fileUrl && (
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

//                 {(selectedNotice.fileType === "word" || selectedNotice.fileType === "excel") &&
//                   selectedNotice.fileUrl && (
//                     <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 bg-gray-50 relative">
//                       {!docViewerLoaded && docViewerStage !== "failed" && (
//                         <div className="absolute inset-0 flex items-center justify-center gap-2 text-gray-400 bg-gray-50 z-10 pointer-events-none">
//                           <Loader2 className="animate-spin" size={22} />
//                           Loading preview...
//                         </div>
//                       )}

//                       {docViewerStage === "office" && (
//                         <iframe
//                           key="office-viewer"
//                           src={OFFICE_VIEWER(selectedNotice.fileUrl)}
//                           title="Document Preview"
//                           className="w-full h-full"
//                           frameBorder="0"
//                           onLoad={handleDocViewerLoad}
//                         />
//                       )}

//                       {docViewerStage === "google" && (
//                         <iframe
//                           key="google-viewer"
//                           src={GOOGLE_VIEWER(selectedNotice.fileUrl)}
//                           title="Document Preview"
//                           className="w-full h-full"
//                           frameBorder="0"
//                           onLoad={handleDocViewerLoad}
//                         />
//                       )}

//                       {docViewerStage === "failed" && (
//                         <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-400 px-6 text-center">
//                           <p className="text-sm">
//                             Preview couldn't be loaded for this file.
//                           </p>
//                           <a
//                             href={selectedNotice.fileUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center gap-2 text-[#003366] text-sm font-medium hover:underline"
//                           >
//                             <ExternalLink className="w-4 h-4" />
//                             Open in new tab
//                           </a>
//                         </div>
//                       )}
//                     </div>
//                 )}

//                 {selectedNotice.fileType === "other" && (
//                   <p className="text-sm text-gray-400 px-6 text-center">
//                     Preview isn't available for this file type. Use the download button below.
//                   </p>
//                 )}

//                 {selectedNotice.fileUrl && (
//                   <a
//                     href={selectedNotice.fileUrl}
//                     download
//                     className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#002244] transition-colors"
//                   >
//                     <Download className="w-4 h-4" />
//                     Download
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



import React, { useState, useEffect, useRef } from "react";
import { Bell, Calendar, ChevronRight, X, Download, Loader2, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// const ERP_BASE_URL = "http://localhost:8080";

const ERP_BASE_URL = "https://sukedu.cloud";

// Max number of notices visible before the list becomes scrollable.
// Each row is roughly 132px tall (icon + title + description + gap).
const VISIBLE_NOTICE_COUNT = 3;
const NOTICE_ROW_HEIGHT_PX = 132;
const NOTICE_LIST_MAX_HEIGHT = VISIBLE_NOTICE_COUNT * NOTICE_ROW_HEIGHT_PX;

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

// Office viewer sometimes fails silently on servers that block/rewrite it.
// Google's viewer is used as a second attempt before we give up and show
// a manual "open in new tab" fallback.
const OFFICE_VIEWER = (url) =>
  `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;
const GOOGLE_VIEWER = (url) =>
  `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;

// How long to wait for the office viewer iframe before assuming it failed.
// Iframes don't reliably fire onError for content-level failures (auth
// rejections, CORS, wrong content-type), so a timeout is the only practical
// signal here.
const VIEWER_TIMEOUT_MS = 7000;

const NoticeBoard = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  // office/excel viewer state: 'office' -> 'google' -> 'failed'
  const [docViewerStage, setDocViewerStage] = useState("office");
  const [docViewerLoaded, setDocViewerLoaded] = useState(false);
  const docViewerTimerRef = useRef(null);

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

  const clearDocViewerTimer = () => {
    if (docViewerTimerRef.current) {
      clearTimeout(docViewerTimerRef.current);
      docViewerTimerRef.current = null;
    }
  };

  const startDocViewerTimeout = () => {
    clearDocViewerTimer();
    docViewerTimerRef.current = setTimeout(() => {
      // If we never got a load signal in time, escalate to the next stage.
      setDocViewerStage((cur) => (cur === "office" ? "google" : "failed"));
    }, VIEWER_TIMEOUT_MS);
  };

  const openModal = async (notice) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
    setPdfError(false);
    setPdfBlobUrl(null);
    setDocViewerStage("office");
    setDocViewerLoaded(false);

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

    if ((notice.fileType === "word" || notice.fileType === "excel") && notice.fileUrl) {
      startDocViewerTimeout();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNotice(null);
    if (pdfBlobUrl) {
      URL.revokeObjectURL(pdfBlobUrl);
    }
    setPdfBlobUrl(null);
    setPdfError(false);
    clearDocViewerTimer();
    setDocViewerStage("office");
    setDocViewerLoaded(false);
  };

  // When the iframe actually fires onLoad, we still can't be 100% sure the
  // content rendered (vs. an error page inside the viewer), so we just
  // cancel the timeout — if the viewer shows an error page internally,
  // the user has the "open in new tab" / download fallback right below it.
  const handleDocViewerLoad = () => {
    clearDocViewerTimer();
    setDocViewerLoaded(true);
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

        {/* This wrapper no longer scrolls itself — the inner list below
            handles scrolling once there are more than VISIBLE_NOTICE_COUNT
            notices, so loading/error/empty states stay simple. */}
        <div className="p-6 flex-1 overflow-hidden">
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
            <div
              className="space-y-6 overflow-y-auto pr-2"
              style={{
                maxHeight:
                  notices.length > VISIBLE_NOTICE_COUNT
                    ? `${NOTICE_LIST_MAX_HEIGHT}px`
                    : "none",
              }}
            >
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
                    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 bg-gray-50 relative">
                      {!docViewerLoaded && docViewerStage !== "failed" && (
                        <div className="absolute inset-0 flex items-center justify-center gap-2 text-gray-400 bg-gray-50 z-10 pointer-events-none">
                          <Loader2 className="animate-spin" size={22} />
                          Loading preview...
                        </div>
                      )}

                      {docViewerStage === "office" && (
                        <iframe
                          key="office-viewer"
                          src={OFFICE_VIEWER(selectedNotice.fileUrl)}
                          title="Document Preview"
                          className="w-full h-full"
                          frameBorder="0"
                          onLoad={handleDocViewerLoad}
                        />
                      )}

                      {docViewerStage === "google" && (
                        <iframe
                          key="google-viewer"
                          src={GOOGLE_VIEWER(selectedNotice.fileUrl)}
                          title="Document Preview"
                          className="w-full h-full"
                          frameBorder="0"
                          onLoad={handleDocViewerLoad}
                        />
                      )}

                      {docViewerStage === "failed" && (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-400 px-6 text-center">
                          <p className="text-sm">
                            Preview couldn't be loaded for this file.
                          </p>
                          <a
                            href={selectedNotice.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#003366] text-sm font-medium hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open in new tab
                          </a>
                        </div>
                      )}
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
