import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles, Code2, Palette, BarChart3, Megaphone, Briefcase, ArrowRight, ArrowLeft } from 'lucide-react';
import { SignatureHeroThreshold } from '../components/SignatureHeroThreshold';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const steps = [
    {
      num: '01',
      title: t('howItWorks.step1Title'),
      desc: t('howItWorks.step1Desc'),
      color: 'text-accentMagenta',
    },
    {
      num: '02',
      title: t('howItWorks.step2Title'),
      desc: t('howItWorks.step2Desc'),
      color: 'text-accentViolet',
    },
    {
      num: '03',
      title: t('howItWorks.step3Title'),
      desc: t('howItWorks.step3Desc'),
      color: 'text-accentCyan',
    },
  ];

  const domains = [
    { key: 'programming', icon: Code2, titleEn: 'Programming & Web Dev', titleAr: 'البرمجة وتطوير الويب' },
    { key: 'design', icon: Palette, titleEn: 'UI/UX & Product Design', titleAr: 'تصميم الواجهات UI/UX' },
    { key: 'data', icon: BarChart3, titleEn: 'Data Science & Analysis', titleAr: 'تحليل البيانات وعلومها' },
    { key: 'marketing', icon: Megaphone, titleEn: 'Digital Marketing & Growth', titleAr: 'التسويق الرقمي والنمو' },
    { key: 'business', icon: Briefcase, titleEn: 'Business & Entrepreneurship', titleAr: 'إدارة الأعمال والمشاريع' },
  ];

  return (
    <div className="space-y-16 py-8">
      
      {/* Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto space-y-6 pt-6">
        
        {/* Multiverse Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-accentMagenta/30 shadow-glow-pulse animate-float">
          <Sparkles className="w-4 h-4 text-accentMagenta" />
          <span className="text-xs font-mono font-bold tracking-wide text-textHeading">
            {t('hero.badge')}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-headline font-extrabold text-3xl sm:text-5xl lg:text-6xl text-textHeading tracking-tight leading-[1.15]">
          {t('hero.title')}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-sm sm:text-base text-textMuted max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* Signature Interactive Threshold Component */}
        <SignatureHeroThreshold />

        {/* Secondary Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/assessment"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-headline font-bold text-sm text-white bg-gradient-multiverse hover:shadow-glow-pulse hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{t('hero.cta')}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>

          <Link
            to="/resources"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-headline font-semibold text-sm text-textPrimary glass-panel hover:bg-bgPanel hover:border-accentCyan/50 transition-all text-center"
          >
            {t('hero.secondaryCta')}
          </Link>
        </div>

      </section>

      {/* AD SLOT: home-below-hero */}
      <AdPlaceholder slotId="home-below-hero" />

      {/* How It Works 3-Step Strip */}
      <section className="max-w-6xl mx-auto space-y-8 pt-8">
        <div className="text-center space-y-2">
          <h2 className="font-headline font-bold text-2xl sm:text-3xl text-textHeading">
            {t('howItWorks.title')}
          </h2>
          <p className="text-sm text-textMuted">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="glow-card p-6 glass-panel flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono font-bold text-2xl ${step.color}`}>
                  {step.num}
                </span>
                <div className="w-2 h-2 rounded-full bg-accentCyan animate-ping"></div>
              </div>
              <div className="space-y-2">
                <h3 className="font-headline font-bold text-lg text-textHeading">
                  {step.title}
                </h3>
                <p className="text-xs text-textMuted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Domains Grid Preview */}
      <section className="max-w-6xl mx-auto space-y-8 pt-10">
        <div className="text-center space-y-2">
          <h2 className="font-headline font-bold text-2xl sm:text-3xl text-textHeading">
            Evaluated Across 5 Core Career Domains
          </h2>
          <p className="text-sm text-textMuted">
            Every route is backed by real free courses, exact timeline calculations, and freelance rate benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {domains.map((d) => {
            const IconComp = d.icon;
            return (
              <div
                key={d.key}
                className="p-5 rounded-xl glass-panel border border-border-subtle hover:border-accentCyan/50 flex flex-col items-center text-center space-y-3 group hover:scale-105 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-accentViolet/15 text-accentCyan group-hover:text-accentMagenta transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="font-headline font-bold text-xs text-textHeading">
                  {i18n.language === 'ar' ? d.titleAr : d.titleEn}
                </h4>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
