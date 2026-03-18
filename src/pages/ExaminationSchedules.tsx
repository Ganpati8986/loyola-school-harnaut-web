// import React from 'react';
// import SEO from '../components/SEO';
// import { motion } from 'motion/react';
// import { Calendar, Download, Clock, FileText, Info, CheckCircle, AlertCircle } from 'lucide-react';

// const ExaminationSchedules = () => {
//   const schedules = [
//     // { title: 'Annual Examination 2025-26', date: 'March 15 - 30, 2026', status: 'Upcoming', color: 'bg-blue-100 text-blue-600' },
//     // { title: 'Unit Test III 2025-26', date: 'January 10 - 20, 2026', status: 'Completed', color: 'bg-gray-100 text-gray-600' },
//     // { title: 'Half Yearly Examination 2025-26', date: 'October 05 - 20, 2025', status: 'Completed', color: 'bg-gray-100 text-gray-600' },
//     // { title: 'Unit Test II 2025-26', date: 'August 12 - 22, 2025', status: 'Completed', color: 'bg-gray-100 text-gray-600' },
//     // { title: 'Unit Test I 2025-26', date: 'May 15 - 25, 2025', status: 'Completed', color: 'bg-gray-100 text-gray-600' }
//   ];

//   return (
//     <div className="py-20 bg-gray-50 min-h-screen">
//       <SEO 
//         title="Exam Calendar" 
//         description="View and download the examination schedules for Loyola School Harnaut. Stay informed about annual, half-yearly, and unit test dates."
//         keywords="Loyola School Exam Schedule, School exam dates Harnaut, Academic examination Nalanda, School assessment Bihar"
//       />

