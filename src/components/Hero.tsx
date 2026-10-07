import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Gauge from './Gauge';
import heroVideo from '../assets/video/hero-loop.mp4';

export default function Hero() {
  // Efecto Tilt 3D interactivo para el Gauge
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Pausar los videos si el usuario prefiere menos movimiento
  const fillVideoRef = useRef<HTMLVideoElement | null>(null);
  const frameVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      fillVideoRef.current?.pause();
      frameVideoRef.current?.pause();
    }
  }, []);

  return (
    <header className="hero position-relative overflow-hidden" id="inicio">
      {/* Fondo de dos capas: difuminada (llena cualquier pantalla) +
          nítida centrada (respeta la proporción real del video) */}
      <div className="hero-video-bg">
        <div className="hero-video-bg-fill">
          <video ref={fillVideoRef} autoPlay muted loop playsInline preload="auto">
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="hero-video-bg-frame">
          <video ref={frameVideoRef} autoPlay muted loop playsInline preload="auto">
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="stripe-diag" />

      {/* Línea de ruta animada */}
      <div className="route-line">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M -50 650 C 250 600, 350 750, 620 620 S 950 400, 1250 460"
            stroke="#e2231a"
            strokeWidth={2}
            fill="none"
            strokeDasharray="8 12"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          />
        </svg>
      </div>

      <div className="container position-relative z-2">
        <div className="row align-items-center gy-5">
          
          {/* Bloque de Texto Animado */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Guadalajara, Jalisco &middot; Desde 2022
            </motion.span>

            <motion.h1
              className="hero-title-glitch"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              GLC
              <br />
              <span className="text-rally glow-text">Lancer</span> Club
            </motion.h1>

            <motion.p
              className="subtitle mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Un club de propietarios y entusiastas del Mitsubishi Lancer en Guadalajara.
              Rodadas, mantenimiento entre banda y la misma obsesión por el mismo auto.
            </motion.p>

            <motion.div
              className="d-flex flex-wrap gap-3 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a href="#unete" className="btn btn-rally btn-animated">
                <span>Únete al club</span>
                <ChevronRight size={16} className="ms-1" />
              </a>
              <a href="#club" className="btn btn-outline-glc btn-animated">
                Conoce la historia
              </a>
            </motion.div>
          </motion.div>

          {/* Tacómetro interactivo con efecto 3D */}
          <div className="col-lg-5">
            <motion.div
              className="gauge-card-3d"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="gauge-glow-overlay" />
              <Gauge centerValue="2022" centerLabel="Fundación" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Cue de scroll animado */}
      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span>SCROLL</span>
        <div className="bar" />
      </motion.div>
    </header>
  );
}