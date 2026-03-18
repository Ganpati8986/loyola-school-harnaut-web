import React from 'react';
import SEO from '../components/SEO';
import EnquiryForm from '../components/EnquiryForm';
import { motion } from 'motion/react';
import { FileText, CheckCircle, Clock, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Admission = () => {
  const steps = [
    {
      title: 'Obtain Prospectus',
      desc: 'Prospectus and Admission forms are available at the school office during working hours.',
      icon: <FileText className="text-blue-600" size={32} />
    },
    {
      title: 'Submission',
      desc: 'Submit the completed form along with required documents (Birth Certificate, TC, etc.).',
      icon: <CheckCircle className="text-green-600" size={32} />
    },
    {
      title: 'Entrance Test',
      desc: 'Candidates will be called for an entrance test/interview based on the class applied for.',
      icon: <Clock className="text-orange-600" size={32} />
    },
    {
      title: 'Final Selection',
      desc: 'Selected candidates will be notified via phone/email for final admission formalities.',
      icon: <CheckCircle className="text-purple-600" size={32} />
    }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Apply for Admission" 
        description="Admission process and requirements for Loyola School Harnaut. Join our community of learners for the academic session 2026-27."
        keywords="Loyola School Apply for Admission, School admission Harnaut, Nalanda school admission, Admission process"
      />

      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">Apply for Admission 2026-27</h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We welcome students from all backgrounds who are eager to learn and grow in a Jesuit environment of excellence.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-[#003366] mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-[#003366]">1</div>
                Admission Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-[#003366] mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-[#003366] mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-[#003366]">2</div>
                Required Documents
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Birth Certificate ',
                  'Transfer Certificate (TC) from previous school',
                  'Recent Passport size photographs (2)',
                  'Aadhar Card of Student and Parents',
                  'Previous Class Progress Report',
                  'Caste Certificate (if applicable)',
                  'Medical Fitness Certificate',
                  'Blood Group Report'
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl text-[#003366] font-medium">
                    <CheckCircle size={18} className="text-blue-600" />
                    {doc}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-[#003366] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full" />
              <h3 className="text-2xl font-bold mb-6 relative z-10">Enquiry Now</h3>
              <EnquiryForm theme="dark" />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#003366] mb-6">Contact Office</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#FFD700] shrink-0" size={20} />
                  <p className="text-gray-600 text-sm">Loyola School, Harnaut, Nalanda, Bihar - 803110</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-[#FFD700] shrink-0" size={20} />
                  <p className="text-gray-600 text-sm">+91 12345 67890</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-[#FFD700] shrink-0" size={20} />
                  <p className="text-gray-600 text-sm">admission@loyolaharnaut.com</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Admission;
