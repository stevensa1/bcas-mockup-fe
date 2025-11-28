'use client';

import React from 'react';
import { MapPin, Phone, Mail, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang BCA Syariah</h1>
                <div className="w-20 h-1 bg-bca-purple mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                    BCA Syariah hadir untuk memenuhi kebutuhan nasabah akan layanan perbankan syariah yang andal dan tepercaya.
                    Sebagai anak perusahaan PT Bank Central Asia Tbk (BCA), kami berkomitmen untuk memberikan layanan prima bagi seluruh masyarakat.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-purple-50 p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-bca-purple mb-4 flex items-center gap-2">
                        <Award size={24} /> Visi
                    </h3>
                    <p className="text-gray-700">
                        Menjadi Bank Syariah Andalan yang Unggul dalam Penyelesaian Pembayaran, Penghimpunan Dana, dan Pembiayaan bagi Nasabah Bisnis dan Perseorangan.
                    </p>
                </div>
                <div className="bg-orange-50 p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                        <Users size={24} /> Misi
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Membangun institusi yang unggul di bidang penyelesaian pembayaran.</li>
                        <li>Menjadi mitra bisnis yang terpercaya.</li>
                        <li>Membangun SDM yang profesional.</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Hubungi Kami</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-bca-purple">
                            <Phone size={24} />
                        </div>
                        <h4 className="font-bold mb-2">Halo BCA</h4>
                        <p className="text-gray-600">1500888</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-bca-purple">
                            <Mail size={24} />
                        </div>
                        <h4 className="font-bold mb-2">Email</h4>
                        <p className="text-gray-600">halobca@bca.co.id</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-bca-purple">
                            <MapPin size={24} />
                        </div>
                        <h4 className="font-bold mb-2">Kantor Pusat</h4>
                        <p className="text-gray-600 text-sm">Jl. Jatinegara Timur No. 72<br/>Jakarta Timur 13310</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
