'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Wifi, Lock } from 'lucide-react';
import Image from 'next/image';

export default function Digital() {
  return (
    <div className="pt-24 pb-16">
        {/* Mobile Banking Section */}
        <section className="container mx-auto px-6 mb-24">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-bca-purple rounded-full blur-[100px] opacity-20"></div>
                        <img
                            src="https://picsum.photos/500/800?random=30"
                            alt="Mobile Banking App"
                            className="relative z-10 rounded-[3rem] border-8 border-gray-900 shadow-2xl mx-auto max-w-[300px]"
                        />
                    </motion.div>
                </div>
                <div className="w-full md:w-1/2">
                    <span className="text-bca-purple font-bold tracking-wider text-sm uppercase mb-2 block">Layanan Digital</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">BSya</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Mobile banking BCA Syariah. Satu aplikasi untuk segala kebutuhan transaksi perbankan dan ibadah Anda.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-xl text-bca-purple"><Smartphone size={24} /></div>
                            <div>
                                <h4 className="font-bold text-gray-900">Buka Rekening Online</h4>
                                <p className="text-sm text-gray-500">Tanpa perlu ke cabang</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-xl text-bca-purple"><Wifi size={24} /></div>
                            <div>
                                <h4 className="font-bold text-gray-900">Cardless</h4>
                                <p className="text-sm text-gray-500">Tarik & setor tunai tanpa kartu</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-xl text-bca-purple"><Lock size={24} /></div>
                            <div>
                                <h4 className="font-bold text-gray-900">Keamanan Maksimal</h4>
                                <p className="text-sm text-gray-500">Biometrik & PIN proteksi</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-xl text-bca-purple"><Smartphone size={24} /></div>
                            <div>
                                <h4 className="font-bold text-gray-900">Fitur Islami</h4>
                                <p className="text-sm text-gray-500">Jadwal sholat, qibla & zakat</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
                        </button>
                        <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Internet Banking */}
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Klik BCA Syariah</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Solusi internet banking untuk kemudahan transaksi bisnis dan personal melalui browser komputer atau tablet Anda.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <Lock size={20} className="text-green-500" />
                                <span className="font-medium text-gray-700">Keamanan Berlapis dengan KeyBCA</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Laptop size={20} className="text-green-500" />
                                <span className="font-medium text-gray-700">Transfer SKN/RTGS/BI-FAST</span>
                            </li>
                        </ul>
                        <button className="bg-bca-purple text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-bca-purpleLight transition-all">
                            Login KlikBCA Syariah
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                         <img src="https://picsum.photos/800/500?random=31" alt="Internet Banking" className="rounded-xl shadow-lg border border-gray-200" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
