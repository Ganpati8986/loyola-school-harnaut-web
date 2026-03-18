import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ComingSoon = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-20">
      <SEO 
        title="Coming Soon" 
        description="This page is currently under development. Please check back later."
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="w-24 h-24 bg-[#002147] text-[#FFD700] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3">
          <Construction size={48} />
        </div>
        
        <h1 className="text-4xl font-serif font-bold text-[#003366] mb-4">Coming Soon</h1>
        <p className="text-gray-600 mb-10 leading-relaxed">
          We are working hard to bring you this page. Our team is currently building something amazing for the Loyola School community.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 bg-[#CC0000] text-white px-8 py-4 rounded-full font-bold hover:bg-[#002147] transition-all shadow-lg hover:shadow-xl"
        >
          <ArrowLeft size={20} />
          <span>BACK TO HOME</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
