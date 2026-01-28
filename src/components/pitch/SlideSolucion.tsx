'use client';

import { motion } from 'framer-motion';

const beforeItems = [
  { icon: 'folder', text: 'Papeles' },
  { icon: 'smartphone', text: 'Fotos en celular' },
  { icon: 'table_chart', text: 'Excel caótico' },
  { icon: 'help', text: 'Sin trazabilidad' },
];

const afterItems = [
  { icon: 'check_circle', text: 'Historia única' },
  { icon: 'check_circle', text: 'Galería PRE/POST' },
  { icon: 'check_circle', text: 'Agenda + CRM' },
  { icon: 'check_circle', text: 'Workflow 4 fases' },
];

const workflow = [
  { num: '1', title: 'COMERCIAL', items: ['Valoración', 'Fotos PRE', 'Presupuesto'] },
  { num: '2', title: 'PRE-QUIRÚRGICO', items: ['Consentimientos', 'Checklist OMS', 'Validación'] },
  { num: '3', title: 'CIRUGÍA', items: ['Time-Out', 'Nota Op.', 'Alta'] },
  { num: '4', title: 'RESULTADOS', items: ['Fotos POST', 'Comparador', '"Momento WOW"'] },
];

const badges = [
  { icon: 'lock', text: 'HIPAA' },
  { icon: 'smart_toy', text: 'IA Nativa' },
  { icon: 'language', text: '100% Español' },
  { icon: 'devices', text: 'Omnicanal' },
];

export default function SlideSolucion() {
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
        className="pt-4 sm:pt-12 px-4 sm:px-16 pb-3 sm:pb-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1 className="font-serif text-3xl sm:text-[48px] font-bold text-[#0D0D0D] leading-none tracking-tight">
            LUMEN
          </h1>
          <p className="text-[#9A9187] text-sm sm:text-lg mt-1">
            El EHR que entiende cirugía plástica
          </p>
        </div>
      </motion.header>

      {/* Before / After */}
      <motion.section
        className="px-4 sm:px-16 pb-4 sm:pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Before */}
          <div className="flex-1 bg-[#FAFAF8] border border-[#E8E0D5] p-4 sm:p-6">
            <p className="text-[#9A9187] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              Antes
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:space-y-3">
              {beforeItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2 sm:gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <span className="material-symbols-outlined text-[#9A9187] text-lg sm:text-xl">
                    {item.icon}
                  </span>
                  <span className="text-[#9A9187] text-xs sm:text-sm line-through">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Arrow - hidden on mobile */}
          <div className="hidden sm:flex items-center">
            <span className="material-symbols-outlined text-[#0D0D0D] text-4xl">
              arrow_forward
            </span>
          </div>

          {/* After */}
          <div className="flex-1 bg-[#0D0D0D] p-4 sm:p-6">
            <p className="text-[#C4B8A8] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              Después
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:space-y-3">
              {afterItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2 sm:gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <span className="material-symbols-outlined text-[#C4B8A8] text-lg sm:text-xl">
                    {item.icon}
                  </span>
                  <span className="text-white text-xs sm:text-sm font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Workflow */}
      <motion.section
        className="flex-1 px-4 sm:px-16 pb-3 sm:pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-[#9A9187] text-xs font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
          Workflow Especializado
        </p>

        <div className="grid grid-cols-2 sm:flex gap-0 border border-[#0D0D0D]">
          {workflow.map((step, index) => (
            <motion.div
              key={step.num}
              className={`p-3 sm:p-5 sm:flex-1 ${
                index % 2 !== 0 || index === workflow.length - 1 ? '' : 'border-r border-[#0D0D0D]'
              } ${index < 2 ? 'border-b sm:border-b-0' : ''} ${
                index !== workflow.length - 1 ? 'sm:border-r sm:border-[#0D0D0D]' : ''
              } ${index === 3 ? 'bg-[#F5F0E8]' : 'bg-white'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="w-6 h-6 sm:w-8 sm:h-8 bg-[#0D0D0D] text-white flex items-center justify-center text-xs sm:text-sm font-bold">
                  {step.num}
                </span>
                <span className="text-[#0D0D0D] text-xs sm:text-sm font-bold">
                  {step.title}
                </span>
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                {step.items.map((item) => (
                  <p
                    key={item}
                    className={`text-[10px] sm:text-xs ${
                      item === '"Momento WOW"'
                        ? 'text-[#0D0D0D] font-bold'
                        : 'text-[#9A9187]'
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Badges */}
      <motion.footer
        className="px-4 sm:px-16 pb-4 sm:pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-5 sm:py-3 bg-[#F5F0E8]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.05 }}
            >
              <span className="material-symbols-outlined text-[#0D0D0D] text-base sm:text-lg">
                {badge.icon}
              </span>
              <span className="text-[#0D0D0D] text-xs sm:text-sm font-bold">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.footer>
    </div>
  );
}
