'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const promos = [
  {
    id: 1,
    title: "Wujudkan Niat Suci",
    subtitle: "Tabungan Haji iB",
    desc: "Persiapkan keberangkatan haji Anda dengan aman dan terencana sejak dini.",
    color: "bg-gradient-to-r from-emerald-600 to-emerald-800",
    image: "https://picsum.photos/800/400?random=10",
    cta: "Buka Tabungan"
  },
  {
    id: 2,
    title: "Cashback Weekend",
    subtitle: "Belanja Hemat",
    desc: "Dapatkan cashback 50% untuk transaksi QRIS di merchant pilihan setiap Sabtu & Minggu.",
    color: "bg-gradient-to-r from-bca-purple to-purple-900",
    image: "https://picsum.photos/800/400?random=11",
    cta: "Lihat Promo"
  },
  {
    id: 3,
    title: "Investasi Emas",
    subtitle: "Cicil Emas iB",
    desc: "Miliki emas batangan antam dengan angsuran tetap dan ringan. Mulai dari 5 gram.",
    color: "bg-gradient-to-r from-bca-gold to-orange-600",
    image: "https://picsum.photos/800/400?random=12",
    cta: "Simulasi Cicilan"
  }
];

const PromoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % promos.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + promos.length) % promos.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Info & Promo Spesial</h2>
                <p className="text-gray-500 mt-2">Penawaran terbaik khusus untuk nasabah setia</p>
            </div>
            <div className="hidden md:flex gap-2">
                <button onClick={prevSlide} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                    <ChevronLeft size={20} />
                </button>
                <button onClick={nextSlide} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>

        <div className="relative h-[400px] md:h-[320px] w-full rounded-3xl overflow-hidden shadow-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className={`absolute inset-0 w-full h-full ${promos[currentIndex].color} text-white flex flex-col md:flex-row items-center`}
            >
                {/* Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center z-10 order-2 md:order-1">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold w-fit mb-4"
                    >
                        {promos[currentIndex].subtitle}
                    </motion.span>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                    >
                        {promos[currentIndex].title}
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.4 }}
                        className="text-white/90 text-base md:text-lg mb-8 max-w-md"
                    >
                        {promos[currentIndex].desc}
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.5 }} 
                        className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold w-fit hover:bg-gray-100 transition-colors"
                    >
                        {promos[currentIndex].cta} <ArrowRight size={16} />
                    </motion.button>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 h-full relative order-1 md:order-2">
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/20 to-transparent z-10" />
                    <img 
                        src={promos[currentIndex].image} 
                        alt={promos[currentIndex].title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {promos.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                    }`}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCarousel;
