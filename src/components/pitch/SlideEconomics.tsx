'use client';

import { motion } from 'framer-motion';

const questions = [
  {
    question: '¿Cuánto cuesta conseguir una clínica?',
    answer: '$0',
    note: '(los médicos se refieren)',
  },
  {
    question: '¿Cuánto paga cada clínica?',
    answer: '$1,200/mes',
    note: null,
  },
  {
    question: '¿Cuánto tiempo se quedan?',
    answer: '5+ años',
    note: '(el software se vuelve crítico)',
  },
];

const math = [
  { clinics: '1 clínica', monthly: '$1,200/mes', annual: '$14,400/año' },
  { clinics: '100 clínicas', monthly: '$120K/mes', annual: '$1.44M/año' },
  { clinics: '1,000 clínicas', monthly: '$1.2M/mes', annual: '$14.4M/año' },
];

export default function SlideEconomics() {
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
        className="pt-6 sm:pt-12 px-4 sm:px-16 pb-4 sm:pb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-serif text-xl sm:text-3xl md:text-[48px] font-bold text-[#0D0D0D] leading-tight tracking-tight">
          ¿Por qué es un super negocio?
        </h1>
      </motion.header>

      {/* Questions */}
      <motion.section
        className="px-4 sm:px-16 pb-4 sm:pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="border border-[#0D0D0D]">
          {questions.map((item, index) => (
            <motion.div
              key={item.question}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 gap-2 sm:gap-4 ${
                index !== questions.length - 1 ? 'border-b border-[#0D0D0D]' : ''
              } ${index === 0 ? 'bg-[#F5F0E8]' : 'bg-white'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <p className="text-[#0D0D0D] text-sm sm:text-xl">
                {item.question}
              </p>
              <div className="text-left sm:text-right">
                <p className="text-[#0D0D0D] text-2xl sm:text-4xl font-black">
                  {item.answer}
                </p>
                {item.note && (
                  <p className="text-[#9A9187] text-xs sm:text-sm mt-1">
                    {item.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Math section */}
      <motion.section
        className="px-4 sm:px-16 pb-4 flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-[#9A9187] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4">
          La matemática es simple
        </p>

        <div className="bg-[#0D0D0D] p-4 sm:p-8">
          <div className="space-y-3 sm:space-y-4">
            {math.map((row, index) => (
              <motion.div
                key={row.clinics}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <p className="text-white text-sm sm:text-xl font-medium sm:w-48">
                  {row.clinics}
                </p>
                <div className="flex items-center gap-2 sm:gap-0 sm:flex-1 sm:justify-end">
                  <p className="text-[#C4B8A8] text-sm sm:text-xl hidden sm:block">=</p>
                  <p className="text-white text-sm sm:text-xl font-bold sm:w-40 sm:text-center">
                    {row.monthly}
                  </p>
                  <p className="text-[#C4B8A8] text-sm sm:text-xl">=</p>
                  <p className={`text-sm sm:text-xl font-black sm:w-40 sm:text-right ${
                    index === 2 ? 'text-[#C4B8A8] sm:text-2xl' : 'text-white'
                  }`}>
                    {row.annual}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dr. Botero note */}
      <motion.footer
        className="px-4 sm:px-16 pb-4 sm:pb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="bg-[#F5F0E8] border-l-4 border-[#0D0D0D] px-4 sm:px-6 py-3 sm:py-4 flex items-start sm:items-center gap-3 sm:gap-4">
          <span className="material-symbols-outlined text-[#0D0D0D] text-xl sm:text-2xl flex-shrink-0">
            push_pin
          </span>
          <div>
            <p className="text-[#0D0D0D] text-sm sm:text-base">
              <strong>Solo en Colombia,</strong> el Dr. Botero tiene entrada directa
              a <strong>1,100 clínicas</strong> a través de su red profesional.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
