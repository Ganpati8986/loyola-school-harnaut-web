import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import ft_logo from '../assets/loyala_logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#001a33] text-white pt-20 pb-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* School Info */}
          <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center space-x-3">

              {/* 
<div className="w-16 h-16 rounded-full border-2 border-[#FFD700] overflow-hidden flex items-center justify-center">
  <img
    src={ft_logo}
    alt="Loyola School Logo"
    className="w-20 h-20 -m-8"
  />
</div> */}


              <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={ft_logo}
                  alt="Loyola School Logo"
                  className="w-full h-full object-contain"
                />
              </div>





              <div>
                <h3 className="text-xl font-bold">LOYOLA SCHOOL</h3>
                <p className="text-[#FFD700] text-xs font-bold tracking-widest">
                  HARNAUT, NALANDA
                </p>
              </div>

            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to the greater glory of God and the service of humanity. We nurture young minds to become leaders of tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="footer-quick-links" className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 id="footer-quick-links" className="text-lg font-bold mb-8 border-b border-[#FFD700] pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'ABOUT US', href: '/about-us' },
                { name: 'Co-Curricular', href: '/activities' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#FFD700] transition-colors flex items-center space-x-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div aria-labelledby="footer-contact-info" className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 id="footer-contact-info" className="text-lg font-bold mb-8 border-b border-[#FFD700] pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-[#FFD700] shrink-0" size={20} aria-hidden="true" />
                             <address className="text-gray-400 text-sm not-italic">
                  NH-33, Ranchi Road, Harnaut,<br />
                  Nalanda, Bihar - 803110
                </address>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-[#FFD700] shrink-0" size={20} aria-hidden="true" />
                <div className="flex flex-col">
                  <a href="tel:+919508123348" className="text-gray-400 text-sm hover:text-[#FFD700] transition-colors">+91 95081 23348</a>
                  <a href="tel:+917634003082" className="text-gray-400 text-sm hover:text-[#FFD700] transition-colors">+91 76340 03082</a>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-[#FFD700] shrink-0" size={20} aria-hidden="true" />
                <a href="mailto:LOYOLASCHOOLHARNAUT@GMAIL.COM" className="text-gray-400 text-sm hover:text-[#FFD700] transition-colors">Loyolaschoolharnaut@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div aria-labelledby="footer-social" className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 id="footer-social" className="text-lg font-bold mb-8 border-b border-[#FFD700] pb-2 inline-block">Connect With Us</h4>
            <p className="text-gray-400 text-sm mb-6">
              Follow us on our social media platforms to stay updated with the latest news and events.
            </p>
            <nav className="flex flex-wrap gap-4 justify-center md:justify-start" aria-label="Social media links">
              {[
                {
                  Icon: Facebook,
                  label: 'Facebook',
                  href: 'https://www.facebook.com/loyolaschoolharnautnalanda/'
                },
                {
                  Icon: () => (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  label: 'X (Twitter)',
                  href: 'https://twitter.com/loyolaharnaut'
                },
                {
                  Icon: Instagram,
                  label: 'Instagram',
                  href: 'https://www.instagram.com/loyola_school_harnaut/'
                },
                {
                  Icon: Youtube,
                  label: 'Youtube',
                  href: 'https://youtube.com/@loyolaschoolharnaut?si=K5wMox4miHekfjxD'
                },
                {
                  Icon: MessageCircle,
                  label: 'WhatsApp',
                  href: 'https://wa.me/919508123348?text=Hello%20Loyola%20School!%20I%20have%20an%20inquiry%20regarding%20admissions.'
                }
              ].map(({ Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:text-[#003366] transition-all"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Loyola School, Harnaut. All Rights Reserved. | Designed by <a href="https://krinexiya.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors">Krinexiya</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
