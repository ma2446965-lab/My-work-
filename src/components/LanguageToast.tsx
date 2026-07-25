import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, X, Check } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../i18n/config';

export const LanguageToast: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showToast, setShowToast] = useState(false);
  const [suggestedLang, setSuggestedLang] = useState<string | null>(null);

  useEffect(() => {
    const hasPrompted = localStorage.getItem('skillverse-lang-prompted');
    if (hasPrompted) return;

    const browserLang = navigator.language.split('-')[0].toLowerCase();
    const current = i18n.language.split('-')[0].toLowerCase();

    if (browserLang && browserLang !== current) {
      const match = SUPPORTED_LANGUAGES.find(l => l.code === browserLang);
      if (match) {
        setSuggestedLang(match.code);
        setShowToast(true);
      }
    }
  }, [i18n.language]);

  const handleSwitch = () => {
    if (suggestedLang) {
      i18n.changeLanguage(suggestedLang);
    }
    localStorage.setItem('skillverse-lang-prompted', 'true');
    setShowToast(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('skillverse-lang-prompted', 'true');
    setShowToast(false);
  };

  if (!showToast || !suggestedLang) return null;

  const matchedLangInfo = SUPPORTED_LANGUAGES.find(l => l.code === suggestedLang);

  return (
    <div className="fixed bottom-5 ltr:right-5 rtl:left-5 z-50 max-w-sm w-full p-4 rounded-xl glass-panel border border-accentCyan/40 shadow-2xl animate-float space-y-3">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-accentCyan/15 text-accentCyan shrink-0">
          <Globe className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-textHeading font-headline">
            Language Detected
          </h4>
          <p className="text-xs text-textMuted">
            {t('toast.suggestSwitch', { lang: matchedLangInfo?.name || suggestedLang })}
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="text-textMuted hover:text-textHeading p-1"
          aria-label={t('toast.dismiss')}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={handleSwitch}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-multiverse hover:opacity-90 transition-opacity"
        >
          <Check className="w-3.5 h-3.5" />
          <span>{t('toast.switchBtn', { lang: matchedLangInfo?.name || suggestedLang })}</span>
        </button>
        <button
          onClick={handleDismiss}
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-textMuted hover:text-textHeading hover:bg-bgPanel"
        >
          {t('toast.dismiss')}
        </button>
      </div>
    </div>
  );
};
