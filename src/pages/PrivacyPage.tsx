import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, ExternalLink, Lock, Cookie } from 'lucide-react';
import { APP_NAME } from '../constants/brand';

export const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-accentGreen uppercase tracking-wider flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5" />
          <span>{t('privacy.lastUpdated')}</span>
        </span>
        <h1 className="font-headline font-extrabold text-3xl sm:text-4xl text-textHeading">
          {t('privacy.title')}
        </h1>
        <p className="text-xs sm:text-sm text-textMuted">
          {t('privacy.intro')}
        </p>
      </div>

      <div className="glow-card p-6 sm:p-10 glass-panel space-y-8 text-sm text-textPrimary leading-relaxed">
        
        {/* Section 1: AdSense & Cookies */}
        <section className="space-y-3">
          <h2 className="font-headline font-bold text-lg text-textHeading flex items-center gap-2">
            <Cookie className="w-5 h-5 text-accentMagenta" />
            <span>{t('privacy.adsenseTitle')}</span>
          </h2>
          <p>{t('privacy.adsenseBody')}</p>
          <p className="text-xs text-textMuted">
            Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
          </p>
          <div className="pt-2">
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accentCyan hover:underline"
            >
              <span>Opt out of personalized advertising on Google Ad Settings</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Section 2: Client Side Data */}
        <section className="space-y-3 pt-6 border-t border-border-subtle">
          <h2 className="font-headline font-bold text-lg text-textHeading flex items-center gap-2">
            <Lock className="w-5 h-5 text-accentCyan" />
            <span>{t('privacy.clientSideDataTitle')}</span>
          </h2>
          <p>{t('privacy.clientSideDataBody')}</p>
          <p className="text-xs text-textMuted">
            All career questionnaire answers, scores, and roadmap outputs are processed strictly in client-side JavaScript memory on your browser. No questionnaire data is stored on remote servers, sent to third-party AI APIs, or retained in any database.
          </p>
        </section>

        {/* Section 3: Contact & Placeholders */}
        <section className="space-y-3 pt-6 border-t border-border-subtle bg-bgBase/50 p-4 rounded-xl border border-border-subtle">
          <h2 className="font-headline font-bold text-sm text-textHeading">
            Contact Information & Placeholders
          </h2>
          <p className="text-xs font-mono text-textMuted leading-relaxed">
            For privacy inquiries, rights requests, or regulatory questions, please contact our team:
            <br />
            Business Email: <span className="text-accentCyan">[PLACEHOLDER: business email]</span>
            <br />
            Business Address: <span className="text-accentCyan">[PLACEHOLDER: business name/address]</span>
          </p>
        </section>

      </div>

    </div>
  );
};
