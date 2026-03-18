// import React from 'react';
// import SEO from '../components/SEO';
// import { motion } from 'motion/react';
// import { Calendar as CalendarIcon, Download, Clock, MapPin, Bell, Info } from 'lucide-react';

// const SchoolCalendar = () => {
//   const events = [
//     { date: 'Mar 20 - 25', title: 'Holi Vacation', type: 'Holiday', color: 'bg-red-100 text-red-600' },
//     { date: 'Apr 05', title: 'Annual Sports Day', type: 'Event', color: 'bg-green-100 text-green-600' },
//     { date: 'Apr 10', title: 'PTM for Classes I-V', type: 'Meeting', color: 'bg-blue-100 text-blue-600' },
//     { date: 'Apr 11', title: 'PTM for Classes VI-X', type: 'Meeting', color: 'bg-blue-100 text-blue-600' },
//     { date: 'Apr 15', title: 'New Academic Session Begins', type: 'Academic', color: 'bg-purple-100 text-purple-600' },
//     { date: 'May 01', title: 'Labour Day', type: 'Holiday', color: 'bg-red-100 text-red-600' },
//     { date: 'May 15 - Jun 15', title: 'Summer Vacation', type: 'Holiday', color: 'bg-red-100 text-red-600' }
//   ];

//   return (
//     <div className="py-20 bg-gray-50 min-h-screen">
//       <SEO 
//         title="Academic Calendar" 
//         description="Stay updated with the official school calendar of Loyola School Harnaut. View holidays, events, and academic schedules for 2026-27."
//         keywords="Loyola School Academic Calendar, School holidays Harnaut, Academic calendar Nalanda, School events Bihar"
//       />

