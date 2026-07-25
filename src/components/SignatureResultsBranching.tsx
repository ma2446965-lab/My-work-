import React from 'react';
import { FieldKey } from '../data/quizQuestions';
import { FIELD_DISPLAY_NAMES } from '../data/earningData';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SignatureResultsBranchingProps {
  primaryField: FieldKey;
  level: string;
}

export const SignatureResultsBranching: React.FC<SignatureResultsBranchingProps> = ({
  primaryField,
  level,
}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';

  const fields: FieldKey[] = ['programming', 'design', 'data', 'marketing', 'business'];

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 p-6 sm:p-10 rounded-2xl glass-panel border border-border-subtle shadow-2xl overflow-hidden">
      
      {/* Background Glow for primary field payoff */}
      <div className="absolute -top-24 ltr:-right-24 rtl:-left-24 w-80 h-80 rounded-full bg-accentMagenta/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 ltr:-left-24 rtl:-right-24 w-80 h-80 rounded-full bg-accentCyan/15 blur-3xl pointer-events-none"></div>

      {/* Heading Header */}
      <div className="text-center space-y-2 mb-8 relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-accentCyan bg-accentCyan/10 border border-accentCyan/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Multiverse Convergence Complete</span>
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-textHeading">
          Out of Infinite Paths, This Is Yours
        </h2>
        <p className="text-xs sm:text-sm text-textMuted max-w-xl mx-auto">
          Our scoring engine evaluated your problem-solving rhythm and skill inventory across all 5 digital domains.
        </p>
      </div>

      {/* SVG Branching Lines Map */}
      <div className="relative w-full h-48 sm:h-56 my-4 select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="activePathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF2E88" />
              <stop offset="50%" stopColor="#7B2FFF" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Central Origin Node */}
          <circle cx="80" cy="100" r="10" fill="#14121F" stroke="#7B2FFF" strokeWidth="3" />
          <circle cx="80" cy="100" r="4" fill="#00E5FF" />

          {/* 5 Field Paths */}
          {fields.map((field, idx) => {
            const yPos = 30 + idx * 35; // 30, 65, 100, 135, 170
            const isPrimary = field === primaryField;

            return (
              <g key={field}>
                {/* Branch line */}
                <path
                  d={`M 80 100 C 250 100, 350 ${yPos}, 600 ${yPos}`}
                  stroke={isPrimary ? 'url(#activePathGrad)' : '#2A2640'}
                  strokeWidth={isPrimary ? '4' : '1.5'}
                  strokeDasharray={isPrimary ? 'none' : '4 4'}
                  filter={isPrimary ? 'url(#glow)' : undefined}
                  className={isPrimary ? 'animate-pulse' : 'opacity-40'}
                />

                {/* Target Node */}
                <circle
                  cx="600"
                  cy={yPos}
                  r={isPrimary ? '8' : '5'}
                  fill={isPrimary ? '#00E5FF' : '#14121F'}
                  stroke={isPrimary ? '#FF2E88' : '#3A345B'}
                  strokeWidth={isPrimary ? '3' : '1.5'}
                />

                {/* Label text */}
                <text
                  x="620"
                  y={yPos + 4}
                  fill={isPrimary ? '#F5F3FA' : '#6A638B'}
                  fontSize={isPrimary ? '13' : '11'}
                  fontWeight={isPrimary ? 'bold' : 'normal'}
                  fontFamily="Inter, sans-serif"
                >
                  {FIELD_DISPLAY_NAMES[field][currentLang]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Winner Banner */}
      <div className="mt-6 pt-6 border-t border-border-subtle/60 flex flex-col sm:flex-row items-center justify-between gap-4 bg-bgBase/50 p-4 rounded-xl border border-accentMagenta/20">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-accentGreen shrink-0" />
          <div>
            <div className="text-xs font-mono text-textMuted uppercase tracking-wider">
              Primary Trajectory Confirmed
            </div>
            <div className="font-headline font-bold text-lg text-textHeading">
              {FIELD_DISPLAY_NAMES[primaryField][currentLang]}
            </div>
          </div>
        </div>

        <span className="px-3.5 py-1.5 rounded-lg bg-accentMagenta/20 border border-accentMagenta/40 text-accentMagenta font-mono font-bold text-xs uppercase tracking-wider">
          {level} Level Match
        </span>
      </div>

    </div>
  );
};
