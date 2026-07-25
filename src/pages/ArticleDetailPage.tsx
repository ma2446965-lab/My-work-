import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ARTICLES_DATA } from '../data/articlesData';
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, Sparkles } from 'lucide-react';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';

  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center space-y-4">
        <h2 className="font-headline font-bold text-2xl text-textHeading">Article Not Found</h2>
        <p className="text-xs text-textMuted">The requested guide does not exist.</p>
        <Link to="/resources" className="text-accentCyan font-bold text-xs hover:underline">
          ← Back to Resources Hub
        </Link>
      </div>
    );
  }

  const content = currentLang === 'ar' ? article.contentAr : article.contentEn;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/resources')}
        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accentCyan hover:underline"
      >
        {isRtl ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
        <span>Back to Resources</span>
      </button>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-accentViolet/20 text-accentCyan border border-accentViolet/40">
            {currentLang === 'ar' ? article.categoryAr : article.categoryEn}
          </span>
          <span className="text-textMuted flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span className="text-textMuted flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>

        <h1 className="font-headline font-extrabold text-2xl sm:text-4xl lg:text-5xl text-textHeading leading-tight">
          {currentLang === 'ar' ? article.titleAr : article.titleEn}
        </h1>
      </div>

      {/* Main Article Body */}
      <div className="glow-card p-6 sm:p-10 glass-panel space-y-6 text-textPrimary leading-relaxed text-sm sm:text-base">
        {content.split('\n\n').map((paragraph, idx) => {
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={idx} className="font-headline font-bold text-xl text-textHeading pt-4 border-b border-border-subtle pb-2">
                {paragraph.replace('### ', '')}
              </h3>
            );
          } else if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
            const items = paragraph.split('\n');
            return (
              <ul key={idx} className="space-y-2 list-disc list-inside text-xs sm:text-sm pl-2">
                {items.map((it, i) => (
                  <li key={i} className="text-textPrimary">
                    {it.replace(/^[0-9]+\.\s*/, '').replace(/^- /, '')}
                  </li>
                ))}
              </ul>
            );
          } else {
            return <p key={idx}>{paragraph}</p>;
          }
        })}
      </div>

      {/* CTA Box */}
      <div className="p-6 rounded-2xl bg-gradient-multiverse/10 border border-accentMagenta/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="font-headline font-bold text-base text-textHeading flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accentMagenta" />
            <span>Ready to find your personal career field?</span>
          </h4>
          <p className="text-xs text-textMuted">
            Take our 14-question client-side assessment to get your personalized roadmap now.
          </p>
        </div>

        <Link
          to="/assessment"
          className="px-6 py-2.5 rounded-xl font-headline font-bold text-xs text-white bg-gradient-multiverse hover:shadow-glow-pulse shrink-0"
        >
          Start Assessment
        </Link>
      </div>

    </div>
  );
};
