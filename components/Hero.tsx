'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 via-white to-orange-50 -z-10" />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-bca-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-bsya-yellow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6 text-sm font-medium text-bca-blue">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            BSya kini lebih canggih dan mudah
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
            Berkah Transaksi, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bca-blue to-blue-800">
              Tenang Hati
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Wujudkan rencana masa depan Anda dengan solusi perbankan yang sesuai prinsip syariah. 
            Amanah, transparan, dan penuh keberkahan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-bca-blue text-white rounded-xl font-semibold shadow-lg shadow-bca-blue/25 hover:bg-blue-800 transition-all hover:scale-105 flex items-center justify-center gap-2">
              Buka Rekening
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              Pelajari Produk
            </button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-gray-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-bca-syariah-green" />
              Terdaftar & Diawasi OJK
            </div>
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-bca-syariah-green" />
              Sesuai Syariah
            </div>
          </div>
        </motion.div>

        {/* Hero Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
            <img 
              src="https://picsum.photos/800/600?random=1" 
              alt="Happy Family Banking" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <div className="bg-green-500 p-2 rounded-lg text-white">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <p className="text-xs opacity-80">Bagi Hasil Kompetitif</p>
                        <p className="font-bold">Tahapan iB</p>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-bsya-yellow rounded-2xl transform rotate-12 -z-10 opacity-20"
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 w-32 h-32 bg-bca-blue rounded-full -z-10 opacity-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;