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
    icon: 'payments',
    title: '35% ANUAL sobre su inversión',
    subtitle: 'Desde el año 1 — Nuestro compromiso',
  },
  {
    icon: 'calendar_month',
    title: 'DIVIDENDOS MENSUALES',
    subtitle: 'A partir del año 2 (inicio de rentabilidad)',
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
    <div className="w-full h-full flex flex-col bg-white relative overflow-hidden">
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
        className="pt-10 px-16 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-[#9A9187] text-sm font-bold uppercase tracking-[0.2em] mb-2">
          La oportunidad
        </p>
        <div className="flex items-baseline gap-4">
          <h1 className="font-serif text-[72px] font-bold text-[#0D0D0D] leading-none tracking-tight">
            Buscamos $4M
          </h1>
          <span className="text-[#9A9187] text-2xl">USD</span>
        </div>
        <p className="text-[#9A9187] text-lg mt-2">
          Para acelerar el desarrollo
        </p>
      </motion.header>

      {/* Main content */}
      <div className="flex-1 px-16 pb-4 flex gap-8">
        {/* Left - Chart */}
        <motion.section
          className="w-[55%] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[#9A9187] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Crecimiento Proyectado
          </p>

          <div className="flex-1 bg-[#FAFAF8] border border-[#E8E0D5] p-6 flex items-end justify-around">
            {projectionData.map((data, index) => {
              const heightPercent = (data.value / maxValue) * 100;
              return (
                <motion.div
                  key={data.year}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <p className="text-[#0D0D0D] text-sm font-bold">
                    ${data.value}M
                  </p>
                  <motion.div
                    className={`w-14 ${
                      index === projectionData.length - 1
                        ? 'bg-[#0D0D0D]'
                        : 'bg-[#C4B8A8]'
                    }`}
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.max(heightPercent * 2, 20)}px` }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  />
                  <p className="text-[#9A9187] text-xs font-medium">
                    {data.year}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Right - Benefits */}
        <motion.section
          className="w-[45%] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[#9A9187] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Lo que recibe el inversionista
          </p>

          <div className="flex-1 flex flex-col gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className={`flex-1 p-6 flex items-center gap-4 ${
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
                  className={`w-14 h-14 flex items-center justify-center ${
                    index === 0 ? 'bg-white/10' : 'bg-[#0D0D0D]/10'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${
                      index === 0 ? 'text-[#C4B8A8]' : 'text-[#0D0D0D]'
                    }`}
                  >
                    {benefit.icon}
                  </span>
                </div>
                <div>
                  <p
                    className={`text-lg font-bold ${
                      index === 0 ? 'text-white' : 'text-[#0D0D0D]'
                    }`}
                  >
                    {benefit.title}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
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
    </div>
  );
}
