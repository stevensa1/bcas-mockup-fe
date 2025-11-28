'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Search, ArrowRight } from 'lucide-react';
import { Article } from '@/types';

// Mock CMS Data
const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: "Mengenal Akad Mudharabah dalam Perbankan Syariah",
    category: "Edukasi Syariah",
    date: "10 Mar 2024",
    summary: "Mudharabah adalah akad kerjasama antara pemilik modal dan pengelola modal dengan pembagian keuntungan yang disepakati.",
    image: "https://picsum.photos/600/400?random=50"
  },
  {
    id: '2',
    title: "Tips Mengelola Keuangan Rumah Tangga Secara Islami",
    category: "Tips Keuangan",
    date: "08 Mar 2024",
    summary: "Pelajari cara mengatur cashflow keluarga agar tetap berkah dan terhindar dari pemborosan (Israf).",
    image: "https://picsum.photos/600/400?random=51"
  },
  {
    id: '3',
    title: "BCA Syariah Raih Penghargaan Bank Syariah Terbaik 2024",
    category: "Berita",
    date: "01 Mar 2024",
    summary: "Komitmen memberikan layanan terbaik membawa BCA Syariah memenangkan penghargaan bergengsi tahun ini.",
    image: "https://picsum.photos/600/400?random=52"
  },
  {
    id: '4',
    title: "Persiapan Haji: Apa Saja yang Perlu Disiapkan?",
    category: "Edukasi Syariah",
    date: "25 Feb 2024",
    summary: "Panduan lengkap persiapan finansial dan mental menuju Baitullah.",
    image: "https://picsum.photos/600/400?random=53"
  },
  {
    id: '5',
    title: "Investasi Emas: Aman dan Menguntungkan",
    category: "Investasi",
    date: "20 Feb 2024",
    summary: "Mengapa emas menjadi instrumen investasi favorit di masa ketidakpastian ekonomi.",
    image: "https://picsum.photos/600/400?random=54"
  },
];

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = ["Semua", "Berita", "Edukasi Syariah", "Tips Keuangan", "Investasi"];

  const filteredArticles = activeCategory === "Semua"
    ? MOCK_ARTICLES
    : MOCK_ARTICLES.filter(art => art.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Artikel & Wawasan</h1>
            <p className="text-gray-600 text-lg">
                Dapatkan informasi terbaru seputar perbankan syariah, tips keuangan, dan berita korporasi.
            </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                            activeCategory === cat
                            ? 'bg-bca-purple text-white shadow-lg shadow-bca-purple/20'
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="relative w-full md:w-72">
                <input
                    type="text"
                    placeholder="Cari artikel..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bca-purple/20"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
                <motion.div
                    key={article.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group h-full flex flex-col"
                >
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-bca-purple uppercase tracking-wider">
                            {article.category}
                        </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                            <span className="flex items-center gap-1"><User size={12} /> Admin</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-bca-purple transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                            {article.summary}
                        </p>
                        <a href="#" className="flex items-center gap-2 text-bca-purple font-semibold text-sm hover:gap-3 transition-all mt-auto">
                            Baca Selengkapnya <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
