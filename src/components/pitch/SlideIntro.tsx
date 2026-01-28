'use client';

import { motion } from 'framer-motion';

const founders = [
  { name: 'Andrés Anaya', role: 'CEO' },
  { name: 'José Pino', role: 'CTO' },
  { name: 'Dr. Luis Botero', role: 'Chief Medical' },
];

const badges = [
  '100% en español',
  'HIPAA Compliant',
  'Omnicanalidad',
];

export default function SlideIntro() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#0D0D0D 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#0D0D0D]" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#0D0D0D]" />
      <div className="absolute bottom-28 left-8 w-16 h-16 border-b-2 border-l-2 border-[#0D0D0D]" />
      <div className="absolute bottom-28 right-8 w-16 h-16 border-b-2 border-r-2 border-[#0D0D0D]" />

      {/* Main content */}
      <motion.div
        className="flex flex-col items-center text-center z-10 max-w-4xl px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <motion.h1
          className="font-serif text-[120px] font-bold text-[#0D0D0D] leading-none tracking-tight mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          LUMEN
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-[#0D0D0D] text-2xl font-medium mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          "El software que la cirugía plástica de LATAM
          <br />
          estaba esperando"
        </motion.p>

        {/* Subtitle */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[#9A9187] text-lg mb-4">
            EHR + IA especializado para clínicas estéticas
          </p>

          {/* Badges */}
          <div className="flex items-center justify-center gap-4">
            {badges.map((badge, index) => (
              <motion.span
                key={badge}
                className="px-4 py-2 bg-[#F5F0E8] text-[#0D0D0D] text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-24 h-[2px] bg-[#0D0D0D] mb-12"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />

        {/* Founders */}
        <motion.div
          className="flex items-center justify-center gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-[#0D0D0D] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-white text-2xl">person</span>
              </div>
              <p className="text-[#0D0D0D] text-base font-bold">{founder.name}</p>
              <p className="text-[#9A9187] text-sm">{founder.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
