'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Smartphone, Zap, Shield, TrendingUp, Globe, Heart, Download, CheckCircle2, ArrowRight, Apple, Play } from 'lucide-react';
import Image from 'next/image';

export default function BSyaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Transfer Tanpa Batas",
      description: "Kirim uang ke sesama BCA Syariah gratis. Ke bank lain? Tetap mudah dan cepat.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      image: "https://picsum.photos/400/800?random=100"
    },
    {
      title: "Investasi Syariah",
      description: "Nabung emas, deposito, hingga pembiayaan. Semua dalam satu aplikasi.",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
      image: "https://picsum.photos/400/800?random=101"
    },
    {
      title: "QRIS di Mana Saja",
      description: "Bayar dengan scan QR. Dari warteg sampai mall premium.",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      image: "https://picsum.photos/400/800?random=102"
    },
    {
      title: "Zakat & Sedekah",
      description: "Tunaikan ibadah langsung dari aplikasi. Mudah, cepat, berkah.",
      icon: Heart,
      color: "from-orange-500 to-red-500",
      image: "https://picsum.photos/400/800?random=103"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-bsya-blue/20 via-black to-bca-blue/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bsya-blue/30 rounded-full blur-[120px] animate-pulse will-change-transform" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bca-blue/30 rounded-full blur-[120px] animate-pulse will-change-transform" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-bsya-blue via-blue-400 to-bca-blue bg-clip-text text-transparent">
                  BSya
                </span>
              </h1>
              <p className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4">
                Perbankan syariah.
              </p>
              <p className="text-2xl md:text-4xl font-semibold text-gray-300">
                Semudah sentuhan jari.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Kelola keuangan syariah Anda dengan aplikasi yang dirancang untuk kemudahan,
              kecepatan, dan keberkahan di setiap transaksi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-all flex items-center gap-3 shadow-2xl hover:shadow-white/20 hover:scale-105">
                <Apple size={24} />
                Download di App Store
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all flex items-center gap-3 hover:scale-105">
                <Play size={24} />
                Download di Google Play
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Phone Showcase Section */}
      <section className="min-h-screen flex items-center justify-center py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Semua yang Anda butuhkan.
                <br />
                <span className="text-gray-500">Dalam satu aplikasi.</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Dari membuka rekening hingga berinvestasi, dari transfer hingga zakat —
                BSya hadir menemani perjalanan finansial syariah Anda.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-[300px]">
                {/* Phone Frame */}
                <div className="relative z-10 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden bg-black">
                  <img
                    src="https://picsum.photos/400/800?random=90"
                    alt="BSya App Interface"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-bsya-blue/50 to-bca-blue/50 blur-[100px] -z-10 will-change-transform" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="min-h-screen py-32 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-center mb-20"
          >
            Dibuat untuk Anda.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full text-left p-6 rounded-3xl transition-all ${
                      activeFeature === index
                        ? 'bg-white/10 backdrop-blur-lg border border-white/20'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${feature.color}`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Feature Image */}
            <div className="relative">
              <div className="relative mx-auto max-w-[300px]">
                <div className="relative z-10 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeFeature}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={features[activeFeature].image}
                      alt={features[activeFeature].title}
                      className="w-full h-auto will-change-[opacity]"
                    />
                  </AnimatePresence>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} blur-[100px] -z-10 transition-colors duration-500`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="min-h-screen flex items-center justify-center py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Shield className="mx-auto mb-8 text-bsya-blue" size={80} />
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Keamanan yang
              <br />
              tak tertandingi.
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Dilindungi dengan enkripsi tingkat bank, autentikasi biometrik,
              dan teknologi keamanan terdepan. Data Anda aman bersama kami.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Shield, title: "Enkripsi 256-bit", desc: "Standar keamanan perbankan" },
                { icon: Smartphone, title: "Biometric Lock", desc: "Face ID & Fingerprint" },
                { icon: CheckCircle2, title: "OJK Certified", desc: "Terdaftar & diawasi" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10"
                  >
                    <Icon className="mx-auto mb-4 text-bsya-blue" size={48} />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bsya-blue/30 via-bca-blue/20 to-black" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-8">
              Mulai sekarang.
            </h2>
            <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Download BSya dan rasakan pengalaman perbankan syariah yang berbeda.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-gray-100 transition-all flex items-center gap-3 shadow-2xl"
              >
                <Apple size={28} />
                App Store
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white hover:text-black transition-all flex items-center gap-3"
              >
                <Play size={28} />
                Google Play
              </motion.button>
            </div>

            <p className="text-gray-500 mt-12">
              Tersedia untuk iOS 14.0+ dan Android 8.0+
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
