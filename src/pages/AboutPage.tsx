import React from 'react';
import { useTranslation } from 'react-i18next';
import { APP_NAME } from '../constants/brand';
import { Compass, ShieldCheck, Cpu, Target } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-12">
      
      {/* Title Header */}
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-accentCyan bg-accentCyan/15 border border-accentCyan/30">
          <Compass className="w-3.5 h-3.5" />
          <span>Multiverse Vision</span>
        </span>
        <h1 className="font-headline font-extrabold text-3xl sm:text-5xl text-textHeading">
          {t('about.title')}
        </h1>
        <p className="text-sm text-textMuted max-w-xl mx-auto">
          Solving career choice paralysis through deterministic client-side evaluation.
        </p>
      </div>

      {/* Main Copy Content */}
      <div className="glow-card p-6 sm:p-10 glass-panel space-y-6 text-textPrimary leading-relaxed text-sm sm:text-base">
        <p>{t('about.content1')}</p>
        <p>{t('about.content2')}</p>
        <p>{t('about.content3')}</p>
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl glass-panel border border-border-subtle space-y-3">
          <ShieldCheck className="w-6 h-6 text-accentGreen" />
          <h3 className="font-headline font-bold text-sm text-textHeading">100% Client-Side</h3>
          <p className="text-xs text-textMuted leading-relaxed">
            No remote databases, no tracking, and no AI API server latency. Everything calculates instantly in browser memory.
          </p>
        </div>

        <div className="p-6 rounded-xl glass-panel border border-border-subtle space-y-3">
          <Cpu className="w-6 h-6 text-accentMagenta" />
          <h3 className="font-headline font-bold text-sm text-textHeading">Real Community Resources</h3>
          <p className="text-xs text-textMuted leading-relaxed">
            Every recommended roadmap links directly to top-tier free resources like freeCodeCamp, MDN, Kaggle, and HubSpot.
          </p>
        </div>

        <div className="p-6 rounded-xl glass-panel border border-border-subtle space-y-3">
          <Target className="w-6 h-6 text-accentCyan" />
          <h3 className="font-headline font-bold text-sm text-textHeading">Global Earning Transparency</h3>
          <p className="text-xs text-textMuted leading-relaxed">
            Transparent freelance rate benchmarks keyed by field and total years of work experience.
          </p>
        </div>
      </div>

      {/* Footer Ad Slot */}
      <AdPlaceholder slotId="about-footer-slot" />

    </div>
  );
};
