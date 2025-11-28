'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Car, Coins, Briefcase, Calculator, Check } from 'lucide-react';

export default function Pembiayaan() {
  return (
    <div className="pt-24 pb-16">
      <div className="bg-gray-900 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-bca-purple opacity-20 blur-[100px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Solusi Pembiayaan
          </motion.h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Wujudkan impian memiliki rumah, kendaraan, hingga modal usaha dengan angsuran yang pasti dan transparan.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* KPR Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src="https://picsum.photos/600/400?random=20"
                alt="KPR iB"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 text-bca-purple font-bold mb-2">
                <Home size={20} />
                <span>KPR iB BCA Syariah</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Rumah Idaman, Hati Tenang</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pembiayaan kepemilikan rumah (Ready Stock/Indent) dan apartemen dengan akad Murabahah (jual beli) atau Musyarakah Mutanaqisah (MMQ).
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Check size={14} /></div>
                    Angsuran tetap hingga lunas (Akad Murabahah)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Check size={14} /></div>
                    Jangka waktu hingga 20 tahun
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Check size={14} /></div>
                    Bebas penalti pelunasan dipercepat
                </li>
              </ul>
              <div className="flex gap-4">
                <button className="bg-bca-purple text-white px-6 py-3 rounded-xl font-semibold hover:bg-bca-purpleLight transition-all">
                    Simulasi KPR
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Other Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "KKB iB", icon: <Car size={32} />, desc: "Pembiayaan mobil baru atau bekas dengan prinsip Murabahah.", bg: "bg-blue-50", text: "text-blue-600" },
                { title: "Emas iB", icon: <Coins size={32} />, desc: "Cicil emas batangan mulai 10 gram dengan angsuran pasti.", bg: "bg-yellow-50", text: "text-yellow-600" },
                { title: "Pembiayaan Modal Kerja", icon: <Briefcase size={32} />, desc: "Solusi modal usaha untuk pengembangan bisnis Anda.", bg: "bg-purple-50", text: "text-purple-600" },
            ].map((item, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
                >
                    <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center mb-6`}>
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm">{item.desc}</p>
                    <a href="#" className="text-bca-purple font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Pelajari Lebih Lanjut <Calculator size={16} />
                    </a>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
