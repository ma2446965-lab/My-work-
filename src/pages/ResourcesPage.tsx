import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ARTICLES_DATA } from '../data/articlesData';
import { BookOpen, Clock, ArrowRight, ArrowLeft, Calendar } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ResourcesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-12">
      
      {/* Title Header */}
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-accentViolet bg-accentViolet/15 border border-accentViolet/30">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Knowledge & Insights</span>
        </span>
        <h1 className="font-headline font-extrabold text-3xl sm:text-5xl text-textHeading">
          {t('resources.title')}
        </h1>
        <p className="text-xs sm:text-sm text-textMuted max-w-xl mx-auto">
          {t('resources.subtitle')}
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES_DATA.map((article) => (
          <article
            key={article.slug}
            className="glow-card p-6 glass-panel flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="space-y-3">
              
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-accentViolet/20 text-accentCyan border border-accentViolet/40">
                  {currentLang === 'ar' ? article.categoryAr : article.categoryEn}
                </span>
                <span className="text-textMuted flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="font-headline font-bold text-lg text-textHeading leading-snug hover:text-accentCyan transition-colors">
                <Link to={`/resources/${article.slug}`}>
                  {currentLang === 'ar' ? article.titleAr : article.titleEn}
                </Link>
              </h2>

              <p className="text-xs text-textMuted leading-relaxed line-clamp-3">
                {currentLang === 'ar' ? article.excerptAr : article.excerptEn}
              </p>

            </div>

            <div className="pt-4 border-t border-border-subtle/60 flex items-center justify-between text-xs font-mono">
              <span className="text-textMuted flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {article.date}
              </span>

              <Link
                to={`/resources/${article.slug}`}
                className="font-bold text-accentMagenta hover:text-accentCyan flex items-center gap-1 transition-colors"
              >
                <span>Read</span>
                {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </Link>
            </div>

          </article>
        ))}
      </div>

      {/* Footer Ad Slot */}
      <AdPlaceholder slotId="resources-footer-slot" />

    </div>
  );
};
