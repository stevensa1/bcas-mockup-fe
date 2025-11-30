'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, Lock, Zap, BarChart3, FileText, Clock, Shield, Globe, CheckCircle, ArrowRight, Chrome, Star } from 'lucide-react';

export default function KlikBCASyariahPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const features = [
    {
      icon: Zap,
      title: "Transfer Instan",
      description: "Kirim uang ke rekening BCA Syariah atau bank lain dalam hitungan detik.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Laporan Keuangan",
      description: "Pantau arus kas, mutasi rekening, dan analisis pengeluaran Anda.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: FileText,
      title: "Pembayaran Tagihan",
      description: "Bayar listrik, air, telepon, dan tagihan lainnya tanpa antri.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Akses kapan saja, di mana saja. Bank tidak pernah tutup untuk Anda.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "Gratis Biaya Admin",
      desc: "Tidak ada biaya bulanan untuk menggunakan layanan internet banking.",
      icon: CheckCircle
    },
    {
      title: "Multi-Device Sync",
      desc: "Akses dari desktop, laptop, atau tablet dengan sinkronisasi otomatis.",
      icon: Globe
    },
    {
      title: "Keamanan Berlapis",
      desc: "Token dinamis, enkripsi SSL, dan verifikasi ganda melindungi setiap transaksi.",
      icon: Shield
    }
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(209 213 219 / 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            style={{ opacity, scale }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-bca-blue/10 rounded-full mb-8">
                <Monitor className="text-bca-blue" size={20} />
                <span className="text-sm font-semibold text-bca-blue">Internet Banking</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-gray-900">
                Klik BCA Syariah
              </h1>

              <p className="text-3xl md:text-5xl font-semibold mb-6">
                <span className="bg-gradient-to-r from-bca-blue to-bca-syariah-green bg-clip-text text-transparent">
              Perbankan.
                </span>
              </p>
              <p className="text-3xl md:text-5xl font-semibold text-gray-600 mb-8">
                Tanpa harus ke bank.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Kelola rekening, transfer dana, bayar tagihan, dan investasi —
              semua dari kenyamanan browser Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="group px-8 py-4 bg-bca-blue text-white rounded-2xl font-semibold text-lg hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3">
                Login Sekarang
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-2xl font-semibold text-lg hover:border-bca-blue hover:text-bca-blue transition-all shadow-lg hover:shadow-xl">
                Daftar Baru
              </button>
            </motion.div>

            {/* Browser Compatibility */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-8 mt-12 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Chrome size={20} />
                <span className="text-sm">Chrome</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor size={20} />
                <span className="text-sm">Edge</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={20} />
                <span className="text-sm">Safari</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-bca-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-bca-syariah-green/5 rounded-full blur-3xl" />
      </section>

      {/* Screenshot Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Browser Window Mockup */}
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser Chrome */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4 bg-white rounded-lg px-4 py-1.5 text-sm text-gray-500 flex items-center gap-2">
                  <Lock size={14} className="text-green-600" />
                  <span>https://klik.bcasyariah.co.id</span>
                </div>
              </div>

              {/* Content */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://picsum.photos/1200/750?random=200"
                  alt="Klik BCA Syariah Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -left-8 top-1/4 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden lg:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Saldo Rekening</p>
                  <p className="text-xl font-bold text-gray-900">Rp 25.450.000</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-8 bottom-1/4 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Zap className="text-bca-blue" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transfer Berhasil</p>
                  <p className="text-lg font-bold text-gray-900">Rp 1.500.000</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Dirancang untuk
              <br />
              <span className="bg-gradient-to-r from-bca-blue to-bca-syariah-green bg-clip-text text-transparent">
                produktivitas Anda.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Setiap fitur dibuat dengan satu tujuan: membuat hidup Anda lebih mudah.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 hover:border-bca-blue/50 hover:shadow-xl transition-all"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bca-blue via-blue-700 to-bca-syariah-green" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Shield className="mx-auto mb-8" size={80} />
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Keamanan adalah prioritas.
              </h2>
              <p className="text-xl text-blue-100 mb-16 leading-relaxed">
                Setiap transaksi dilindungi dengan teknologi enkripsi tingkat militer,
                token dinamis, dan verifikasi berlapis. Uang Anda aman bersama kami.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20"
                  >
                    <Icon className="mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-20 text-gray-900"
          >
            Dipercaya jutaan nasabah.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Ahmad Fauzi",
                role: "Pengusaha",
                text: "Transfer ke supplier jadi lebih cepat. Saya bisa fokus ke bisnis tanpa khawatir soal pembayaran."
              },
              {
                name: "Siti Nurhaliza",
                role: "Ibu Rumah Tangga",
                text: "Bayar tagihan bulanan jadi praktis. Tidak perlu keluar rumah, semua bisa dari laptop."
              },
              {
                name: "Budi Santoso",
                role: "Karyawan",
                text: "Cek saldo dan mutasi rekening kapan saja. Aplikasinya mudah digunakan dan aman."
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-8">
              Siap untuk memulai?
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Daftar sekarang dan nikmati kemudahan internet banking BCA Syariah.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl"
              >
                Login Sekarang
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-gray-900 transition-all"
              >
                Daftar Baru
              </motion.button>
            </div>

            <p className="text-gray-400 mt-12 text-sm">
              Sudah punya rekening BCA Syariah? Login langsung dengan User ID Anda.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
