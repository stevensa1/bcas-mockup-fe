'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="text-2xl font-bold tracking-tight mb-6">
              BCA <span className="font-light">Syariah</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Menjadi Bank Syariah Andalan yang Unggul dalam Penyelesaian Pembayaran, Penghimpunan Dana, dan Pembiayaan bagi Nasabah Bisnis dan Perseorangan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bca-blue transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bca-blue transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bca-blue transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bca-blue transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-bsya-yellow transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-bsya-yellow transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-bsya-yellow transition-colors">Laporan Tahunan</a></li>
              <li><a href="#" className="hover:text-bsya-yellow transition-colors">Berita & Kegiatan</a></li>
              <li><a href="#" className="hover:text-bsya-yellow transition-colors">Tata Kelola Perusahaan</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Produk & Layanan</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-bsya-yellow transition-colors">Tahapan iB</a></li>
              <li><a href="#" className="hover:text-bsya-yellow transition-colors">KPR iB</a></li>
              <li><a href="#" className="hover:text-bsya-yellow transition-colors">KKB iB</a></li>
              <li><a href="#" className="hover:text-bsya-yellow transition-colors">Pembiayaan Emas iB</a></li>
              <li><a href="#" className="hover:text-bsya-yellow transition-colors">e-Banking</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-bsya-yellow shrink-0 mt-0.5" />
                <span>Halo BCA 1500888</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-bsya-yellow shrink-0 mt-0.5" />
                <span>halobca@bca.co.id</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-bsya-yellow shrink-0 mt-0.5" />
                <span>
                  Jl. Jatinegara Timur No. 72<br />
                  Jakarta Timur 13310<br />
                  Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} PT Bank BCA Syariah. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <span className="flex items-center gap-2">
              Terdaftar dan diawasi oleh <span className="font-bold text-white">OJK</span> & <span className="font-bold text-white">LPS</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
