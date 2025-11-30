'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, MapPin, Calculator, Lock, Phone, X } from 'lucide-react';

const StickyNav: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const navItems = [
    {
      id: 'bsya',
      label: 'BSya Mobile',
      icon: Smartphone,
      href: '/bsya',
      color: 'bg-bsya-blue',
      hoverColor: 'hover:bg-bsya-blue/90',
      description: 'Download aplikasi BSya'
    },
    {
      id: 'location',
      label: 'Lokasi Cabang',
      icon: MapPin,
      href: '/about',
      color: 'bg-bca-syariah-green',
      hoverColor: 'hover:bg-green-700',
      description: 'Temukan cabang terdekat'
    },
    {
      id: 'calculator',
      label: 'Kalkulator KKB',
      icon: Calculator,
      href: '/simulasi-kkb',
      color: 'bg-bca-blue',
      hoverColor: 'hover:bg-blue-800',
      description: 'Simulasi pembiayaan'
    },
    {
      id: 'login',
      label: 'Internet Banking',
      icon: Lock,
      href: '/klik-bca-syariah',
      color: 'bg-gray-700',
      hoverColor: 'hover:bg-gray-800',
      description: 'Klik BCA Syariah'
    },
    {
      id: 'contact',
      label: 'Hubungi Kami',
      icon: Phone,
      href: '#contact',
      color: 'bg-bsya-yellow',
      hoverColor: 'hover:bg-yellow-500',
      description: 'Customer Service'
    }
  ];

  return (
    <>
      {/* Desktop Sticky Navigation - Right Side */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setActiveTooltip(item.id)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center justify-center w-14 h-14 ${item.color} ${item.hoverColor} text-white rounded-l-full shadow-lg transition-all duration-300 group-hover:w-16 group-hover:shadow-xl ${
                    item.id === 'login' ? 'text-white' : item.id === 'contact' ? 'text-gray-900' : ''
                  }`}
                >
                  <Icon size={24} />
                </Link>

                {/* Tooltip */}
                <AnimatePresence>
                  {activeTooltip === item.id && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap"
                    >
                      <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl">
                        <p className="font-semibold text-sm">{item.label}</p>
                        <p className="text-xs text-gray-300 mt-0.5">{item.description}</p>
                        {/* Arrow */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Floating Action Button */}
      <MobileFloatingNav items={navItems} />
    </>
  );
};

// Mobile Floating Navigation
const MobileFloatingNav: React.FC<{ items: any[] }> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-50">
      {/* Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
          >
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 ${item.color} ${item.hoverColor} text-white px-4 py-3 rounded-full shadow-lg ${
                      item.id === 'contact' ? 'text-gray-900' : ''
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-sm font-semibold pr-2">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all ${
          isOpen ? 'bg-gray-900' : 'bg-bca-blue'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={28} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="flex flex-col gap-1"
            >
              <span className="w-6 h-0.5 bg-white rounded-full" />
              <span className="w-6 h-0.5 bg-white rounded-full" />
              <span className="w-6 h-0.5 bg-white rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default StickyNav;
