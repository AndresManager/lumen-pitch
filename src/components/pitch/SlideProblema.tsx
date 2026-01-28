'use client';

import { motion } from 'framer-motion';

const problems = [
  { stat: '67%', label: 'Historias', sublabel: 'fragmentadas', icon: 'folder_off' },
  { stat: '40%', label: 'Fotos', sublabel: 'perdidas', icon: 'image_not_supported' },
  { stat: '-23%', label: 'Conversión', sublabel: 'perdida', icon: 'trending_down' },
  { stat: '18%', label: 'Citas', sublabel: 'perdidas', icon: 'event_busy' },
  { stat: '85%', label: 'No cumplen', sublabel: 'normativas', icon: 'gavel' },
  { stat: '3x', label: 'más', sublabel: 'demandas', icon: 'report' },
];

export default function SlideProblema() {
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
          Las clínicas estéticas operan en caos
        </h1>
      </motion.header>

      {/* Stats grid */}
      <main className="flex-1 px-4 sm:px-16 pb-4 sm:pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6 h-auto sm:h-full">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.stat}
              className={`flex flex-col items-center justify-center p-4 sm:p-8 ${
                index === 5 ? 'bg-[#0D0D0D] text-white' : 'bg-[#F5F0E8]'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <span
                className={`material-symbols-outlined text-2xl sm:text-4xl mb-2 sm:mb-4 ${
                  index === 5 ? 'text-[#C4B8A8]' : 'text-[#9A9187]'
                }`}
              >
                {problem.icon}
              </span>
              <p
                className={`text-3xl sm:text-5xl md:text-[64px] font-black leading-none tracking-tight ${
                  index === 5 ? 'text-white' : 'text-[#0D0D0D]'
                }`}
              >
                {problem.stat}
              </p>
              <p
                className={`text-sm sm:text-lg font-bold mt-1 sm:mt-2 ${
                  index === 5 ? 'text-white' : 'text-[#0D0D0D]'
                }`}
              >
                {problem.label}
              </p>
              <p
                className={`text-xs sm:text-sm ${
                  index === 5 ? 'text-[#C4B8A8]' : 'text-[#9A9187]'
                }`}
              >
                {problem.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Quote */}
      <motion.footer
        className="px-4 sm:px-16 pb-4 sm:pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="border-l-4 border-[#0D0D0D] pl-4 sm:pl-6 py-3 sm:py-4 bg-[#FAFAF8]">
          <p className="text-[#0D0D0D] text-sm sm:text-xl italic">
            "Pasamos más tiempo buscando archivos que atendiendo pacientes."
          </p>
          <p className="text-[#9A9187] text-xs sm:text-sm mt-1 sm:mt-2 font-medium">
            — Dr. Ricardo Menéndez, Bogotá
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
