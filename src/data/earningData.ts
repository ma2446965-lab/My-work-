import { FieldKey } from './quizQuestions';

export interface EarningTier {
  monthly: string;
  hourly: string;
}

export type ExperienceBracket = '0' | '1-2' | '3-5' | '5+';

export const EARNING_TABLE: Record<FieldKey, Record<ExperienceBracket, EarningTier>> = {
  programming: {
    '0': { monthly: '$300–$800', hourly: '$8–$15' },
    '1-2': { monthly: '$1,200–$2,500', hourly: '$15–$30' },
    '3-5': { monthly: '$3,000–$6,000', hourly: '$30–$55' },
    '5+': { monthly: '$6,000–$12,000+', hourly: '$55–$100+' },
  },
  data: {
    '0': { monthly: '$300–$700', hourly: '$8–$15' },
    '1-2': { monthly: '$1,200–$2,200', hourly: '$15–$28' },
    '3-5': { monthly: '$2,800–$5,500', hourly: '$28–$50' },
    '5+': { monthly: '$5,500–$11,000+', hourly: '$50–$95+' },
  },
  design: {
    '0': { monthly: '$250–$600', hourly: '$7–$12' },
    '1-2': { monthly: '$1,000–$2,000', hourly: '$12–$25' },
    '3-5': { monthly: '$2,200–$4,500', hourly: '$25–$45' },
    '5+': { monthly: '$4,500–$9,000+', hourly: '$45–$80+' },
  },
  marketing: {
    '0': { monthly: '$200–$500', hourly: '$6–$10' },
    '1-2': { monthly: '$800–$1,800', hourly: '$10–$20' },
    '3-5': { monthly: '$1,800–$3,800', hourly: '$20–$38' },
    '5+': { monthly: '$3,800–$8,000+', hourly: '$38–$70+' },
  },
  business: {
    '0': { monthly: '$200–$500', hourly: '$6–$10' },
    '1-2': { monthly: '$900–$2,000', hourly: '$10–$22' },
    '3-5': { monthly: '$2,000–$4,200', hourly: '$22–$42' },
    '5+': { monthly: '$4,200–$9,000+', hourly: '$42–$75+' },
  },
};

export const FIELD_DISPLAY_NAMES: Record<FieldKey, { en: string; ar: string }> = {
  programming: {
    en: 'Programming & Software Development',
    ar: 'البرمجة وتطوير البرمجيات',
  },
  design: {
    en: 'UI/UX & Product Design',
    ar: 'تصميم الواجهات وتجربة المستخدم (UI/UX)',
  },
  data: {
    en: 'Data Analysis & Data Science',
    ar: 'تحليل البيانات وعلوم البيانات',
  },
  marketing: {
    en: 'Digital Marketing & Growth',
    ar: 'التسويق الرقمي واستراتيجيات النمو',
  },
  business: {
    en: 'Business, Management & Entrepreneurship',
    ar: 'إدارة الأعمال وريادة الأعمال',
  },
};
