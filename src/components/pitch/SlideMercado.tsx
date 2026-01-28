'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '$12.94B', label: 'Mercado LATAM', sublabel: '2025' },
  { value: '15.1%', label: 'CAGR', sublabel: 'hasta 2030' },
  { value: '38M', label: 'Procedimientos', sublabel: '2024' },
];

const countries = [
  { flag: '🇨🇴', name: 'COLOMBIA', status: 'Entry', highlight: '#2 mundial per cápita', featured: true },
  { flag: '🇲🇽', name: 'MÉXICO', status: '2027', highlight: '1.25M procedimientos' },
  { flag: '🇧🇷', name: 'BRASIL', status: '2028', highlight: '1.92M procedimientos' },
];

export default function SlideMercado() {
  return (
    <div className="w-full h-full flex flex-col bg-white relative overflow-hidden overflow-y-auto">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(#0D0D0D 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Header */}
      <motion.header
        className="pt-6 sm:pt-16 px-4 sm:px-16 pb-4 sm:pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-serif text-2xl sm:text-4xl md:text-[56px] font-bold text-[#0D0D0D] leading-tight tracking-tight">
          Un mercado gigante sin dueño
        </h1>
      </motion.header>

      {/* Stats row */}
      <motion.section
        className="px-4 sm:px-16 pb-4 sm:pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row gap-0 border border-[#0D0D0D]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`flex-1 p-4 sm:p-8 text-center ${
                index !== stats.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#0D0D0D]' : ''
              } ${index === 0 ? 'bg-[#0D0D0D] text-white' : 'bg-white'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <p className={`text-3xl sm:text-4xl md:text-[48px] font-black leading-none tracking-tight ${
                index === 0 ? 'text-white' : 'text-[#0D0D0D]'
              }`}>
                {stat.value}
              </p>
              <p className={`text-xs sm:text-sm font-bold mt-1 sm:mt-2 uppercase tracking-wider ${
                index === 0 ? 'text-[#C4B8A8]' : 'text-[#0D0D0D]'
              }`}>
                {stat.label}
              </p>
              <p className={`text-xs mt-1 ${
                index === 0 ? 'text-[#9A9187]' : 'text-[#9A9187]'
              }`}>
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Land & Expand */}
      <motion.section
        className="flex-1 px-4 sm:px-16 pb-4 sm:pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-[#9A9187] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6">
          Estrategia: Land & Expand
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.15 }}
            >
              <div
                className={`flex-1 sm:flex-none p-4 sm:p-8 text-center sm:min-w-[200px] ${
                  country.featured
                    ? 'bg-[#0D0D0D] text-white'
                    : 'bg-[#F5F0E8]'
                }`}
              >
                <p className="text-3xl sm:text-5xl mb-2 sm:mb-3">{country.flag}</p>
                <p className={`text-sm sm:text-lg font-black tracking-wider ${
                  country.featured ? 'text-white' : 'text-[#0D0D0D]'
                }`}>
                  {country.name}
                </p>
                <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${
                  country.featured ? 'text-[#C4B8A8]' : 'text-[#9A9187]'
                }`}>
                  {country.status}
                </p>
                <p className={`text-xs mt-2 sm:mt-3 ${
                  country.featured ? 'text-[#C4B8A8]' : 'text-[#9A9187]'
                }`}>
                  {country.highlight}
                </p>
              </div>

              {index < countries.length - 1 && (
                <span className="material-symbols-outlined text-[#C4B8A8] text-xl sm:text-3xl hidden sm:block">
                  arrow_forward
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Bottom highlight */}
      <motion.footer
        className="px-4 sm:px-16 pb-4 sm:pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="bg-[#F5F0E8] border-l-4 border-[#0D0D0D] px-4 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="material-symbols-outlined text-[#0D0D0D] text-2xl sm:text-3xl">
              workspace_premium
            </span>
            <div>
              <p className="text-[#0D0D0D] text-sm sm:text-lg font-bold">
                Competencia especializada en LATAM
              </p>
              <p className="text-[#9A9187] text-xs sm:text-sm">
                Soluciones locales para cirugía plástica
              </p>
            </div>
          </div>
          <p className="text-4xl sm:text-[64px] font-black text-[#0D0D0D]">0</p>
        </div>
      </motion.footer>
    </div>
  );
}
