import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Compass, Sparkles, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto py-20 px-4 text-center space-y-6">
      
      {/* Multiverse Disrupted Visual */}
      <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-multiverse opacity-30 blur-xl animate-ping"></div>
        <div className="w-24 h-24 rounded-full bg-bgPanel border border-accentMagenta/60 flex items-center justify-center shadow-glow-pulse">
          <Compass className="w-12 h-12 text-accentMagenta animate-spin" />
        </div>
      </div>

      <div className="space-y-2">
        <span className="font-mono text-xs text-accentMagenta uppercase tracking-widest">
          Coordinates 404 — Cosmic Shift
        </span>
        <h1 className="font-headline font-extrabold text-3xl sm:text-4xl text-textHeading">
          {t('notFound.title')}
        </h1>
        <p className="text-xs sm:text-sm text-textMuted max-w-md mx-auto leading-relaxed">
          {t('notFound.subtitle')}
        </p>
      </div>

      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-headline font-bold text-xs text-white bg-gradient-multiverse hover:shadow-glow-pulse hover:scale-105 transition-all"
        >
          <Home className="w-4 h-4 text-white" />
          <span>{t('notFound.button')}</span>
        </Link>
      </div>

    </div>
  );
};
