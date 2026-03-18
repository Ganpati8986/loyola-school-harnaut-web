import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { cn } from '../lib/utils';
import { Play, Image as ImageIcon, X } from 'lucide-react';
import ProtectedImage from '../components/ProtectedImage';
import g from '../assets/img8.jpeg';
import g1 from '../assets/img6.jpeg';
import g2 from '../assets/img5.jpeg';
import g3 from '../assets/img3.jpeg';
import g4 from '../assets/img2.jpeg';
import g5 from '../assets/img11.jpeg';
import g6 from '../assets/img1.jpeg';
import g7 from '../assets/IMG_2323.jpeg';
import g8 from '../assets/IMG_2361.jpeg';
import lab from '../assets/lab_v.mp4';
import campus from '../assets/campus.mp4';


const categories = ['ALL', 'CAMPUS', 'CLASSROOM', 'LAB', 'GAMES', 'OTHER'];

const galleryItems = [
  { type: 'image', category: 'CAMPUS', src: g, title: 'Main Building Entrance' },
  { type: 'image', category: 'CLASSROOM', src: g1, title: 'Interactive Learning Session' },
  { type: 'image', category: 'LAB', src: g2, title: 'Physics Laboratory' },
  { type: 'image', category: 'GAMES', src: g3, title: 'Annual Sports Day' },
  { type: 'image', category: 'OTHER', src: g4, title: 'Cultural Program' },
  { 
    type: 'video', 
    category: 'CAMPUS', 
    src: g1, 
    videoUrl: lab,
    title: 'Class' 
  },
  { type: 'image', category: 'CAMPUS', src: g5, title: 'Computer Science Lab' },
  { type: 'image', category: 'GAMES', src: g6, title: 'Art & Craft Class' },
  { 
    type: 'video', 
    category: 'GAMES', 
    src: g, 
    videoUrl: campus,
    title: 'Campus' 
  },
  { type: 'image', category: 'CAMPUS', src: g7, title: 'School Playground' },
  { type: 'image', category: 'OTHER', src: g8, title: 'Library Reading Hall' },
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
