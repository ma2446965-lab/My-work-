import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, ShieldAlert } from 'lucide-react';
import { APP_NAME } from '../constants/brand';

export const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-accentCyan uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Agreement</span>
        </span>
        <h1 className="font-headline font-extrabold text-3xl sm:text-4xl text-textHeading">
          {t('terms.title')}
        </h1>
      </div>

      <div className="glow-card p-6 sm:p-10 glass-panel space-y-6 text-sm text-textPrimary leading-relaxed">
        <p>{t('terms.content')}</p>

        <div className="space-y-3 pt-4 border-t border-border-subtle">
          <h3 className="font-headline font-bold text-base text-textHeading flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-accentMagenta" />
            <span>Disclaimer of Guarantees</span>
          </h3>
          <p className="text-xs text-textMuted leading-relaxed">
            All career path predictions, skill estimations, timelines, and freelance rate benchmarks provided by {APP_NAME} are intended solely for educational, exploratory, and planning purposes. Actual hiring outcomes, contract earnings, and time-to-mastery vary based on individual effort, geographic location, market conditions, and economic shifts.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-border-subtle">
          <h3 className="font-headline font-bold text-base text-textHeading">
            Intellectual Property & Content
          </h3>
          <p className="text-xs text-textMuted leading-relaxed">
            All custom graphics, scoring algorithms, layout designs, and compiled data structures are the property of {APP_NAME}. External brand names and resources referenced in roadmaps (e.g. freeCodeCamp, MDN, Kaggle) belong to their respective copyright holders and are cited under fair educational reference.
          </p>
        </div>
      </div>

    </div>
  );
};
