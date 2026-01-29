'use client';

import { motion } from 'framer-motion';

const projectionData = [
  { year: '2025', value: 0.5 },
  { year: '2026', value: 1.5 },
  { year: '2027', value: 3.5 },
  { year: '2028', value: 6 },
  { year: '2029', value: 10 },
  { year: '2030', value: 14.4 },
];

const benefits = [
  {
    icon: 'trending_up',
    title: 'ROI 3x-4x PROYECTADO',
    subtitle: 'Basado en valoración a 3 años',
  },
  {
    icon: 'pie_chart',
    title: 'DIVIDENDOS PROPORCIONALES',
    subtitle: '20-25% equity = tu % de utilidades (desde año 2)',
  },
  {
    icon: 'rocket_launch',
    title: 'PARTICIPACIÓN EN EL EXIT',
    subtitle: '$100M - $600M proyectado (5-7 años)',
  },
];

export default function SlideAsk() {
  const maxValue = 14.4;

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
        className="pt-6 sm:pt-10 px-4 sm:px-16 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-[#9A9187] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-1 sm:mb-2">
          La oportunidad
        </p>
        <div className="flex items-baseline gap-2 sm:gap-4 flex-wrap">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[72px] font-bold text-[#0D0D0D] leading-none tracking-tight">
            Buscamos $4M
          </h1>
          <span className="text-[#9A9187] text-lg sm:text-2xl">USD</span>
        </div>
        <p className="text-[#9A9187] text-sm sm:text-lg mt-1 sm:mt-2">
          Para acelerar el desarrollo
        </p>
      </motion.header>

      {/* Main content */}
      <div className="flex-1 px-4 sm:px-16 pb-4 flex flex-col sm:flex-row gap-4 sm:gap-8">
        {/* Left - Chart */}
        <motion.section
          className="w-full sm:w-[55%] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[#9A9187] text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
            Crecimiento Proyectado
          </p>

          <div className="flex-1 bg-[#FAFAF8] border border-[#E8E0D5] p-4 sm:p-6 flex items-end justify-around min-h-[180px] sm:min-h-0">
            {projectionData.map((data, index) => {
              const heightPercent = (data.value / maxValue) * 100;
              return (
                <motion.div
                  key={data.year}
                  className="flex flex-col items-center gap-1 sm:gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <p className="text-[#0D0D0D] text-[10px] sm:text-sm font-bold">
                    ${data.value}M
                  </p>
                  <motion.div
                    className={`w-6 sm:w-14 ${
                      index === projectionData.length - 1
                        ? 'bg-[#0D0D0D]'
                        : 'bg-[#C4B8A8]'
                    }`}
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.max(heightPercent * 1.5, 15)}px` }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  />
                  <p className="text-[#9A9187] text-[10px] sm:text-xs font-medium">
                    {data.year}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Right - Benefits */}
        <motion.section
          className="w-full sm:w-[45%] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[#9A9187] text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
            Lo que recibe el inversionista
          </p>

          <div className="flex-1 flex flex-col gap-3 sm:gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className={`flex-1 p-4 sm:p-6 flex items-center gap-3 sm:gap-4 ${
                  index === 0
                    ? 'bg-[#0D0D0D]'
                    : index === 1
                    ? 'bg-[#F5F0E8]'
                    : 'border-2 border-[#0D0D0D]'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15 }}
              >
                <div
                  className={`w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 ${
                    index === 0 ? 'bg-white/10' : 'bg-[#0D0D0D]/10'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-xl sm:text-3xl ${
                      index === 0 ? 'text-[#C4B8A8]' : 'text-[#0D0D0D]'
                    }`}
                  >
                    {benefit.icon}
                  </span>
                </div>
                <div>
                  <p
                    className={`text-sm sm:text-lg font-bold ${
                      index === 0 ? 'text-white' : 'text-[#0D0D0D]'
                    }`}
                  >
                    {benefit.title}
                  </p>
                  <p
                    className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${
                      index === 0 ? 'text-[#C4B8A8]' : 'text-[#9A9187]'
                    }`}
                  >
                    {benefit.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Valuation note */}
      <motion.footer
        className="px-4 sm:px-16 pb-4 sm:pb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="bg-[#F5F0E8] border-l-4 border-[#0D0D0D] px-4 sm:px-6 py-3 sm:py-4 flex items-start sm:items-center gap-3 sm:gap-4">
          <span className="material-symbols-outlined text-[#0D0D0D] text-xl sm:text-2xl flex-shrink-0">
            info
          </span>
          <div>
            <p className="text-[#0D0D0D] text-xs sm:text-sm">
              <strong>$4M = 20-25% equity.</strong> ROI proyectado basado en valoración 2028 (~$60M con $6M ARR).
              Dividendos proporcionales a participación desde año 2.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