//       <div className="max-w-7xl mx-auto px-4">
//         <header className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">Academic Calendar 2026-27</h1>
//           <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Plan your academic year with our comprehensive calendar featuring all important dates, holidays, and events.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Calendar List */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-3">
//                   <CalendarIcon className="text-[#FFD700]" size={28} />
//                   Upcoming Events
//                 </h2>
//                 <button className="bg-[#003366] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center gap-2">
//                   <Download size={16} />
//                   DOWNLOAD FULL CALENDAR
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 {events.map((event, i) => (
//                   <motion.div 
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group"
//                   >
//                     <div className="w-24 shrink-0 text-center">
//                       <span className="block text-lg font-bold text-[#003366]">{event.date.split(' ')[0]}</span>
//                       <span className="block text-xs font-bold text-gray-400 uppercase">{event.date.split(' ').slice(1).join(' ')}</span>
//                     </div>
//                     <div className="w-px h-12 bg-gray-200" />
//                     <div className="flex-grow">
//                       <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">{event.title}</h3>
//                       <span className={`inline-block mt-1 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${event.color}`}>
//                         {event.type}
//                       </span>
//                     </div>
//                     <div className="hidden md:flex items-center gap-4 text-gray-400">
//                       <Clock size={16} />
//                       <Bell size={16} className="group-hover:text-[#FFD700] transition-colors" />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar Info */}
//           <aside className="space-y-8">
//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
//               <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
//                 <Info size={20} className="text-[#FFD700]" />
//                 School Timing
//               </h3>
//               <div className="space-y-6">
//                 <div className="p-4 bg-blue-50 rounded-2xl">
//                   <span className="block text-xs font-bold text-blue-600 uppercase mb-1">Summer (Apr - Oct)</span>
//                   <p className="text-[#003366] font-bold">07:30 AM - 01:30 PM</p>
//                 </div>
//                 <div className="p-4 bg-orange-50 rounded-2xl">
//                   <span className="block text-xs font-bold text-orange-600 uppercase mb-1">Winter (Nov - Mar)</span>
//                   <p className="text-[#003366] font-bold">08:30 AM - 02:30 PM</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-[#003366] text-white p-8 rounded-3xl shadow-xl">
//               <h3 className="text-xl font-bold mb-6">Office Hours</h3>
//               <ul className="space-y-4 text-sm text-gray-300">
//                 <li className="flex justify-between border-b border-white/10 pb-2">
//                   <span>Monday - Friday</span>
//                   <span className="text-white font-bold">08:00 - 04:00</span>
//                 </li>
//                 <li className="flex justify-between border-b border-white/10 pb-2">
//                   <span>Saturday</span>
//                   <span className="text-white font-bold">08:00 - 01:00</span>
//                 </li>
//                 <li className="flex justify-between text-red-400">
//                   <span>Sunday</span>
//                   <span className="font-bold">Closed</span>
//                 </li>
//               </ul>
//               <p className="mt-6 text-xs italic text-gray-400">
//                 * Please note that timings may vary during exams or special events.
//               </p>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SchoolCalendar;

import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Download, Clock, Bell, Info } from 'lucide-react';

const SchoolCalendar = () => {

  const events = [
    // { date: 'Mar 20 - 25', title: 'Holi Vacation', type: 'Holiday', color: 'bg-red-100 text-red-600' },
    // { date: 'Apr 05', title: 'Annual Sports Day', type: 'Event', color: 'bg-green-100 text-green-600' },
    // { date: 'Apr 10', title: 'PTM for Classes I-V', type: 'Meeting', color: 'bg-blue-100 text-blue-600' },
    // { date: 'Apr 11', title: 'PTM for Classes VI-X', type: 'Meeting', color: 'bg-blue-100 text-blue-600' },
    // { date: 'Apr 15', title: 'New Academic Session Begins', type: 'Academic', color: 'bg-purple-100 text-purple-600' },
    // { date: 'May 01', title: 'Labour Day', type: 'Holiday', color: 'bg-red-100 text-red-600' },
    // { date: 'May 15 - Jun 15', title: 'Summer Vacation', type: 'Holiday', color: 'bg-red-100 text-red-600' }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      
      <SEO 
        title="Academic Calendar" 
        description="Stay updated with the official school calendar of Loyola School Harnaut. View holidays, events, and academic schedules for 2026-27."
        keywords="School Academic Calendar, School holidays Bihar, Academic calendar Nalanda, School events"
      />

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">
            Academic Calendar 2026-27
          </h1>

          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Plan your academic year with our comprehensive calendar featuring all important dates, holidays, and events.
          </p>
        </header>

        {/* CONDITION CHECK */}
        {events && events.length > 0 ? (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Calendar Events */}
            <div className="lg:col-span-2 space-y-6">

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">

                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-3">
                    <CalendarIcon className="text-[#FFD700]" size={28} />
                    Upcoming Events
                  </h2>

                  <button className="bg-[#003366] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center gap-2">
                    <Download size={16} />
                    DOWNLOAD FULL CALENDAR
                  </button>
                </div>

                <div className="space-y-4">

                  {events.map((event, i) => (

                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group"
                    >

                      <div className="w-24 shrink-0 text-center">
                        <span className="block text-lg font-bold text-[#003366]">
                          {event.date.split(' ')[0]}
                        </span>
                        <span className="block text-xs font-bold text-gray-400 uppercase">
                          {event.date.split(' ').slice(1).join(' ')}
                        </span>
                      </div>

                      <div className="w-px h-12 bg-gray-200" />

                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">
                          {event.title}
                        </h3>

                        <span className={`inline-block mt-1 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${event.color}`}>
                          {event.type}
                        </span>
                      </div>

                      <div className="hidden md:flex items-center gap-4 text-gray-400">
                        <Clock size={16} />
                        <Bell size={16} className="group-hover:text-[#FFD700] transition-colors" />
                      </div>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>


            {/* Sidebar */}
            <aside className="space-y-8">

              {/* School Timing */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">

                <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                  <Info size={20} className="text-[#FFD700]" />
                  School Timing
                </h3>

                <div className="space-y-6">

                  <div className="p-4 bg-blue-50 rounded-2xl">
                    <span className="block text-xs font-bold text-blue-600 uppercase mb-1">
                      Summer (Apr - Oct)
                    </span>
                    <p className="text-[#003366] font-bold">
                      07:30 AM - 01:30 PM
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-2xl">
                    <span className="block text-xs font-bold text-orange-600 uppercase mb-1">
                      Winter (Nov - Mar)
                    </span>
                    <p className="text-[#003366] font-bold">
                      08:30 AM - 02:30 PM
                    </p>
                  </div>

                </div>

              </div>


              {/* Office Hours */}
              <div className="bg-[#003366] text-white p-8 rounded-3xl shadow-xl">

                <h3 className="text-xl font-bold mb-6">
                  Office Hours
                </h3>

                <ul className="space-y-4 text-sm text-gray-300">

                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Monday - Friday</span>
                    <span className="text-white font-bold">
                      08:00 - 04:00
                    </span>
                  </li>

                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Saturday</span>
                    <span className="text-white font-bold">
                      08:00 - 01:00
                    </span>
                  </li>

                  <li className="flex justify-between text-red-400">
                    <span>Sunday</span>
                    <span className="font-bold">Closed</span>
                  </li>

                </ul>

                <p className="mt-6 text-xs italic text-gray-400">
                  * Please note that timings may vary during exams or special events.
                </p>

              </div>

            </aside>

          </div>

        ) : (

          /* EMPTY STATE */
          <div className="text-center py-32">
            <CalendarIcon size={60} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-500">
              No Academic Calendar Available
            </h2>
            <p className="text-gray-400 mt-2">
              Please check again later for upcoming events.
            </p>
          </div>

        )}

      </div>

    </div>
  );
};

export default SchoolCalendar;

