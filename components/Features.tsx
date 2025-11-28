'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Home, Landmark, Coins, Plane, Smartphone, QrCode, FileText } from 'lucide-react';

const features = [
  { icon: <QrCode size={24} />, title: "QRIS", color: "bg-blue-50 text-blue-600" },
  { icon: <Smartphone size={24} />, title: "Buka Rekening", color: "bg-purple-50 text-purple-600" },
  { icon: <Home size={24} />, title: "Simulasi KPR", color: "bg-orange-50 text-orange-600" },
  { icon: <Coins size={24} />, title: "Harga Emas", color: "bg-yellow-50 text-yellow-600" },
  { icon: <Plane size={24} />, title: "Setor Haji", color: "bg-green-50 text-green-600" },
  { icon: <Landmark size={24} />, title: "Info Kurs", color: "bg-indigo-50 text-indigo-600" },
  { icon: <CreditCard size={24} />, title: "Kartu Debit", color: "bg-pink-50 text-pink-600" },
  { icon: <FileText size={24} />, title: "E-Statement", color: "bg-teal-50 text-teal-600" },
];

const Features: React.FC = () => {
  return (
    <section className="relative z-20 -mt-16 mb-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 border border-gray-100"
        >
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6 text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900">Akses Cepat</h3>
                    <p className="text-sm text-gray-500 mt-1">Menu favorit pilihan nasabah</p>
                </div>
                
                <div className="w-full md:w-3/4">
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                        {features.map((feature, idx) => (
                        <motion.a
                            key={idx}
                            href="#"
                            className="flex flex-col items-center text-center group"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-all duration-300`}>
                            {feature.icon}
                            </div>
                            <span className="text-[11px] md:text-xs font-medium text-gray-700 group-hover:text-bca-purple transition-colors leading-tight">
                                {feature.title}
                            </span>
                        </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
