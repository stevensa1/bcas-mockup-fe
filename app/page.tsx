'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PromoCarousel from '@/components/PromoCarousel';
import Products from '@/components/Products';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PromoCarousel />
      <Products />

      {/* Call to Action Section */}
      <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
              <div className="bg-bca-blue rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
                  {/* Abstract Shapes */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-bsya-yellow/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                  >
                      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Hijrah Finansial Sekarang</h2>
                      <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                          Nikmati kemudahan transaksi digital dengan keberkahan prinsip syariah.
                          Buka rekening tanpa perlu ke cabang.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                          <Link href="/digital" className="bg-bsya-yellow text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-bca-blue transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                              Download BSya
                          </Link>
                          <Link href="/about" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                              Lokasi Cabang
                          </Link>
                      </div>
                  </motion.div>
              </div>
          </div>
      </section>
    </>
  );
}
