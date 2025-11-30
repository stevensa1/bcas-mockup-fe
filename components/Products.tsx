'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      category: "Simpanan",
      title: "Tahapan iB",
      desc: "Tabungan transaksional dengan kemudahan akses melalui jaringan ATM dan e-channel BCA Syariah.",
      image: "https://picsum.photos/400/300?random=2",
      badge: "Terpopuler"
    },
    {
      category: "Pembiayaan",
      title: "KPR iB",
      desc: "Solusi kepemilikan rumah dengan angsuran tetap dan ringan hingga lunas. Bebas rasa khawatir.",
      image: "https://picsum.photos/400/300?random=3",
      badge: "Promo Spesial"
    },
    {
      category: "Investasi",
      title: "Deposite iB",
      desc: "Simpanan berjangka dengan prinsip Mudharabah untuk bagi hasil yang lebih optimal.",
      image: "https://picsum.photos/400/300?random=4",
      badge: null
    }
  ];

  return (
    <section id="pembiayaan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solusi Keuangan Syariah</h2>
            <p className="text-gray-600 text-lg">
              Beragam produk yang dirancang untuk memenuhi kebutuhan gaya hidup Anda dengan tetap memegang teguh prinsip syariah.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-bca-syariah-green font-semibold hover:text-green-700 transition-colors">
            Lihat Semua Produk <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-medium tracking-wider uppercase bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md border border-white/20">
                    {product.category}
                  </span>
                </div>
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-bca-blue text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {product.desc}
                </p>
                <a href="#" className="inline-flex items-center text-bca-syariah-green font-medium hover:gap-2 transition-all">
                  Selengkapnya <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
