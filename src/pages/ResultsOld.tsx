import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Trophy, Search, Filter, Download, CheckCircle, Star, Users, Calendar, History } from 'lucide-react';

const ResultsOld = () => {
  const results = [
    { title: 'Annual Examination 2024-25', date: 'March 2025', type: 'Annual', color: 'bg-blue-100 text-blue-600' },
    { title: 'Half Yearly Examination 2024-25', date: 'October 2024', type: 'Term', color: 'bg-green-100 text-green-600' },
    { title: 'Annual Examination 2023-24', date: 'March 2024', type: 'Annual', color: 'bg-blue-100 text-blue-600' },
    { title: 'Half Yearly Examination 2023-24', date: 'October 2023', type: 'Term', color: 'bg-green-100 text-green-600' },
    { title: 'Annual Examination 2022-23', date: 'March 2023', type: 'Annual', color: 'bg-blue-100 text-blue-600' }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Old Academic Results" 
        description="Check the old examination results of Loyola School Harnaut. Access annual and half-yearly results for previous academic sessions."
        keywords="Loyola School Old Results, School exam results Harnaut, Student performance Nalanda, School results Bihar"
      />

      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">Old Results Archive</h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access and download examination results and performance reports from previous academic sessions.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-3">
                  <History className="text-[#FFD700]" size={28} />
                  Result Archive
                </h2>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search session..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-10 py-2 text-sm focus:outline-none focus:border-[#003366]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {results.map((res, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all group"
                  >
                    <div className="w-16 h-16 bg-[#003366] text-white rounded-2xl flex items-center justify-center text-xl font-bold group-hover:bg-[#FFD700] group-hover:text-[#003366] transition-colors">
                      {res.date.split(' ')[1]}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-[#003366] group-hover:text-[#CC0000] transition-colors">{res.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                          <Calendar size={12} />
                          {res.date}
                        </span>
                        <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${res.color}`}>
                          {res.type}
                        </span>
                      </div>
                    </div>
                    <button className="bg-[#003366] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center gap-2">
                      <Download size={16} />
                      DOWNLOAD
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-[#003366] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />
              <h3 className="text-2xl font-bold mb-6 relative z-10">Check Old Result</h3>
              <p className="text-gray-300 mb-8 text-sm relative z-10">
                Enter student ID and select session to view performance report.
              </p>
              <form className="space-y-4 relative z-10">
                <input type="text" placeholder="Student ID" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFD700]" />
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFD700]">
                  <option className="text-black">Select Session</option>
                  <option className="text-black">2024-25</option>
                  <option className="text-black">2023-24</option>
                  <option className="text-black">2022-23</option>
                  <option className="text-black">2021-22</option>
                </select>
                <button className="w-full bg-[#FFD700] text-[#003366] font-bold py-4 rounded-xl hover:bg-white transition-colors">
                  VIEW RESULT
                </button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                <Star size={20} className="text-[#FFD700]" />
                Academic Legacy
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Loyola School Harnaut has a rich history of academic excellence. Our students have consistently performed well in board examinations and competitive tests.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <span className="block text-xs font-bold text-blue-600 uppercase mb-1">Board Result 2024</span>
                  <p className="text-[#003366] font-bold">100% Pass Rate</p>
                </div>
                <div className="p-4 bg-green-50 rounded-2xl">
                  <span className="block text-xs font-bold text-green-600 uppercase mb-1">Board Result 2023</span>
                  <p className="text-[#003366] font-bold">98.5% Pass Rate</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ResultsOld;