//       <div className="max-w-7xl mx-auto px-4">
//         <header className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">Exam Calendar</h1>
//           <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Stay updated with the latest examination dates and schedules for all classes and academic sessions.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-3">
//                   <Calendar className="text-[#FFD700]" size={28} />
//                   Active Schedules
//                 </h2>
//                 <button className="bg-[#003366] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center gap-2">
//                   <Download size={16} />
//                   DOWNLOAD ALL
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 {schedules.map((sch, i) => (
//                   <motion.div 
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group"
//                   >
//                     <div className="w-16 h-16 bg-[#003366] text-white rounded-2xl flex items-center justify-center text-xl font-bold group-hover:bg-[#FFD700] group-hover:text-[#003366] transition-colors">
//                       {sch.title[0]}
//                     </div>
//                     <div className="flex-grow">
//                       <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">{sch.title}</h3>
//                       <div className="flex items-center gap-4 mt-1">
//                         <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
//                           <Clock size={12} />
//                           {sch.date}
//                         </span>
//                         <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${sch.color}`}>
//                           {sch.status}
//                         </span>
//                       </div>
//                     </div>
//                     <button className="bg-[#003366] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center gap-2">
//                       <Download size={16} />
//                       PDF
//                     </button>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <aside className="space-y-8">
//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
//               <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
//                 <Info size={20} className="text-[#FFD700]" />
//                 Exam Instructions
//               </h3>
//               <ul className="space-y-4">
//                 {[
//                   'Students must carry their ID cards.',
//                   'Reporting time is 15 minutes before the exam.',
//                   'Electronic gadgets are strictly prohibited.',
//                   'Stationery should be brought by the students.',
//                   'Maintain silence and discipline in the hall.'
//                 ].map((inst, i) => (
//                   <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
//                     <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
//                     {inst}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-[#CC0000] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
//               <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />
//               <h3 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
//                 <AlertCircle size={24} />
//                 Important Notice
//               </h3>
//               <p className="text-red-100 text-sm leading-relaxed relative z-10">
//                 Any changes in the examination schedule due to unforeseen circumstances will be notified here and on the school app. Please check regularly.
//               </p>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExaminationSchedules;


import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, Download, Clock, FileText, Info, CheckCircle, AlertCircle } from 'lucide-react';

const ExaminationSchedules = () => {

  const schedules = [
  
//     // { title: 'Annual Examination 2025-26', date: 'March 15 - 30, 2026', status: 'Upcoming', color: 'bg-blue-100 text-blue-600' },
//     // { title: 'Unit Test III 2025-26', date: 'January 10 - 20, 2026', status: 'Completed', color: 'bg-gray-100 text-gray-600' },
//     // { title: 'Half Yearly Examination 2025-26', date: 'October 05 - 20, 2025', status: 'Completed', color: 'bg-gray-100 text-gray-600' },
//     // { title: 'Unit Test II 2025-26', date: 'August 12 - 22, 2025', status: 'Completed', color: 'bg-gray-100 text-gray-600' },
//     // { title: 'Unit Test I 2025-26', date: 'May 15 - 25, 2025', status: 'Completed', color: 'bg-gray-100 text-gray-600' }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">

      <SEO 
        title="Exam Calendar" 
        description="View and download the examination schedules for Loyola School Harnaut. Stay informed about annual, half-yearly, and unit test dates."
        keywords="Loyola School Exam Schedule, School exam dates Harnaut, Academic examination Nalanda, School assessment Bihar"
      />

      <div className="max-w-7xl mx-auto px-4">

        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">
            Exam Calendar
          </h1>

          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with the latest examination dates and schedules for all classes and academic sessions.
          </p>
        </header>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">

              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-3">
                  <Calendar className="text-[#FFD700]" size={28} />
                  Active Schedules
                </h2>

                <button
                  disabled={schedules.length === 0}
                  className="bg-[#003366] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Download size={16} />
                  DOWNLOAD ALL
                </button>
              </div>


              {/* EMPTY STATE */}
              {schedules.length === 0 ? (

                <div className="flex flex-col items-center justify-center text-center py-20">

                  <FileText size={60} className="text-gray-300 mb-6" />

                  <h3 className="text-xl font-bold text-[#003366] mb-2">
                    No Exam Schedule Available
                  </h3>

                  <p className="text-gray-500 max-w-md">
                    The examination schedule has not been published yet. 
                    Please check back later or contact the school office 
                    for further information.
                  </p>

                </div>

              ) : (

                <div className="space-y-4">

                  {schedules.map((sch, i) => (

                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}

                      className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group"
                    >

                      <div className="w-16 h-16 bg-[#003366] text-white rounded-2xl flex items-center justify-center text-xl font-bold group-hover:bg-[#FFD700] group-hover:text-[#003366] transition-colors">
                        {sch.title[0]}
                      </div>

                      <div className="flex-grow">

                        <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">
                          {sch.title}
                        </h3>

                        <div className="flex items-center gap-4 mt-1">

                          <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                            <Clock size={12} />
                            {sch.date}
                          </span>

                          <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${sch.color}`}>
                            {sch.status}
                          </span>

                        </div>

                      </div>

                      <button className="bg-[#003366] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center gap-2">
                        <Download size={16} />
                        PDF
                      </button>

                    </motion.div>

                  ))}

                </div>

              )}

            </div>

          </div>



          {/* Sidebar */}
          <aside className="space-y-8">

            {/* Exam Instructions */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">

              <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                <Info size={20} className="text-[#FFD700]" />
                Exam Instructions
              </h3>

              <ul className="space-y-4">

                {[
                  'Students must carry their ID cards.',
                  'Reporting time is 15 minutes before the exam.',
                  'Electronic gadgets are strictly prohibited.',
                  'Stationery should be brought by the students.',
                  'Maintain silence and discipline in the hall.'
                ].map((inst, i) => (

                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">

                    <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />

                    {inst}

                  </li>

                ))}

              </ul>

            </div>



            {/* Important Notice */}
            <div className="bg-[#CC0000] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">

              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />

              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
                <AlertCircle size={24} />
                Important Notice
              </h3>

              <p className="text-red-100 text-sm leading-relaxed relative z-10">
                Any changes in the examination schedule due to unforeseen 
                circumstances will be notified here and on the school app. 
                Please check regularly.
              </p>

            </div>

          </aside>

        </div>

      </div>

    </div>
  );
};

export default ExaminationSchedules;

