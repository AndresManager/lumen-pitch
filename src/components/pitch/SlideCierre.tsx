'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    icon: 'schedule',
    title: 'Ventana de 18 meses',
    subtitle: 'antes de que lleguen competidores internacionales',
  },
  {
    icon: 'description',
    title: 'Nuevas regulaciones 2025-2026',
    subtitle: 'obligarán digitalización de clínicas',
  },
  {
    icon: 'emoji_events',
    title: 'Colombia #2 mundial en cirugía plástica',
    subtitle: 'y no existe solución local',
  },
  {
    icon: 'key',
    title: 'Dr. Botero: acceso directo a 1,100 clínicas',
    subtitle: 'listas para adoptar',
  },
];

const founders = [
  { name: 'Andrés Anaya', role: 'CEO' },
  { name: 'José Pino', role: 'CTO' },
  { name: 'Dr. Luis Botero', role: 'Chief Medical' },
];

export default function SlideCierre() {
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
          ¿Por qué ahora?
        </h1>
      </motion.header>

      {/* Reasons grid */}
      <main className="flex-1 px-4 sm:px-16 pb-4 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className={`p-4 sm:p-8 flex items-start gap-3 sm:gap-4 ${
                index === 3 ? 'bg-[#0D0D0D]' : 'bg-[#F5F0E8]'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 ${
                  index === 3 ? 'bg-white/10' : 'bg-[#0D0D0D]'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl sm:text-2xl ${
                    index === 3 ? 'text-[#C4B8A8]' : 'text-white'
                  }`}
                >
                  {reason.icon}
                </span>
              </div>
              <div>
                <p
                  className={`text-sm sm:text-lg font-bold ${
                    index === 3 ? 'text-white' : 'text-[#0D0D0D]'
                  }`}
                >
                  {reason.title}
                </p>
                <p
                  className={`text-xs sm:text-sm mt-0.5 sm:mt-1 ${
                    index === 3 ? 'text-[#C4B8A8]' : 'text-[#9A9187]'
                  }`}
                >
                  {reason.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer - Contact */}
      <motion.footer
        className="px-4 sm:px-16 pb-4 sm:pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="bg-[#0D0D0D] py-6 sm:py-8 px-4 sm:px-12">
          {/* Hablemos */}
          <p className="text-[#C4B8A8] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-center mb-4 sm:mb-6">
            Hablemos
          </p>

          {/* Founders */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-16 mb-6 sm:mb-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="material-symbols-outlined text-white text-lg sm:text-xl">
                    person
                  </span>
                </div>
                <p className="text-white text-sm sm:text-base font-bold">{founder.name}</p>
                <p className="text-[#C4B8A8] text-xs sm:text-sm">{founder.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <div className="border-t border-white/10 pt-4 sm:pt-6 text-center">
            <p className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
              LUMEN
            </p>
            <p className="text-[#C4B8A8] text-xs sm:text-sm mt-1 sm:mt-2 px-4">
              "El software que la cirugía plástica de LATAM estaba esperando"
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
