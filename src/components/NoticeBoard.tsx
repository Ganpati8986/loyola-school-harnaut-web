import React, { useState } from "react";
import { Bell, Calendar, ChevronRight, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import sofOlympiadNotice from "../assets/sof.jpg";

// Example PDF import — replace with your actual PDF assets
import classXPTMNotice from '../assets/Notice for class X PTM.pdf';
import soloSingingCompetitionNotice from '../assets/new_notice.pdf';
const notices = [
  // {
  //   id: 10,
  //   date: '22-07-2026',
  //   title:
  //     'Parent-Teacher Meeting (PTM) for Class X is scheduled on 25th July, 2026 from 8:00 a.m. to 10:00 a.m. Students must attend in proper school uniform and bring their school diary along with their parents. Attendance of all parents is mandatory.',
  //   isNew: true,
  //   isImportant: true,
  //   isReminder: false,
  //   fileType: 'image',
  //   fileUrl: classXPTMNotice
  // },
      {
  id: 12,
  date: '23-07-2026',
  title:
    '🎤 Inter House Solo Singing Competition for Classes III–IX will be held on 25th July, 2026. Two participants from each house must be nominated. Submit participant names by 24th July, 2026.',
  isNew: true,
  isImportant: true,
  isReminder: true,
  fileType: 'pdf',
  fileUrl: soloSingingCompetitionNotice
},
  {
    id: 11,
    date: '25-07-2026',
    title:
      '🔔 REMINDER: Parent-Teacher Meeting (PTM) for Class X will be held on 25th July, 2026 from 8:00 a.m. to 10:00 a.m. Parents are requested to attend the meeting with their child in school uniform and carry the school diary.',
    isNew: true,
    isImportant: true,
    isReminder: true,
    fileType: 'pdf',
    fileUrl: classXPTMNotice
  },
  {
    id: 7,
    date: '15-07-2026',
    title:
      'SOF Olympiad Registration is now OPEN for all eligible students. Loyola School (School Code: BR5168). Students must register online using the school access code before the registration closes.',
    isNew: true,
    isImportant: true,
    isReminder: false,
    fileType: 'image',
    fileUrl: sofOlympiadNotice
  },
  {
    id: 8,
    date: 'Registration Deadline',
    title:
      '⚠️ VERY IMPORTANT: SOF Olympiad registrations close 30 days before the selected examination date. Students are advised to complete their registration and payment well in advance to avoid missing the deadline.',
    isNew: true,
    isImportant: true,
    isReminder: true,
    fileType: 'image',
    fileUrl: sofOlympiadNotice
  },
{
  id: 9,
  date: 'SOF Registration Assistance',
  title:
    'Need help with SOF Olympiad registration? Kindly contact the SOF Registration Team at 8800012977 or email registrations@sofworld.org. For complete information, visit https://sofworld.org or follow SOF on Facebook at http://www.facebook.com/sofworld.',
  isNew: true,
  isImportant: true,
  isReminder: true,
  fileType: 'image',
  fileUrl: sofOlympiadNotice
}
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
