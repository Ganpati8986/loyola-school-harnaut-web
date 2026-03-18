import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Alumnus, Batch of 2018',
    content: 'Loyola School Harnaut provided me with the foundation I needed to succeed in my engineering career. The teachers are incredibly supportive.',
    image: 'https://picsum.photos/seed/rahul/100/100'
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Parent',
    content: 'I am amazed by the holistic development of my child. The school focuses not just on academics but also on character building and sports.',
    image: 'https://picsum.photos/seed/priya/100/100'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Student, Class X',
    content: 'The smart classrooms and modern labs make learning so much fun. I am proud to be a student of Loyola School.',
    image: 'https://picsum.photos/seed/amit/100/100'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Parent',
    content: 'The discipline and values instilled in the students here are commendable. The faculty is approachable and dedicated.',
    image: 'https://picsum.photos/seed/neha/100/100'
  },
  {
    id: 5,
    name: 'Vikash Verma',
    role: 'Alumnus, Batch of 2015',
    content: 'My years at Loyola were the best. The extracurricular activities helped me discover my passion for arts.',
    image: 'https://picsum.photos/seed/vikash/100/100'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 id="testimonials-heading" className="text-4xl font-bold text-[#003366] mb-4 uppercase tracking-tight">
          What People Say
        </h2>
        <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" />
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Hear from our students, parents, and alumni about their experience at Loyola School Harnaut.
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="animate-marquee-fast flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`}
              className="w-[350px] md:w-[450px] mx-4 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex-shrink-0 whitespace-normal relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-[#FFD700] opacity-30" size={48} />
              <p className="text-gray-600 mb-8 relative z-10 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#003366]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-[#003366] text-lg">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
