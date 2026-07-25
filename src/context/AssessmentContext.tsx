import React, { createContext, useContext, useState } from 'react';
import { UserAnswers, AssessmentResult, calculateAssessmentResult } from '../data/scoringEngine';
import { FieldKey } from '../data/quizQuestions';

interface AssessmentContextType {
  answers: UserAnswers;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setPartAAnswer: (questionId: string, optionId: string) => void;
  toggleSkill: (skillId: string) => void;
  clearSkills: () => void;
  setPartCAnswer: (key: keyof UserAnswers['partC'], value: string) => void;
  result: AssessmentResult | null;
  calculateAndSetResult: (overrideField?: FieldKey) => AssessmentResult;
  resetAssessment: () => void;
  isTransitioning: boolean;
  triggerTransition: (callback: () => void) => void;
}

const initialAnswers: UserAnswers = {
  partA: {},
  partBSkills: [],
  partC: {
    overallExperience: '0',
    weeklyHours: '5-10',
    learningFormat: 'interactive',
    currentStatus: 'student',
    primaryGoal: 'freelance',
  },
};

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const AssessmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<UserAnswers>(initialAnswers);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const setPartAAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      partA: {
        ...prev.partA,
        [questionId]: optionId,
      },
    }));
  };

  const toggleSkill = (skillId: string) => {
    setAnswers(prev => {
      const exists = prev.partBSkills.includes(skillId);
      return {
        ...prev,
        partBSkills: exists
          ? prev.partBSkills.filter(id => id !== skillId)
          : [...prev.partBSkills, skillId],
      };
    });
  };

  const clearSkills = () => {
    setAnswers(prev => ({ ...prev, partBSkills: [] }));
  };

  const setPartCAnswer = (key: keyof UserAnswers['partC'], value: string) => {
    setAnswers(prev => ({
      ...prev,
      partC: {
        ...prev.partC,
        [key]: value,
      },
    }));
  };

  const triggerTransition = (callback: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      callback();
      setIsTransitioning(false);
    }, 250); // scanline transition flicker duration
  };

  const calculateAndSetResult = (overrideField?: FieldKey): AssessmentResult => {
    const res = calculateAssessmentResult(answers, overrideField);
    setResult(res);
    return res;
  };

  const resetAssessment = () => {
    setAnswers(initialAnswers);
    setCurrentStep(0);
    setResult(null);
  };

  return (
    <AssessmentContext.Provider
      value={{
        answers,
        currentStep,
        setCurrentStep,
        setPartAAnswer,
        toggleSkill,
        clearSkills,
        setPartCAnswer,
        result,
        calculateAndSetResult,
        resetAssessment,
        isTransitioning,
        triggerTransition,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
};
