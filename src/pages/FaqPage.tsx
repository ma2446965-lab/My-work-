import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Zap } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const FaqPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';

  const faqs = [
    {
      qEn: 'How does SkillVerse calculate my recommended career path?',
      qAr: 'كيف تقوم منصة SkillVerse باحتساب واختيار المسار المهني الأنسب لي؟',
      aEn: 'SkillVerse utilizes a client-side deterministic scoring engine. Part A maps your problem-solving preferences across 5 domain vectors (Programming, Design, Data, Marketing, Business). Part B evaluates your current technical skills to assign your entry level (Beginner, Intermediate, Advanced).',
      aAr: 'تستخدم المنصة خوارزمية محلياً. يحدد الجزء الأول نمط تفكيرك واهتماماتك عبر 5 مجالات تقنية، بينما يقيم الجزء الثاني مهاراتك الحالية لتحديد مستواك (مبتدئ، متوسط، محترف).'
    },
    {
      qEn: 'Is my personal data or quiz responses saved on any server?',
      qAr: 'هل يتم حفظ إجاباتي أو بياناتي الشخصية على أي خوادم خارجية؟',
      aEn: 'No. 100% of the evaluation occurs in browser memory on your device. We do not store, transmit, or process your quiz responses on any database or remote server.',
      aAr: 'لا، تجرى جميع الحسابات داخل ذاكرة متصفحك مباشرة. نحن لا نحفظ أو ننقل أو نعالج إجاباتك في أي قواعد بيانات خارجية.'
    },
    {
      qEn: 'Is SkillVerse completely free to use?',
      qAr: 'هل منصة SkillVerse مجانية بالكامل؟',
      aEn: 'Yes! SkillVerse is completely free. You can take the assessment as many times as you like, explore all roadmaps, and download your personalized PDF report with zero paywalls or subscriptions.',
      aAr: 'نعم! المنصة مجانية 100%. يمكنك إجراء التقييم عدة مرات واستكشاف الخرائط وتحميل التقرير كملف PDF بدون أي رسوم.'
    },
    {
      qEn: 'Where do the recommended learning resources come from?',
      qAr: 'من أين تأتي المصادر والمناهج التعليمية الموصى بها في الخارطة؟',
      aEn: 'We curate top-rated, permanently free community resources—including freeCodeCamp, MDN Web Docs, Kaggle, HubSpot Academy, Google Skillshop, and Nielsen Norman Group articles.',
      aAr: 'نجمع فقط المناهج الحرة والمجانية الأعلى تقييماً عالمياً، مثل freeCodeCamp و MDN و Kaggle و Google Skillshop وأكاديمية HubSpot.'
    },
    {
      qEn: 'How are the learning duration estimates calculated?',
      qAr: 'كيف يتم احتساب المدة الزمنية التقديرية لإتقان المهارة؟',
      aEn: 'Each skill node carries a fixed base focus hour requirement. We divide this base requirement by the midpoint of your selected weekly study availability (e.g. 10–20 hrs/wk → 15 hrs) and express the result as a realistic ±20% range.',
      aAr: 'كل مهارة تمتلك عدداً محدداً من ساعات التركيز المطلوبة. نقسم هذا المجموع على متوسط ساعات تفرغك الأسبوعية ونعرض النتيجة كـ نطاق زمني زوائد ±20%.'
    },
    {
      qEn: 'How reliable are the global freelance earning potential numbers?',
      qAr: 'ما مدى دقة أرقام تقدير أرباح العمل الحر عن بُعد؟',
      aEn: 'Earning ranges represent aggregated market benchmarks across major global remote platforms (Upwork, Fiverr Enterprise, Toptal, and direct contract rates) grouped by domain and total work experience.',
      aAr: 'تمثل تقديرات الأرباح نطاقات استرشادية مستمدة من منصات العمل الحر العالمية الرئيسية (مثل Upwork و Toptal) وفقاً لمجالك وسنوات خبرتك الكلية.'
    },
    {
      qEn: 'What if I score equally high in two different domains?',
      qAr: 'ماذا يحدث لو حققت نقاطاً متساوية أو متقاربة في مجالين مختلفين؟',
      aEn: 'Our scoring engine flags near-tie scores (within 1 point) and presents a Dual-Path alert banner on your results page, allowing you to instantly swap and view the secondary roadmap.',
      aAr: 'تكتشف الخوارزمية حالة التكافؤ المتقارب (فارق نقطة واحدة) وتظهر شريط تنبيه بوجود ملف مهني مزدوج، مما يتيح لك التبديل بين الخريطتين بضغطة زر.'
    },
    {
      qEn: 'Can I export my career report and roadmap for offline reading?',
      qAr: 'هل يمكنني تصدير التقرير وخارطة الطريق للحديث عنها أو قراءتها بدون إنترنت؟',
      aEn: 'Yes! Click the "Download Full PDF Report" button on your results page to generate a clean, high-contrast print PDF layout directly in your browser.',
      aAr: 'بالتأكيد! يتيح لك زر "تحميل التقرير الكامل كملف PDF" توليد ملف مطبوع عالي التباين متوافق مع اللغة العربية وتنزيله فوراً.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-12">
      
      {/* Title Header */}
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-accentCyan bg-accentCyan/15 border border-accentCyan/30">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Clear Answers</span>
        </span>
        <h1 className="font-headline font-extrabold text-3xl sm:text-5xl text-textHeading">
          {t('faq.title')}
        </h1>
        <p className="text-xs sm:text-sm text-textMuted max-w-xl mx-auto">
          {t('faq.subtitle')}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="glow-card glass-panel border border-border-subtle rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left rtl:text-right p-5 flex items-center justify-between gap-4 font-headline font-bold text-sm sm:text-base text-textHeading hover:text-accentCyan transition-colors"
              >
                <span>{currentLang === 'ar' ? faq.qAr : faq.qEn}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-accentCyan shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-textMuted shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-textMuted leading-relaxed border-t border-border-subtle/50 pt-3">
                  {currentLang === 'ar' ? faq.aAr : faq.aEn}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Ad Slot */}
      <AdPlaceholder slotId="faq-footer-slot" />

    </div>
  );
};
