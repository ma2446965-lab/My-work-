import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PART_A_QUESTIONS, ALL_SKILLS, PART_C_QUESTIONS, FieldKey } from '../data/quizQuestions';
import { FIELD_DISPLAY_NAMES } from '../data/earningData';
import { useAssessment } from '../context/AssessmentContext';
import { ArrowRight, ArrowLeft, Check, Search, Sparkles, AlertCircle } from 'lucide-react';

export const AssessmentPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';

  const {
    answers,
    currentStep,
    setCurrentStep,
    setPartAAnswer,
    toggleSkill,
    clearSkills,
    setPartCAnswer,
    calculateAndSetResult,
    isTransitioning,
    triggerTransition,
  } = useAssessment();

  const [skillSearch, setSkillSearch] = useState('');

  const totalSteps = PART_A_QUESTIONS.length + 1 + PART_C_QUESTIONS.length; // 8 + 1 + 5 = 14 steps

  // Check if current step can proceed
  const canProceed = (): boolean => {
    if (currentStep < 8) {
      // Part A
      const q = PART_A_QUESTIONS[currentStep];
      return !!answers.partA[q.id];
    } else if (currentStep === 8) {
      // Part B: Skills checklist (always allowed, even 0 skills)
      return true;
    } else {
      // Part C
      const partCIdx = currentStep - 9;
      const qC = PART_C_QUESTIONS[partCIdx];
      return !!answers.partC[qC.id as keyof typeof answers.partC];
    }
  };

  const handleNext = () => {
    if (!canProceed()) return;

    if (currentStep < totalSteps - 1) {
      triggerTransition(() => {
        setCurrentStep(prev => prev + 1);
      });
    } else {
      // Submit & calculate
      triggerTransition(() => {
        calculateAndSetResult();
        navigate('/results');
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      triggerTransition(() => {
        setCurrentStep(prev => prev - 1);
      });
    }
  };

  // Render current step UI
  const renderStepContent = () => {
    if (currentStep < 8) {
      // PART A Questions
      const question = PART_A_QUESTIONS[currentStep];
      const selectedOptId = answers.partA[question.id];

      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-accentMagenta uppercase tracking-wider">
              {t('assessment.partABadge')} — {currentStep + 1}/8
            </span>
            <h2 className="font-headline font-bold text-xl sm:text-2xl text-textHeading">
              {currentLang === 'ar' ? question.titleAr : question.titleEn}
            </h2>
          </div>

          <div className="space-y-3">
            {question.options.map((opt) => {
              const isSelected = selectedOptId === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setPartAAnswer(question.id, opt.id)}
                  className={`w-full text-left rtl:text-right p-4 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-accentMagenta/15 border-accentMagenta shadow-glow-pulse text-textHeading font-semibold'
                      : 'bg-bgPanel/60 border-border-subtle hover:border-accentCyan/50 text-textPrimary hover:bg-bgPanel'
                  }`}
                >
                  <span className="text-sm leading-relaxed">
                    {currentLang === 'ar' ? opt.textAr : opt.textEn}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-accentMagenta border-accentMagenta text-white'
                        : 'border-border-subtle'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      );
    } else if (currentStep === 8) {
      // PART B: Skills Checklist
      const filteredSkills = ALL_SKILLS.filter(s =>
        s.name.toLowerCase().includes(skillSearch.toLowerCase())
      );

      const fieldsList: FieldKey[] = ['programming', 'design', 'data', 'marketing', 'business'];

      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-accentViolet uppercase tracking-wider">
              {t('assessment.partBBadge')}
            </span>
            <h2 className="font-headline font-bold text-xl sm:text-2xl text-textHeading">
              {t('assessment.selectSkillsTitle')}
            </h2>
            <p className="text-xs text-textMuted">
              Select any tools or concepts you feel comfortable using today. If you are starting fresh with zero skills, simply click Next.
            </p>
          </div>

          {/* Search Bar & Selected Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-textMuted absolute ltr:left-3 rtl:right-3 top-3" />
              <input
                type="text"
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                placeholder={t('assessment.skillsSearchPlaceholder')}
                className="w-full ltr:pl-9 rtl:pr-9 pr-3 py-2 rounded-xl bg-bgPanel border border-border-subtle text-xs text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-accentCyan"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
              <span className="text-xs font-mono text-accentCyan font-bold">
                {t('assessment.selectedCount', { count: answers.partBSkills.length })}
              </span>
              {answers.partBSkills.length > 0 && (
                <button
                  onClick={clearSkills}
                  className="text-xs text-accentMagenta hover:underline font-medium"
                >
                  {t('assessment.clearAll')}
                </button>
              )}
            </div>
          </div>

          {/* Grouped Skills List */}
          <div className="space-y-6 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
            {fieldsList.map((field) => {
              const fieldSkills = filteredSkills.filter(s => s.field === field);
              if (fieldSkills.length === 0) return null;

              return (
                <div key={field} className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-textHeading uppercase tracking-wider border-b border-border-subtle pb-1">
                    {FIELD_DISPLAY_NAMES[field][currentLang]}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {fieldSkills.map((skill) => {
                      const isChecked = answers.partBSkills.includes(skill.id);
                      return (
                        <button
                          key={skill.id}
                          onClick={() => toggleSkill(skill.id)}
                          className={`text-left rtl:text-right p-3 rounded-lg border text-xs flex items-center justify-between gap-2 transition-all ${
                            isChecked
                              ? 'bg-accentViolet/20 border-accentViolet text-textHeading font-semibold'
                              : 'bg-bgPanel/40 border-border-subtle/60 text-textMuted hover:border-textMuted hover:text-textPrimary'
                          }`}
                        >
                          <span>{skill.name}</span>
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                              isChecked
                                ? 'bg-accentViolet border-accentViolet text-white'
                                : 'border-border-subtle'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      // PART C Questions (Context)
      const partCIdx = currentStep - 9;
      const questionC = PART_C_QUESTIONS[partCIdx];
      const selectedValue = answers.partC[questionC.id as keyof typeof answers.partC];

      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-accentCyan uppercase tracking-wider">
              {t('assessment.partCBadge')} — {partCIdx + 1}/5
            </span>
            <h2 className="font-headline font-bold text-xl sm:text-2xl text-textHeading">
              {currentLang === 'ar' ? questionC.titleAr : questionC.titleEn}
            </h2>
          </div>

          <div className="space-y-3">
            {questionC.options.map((opt) => {
              const isSelected = selectedValue === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setPartCAnswer(questionC.id as keyof typeof answers.partC, opt.value)}
                  className={`w-full text-left rtl:text-right p-4 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-accentCyan/15 border-accentCyan shadow-glow-pulse text-textHeading font-semibold'
                      : 'bg-bgPanel/60 border-border-subtle hover:border-accentCyan/50 text-textPrimary hover:bg-bgPanel'
                  }`}
                >
                  <span className="text-sm">
                    {currentLang === 'ar' ? opt.labelAr : opt.labelEn}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-accentCyan border-accentCyan text-bgBase'
                        : 'border-border-subtle'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 font-bold" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      );
    }
  };

  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      
      {/* Wizard Header & Progress Bar */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-textHeading font-bold">
            {t('assessment.progress', { current: currentStep + 1, total: totalSteps })}
          </span>
          <span className="text-accentCyan font-bold">{progressPercent}%</span>
        </div>

        {/* Animated Gradient Progress Bar */}
        <div className="w-full h-2 rounded-full bg-bgPanel border border-border-subtle overflow-hidden">
          <div
            className="h-full bg-gradient-multiverse transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Main Question Card with Scanline Transition Effect */}
      <div className={`glow-card p-6 sm:p-10 glass-panel min-h-[420px] flex flex-col justify-between ${isTransitioning ? 'scanline-effect' : ''}`}>
        
        {/* Step Content */}
        {renderStepContent()}

        {/* Navigation Controls */}
        <div className="pt-8 mt-6 border-t border-border-subtle/60 flex items-center justify-between gap-4">
          
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-subtle text-xs font-bold text-textPrimary hover:bg-bgPanel disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{t('assessment.back')}</span>
          </button>

          {!canProceed() && (
            <span className="text-[11px] font-mono text-accentMagenta flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Select an option to proceed</span>
            </span>
          )}

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-headline font-bold text-xs text-white bg-gradient-multiverse hover:shadow-glow-pulse active:scale-95 transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
          >
            <span>
              {currentStep === totalSteps - 1
                ? t('assessment.submit')
                : t('assessment.next')}
            </span>
            {currentStep === totalSteps - 1 ? (
              <Sparkles className="w-4 h-4" />
            ) : isRtl ? (
              <ArrowLeft className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </button>

        </div>

      </div>

    </div>
  );
};
