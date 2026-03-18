import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Book, Download, Search, Filter, ChevronRight, FileText, Info } from 'lucide-react';

const BookList = () => {
  const classes = [
    { name: 'LKG', section: 'Primary', count: 5 },
    { name: 'UKG', section: 'Primary', count: 6 },
    { name: 'Class I', section: 'Primary', count: 8 },
    { name: 'Class II', section: 'Primary', count: 8 },
    { name: 'Class III', section: 'Primary', count: 9 },
    { name: 'Class IV', section: 'Primary', count: 9 },
    { name: 'Class V', section: 'Primary', count: 9 },
    { name: 'Class VI', section: 'Middle', count: 11 },
    { name: 'Class VII', section: 'Middle', count: 11 },
    { name: 'Class VIII', section: 'Middle', count: 11 },
    { name: 'Class IX', section: 'Secondary', count: 13 },
    { name: 'Class X', section: 'Secondary', count: 13 }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Book List" 
        description="Download the class-wise book list for Loyola School Harnaut. Access the list of prescribed textbooks and notebooks for 2026-27."
        keywords="Loyola School Book List, School textbooks Harnaut, Prescribed books Nalanda, School academic resources Bihar"
      />

      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">Prescribed Book List</h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access and download the class-wise list of prescribed textbooks and notebooks for the academic session 2026-27.
          </p>
        </header>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for a class..." 
              className="w-full bg-white border border-gray-200 rounded-2xl px-12 py-4 focus:outline-none focus:border-[#003366] transition-all shadow-sm"
            />
          </div>
          <button className="bg-white border border-gray-200 rounded-2xl px-8 py-4 flex items-center gap-2 font-bold text-[#003366] hover:bg-gray-50 transition-all shadow-sm">
            <Filter size={20} />
            FILTER BY SECTION
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-[#003366] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg group-hover:bg-[#FFD700] group-hover:text-[#003366] transition-colors">
                  {cls.name.split(' ')[1] || cls.name}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{cls.section} Section</span>
              </div>
              
              <h3 className="text-xl font-bold text-[#003366] mb-4">{cls.name} Book List</h3>
              
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
                <Book size={16} />
                <span>{cls.count} Prescribed Books</span>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex-grow bg-[#003366] text-white font-bold py-3 rounded-xl hover:bg-[#FFD700] hover:text-[#003366] transition-all flex items-center justify-center gap-2 text-sm">
                  <Download size={16} />
                  DOWNLOAD PDF
                </button>
                <button className="w-12 h-12 bg-gray-50 text-[#003366] rounded-xl flex items-center justify-center hover:bg-[#003366] hover:text-white transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-3xl shadow-xl border border-gray-100 text-center">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText size={40} />
          </div>
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Important Information</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Parents are free to purchase books and stationery from any vendor of their choice. The school does not mandate any specific vendor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#003366] text-white px-10 py-4 rounded-full font-bold hover:bg-[#FFD700] hover:text-[#003366] transition-all shadow-lg">
              CONTACT OFFICE
            </button>
            <button className="border-2 border-[#003366]/10 text-[#003366] px-10 py-4 rounded-full font-bold hover:bg-[#003366] hover:text-white transition-all">
              UNIFORM DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
