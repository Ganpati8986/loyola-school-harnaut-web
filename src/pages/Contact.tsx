import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';
import EnquiryForm from '../components/EnquiryForm';

const Contact = () => {
  return (
    <div className="py-20 bg-white">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Loyola School Harnaut. Find our location, phone numbers, and email address. Send us a message for admissions or general inquiries."
        keywords="Contact Loyola School Harnaut, School location Nalanda, Loyola School phone number, School admission inquiry Bihar"
      />
      
      <section className="max-w-7xl mx-auto px-4" aria-labelledby="contact-heading">
        <header className="text-center mb-16">
          <h1 id="contact-heading" className="text-5xl font-bold text-[#003366] mb-4">Contact Us</h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" aria-hidden="true" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the following channels.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-start space-x-6"
            >
              <div className="bg-[#003366] p-4 rounded-2xl text-[#FFD700] shadow-lg" aria-hidden="true">
                <MapPin size={32} />
              </div>
              <address className="not-italic">
                <h3 className="text-2xl font-bold text-[#003366] mb-2">Our Location</h3>
                <p className="text-gray-600 leading-relaxed">
                  NH-33, RANCHI ROAD, HARNAUT,<br />
                  NALANDA, BIHAR - 803110
                </p>
              </address>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start space-x-6"
            >
              <div className="bg-[#003366] p-4 rounded-2xl text-[#FFD700] shadow-lg" aria-hidden="true">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#003366] mb-2">Phone Numbers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Office: <a href="tel:+919508123348" className="hover:text-[#003366] transition-colors">+91 95081 23348</a><br />
                  Admission: <a href="tel:+917634003082" className="hover:text-[#003366] transition-colors">+91 76340 03082</a>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start space-x-6"
            >
              <div className="bg-[#003366] p-4 rounded-2xl text-[#FFD700] shadow-lg" aria-hidden="true">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#003366] mb-2">Email Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  General: <a href="mailto:LOYOLASCHOOLHARNAUT@GMAIL.COM" className="hover:text-[#003366] transition-colors">LOYOLASCHOOLHARNAUT@GMAIL.COM</a><br />
                  WhatsApp: <a href="https://wa.me/919508123348?text=Hello%20Loyola%20School!%20I%20have%20an%20inquiry%20regarding%20admissions." className="hover:text-[#003366] transition-colors">+91 95081 23348</a>
                </p>
              </div>
            </motion.div>

            {/* Map Integration */}
            <div className="w-full h-64 bg-gray-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center border border-gray-200" role="img" aria-label="Map location of Loyola School Harnaut">
              <iframe 
                src="https://maps.google.com/maps?q=Loyola%20School%20Harnaut&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://maps.app.goo.gl/QSbjjxQyZAeTVrYw6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#003366] font-bold hover:underline flex items-center justify-center gap-2"
              >
                <MapPin size={16} />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#003366] mb-8">Send us a Message</h3>
            <EnquiryForm theme="light" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
