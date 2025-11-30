'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, User, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { 
      label: 'Simpanan', 
      href: '/simpanan',
      children: [
        { label: 'Tahapan iB', href: '/simpanan', desc: 'Tabungan harian mudharabah' },
        { label: 'Tahapan Rencana iB', href: '/simpanan', desc: 'Tabungan berjangka' },
        { label: 'Giro iB', href: '/simpanan', desc: 'Transaksi bisnis lancar' },
        { label: 'Deposito iB', href: '/simpanan', desc: 'Investasi berjangka' },
      ]
    },
    { 
      label: 'Pembiayaan', 
      href: '/pembiayaan',
      children: [
        { label: 'KPR iB', href: '/pembiayaan', desc: 'Wujudkan rumah impian' },
        { label: 'KKB iB', href: '/pembiayaan', desc: 'Pembiayaan kendaraan' },
        { label: 'Emas iB', href: '/pembiayaan', desc: 'Cicilan emas batangan' },
        { label: 'Modal Kerja', href: '/pembiayaan', desc: 'Solusi modal usaha' },
      ]
    },
    {
      label: 'Layanan Digital',
      href: '/digital',
      children: [
        { label: 'BSya', href: '/digital', desc: 'Mobile banking BCA Syariah' },
        { label: 'Klik BCA Syariah', href: '/digital', desc: 'Internet banking' },
      ]
    },
    { 
      label: 'Edukasi & Berita', 
      href: '/articles' 
    },
    { 
      label: 'Tentang Kami', 
      href: '/about' 
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || pathname !== '/'
        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3 border-b border-gray-100'
        : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/BCA_Syariah.svg"
            alt="BCA Syariah"
            width={120}
            height={40}
            className="h-8 w-auto group-hover:opacity-80 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.label} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`text-sm font-semibold hover:text-bca-blue transition-colors flex items-center gap-1 py-4 ${
                  (isScrolled || pathname !== '/') ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {link.label}
                {link.children && <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform" />}
              </Link>

              {/* Desktop Dropdown */}
              {link.children && (
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors group/item"
                        >
                          <div className="font-semibold text-gray-800 group-hover/item:text-bca-blue">{child.label}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{child.desc}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
            <button className={`p-2.5 rounded-full hover:bg-black/5 transition-colors ${isScrolled || pathname !== '/' ? 'text-gray-600' : 'text-gray-800'}`}>
                <Search size={20} />
            </button>
            <div className="h-6 w-px bg-gray-300 mx-1"></div>
            <Link
                href="/digital"
                className="flex items-center gap-2 bg-bca-blue text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-800 transition-all hover:shadow-lg hover:shadow-bca-blue/20"
            >
                <User size={18} />
                <span>Internet Banking</span>
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white fixed top-[72px] left-0 w-full overflow-y-auto pb-20"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-50 pb-2">
                  <div 
                    className="flex items-center justify-between py-3"
                    onClick={() => link.children ? setActiveDropdown(activeDropdown === link.label ? null : link.label) : null}
                  >
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-gray-800"
                      onClick={(e) => { if(link.children) e.preventDefault(); }}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <ChevronDown 
                        size={20} 
                        className={`text-gray-400 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 rounded-xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center justify-between px-5 py-3 text-gray-600 hover:text-bca-blue"
                          >
                            <span className="text-sm font-medium">{child.label}</span>
                            <ChevronRight size={14} />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <div className="mt-6 space-y-3">
                <Link
                    href="/digital"
                    className="flex justify-center items-center gap-2 w-full bg-bca-blue text-white py-3.5 rounded-xl font-bold shadow-lg shadow-bca-blue/20"
                >
                    <User size={18} />
                    Login Internet Banking
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;