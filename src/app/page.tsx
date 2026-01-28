'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideIntro from '@/components/pitch/SlideIntro';
import SlideProblema from '@/components/pitch/SlideProblema';
import SlideMercado from '@/components/pitch/SlideMercado';
import SlideSolucion from '@/components/pitch/SlideSolucion';
import SlideTraccion from '@/components/pitch/SlideTraccion';
import SlideEconomics from '@/components/pitch/SlideEconomics';
import SlideAsk from '@/components/pitch/SlideAsk';
import SlideCierre from '@/components/pitch/SlideCierre';

const slides = [
  { id: 1, component: SlideIntro, label: 'Intro' },
  { id: 2, component: SlideProblema, label: 'Problema' },
  { id: 3, component: SlideMercado, label: 'Mercado' },
  { id: 4, component: SlideSolucion, label: 'Solución' },
  { id: 5, component: SlideTraccion, label: 'Tracción' },
  { id: 6, component: SlideEconomics, label: 'Negocio' },
  { id: 7, component: SlideAsk, label: 'Inversión' },
  { id: 8, component: SlideCierre, label: 'Cierre' },
];

// Credenciales
const VALID_USER = 'Admin';
const VALID_PASSWORD = 'Lumen2026';

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simular pequeño delay para UX
    setTimeout(() => {
      if (username === VALID_USER && password === VALID_PASSWORD) {
        // Guardar sesión
        sessionStorage.setItem('pitch_authenticated', 'true');
        onLogin();
      } else {
        setError('Usuario o contraseña incorrectos');
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center relative overflow-hidden">
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
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#0D0D0D]" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#0D0D0D]" />

      <motion.div
        className="w-full max-w-md px-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-[72px] font-bold text-[#0D0D0D] leading-none tracking-tight">
            LUMEN
          </h1>
          <p className="text-[#9A9187] text-sm mt-4 uppercase tracking-[0.2em]">
            Investor Pitch Deck
          </p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#9A9187] text-xs font-bold uppercase tracking-wider mb-2">
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-4 bg-[#F5F0E8] border border-[#E8E0D5] text-[#0D0D0D] text-base focus:outline-none focus:border-[#0D0D0D] transition-colors"
              placeholder="Ingrese su usuario"
              required
            />
          </div>

          <div>
            <label className="block text-[#9A9187] text-xs font-bold uppercase tracking-wider mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 bg-[#F5F0E8] border border-[#E8E0D5] text-[#0D0D0D] text-base focus:outline-none focus:border-[#0D0D0D] transition-colors"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 text-red-600 text-sm"
              >
                <span className="material-symbols-outlined text-lg">error</span>
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-[#0D0D0D] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#1A1A1A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <motion.span
                  className="material-symbols-outlined text-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  progress_activity
                </motion.span>
                Verificando...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">login</span>
                Acceder
              </>
            )}
          </button>
        </form>

        {/* Footer note */}
        <p className="text-center text-[#C4B8A8] text-xs mt-8">
          Contenido confidencial para inversionistas
        </p>
      </motion.div>
    </div>
  );
}

function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const handleLogout = () => {
    sessionStorage.removeItem('pitch_authenticated');
    window.location.reload();
  };

  return (
    <div className="w-screen h-screen bg-white overflow-hidden flex flex-col">
      {/* Main content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation bar */}
      <nav className="h-20 bg-[#0D0D0D] flex items-center justify-between px-8">
        {/* Left - Prev button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
          <span className="text-sm font-medium">Anterior</span>
        </button>

        {/* Center - Slide indicators */}
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`group flex items-center gap-2 px-3 py-2 rounded transition-all ${
                index === currentSlide
                  ? 'bg-white/10'
                  : 'hover:bg-white/5'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white w-6'
                    : index < currentSlide
                    ? 'bg-[#C4B8A8]'
                    : 'bg-white/30'
                }`}
              />
              <span
                className={`text-xs font-medium transition-all ${
                  index === currentSlide
                    ? 'text-white opacity-100'
                    : 'text-white/50 opacity-0 group-hover:opacity-100'
                }`}
              >
                {slide.label}
              </span>
            </button>
          ))}
        </div>

        {/* Right - Next button & Logout */}
        <div className="flex items-center gap-4">
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 bg-white text-[#0D0D0D] px-4 py-2 font-medium text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors hover:bg-[#E8E0D5]"
          >
            <span>Siguiente</span>
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
            title="Cerrar sesión"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default function PitchPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check session on mount
  useEffect(() => {
    const authenticated = sessionStorage.getItem('pitch_authenticated') === 'true';
    setIsAuthenticated(authenticated);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen bg-white flex items-center justify-center">
        <motion.span
          className="material-symbols-outlined text-4xl text-[#C4B8A8]"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          progress_activity
        </motion.span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return <PitchDeck />;
}
