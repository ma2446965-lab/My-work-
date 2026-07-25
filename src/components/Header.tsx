import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe, Menu, X, Compass, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { APP_NAME } from '../constants/brand';
import { SUPPORTED_LANGUAGES, LanguageInfo } from '../i18n/config';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const currentLang = SUPPORTED_LANGUAGES.find(l => l.code === i18n.language) || SUPPORTED_LANGUAGES[0];

  const changeLanguage = (lang: LanguageInfo) => {
    i18n.changeLanguage(lang.code);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/resources', label: t('nav.resources') },
    { path: '/about', label: t('nav.about') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-border-subtle backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Leading side: Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-multiverse p-[2px] shadow-glow-pulse group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-bgBase rounded-[10px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-accentCyan group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-xl tracking-tight text-textHeading flex items-center gap-1">
              {APP_NAME}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accentMagenta animate-pulse"></span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6 rtl:space-x-reverse font-medium text-sm">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'text-accentCyan bg-accentCyan/10 font-semibold'
                    : 'text-textMuted hover:text-textHeading hover:bg-bgPanel/50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Trailing side: Language Switcher, Theme Toggle, CTA */}
        <div className="flex items-center gap-3">
          
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bgPanel/80 border border-border-subtle text-textPrimary text-xs font-mono hover:border-accentCyan/50 transition-all"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-accentCyan" />
              <span>{currentLang.name}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute ltr:right-0 rtl:left-0 mt-2 w-40 rounded-xl glass-panel border border-border-subtle shadow-2xl py-1 z-50">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang)}
                    className={`w-full text-left rtl:text-right px-4 py-2 text-xs font-medium flex items-center justify-between transition-colors ${
                      currentLang.code === lang.code
                        ? 'bg-accentMagenta/15 text-accentMagenta font-bold'
                        : 'text-textPrimary hover:bg-bgPanel'
                    }`}
                  >
                    <span>{lang.name}</span>
                    {currentLang.code === lang.code && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accentMagenta"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-bgPanel/80 border border-border-subtle text-textMuted hover:text-accentCyan hover:border-accentCyan/50 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-accentCyan" />
            ) : (
              <Moon className="w-4 h-4 text-accentMagenta" />
            )}
          </button>

          {/* CTA Button */}
          <Link
            to="/assessment"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-multiverse hover:shadow-glow-pulse hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('nav.startQuiz')}</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-textMuted hover:text-textHeading"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-border-subtle px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-textPrimary hover:bg-bgPanel hover:text-accentCyan"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-border-subtle">
            <Link
              to="/assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-multiverse"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('nav.startQuiz')}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
