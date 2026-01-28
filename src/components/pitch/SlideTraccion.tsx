'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: '68', label: 'pantallas', sublabel: 'diseñadas', icon: 'dashboard' },
  { value: '36', label: 'especialistas', sublabel: 'en equipo', icon: 'groups' },
  { value: '$1.6M', label: 'invertidos', sublabel: 'USD', icon: 'payments' },
  { value: '52%', label: 'avance', sublabel: 'total', icon: 'trending_up' },
  { value: '100%', label: 'production', sublabel: 'ready', icon: 'verified' },
  { value: '0', label: 'deuda', sublabel: 'técnica', icon: 'code' },
];

export default function SlideTraccion() {
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
          Ya está construido
        </h1>
      </motion.header>

      {/* Metrics grid */}
      <main className="flex-1 px-4 sm:px-16 pb-4 sm:pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6 h-auto sm:h-full">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className={`flex flex-col items-center justify-center p-4 sm:p-8 ${
                index === 2 ? 'bg-[#0D0D0D] text-white' : 'bg-[#F5F0E8]'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <span
                className={`material-symbols-outlined text-2xl sm:text-4xl mb-2 sm:mb-4 ${
                  index === 2 ? 'text-[#C4B8A8]' : 'text-[#9A9187]'
                }`}
              >
                {metric.icon}
              </span>
              <p
                className={`text-3xl sm:text-5xl md:text-[64px] font-black leading-none tracking-tight ${
                  index === 2 ? 'text-white' : 'text-[#0D0D0D]'
                }`}
              >
                {metric.value}
              </p>
              <p
                className={`text-sm sm:text-lg font-bold mt-1 sm:mt-2 ${
                  index === 2 ? 'text-white' : 'text-[#0D0D0D]'
                }`}
              >
                {metric.label}
              </p>
              <p
                className={`text-xs sm:text-sm ${
                  index === 2 ? 'text-[#C4B8A8]' : 'text-[#9A9187]'
                }`}
              >
                {metric.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer - Time */}
      <motion.footer
        className="px-4 sm:px-16 pb-4 sm:pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="bg-[#0D0D0D] py-4 sm:py-6 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <span className="material-symbols-outlined text-[#C4B8A8] text-2xl sm:text-3xl">
              schedule
            </span>
            <p className="text-white text-3xl sm:text-5xl font-black">8 MESES</p>
          </div>
          <p className="text-[#C4B8A8] text-sm sm:text-lg font-medium text-center px-4">
            "Velocidad de ejecución de clase mundial"
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
