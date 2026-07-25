import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Compass, Globe, Heart } from 'lucide-react';
import { APP_NAME } from '../constants/brand';
import { SUPPORTED_LANGUAGES, LanguageInfo } from '../i18n/config';

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <footer className="w-full bg-bgPanel/90 border-t border-border-subtle mt-20 text-textMuted text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-multiverse p-[2px]">
                <div className="w-full h-full bg-bgBase rounded-[6px] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-accentCyan" />
                </div>
              </div>
              <span className="font-headline font-bold text-lg text-textHeading">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-xs text-textMuted leading-relaxed">
              Global client-side career assessment engine revealing personalized roadmaps and freelance earning potential across 5 core tech domains.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-headline text-xs uppercase tracking-wider text-textHeading font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-accentCyan transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="hover:text-accentCyan transition-colors">
                  {t('nav.assessment')}
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-accentCyan transition-colors">
                  {t('nav.resources')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-accentCyan transition-colors">
                  {t('nav.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Corporate */}
          <div className="space-y-3">
            <h4 className="font-headline text-xs uppercase tracking-wider text-textHeading font-semibold">
              Platform & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-accentCyan transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-accentCyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-accentCyan transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accentCyan transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Language Selection */}
          <div className="space-y-3">
            <h4 className="font-headline text-xs uppercase tracking-wider text-textHeading font-semibold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-accentCyan" />
              Select Language
            </h4>
            <div className="grid grid-cols-2 gap-1.5">
              {SUPPORTED_LANGUAGES.map((lang: LanguageInfo) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-left rtl:text-right px-2.5 py-1.5 rounded text-xs transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-accentMagenta/20 text-accentMagenta font-semibold'
                      : 'hover:bg-bgBase text-textMuted hover:text-textHeading'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle/50 flex flex-col sm:flex-row items-center justify-between text-xs text-textMuted gap-4">
          <p>
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved. 100% Client-Side Privacy.
          </p>
          <div className="flex items-center gap-1 text-textMuted/70">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-accentMagenta fill-accentMagenta" />
            <span>for global learners worldwide.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
