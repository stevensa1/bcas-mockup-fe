'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Simpanan() {
  const products = [
    {
      title: "Tahapan iB",
      desc: "Tabungan dengan prinsip Wadiah (titipan) atau Mudharabah (bagi hasil). Nikmati kemudahan transaksi dengan kartu ATM BCA Syariah.",
      icon: <Wallet className="text-bca-blue" size={32} />,
      features: ["Gratis biaya administrasi (akad Wadiah)", "Fasilitas e-Channel lengkap", "Tarik tunai di ATM BCA"],
      color: "bg-purple-50"
    },
    {
      title: "Tahapan Rencana iB",
      desc: "Tabungan berjangka untuk mewujudkan rencana masa depan dengan setoran rutin bulanan yang ringan.",
      icon: <Shield className="text-blue-600" size={32} />,
      features: ["Bagi hasil kompetitif", "Jangka waktu fleksibel", "Autodebet dari rekening sumber"],
      color: "bg-blue-50"
    },
    {
      title: "Deposito iB",
      desc: "Simpanan investasi berjangka untuk nasabah perorangan maupun perusahaan dengan nisbah bagi hasil menarik.",
      icon: <Wallet className="text-orange-600" size={32} />,
      features: ["Pilihan tenor 1, 3, 6, 12 bulan", "Dapat dijadikan jaminan pembiayaan", "Sertifikat Deposito"],
      color: "bg-orange-50"
    },
    {
      title: "Simpanan Pelajar iB",
      desc: "Tabungan khusus untuk pelajar (SimPel) dengan persyaratan mudah dan setoran ringan.",
      icon: <Wallet className="text-green-600" size={32} />,
      features: ["Setoran awal ringan", "Bebas biaya administrasi", "Nama rekening atas nama anak"],
      color: "bg-green-50"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-bca-blue text-white py-16 mb-12">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Produk Simpanan
          </motion.h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Beragam pilihan tabungan dan investasi untuk mengelola keuangan Anda sesuai prinsip syariah. Amanah dan menenteramkan.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl ${item.color} mb-4 inline-block`}>
                  {item.icon}
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-bca-syariah-green transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-bca-syariah-green transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.desc}
              </p>

              <div className="space-y-3 border-t border-gray-100 pt-6">
                {item.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 py-3 rounded-xl border border-bca-blue text-bca-blue font-semibold hover:bg-bca-blue hover:text-white transition-all">
                Ajukan Sekarang
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
