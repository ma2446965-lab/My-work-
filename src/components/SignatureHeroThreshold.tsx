import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const SignatureHeroThreshold: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <div className="relative w-full max-w-2xl mx-auto my-12 flex items-center justify-center min-h-[380px]">
      
      {/* Background Branching Lines SVG (faint, subtle route diagram) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 select-none"
        viewBox="0 0 600 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2E88" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#7B2FFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Outer branching pathways */}
        <path d="M 300 190 Q 200 100 80 60" stroke="#7B2FFF" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
        <path d="M 300 190 Q 400 100 520 60" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 300 190 Q 150 250 50 310" stroke="#39FF88" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M 300 190 Q 450 250 550 310" stroke="#FF2E88" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
        <path d="M 300 190 L 300 30" stroke="url(#lineGrad1)" strokeWidth="2" />
        <path d="M 300 190 L 300 350" stroke="#7B2FFF" strokeWidth="1" strokeDasharray="2 2" />

        {/* Orbiting node dots */}
        <circle cx="80" cy="60" r="4" fill="#7B2FFF" className="animate-ping" />
        <circle cx="520" cy="60" r="4" fill="#00E5FF" />
        <circle cx="50" cy="310" r="4" fill="#39FF88" />
        <circle cx="550" cy="310" r="4" fill="#FF2E88" />
        <circle cx="300" cy="30" r="5" fill="#00E5FF" className="animate-pulse" />
      </svg>

      {/* Outer Glowing Hexagonal / Circular Rings */}
      <div className="relative group cursor-pointer" onClick={() => navigate('/assessment')}>
        
        {/* Ring 3 (Outer ambient glow) */}
        <div className="absolute -inset-8 rounded-full bg-gradient-multiverse opacity-25 blur-xl group-hover:opacity-60 transition-opacity duration-700 animate-glow-pulse"></div>

        {/* Ring 2 (Hexagonal dashed border) */}
        <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-dashed border-accentCyan/40 p-4 flex items-center justify-center animate-[spin_20s_linear_infinite] group-hover:border-accentMagenta transition-colors duration-500">
          <div className="w-full h-full rounded-full border border-accentViolet/30 flex items-center justify-center"></div>
        </div>

        {/* Central Threshold Portal Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => navigate('/assessment')}
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-bgPanel border border-border-subtle shadow-2xl flex flex-col items-center justify-center text-center p-6 space-y-2 group-hover:scale-105 group-hover:border-accentCyan/80 transition-all duration-500 backdrop-blur-2xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-multiverse p-[2px] shadow-glow-pulse group-hover:rotate-12 transition-transform duration-500">
              <div className="w-full h-full bg-bgBase rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accentCyan group-hover:text-accentMagenta transition-colors" />
              </div>
            </div>

            <span className="font-headline font-bold text-sm sm:text-base text-textHeading tracking-wide group-hover:text-accentCyan transition-colors">
              {t('hero.cta')}
            </span>

            <span className="text-[11px] font-mono text-textMuted flex items-center gap-1 group-hover:text-accentMagenta">
              <span>Enter Multiverse</span>
              {isRtl ? (
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              )}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
