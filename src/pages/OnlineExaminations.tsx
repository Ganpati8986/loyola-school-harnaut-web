import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Monitor, BookOpen, Video, FileText, CheckCircle, ArrowRight, Play, Star, ShieldCheck, Clock, AlertCircle } from 'lucide-react';

const OnlineExaminations = () => {
  const steps = [
    { title: 'Login to Portal', desc: 'Use your student ID and password to access the online examination portal.', icon: <Monitor className="text-blue-600" size={32} /> },
    { title: 'Select Exam', desc: 'Choose the active exam from the dashboard as per the schedule.', icon: <BookOpen className="text-green-600" size={32} /> },
    { title: 'Read Instructions', desc: 'Carefully read all the instructions before starting the examination.', icon: <ShieldCheck className="text-orange-600" size={32} /> },
    { title: 'Submit Exam', desc: 'Ensure all questions are answered and submit before the time ends.', icon: <CheckCircle className="text-purple-600" size={32} /> }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Online Examinations" 
        description="Access the online examination portal of Loyola School Harnaut. Take exams, quizzes, and assessments from the comfort of your home."
        keywords="Loyola School Online Exam, Virtual examination Harnaut, Digital assessment Nalanda, School online test Bihar"
      />

      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">Online Examinations</h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our secure and interactive online examination platform designed to provide a seamless assessment experience for our students.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all group text-center"
            >
              <div className="mb-6 mx-auto group-hover:scale-110 transition-transform">{step.icon}</div>
              <h2 className="text-xl font-bold text-[#003366] mb-4">{step.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-[#003366] text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Monitor className="text-[#FFD700]" size={32} />
                  Access Exam Portal
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  The online examination portal is active only during the scheduled exam timings. Please ensure you have a stable internet connection and a compatible device.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#FFD700] text-[#003366] px-10 py-4 rounded-full font-bold hover:bg-white transition-all flex items-center gap-2">
                    LOGIN TO PORTAL
                    <ArrowRight size={20} />
                  </button>
                  <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                    TECHNICAL SUPPORT
                  </button>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-[#003366] mb-8 flex items-center gap-3">
                <AlertCircle className="text-[#CC0000]" size={28} />
                Technical Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Device', desc: 'Laptop, Desktop or Tablet with latest browser.' },
                  { title: 'Internet', desc: 'Minimum 2 Mbps stable internet connection.' },
                  { title: 'Browser', desc: 'Latest version of Google Chrome or Firefox.' },
                  { title: 'Power', desc: 'Ensure device is fully charged or connected to power.' }
                ].map((req, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#003366] font-bold shadow-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#003366]">{req.title}</h4>
                      <p className="text-xs text-gray-500 font-medium">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                <Clock size={20} className="text-[#FFD700]" />
                Upcoming Online Exams
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Weekly Quiz - Class X', date: 'Mar 22, 2026', time: '10:00 AM' },
                  { title: 'Unit Test - Class IX', date: 'Mar 25, 2026', time: '11:30 AM' },
                  { title: 'Practice Test - Class VIII', date: 'Mar 28, 2026', time: '02:00 PM' }
                ].map((exam, i) => (
                  <div key={i} className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <h4 className="text-sm font-bold text-[#003366] mb-1">{exam.title}</h4>
                    <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                      <span>{exam.date}</span>
                      <span>{exam.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#003366] text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-6">Need Help?</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                If you encounter any issues during the examination, please contact our technical support team immediately.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-[#FFD700]">
                    <Monitor size={16} />
                  </div>
                  <span>loyolaschoolharnaut@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-[#FFD700]">
                    <Video size={16} />
                  </div>
                  <span>+91 7634003082</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default OnlineExaminations;
