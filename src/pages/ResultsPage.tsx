import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAssessment } from '../context/AssessmentContext';
import { SignatureResultsBranching } from '../components/SignatureResultsBranching';
import { PdfExportButton } from '../components/PdfExportButton';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { FIELD_DISPLAY_NAMES, EARNING_TABLE, ExperienceBracket } from '../data/earningData';
import { FieldKey } from '../data/quizQuestions';

import {
  Sparkles,
  Clock,
  Zap,
  BookOpen,
  DollarSign,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
} from 'lucide-react';

export const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';

  const { result, calculateAndSetResult, resetAssessment } = useAssessment();
  const [selectedExpBracket, setSelectedExpBracket] = useState<ExperienceBracket>('0');

  useEffect(() => {
    if (!result) {
      navigate('/');
    } else {
      setSelectedExpBracket(result.answers.partC.overallExperience || '0');
    }
  }, [result, navigate]);

  if (!result) return null;

  const {
    primaryField,
    secondaryField,
    isNearTie,
    entryLevel,
    resultNode,
    estimatedWeeks,
    answers,
  } = result;

  const handleSwapPath = (newField: FieldKey) => {
    calculateAndSetResult(newField);
  };

  const handleRetake = () => {
    resetAssessment();
    navigate('/assessment');
  };

  const currentEarningTier = EARNING_TABLE[primaryField]?.[selectedExpBracket] || {
    monthly: '$300–$800',
    hourly: '$8–$15',
  };

  const expBrackets: { value: ExperienceBracket; labelEn: string; labelAr: string }[] = [
    { value: '0', labelEn: '0 yrs (Beginner)', labelAr: '0 سنوات (مبتدئ)' },
    { value: '1-2', labelEn: '1–2 yrs', labelAr: '1–2 سنة' },
    { value: '3-5', labelEn: '3–5 yrs', labelAr: '3–5 سنوات' },
    { value: '5+', labelEn: '5+ yrs (Experienced)', labelAr: '5+ سنوات (محترف)' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-12">
      
      {/* Signature Emotional Payoff Header */}
      <SignatureResultsBranching primaryField={primaryField} level={entryLevel} />

      {/* Near-Tie Dual Profile Banner */}
      {isNearTie && secondaryField && (
        <div className="p-5 rounded-2xl glass-panel border border-accentCyan/40 bg-accentCyan/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-accentCyan shrink-0" />
            <div>
              <h4 className="font-headline font-bold text-sm text-textHeading">
                Dual-Path Profile Detected!
              </h4>
              <p className="text-xs text-textMuted">
                {t('results.nearTieAlert', {
                  field: FIELD_DISPLAY_NAMES[secondaryField][currentLang],
                })}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleSwapPath(secondaryField)}
            className="px-4 py-2 rounded-xl text-xs font-bold text-bgBase bg-accentCyan hover:bg-accentCyan/90 transition-all shrink-0"
          >
            {t('results.switchPath', {
              field: FIELD_DISPLAY_NAMES[secondaryField][currentLang],
            })}
          </button>
        </div>
      )}

      {/* Recommended Next Skill Card */}
      <div className="glow-card p-6 sm:p-10 glass-panel space-y-8">
        
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-accentMagenta bg-accentMagenta/15 border border-accentMagenta/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('results.nextSkillTitle')}</span>
          </span>
          <h2 className="font-headline font-extrabold text-2xl sm:text-4xl text-textHeading">
            {currentLang === 'ar' ? resultNode.skillNameAr : resultNode.skillNameEn}
          </h2>
        </div>

        {/* Why this skill */}
        <div className="space-y-3 p-5 rounded-xl bg-bgBase/60 border border-border-subtle">
          <h3 className="font-headline font-bold text-sm text-accentCyan flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accentCyan" />
            <span>{t('results.whyTitle')}</span>
          </h3>
          <p className="text-xs sm:text-sm text-textPrimary leading-relaxed">
            {currentLang === 'ar' ? resultNode.whyThisSkillAr : resultNode.whyThisSkillEn}
          </p>
        </div>

        {/* Timeline & First Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Estimated Timeline */}
          <div className="p-5 rounded-xl bg-bgPanel border border-border-subtle space-y-3">
            <div className="flex items-center gap-2 text-accentViolet font-headline font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>{t('results.timelineTitle')}</span>
            </div>
            <div className="font-headline font-extrabold text-2xl text-textHeading">
              {estimatedWeeks.min} – {estimatedWeeks.max} Weeks
            </div>
            <p className="text-xs text-textMuted">
              {t('results.hoursText', { hours: resultNode.baseHoursRequired })} (
              {t('results.weeklyText', { weekly: estimatedWeeks.midpointWeekly })})
            </p>
          </div>

          {/* Immediate First Step */}
          <div className="p-5 rounded-xl bg-bgPanel border border-accentMagenta/40 space-y-3">
            <div className="flex items-center gap-2 text-accentMagenta font-headline font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>{t('results.firstStepTitle')}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-textHeading leading-relaxed">
              "{currentLang === 'ar' ? resultNode.firstStepAr : resultNode.firstStepEn}"
            </p>
          </div>

        </div>

        {/* Full Step-by-Step Learning Roadmap */}
        <div className="space-y-6 pt-6 border-t border-border-subtle">
          <h3 className="font-headline font-bold text-xl text-textHeading flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accentCyan" />
            <span>{t('results.roadmapTitle')}</span>
          </h3>

          <div className="space-y-4">
            {resultNode.roadmap.map((phase) => (
              <div
                key={phase.phaseNumber}
                className="p-5 rounded-xl bg-bgBase/80 border border-border-subtle hover:border-accentViolet/50 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/50 pb-2">
                  <span className="font-headline font-bold text-sm text-accentMagenta">
                    {t('results.phase', { number: phase.phaseNumber })}: {currentLang === 'ar' ? phase.titleAr : phase.titleEn}
                  </span>
                  <span className="text-xs font-mono text-textMuted px-2.5 py-1 rounded bg-bgPanel border border-border-subtle w-fit">
                    ~{phase.estimatedHours} hrs
                  </span>
                </div>

                <p className="text-xs text-textPrimary leading-relaxed">
                  <strong className="text-textHeading">{t('results.whatYouWillDo')}</strong>{' '}
                  {currentLang === 'ar' ? phase.outcomeAr : phase.outcomeEn}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-textMuted block mb-1">
                    {t('results.recommendedResources')}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {phase.resources.map((res, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-bgPanel text-xs font-mono text-accentCyan border border-border-subtle"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>{res.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* AD SLOT: results-after-roadmap */}
      <AdPlaceholder slotId="results-after-roadmap" />

      {/* Global Remote & Freelance Earning Potential Table */}
      <div className="p-6 sm:p-10 rounded-2xl glass-panel border border-border-subtle space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-headline font-bold text-xl text-textHeading flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-accentGreen" />
              <span>{t('results.earningsTitle')}</span>
            </h3>
            <p className="text-xs text-textMuted max-w-xl">
              {t('results.earningsSubtitle')}
            </p>
          </div>

          {/* Experience Bracket Selector */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-textMuted block">
              {t('results.experienceBracket')}
            </label>
            <div className="flex flex-wrap gap-1">
              {expBrackets.map((b) => (
                <button
                  key={b.value}
                  onClick={() => setSelectedExpBracket(b.value)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                    selectedExpBracket === b.value
                      ? 'bg-accentGreen/20 text-accentGreen border border-accentGreen font-bold'
                      : 'bg-bgPanel text-textMuted hover:text-textPrimary border border-border-subtle'
                  }`}
                >
                  {currentLang === 'ar' ? b.labelAr : b.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Earning Table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          
          <div className="p-5 rounded-xl bg-bgBase border border-border-subtle space-y-2">
            <span className="text-xs font-mono text-textMuted uppercase tracking-wider">
              {t('results.monthly')}
            </span>
            <div className="font-headline font-extrabold text-3xl text-accentGreen">
              {currentEarningTier.monthly} <span className="text-sm font-normal text-textMuted">/ mo</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-bgBase border border-border-subtle space-y-2">
            <span className="text-xs font-mono text-textMuted uppercase tracking-wider">
              {t('results.hourly')}
            </span>
            <div className="font-headline font-extrabold text-3xl text-accentCyan">
              {currentEarningTier.hourly} <span className="text-sm font-normal text-textMuted">/ hr</span>
            </div>
          </div>

        </div>

        <p className="text-[11px] font-mono text-textMuted/70 italic pt-2">
          {t('results.earningsDisclaimer')}
        </p>

      </div>

      {/* Action Buttons: PDF Export & Retake */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        
        {/* PDF Export Component */}
        <PdfExportButton result={result} />

        {/* Retake Button */}
        <button
          onClick={handleRetake}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-headline font-bold text-sm text-textPrimary glass-panel hover:bg-bgPanel hover:border-accentCyan/50 transition-all"
        >
          <RotateCcw className="w-4 h-4 text-accentCyan" />
          <span>{t('results.retake')}</span>
        </button>

      </div>

    </div>
  );
};
