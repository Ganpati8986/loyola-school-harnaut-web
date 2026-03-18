import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, ChevronDown, ChevronLeft, ChevronRight, Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import EnquiryModal from './EnquiryModal';
import left_logo from '../assets/cbse_logo_transparent.png'
import right_logo from '../assets/loyala_logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    {
      name: 'ABOUT US',
      href: '/about-us',
      dropdown: [
        { name: 'ABOUT US', href: '/about-us' },
        { name: 'CO-CURRICULAR', href: '/activities' },
        { name: 'ACADEMIC STAFF', href: '/teachers' },
        { name: 'FEE STRUCTURE', href: '/coming-soon' },
        { name: 'OUR HISTORY', href: '/school-history' },
        { name: 'ACHIEVEMENTS', href: '/achievements' },
        // { name: 'OVERVIEW', href: '/our-school' },
        { name: 'IMAGES', href: '/gallery?type=images' }
      ]
    },
    { name: 'LEGACY', href: '/legacy' },
    {
      name: 'ACADEMIC',
      href: '/coming-soon',
      dropdown: [
        { name: 'APPLY FOR ADMISSION', href: '/admission' },
        { name: 'ANNOUNCEMENTS', href: '/bulletin-board' },
        { name: 'EXAM CALENDAR', href: '/examination-schedules' },
        { name: 'ACADEMIC CALENDAR', href: '/school-calendar' },
        // { name: 'E-LEARNING PORTAL', href: '/online-learning' },
        { name: 'ACADEMIC CURRICULUM', href: '/class-syllabus' },
        { name: 'ACADEMIC RESULTS', href: '/results' }
      ]
    },
    { name: 'NOTICE BOARD', href: '/bulletin-board' },
    //  { name: 'AMENITIES', href: '/#amenities' },
    {
      name: 'GALLERY',
      href: '/gallery',
      dropdown: [
        { name: 'IMAGES', href: '/gallery?type=images' },
        { name: 'VIDEOS', href: '/gallery?type=videos' }
      ]
    },
    { name: 'STAFF', href: '/teachers' },
       { name: 'MAGAZINE', href: '/e-magazine' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="w-full font-sans" role="banner">
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />

      {/* Top Bar */}
      <div className="bg-[#002147] text-white h-10 flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-4 flex justify-between items-center h-full">
          <div className="flex items-center h-full divide-x divide-white/20">
            <a href="https://www.facebook.com/loyolaschoolharnautnalanda/" target="_blank" rel="noopener noreferrer" className="px-3 hover:text-[#FFD700] transition-colors" title="Facebook"><Facebook size={16} /></a>
            <a href="https://twitter.com/loyolaharnaut" target="_blank" rel="noopener noreferrer" className="px-3 hover:text-[#FFD700] transition-colors" title="X (Twitter)">
              <svg viewBox="0 0 24 24" size={16} className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/loyola_school_harnaut/" target="_blank" rel="noopener noreferrer" className="px-3 hover:text-[#FFD700] transition-colors" title="Instagram"><Instagram size={16} /></a>
            <a href="https://youtube.com/@loyolaschoolharnaut?si=K5wMox4miHekfjxD" target="_blank" rel="noopener noreferrer" className="px-3 hover:text-[#FFD700] transition-colors" title="Youtube"><Youtube size={16} /></a>
            <a
              href="https://wa.me/919508123348?text=Hello%20Loyola%20School!%20I%20have%20an%20inquiry%20regarding%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 hover:text-[#25D366] transition-colors"
              title="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
          </div>
          <div className="flex items-center h-full">
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-[#CC0000] h-full px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-[#CC0000] transition-all duration-300 flex items-center space-x-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>ENQUIRY</span>
            </button>
            <a
              href="mailto:Loyolaschoolharnaut@gmail.com"
              className="bg-[#003366] h-full px-4 flex items-center text-xs font-semibold border-l border-white/10 hidden sm:flex hover:text-[#FFD700] transition-colors"
            >
              Mail: Loyolaschoolharnaut@gmail.com
            </a> 
            <div className="bg-[#003366] h-full px-4 flex items-center text-xs font-semibold border-l border-white/10 hidden sm:flex">
              Call Us : +91 95081 23348 / +91 76340 03082
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}

<div className="bg-white py-3 md:py-6">
  <div className="max-w-[1500px] mx-auto px-3">

    <div className="flex items-center justify-between gap-2">

      {/* LEFT LOGO */}
      <img
        src={right_logo}
        alt="Board Logo"
        className="w-14 sm:w-16 md:w-20 lg:w-32 object-contain"
      />

      {/* CENTER TEXT */}
      <div className="flex flex-col items-center text-center px-1 flex-1">

        <h1 className="text-[18px] sm:text-2xl md:text-5xl lg:text-6xl font-serif font-bold text-[#003366] leading-tight">
          LOYOLA SCHOOL HARNAUT
        </h1>

        {/* AFFILIATION TEXT */}
        <p className="text-[#CC0000] text-[8px] sm:text-[10px] md:text-sm font-bold uppercase mt-1 leading-tight md:whitespace-nowrap">
          AFFILIATED TO THE COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATIONS, NEW DELHI
          <span className="mx-2 hidden md:inline">•</span>
          <span className="block md:inline">SCHOOL CODE: 65283</span>
          <span className="mx-2 hidden md:inline">•</span>
          <span className="block md:inline">AFFILIATION NO: 330310</span>
        </p>

        <div className="h-[2px] bg-[#FFD700] mt-1 w-12 md:w-20 rounded-full" />

      </div>

      {/* RIGHT LOGO */}
      <img
        src={left_logo}
        alt="School Logo"
        className="w-14 sm:w-16 md:w-20 lg:w-32 object-contain"
      />

    </div>

  </div>
</div>

      {/* Navigation Bar */}
      <nav className="bg-[#002147] text-white sticky top-0 z-50 shadow-lg" aria-label="Main navigation">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex justify-center items-center h-14">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center h-full">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative h-full group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="h-full"
                  >
                    <Link
                      to={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('/#')) {
                          const id = link.href.split('#')[1];
                          const element = document.getElementById(id);
                          if (element) {
                            e.preventDefault();
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      className={cn(
                        "px-4 h-full flex items-center text-[13px] font-bold tracking-wider transition-all duration-300 relative overflow-hidden",
                        activeDropdown === link.name ? "bg-[#003366] text-[#FFD700]" : "hover:bg-[#003366]/80"
                      )}
                    >
                      <span className="relative z-10 flex items-center">
                        {link.name}
                        {link.dropdown && <ChevronDown size={14} className={cn("ml-1 transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />}
                      </span>
                      {/* Animated Underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-[#FFD700] z-20"
                        initial={{ width: 0 }}
                        animate={{ width: activeDropdown === link.name ? "100%" : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className={cn(
                      "absolute top-full left-0 w-64 bg-[#002147] border-t-2 border-[#CC0000] shadow-2xl transition-all duration-200 origin-top z-[60]",
                      activeDropdown === link.name ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
                    )}>
                      <ul className="py-0">
                        {link.dropdown.map((item) => (
                          <li key={item.name} className="border-b border-white/10 last:border-0 overflow-hidden">
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <Link
                                to={item.href}
                                className="block px-5 py-3 text-[12px] font-bold hover:bg-white hover:text-[#002147] transition-all uppercase"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>



            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-[#002147] border-t border-white/10 overflow-hidden"
            >
              <div className="py-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-white/5 last:border-0">
                    <div className="flex items-center justify-between px-6 py-3">
                      <Link
                        to={link.href}
                        className="text-sm font-bold tracking-wider uppercase flex-grow"
                        onClick={(e) => {
                          if (!link.dropdown) {
                            setIsMenuOpen(false);
                          }
                          if (link.href.startsWith('/#')) {
                            const id = link.href.split('#')[1];
                            const element = document.getElementById(id);
                            if (element) {
                              e.preventDefault();
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActiveDropdown(activeDropdown === link.name ? null : link.name);
                          }}
                          className="p-2 -mr-2 text-[#FFD700]"
                        >
                          <ChevronDown
                            size={20}
                            className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-[#001a33] overflow-hidden"
                        >
                          <div className="py-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block px-10 py-3 text-xs font-bold text-gray-300 hover:text-[#FFD700] hover:bg-white/5 uppercase transition-colors"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Latest News Ticker */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto flex h-10 items-center overflow-hidden">
          <div className="bg-[#002147] text-white h-full px-6 flex items-center font-bold text-sm whitespace-nowrap z-10">
            Latest News
          </div>
          <div className="bg-[#CC0000] text-white h-full flex-grow flex items-center px-6 overflow-hidden relative">
            <div className="animate-marquee whitespace-nowrap font-bold text-sm">
              Admissions Open for Session 2026-27 • Admissions Open for Session 2026-27 • Admissions Open for Session 2026-27 • Admissions Open for Session 2026-27
            </div>
            <div className="absolute right-0 top-0 h-full flex items-center bg-[#CC0000] px-2 space-x-1 z-10 shadow-[-10px_0_10px_rgba(204,0,0,1)]">
              <button className="p-1 hover:bg-white/20 rounded transition-colors"><ChevronLeft size={16} /></button>
              <button className="p-1 hover:bg-white/20 rounded transition-colors"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
