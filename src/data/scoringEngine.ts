import { FieldKey, ALL_SKILLS, PART_A_QUESTIONS } from './quizQuestions';
import { RESULTS_DATA, ResultNode, EntryLevel } from './resultsData';
import { EARNING_TABLE, EarningTier, ExperienceBracket } from './earningData';

export interface UserAnswers {
  partA: Record<string, string>; // questionId -> optionId
  partBSkills: string[]; // array of skill ids
  partC: {
    overallExperience: ExperienceBracket;
    weeklyHours: string;
    learningFormat: string;
    currentStatus: string;
    primaryGoal: string;
  };
}

export interface AssessmentResult {
  primaryField: FieldKey;
  secondaryField: FieldKey | null;
  isNearTie: boolean;
  fieldScores: Record<FieldKey, number>;
  entryLevel: EntryLevel;
  skillsInPrimaryField: number;
  resultNode: ResultNode;
  secondaryResultNode: ResultNode | null;
  estimatedWeeks: {
    min: number;
    max: number;
    midpointWeekly: number;
  };
  earningTier: EarningTier;
  answers: UserAnswers;
}

export const calculateAssessmentResult = (answers: UserAnswers, overrideField?: FieldKey): AssessmentResult => {
  // 1. Calculate field scores from Part A
  const scores: Record<FieldKey, number> = {
    programming: 0,
    design: 0,
    data: 0,
    marketing: 0,
    business: 0,
  };

  Object.entries(answers.partA).forEach(([questionId, selectedOptId]) => {
    const question = PART_A_QUESTIONS.find(q => q.id === questionId);
    if (!question) return;
    const option = question.options.find(o => o.id === selectedOptId);
    if (!option) return;

    (Object.keys(option.points) as FieldKey[]).forEach(field => {
      scores[field] += option.points[field];
    });
  });

  // 2. Determine sorted fields by score descending
  const sortedFields = (Object.keys(scores) as FieldKey[]).sort(
    (a, b) => scores[b] - scores[a]
  );

  let primaryField = overrideField || sortedFields[0];
  let secondaryField: FieldKey | null = null;
  let isNearTie = false;

  const top1Score = scores[sortedFields[0]];
  const top2Score = scores[sortedFields[1]];

  if (!overrideField && Math.abs(top1Score - top2Score) <= 1 && top1Score > 0) {
    isNearTie = true;
    secondaryField = sortedFields[1];
  } else if (overrideField && overrideField !== sortedFields[0]) {
    secondaryField = sortedFields[0];
    isNearTie = true;
  }

  // 3. Count skills in primary field
  const primaryFieldSkills = ALL_SKILLS.filter(s => s.field === primaryField);
  const checkedPrimarySkills = primaryFieldSkills.filter(s =>
    answers.partBSkills.includes(s.id)
  ).length;

  // 4. Determine entry level
  let entryLevel: EntryLevel = 'beginner';
  if (checkedPrimarySkills >= 4) {
    entryLevel = 'advanced';
  } else if (checkedPrimarySkills >= 1) {
    entryLevel = 'intermediate';
  }

  // 5. Fetch result node
  const key = `${primaryField}_${entryLevel}`;
  const resultNode = RESULTS_DATA[key] || RESULTS_DATA['programming_beginner'];

  // Secondary result node if near tie
  let secondaryResultNode: ResultNode | null = null;
  if (secondaryField) {
    const secSkills = ALL_SKILLS.filter(s => s.field === secondaryField);
    const secChecked = secSkills.filter(s => answers.partBSkills.includes(s.id)).length;
    let secLevel: EntryLevel = 'beginner';
    if (secChecked >= 4) secLevel = 'advanced';
    else if (secChecked >= 1) secLevel = 'intermediate';
    secondaryResultNode = RESULTS_DATA[`${secondaryField}_${secLevel}`] || null;
  }

  // 6. Calculate timeline
  let midpointWeekly = 7.5; // default 5-10
  switch (answers.partC.weeklyHours) {
    case '<5':
      midpointWeekly = 3.5;
      break;
    case '5-10':
      midpointWeekly = 7.5;
      break;
    case '10-20':
      midpointWeekly = 15;
      break;
    case '20+':
      midpointWeekly = 25;
      break;
  }

  const baseWeeks = Math.round(resultNode.baseHoursRequired / midpointWeekly);
  const minWeeks = Math.max(1, Math.round(baseWeeks * 0.8));
  const maxWeeks = Math.round(baseWeeks * 1.2);

  // 7. Get earning tier
  const expBracket = answers.partC.overallExperience || '0';
  const earningTier = EARNING_TABLE[primaryField]?.[expBracket] || {
    monthly: '$300–$800',
    hourly: '$8–$15',
  };

  return {
    primaryField,
    secondaryField,
    isNearTie,
    fieldScores: scores,
    entryLevel,
    skillsInPrimaryField: checkedPrimarySkills,
    resultNode,
    secondaryResultNode,
    estimatedWeeks: {
      min: minWeeks,
      max: maxWeeks,
      midpointWeekly,
    },
    earningTier,
    answers,
  };
};
