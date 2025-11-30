'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, Calculator, ChevronDown, Info } from 'lucide-react';

export default function SimulasiKKB() {
  const [vehicleCondition, setVehicleCondition] = useState<'new' | 'used'>('new');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [price, setPrice] = useState('');
  const [downPaymentPercent, setDownPaymentPercent] = useState('20');
  const [tenor, setTenor] = useState('5');
  const [showResults, setShowResults] = useState(false);

  const vehicleTypes = [
    'Toyota', 'Honda', 'Suzuki', 'Daihatsu', 'Mitsubishi',
    'Nissan', 'Mazda', 'Isuzu', 'Lainnya'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  const minDownPayment = vehicleCondition === 'new' ? 20 : 30;
  const maxTenor = vehicleCondition === 'new' ? 8 : 6;

  const formatCurrency = (value: string) => {
    const number = value.replace(/\D/g, '');
    return new Intl.NumberFormat('id-ID').format(Number(number));
  };

  const parseCurrency = (value: string) => {
    return Number(value.replace(/\D/g, ''));
  };

  const calculateInstallment = () => {
    const priceValue = parseCurrency(price);
    const dpPercent = Number(downPaymentPercent);
    const tenorMonths = Number(tenor) * 12;

    if (priceValue === 0 || dpPercent < minDownPayment) return null;

    const downPayment = (priceValue * dpPercent) / 100;
    const loanAmount = priceValue - downPayment;

    if (loanAmount < 50000000) return null;

    // Estimated margin rate (simplified calculation)
    const marginRate = 0.08; // 8% annual margin
    const totalMargin = loanAmount * marginRate * Number(tenor);
    const totalPayment = loanAmount + totalMargin;
    const monthlyInstallment = totalPayment / tenorMonths;

    // Administrative costs and insurance (estimated)
    const adminFee = 1000000;
    const insurance = loanAmount * 0.015; // 1.5% of loan amount

    return {
      monthlyInstallment,
      downPayment,
      adminFee,
      insurance,
      totalFirstPayment: downPayment + adminFee + insurance,
      loanAmount,
      totalPayment
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateInstallment();
    if (result) {
      setShowResults(true);
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const results = calculateInstallment();

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      {/* Header */}
      <div className="bg-bca-blue text-white py-16 mb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Car size={32} />
              <h1 className="text-4xl font-bold">Simulasi KKB iB</h1>
            </div>
            <p className="text-blue-100 text-lg">
              Hitung estimasi angsuran pembiayaan kendaraan bermotor dengan prinsip syariah.
              Dapatkan gambaran cicilan bulanan sebelum mengajukan pembiayaan.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleCalculate} className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="text-bca-blue" size={24} />
                Informasi Kendaraan
              </h2>

              {/* Vehicle Condition */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Kondisi Kendaraan</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setVehicleCondition('new')}
                    className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                      vehicleCondition === 'new'
                        ? 'bg-bca-blue text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Baru
                  </button>
                  <button
                    type="button"
                    onClick={() => setVehicleCondition('used')}
                    className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                      vehicleCondition === 'used'
                        ? 'bg-bca-blue text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Bekas
                  </button>
                </div>
              </div>

              {/* Vehicle Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Jenis Kendaraan</label>
                <div className="relative">
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bca-blue/20 appearance-none bg-white"
                    required
                  >
                    <option value="">Pilih Jenis Kendaraan</option>
                    {vehicleTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Vehicle Year (for used cars) */}
              {vehicleCondition === 'used' && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Tahun Kendaraan</label>
                  <div className="relative">
                    <select
                      value={vehicleYear}
                      onChange={(e) => setVehicleYear(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bca-blue/20 appearance-none bg-white"
                      required
                    >
                      <option value="">Pilih Tahun</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Harga Kendaraan (OTR)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">Rp</span>
                  <input
                    type="text"
                    value={price ? formatCurrency(price) : ''}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bca-blue/20"
                    required
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Uang Muka (Min. {minDownPayment}%)
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min={minDownPayment}
                    max="50"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(e.target.value)}
                    className="flex-1"
                  />
                  <div className="relative w-24">
                    <input
                      type="number"
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(e.target.value)}
                      min={minDownPayment}
                      max="50"
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bca-blue/20 text-center"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">%</span>
                  </div>
                </div>
                {price && (
                  <p className="text-sm text-gray-500 mt-2">
                    = Rp {formatCurrency(String((parseCurrency(price) * Number(downPaymentPercent)) / 100))}
                  </p>
                )}
              </div>

              {/* Tenor */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-2">
                  Jangka Waktu (Max. {maxTenor} Tahun)
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    min="1"
                    max={maxTenor}
                    value={tenor}
                    onChange={(e) => setTenor(e.target.value)}
                    className="flex-1"
                  />
                  <div className="relative w-32">
                    <input
                      type="number"
                      value={tenor}
                      onChange={(e) => setTenor(e.target.value)}
                      min="1"
                      max={maxTenor}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bca-blue/20 text-center"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">Tahun</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-bca-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                Hitung Simulasi
              </button>

              {/* Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl flex gap-3">
                <Info className="text-bca-blue shrink-0" size={20} />
                <p className="text-sm text-gray-600">
                  Hasil simulasi ini hanya estimasi dan dapat berbeda dengan perhitungan aktual.
                  Untuk informasi lebih detail, silakan hubungi cabang BCA Syariah terdekat.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div id="results" className="sticky top-24">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6">Hasil Simulasi</h3>

                {showResults && results ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Monthly Installment */}
                    <div className="p-6 bg-gradient-to-br from-bca-blue to-blue-800 rounded-2xl text-white">
                      <p className="text-sm opacity-90 mb-2">Angsuran Per Bulan</p>
                      <p className="text-3xl font-bold">
                        Rp {formatCurrency(String(Math.round(results.monthlyInstallment)))}
                      </p>
                      <p className="text-xs opacity-75 mt-2">untuk {Number(tenor) * 12} bulan</p>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Uang Muka</span>
                        <span className="font-semibold">Rp {formatCurrency(String(Math.round(results.downPayment)))}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Biaya Admin</span>
                        <span className="font-semibold">Rp {formatCurrency(String(results.adminFee))}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Asuransi</span>
                        <span className="font-semibold">Rp {formatCurrency(String(Math.round(results.insurance)))}</span>
                      </div>
                      <div className="flex justify-between py-3 bg-bsya-yellow/10 -mx-4 px-4 rounded-lg mt-4">
                        <span className="font-bold text-gray-900">Total Bayar Pertama</span>
                        <span className="font-bold text-bca-blue">Rp {formatCurrency(String(Math.round(results.totalFirstPayment)))}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-bca-syariah-green text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all mt-6">
                      Ajukan Pembiayaan
                    </button>
                  </motion.div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="mx-auto text-gray-300 mb-4" size={64} />
                    <p className="text-gray-400">
                      Isi formulir dan klik "Hitung Simulasi" untuk melihat hasil
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
