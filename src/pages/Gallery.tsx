import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { cn } from '../lib/utils';
import { Play, Image as ImageIcon, X } from 'lucide-react';
import ProtectedImage from '../components/ProtectedImage';
import g from '../assets/img/g23.jpg';
import g1 from '../assets/img6.jpeg';
import g2 from '../assets/img5.jpeg';
import g3 from '../assets/img3.jpeg';
import g4 from '../assets/img2.jpeg';
import g5 from '../assets/img/g25.jpg';
import g6 from '../assets/img1.jpeg';
import g7 from '../assets/img/g26.jpg';
import g8 from '../assets/play1.jpeg';
import lab from '../assets/lab_v.mp4';
import campus from '../assets/campus.mp4';


import g10 from '../assets/img/g10.jpg';
import g11 from '../assets/img/g11.jpg';
import g12 from '../assets/img/g13.jpg';
import g13 from '../assets/img/g12.jpg';
import g14 from '../assets/img/g14.jpg';
import g15 from '../assets/img/g16.jpg';
import g16 from '../assets/img/g20.jpg';
import g17 from '../assets/img/g17.jpg';
import g18 from '../assets/img/g18.jpg';
import g19 from '../assets/img/g19.jpg';



import g27 from '../assets/img/g28.jpg';
import g28 from '../assets/img/g29.jpg';
import g29 from '../assets/img/g29.jpg';
import g30 from '../assets/img/g30.jpg';
import g31 from '../assets/img/g31.jpg';
import g32 from '../assets/img/g32.jpg';
import g33 from '../assets/img/g33.jpg';
import g34 from '../assets/img/g34.jpg';
import g35 from '../assets/img/g35.jpg';
import g36 from '../assets/img/g36.jpg';


import s1 from '../assets/img/s1.jpg';
import s2 from '../assets/img/s2.jpg';
import s3 from '../assets/img/s3.jpg';
import s4 from '../assets/img/s4.jpg';
import s5 from '../assets/img/s5.jpg';
import s6 from '../assets/img/s6.jpg';
import s7 from '../assets/img/s7.jpg';
import s8 from '../assets/img/s8.jpg';
import s9 from '../assets/img/s9.jpg';
import s11 from '../assets/img/s11.jpg';
import s12 from '../assets/img/s12.jpg';
import s13 from '../assets/img/s13.jpg';
import s14 from '../assets/img/s14.jpg';
import s15 from '../assets/img/s15.jpg';
import s16 from '../assets/img/s16.jpg';



import g37 from '../assets/img/g37.jpg';
import g38 from '../assets/img/g38.jpg';
import g39 from '../assets/img/g39.jpg';
import g40 from '../assets/img/g40.jpg';
import g41 from '../assets/img/g41.jpg';
import g42 from '../assets/img/g42.jpg';
import g43 from '../assets/img/g43.jpg';
import g44 from '../assets/img/g44.jpg';
import g45 from '../assets/img/g45.jpg';
import g46 from '../assets/img/g46.jpg';
import g47 from '../assets/img/g47.jpg';
import g48 from '../assets/img/g48.jpg';
import g49 from '../assets/img/g49.jpg';
import g50 from '../assets/img/g50.jpg';
import g51 from '../assets/img/g51.jpg';
import g52 from '../assets/img/g52.jpg';
import g53 from '../assets/img/g53.jpg';
import g54 from '../assets/img/g54.jpg';
import g55 from '../assets/img/g55.jpg';
import g56 from '../assets/img/g56.jpg';
import g57 from '../assets/img/g57.jpg';
import g58 from '../assets/img/g58.jpg';
import g59 from '../assets/img/g59.jpg';
import g60 from '../assets/img/g60.jpg';
import g61 from '../assets/img/g61.jpg';
import g62 from '../assets/img/g62.jpg';


const categories = ['ALL', 'CAMPUS', 'CLASSROOM', 'LAB', 'GAMES', 'STAFF', 'EVENTS'];

const galleryItems = [
  // ===================== CAMPUS =====================
  { type: 'image', category: 'CAMPUS', src: g, title: 'Main Building Entrance' },

  { type: 'image', category: 'CAMPUS', src: g27, title: 'Playground' },
  { type: 'image', category: 'CAMPUS', src: g28, title: 'Playground' },
  { type: 'image', category: 'CAMPUS', src: g29, title: 'Playground' },
  { type: 'image', category: 'CAMPUS', src: g30, title: 'Playground' },
  { type: 'image', category: 'CAMPUS', src: g31, title: 'Playground' },
  { type: 'image', category: 'CAMPUS', src: g32, title: 'Playground' },
  { type: 'image', category: 'CAMPUS', src: g33, title: 'Playground' },
  { type: 'image', category: 'CAMPUS', src: g34, title: 'Playground' },
  { type: 'image', category: 'CAMPUS', src: g35, title: 'Playground' },
  { type: 'image', category: 'CAMPUS', src: g36, title: 'Playground' },

  {
    type: 'video',
    category: 'CAMPUS',
    src: g1,
    videoUrl: lab,
    title: 'Class'
  },

  { type: 'image', category: 'CAMPUS', src: g5, title: 'Playground' },
  { type: 'image', category: 'CAMPUS', src: g7, title: 'Playground' },

  // ===================== CLASSROOM =====================
  { type: 'image', category: 'CLASSROOM', src: g1, title: 'Interactive Learning Session' },

  // ===================== LAB =====================
  { type: 'image', category: 'LAB', src: g2, title: 'Physics Laboratory' },

  // ===================== GAMES =====================
  { type: 'image', category: 'GAMES', src: g3, title: 'Annual Sports Day' },
  { type: 'image', category: 'GAMES', src: g6, title: 'Art & Craft Class' },


  // ===================== GAMES =====================
{ type: 'image', category: 'GAMES', src: g37, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g38, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g39, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g40, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g41, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g42, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g43, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g44, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g45, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g46, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g47, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g48, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g49, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g50, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g51, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g52, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g53, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g54, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g55, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g56, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g57, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g58, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g59, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g60, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g61, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g62, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g10, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g11, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g12, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g13, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g14, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g15, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g16, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g17, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g18, title: 'Sports Activities' },
{ type: 'image', category: 'GAMES', src: g19, title: 'Sports Activities' },

  {
    type: 'video',
    category: 'GAMES',
    src: g,
    videoUrl: campus,
    title: 'Campus'
  },

  // ===================== STAFF =====================


{ type: 'image', category: 'STAFF', src: s1, title: 'Principal' },
{ type: 'image', category: 'STAFF', src: s2, title: 'Vice-Principal' },
{ type: 'image', category: 'STAFF', src: s3, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s4, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s5, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s6, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s7, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s8, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s9, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s11, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s12, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s13, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s14, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s15, title: 'Teaching Staff' },
{ type: 'image', category: 'STAFF', src: s16, title: 'Teaching Staff' },

  // ===================== EVENTS =====================
  { type: 'image', category: 'EVENTS', src: g4, title: 'Cultural Program' },

  // { type: 'image', category: 'EVENTS', src: g10, title: 'Events' },
  // { type: 'image', category: 'EVENTS', src: g11, title: 'Events' },
  // { type: 'image', category: 'EVENTS', src: g12, title: 'Events' },
  // { type: 'image', category: 'EVENTS', src: g13, title: 'Events' },
  // { type: 'image', category: 'EVENTS', src: g14, title: 'Events' },
  // { type: 'image', category: 'EVENTS', src: g15, title: 'Events' },
  // { type: 'image', category: 'EVENTS', src: g16, title: 'Events' },
  // { type: 'image', category: 'EVENTS', src: g17, title: 'Events' },
  // { type: 'image', category: 'EVENTS', src: g18, title: 'Events' },
  // { type: 'image', category: 'EVENTS', src: g19, title: 'Events' },

  { type: 'image', category: 'GAMES', src: g8, title: 'Playground' },

  // {
  //   type: 'video',
  //   category: 'CLASSROOM',
  //   src: lab,
  //   videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  //   title: 'Science Project Presentation'
  // },
];

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type') || 'all'; // 'images', 'videos', or 'all'
  const [activeCategory, setActiveCategory] = React.useState('ALL');
  const [selectedItem, setSelectedItem] = React.useState<any>(null);

  const filteredItems = galleryItems.filter(item => {
    const matchesType = typeFilter === 'all' ||
      (typeFilter === 'images' && item.type === 'image') ||
      (typeFilter === 'videos' && item.type === 'video');
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    return matchesType && matchesCategory;
  });

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <SEO
        title="Images"
        description="Explore the vibrant moments and memories of Loyola School Harnaut through our photo and video gallery. See our students in action during various events and activities."
        keywords="Loyola School Harnaut Gallery, School events Nalanda, School photos Bihar, Loyola School activities, School videos"
      />

      <section className="max-w-7xl mx-auto px-4" aria-labelledby="gallery-heading">
        <header className="text-center mb-12">
          <h1 id="gallery-heading" className="text-5xl font-bold text-[#003366] mb-4 uppercase tracking-tight">
            {typeFilter === 'images' ? 'Images' : typeFilter === 'videos' ? 'Video Gallery' : 'School Gallery'}
          </h1>
          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto rounded-full mb-6" aria-hidden="true" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Capturing the vibrant moments, academic excellence, and sporting spirit of Loyola School Harnaut.
          </p>
        </header>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2",
                activeCategory === cat
                  ? "bg-[#003366] text-white border-[#003366] shadow-lg scale-105"
                  : "bg-white text-[#003366] border-gray-200 hover:border-[#003366] hover:text-[#003366]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.figure
                layout
                key={`${item.src}-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video cursor-pointer bg-white"
              >
                <ProtectedImage watermark={''}
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay */}
                <figcaption className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#FFD700] text-[#003366] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {item.category}
                    </span>
                    {item.type === 'video' ? (
                      <Play size={20} className="text-white fill-white" />
                    ) : (
                      <ImageIcon size={20} className="text-white" />
                    )}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="text-white/70 text-xs font-medium mt-1">Loyola School Harnaut</p>
                </figcaption>

                {/* Type Indicator (Always visible) */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  {item.type === 'video' ? <Play size={14} fill="white" /> : <ImageIcon size={14} />}
                </div>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No items found in this category.</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-full flex flex-col"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-[#FFD700] transition-colors p-2"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>

              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative bg-gray-900 overflow-hidden">
                  {selectedItem.type === 'video' ? (
                    <video
                      src={selectedItem.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                <div className="p-8 bg-white">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#003366] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                        {selectedItem.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400 text-xs font-bold uppercase tracking-widest">
                        {selectedItem.type === 'video' ? <Play size={12} fill="currentColor" /> : <ImageIcon size={12} />}
                        {selectedItem.type}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm font-medium italic">Loyola School Harnaut</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#003366] leading-tight">{selectedItem.title}</h2>
                  <p className="text-gray-500 mt-2 text-sm">
                    {selectedItem.type === 'video'
                      ? `Watch our ${selectedItem.category.toLowerCase()} video highlights.`
                      : `View high-quality images from our ${selectedItem.category.toLowerCase()} collection.`}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
