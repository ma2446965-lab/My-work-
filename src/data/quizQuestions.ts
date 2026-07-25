export type FieldKey = 'programming' | 'design' | 'data' | 'marketing' | 'business';

export interface PartAOption {
  id: string;
  textEn: string;
  textAr: string;
  points: Record<FieldKey, number>;
}

export interface PartAQuestion {
  id: string;
  titleEn: string;
  titleAr: string;
  subtitleEn?: string;
  subtitleAr?: string;
  options: PartAOption[];
}

export interface SkillItem {
  id: string;
  name: string;
  field: FieldKey;
}

export interface PartCQuestion {
  id: string;
  titleEn: string;
  titleAr: string;
  options: {
    value: string;
    labelEn: string;
    labelAr: string;
  }[];
}

// 8 Multiple-choice questions for Part A
export const PART_A_QUESTIONS: PartAQuestion[] = [
  {
    id: 'q1_problem_energy',
    titleEn: 'What kind of challenge gives you the most energy when working?',
    titleAr: 'ما نوع التحديات التي تمنحك أكبر قدر من الحماس والفيض عند العمل؟',
    options: [
      {
        id: 'q1_opt1',
        textEn: 'Building functional logic, writing code, and solving step-by-step algorithms.',
        textAr: 'بناء المنطق والتشفير وحل الخوارزميات خطوة بخطوة حتى يعمل الشفرة بنجاح.',
        points: { programming: 3, design: 0, data: 1, marketing: 0, business: 0 }
      },
      {
        id: 'q1_opt2',
        textEn: 'Crafting visually beautiful, smooth, and intuitive human user interfaces.',
        textAr: 'ابتكار واجهات مستخدم مذهلة بصرياً، سلسة ومريحة للتفاعل البشري.',
        points: { programming: 0, design: 3, data: 0, marketing: 1, business: 0 }
      },
      {
        id: 'q1_opt3',
        textEn: 'Digging through numbers, datasets, and hidden statistical patterns to find truth.',
        textAr: 'التنقيب في الأرقام، البيانات، والأنماط الإحصائية الخفية للوصول للحقائق.',
        points: { programming: 1, design: 0, data: 3, marketing: 0, business: 0 }
      },
      {
        id: 'q1_opt4',
        textEn: 'Crafting persuasive stories, running growth campaigns, and capturing audience focus.',
        textAr: 'صياغة قصص مقنعة، إدارة حملات النمو، وجذب انتباه الجمهور المستهدف.',
        points: { programming: 0, design: 1, data: 0, marketing: 3, business: 0 }
      },
      {
        id: 'q1_opt5',
        textEn: 'Organizing teams, optimizing business strategy, and managing budget and execution.',
        textAr: 'تنظيم الفرق، تحسين استراتيجية الأعمال، وإدارة الميزانيات والتنفيذ الفعلي.',
        points: { programming: 0, design: 0, data: 1, marketing: 0, business: 3 }
      }
    ]
  },
  {
    id: 'q2_work_rhythm',
    titleEn: 'Which preferred work rhythm matches your ideal day?',
    titleAr: 'ما هي وتيرة العمل المفضلة بالنسبة لك في يومك المثالي؟',
    options: [
      {
        id: 'q2_opt1',
        textEn: 'Long, uninterrupted deep-focus solo stretches building or debugging systems.',
        textAr: 'فترات تركيز فردي طويلة وعميقة بدون مقاطعة في البرمجة وتصحيح الأنظمة.',
        points: { programming: 3, design: 1, data: 2, marketing: 0, business: 0 }
      },
      {
        id: 'q2_opt2',
        textEn: 'Tight, visual iterative feedback loops testing layouts and user flows.',
        textAr: 'حلقات تقييم بصرية سريعة وتكرارية لتجربة الواجهات وتدفق المستخدمين.',
        points: { programming: 1, design: 3, data: 0, marketing: 1, business: 0 }
      },
      {
        id: 'q2_opt3',
        textEn: 'Running data queries, building models, and verifying hypothesis accuracy.',
        textAr: 'تشغيل الاستعلامات، بناء نماذج البيانات، والتحقق من دقة الفرضيات.',
        points: { programming: 1, design: 0, data: 3, marketing: 1, business: 0 }
      },
      {
        id: 'q2_opt4',
        textEn: 'Fast-paced experimentation testing ad copy, viral content, and conversion metrics.',
        textAr: 'تجريب سريع ونشط للإعلانات، المحتوى الفيروسي، ومؤشرات التحويل.',
        points: { programming: 0, design: 1, data: 1, marketing: 3, business: 1 }
      },
      {
        id: 'q2_opt5',
        textEn: 'Constant active coordination, leading client pitches, and making high-level decisions.',
        textAr: 'تنسيق متواصل، قيادة الاجتماعات والتفاوض، واتخاذ القرارات الاستراتيجية.',
        points: { programming: 0, design: 0, data: 0, marketing: 1, business: 3 }
      }
    ]
  },
  {
    id: 'q3_concrete_task',
    titleEn: 'Which of these real concrete tasks would you actually enjoy doing today?',
    titleAr: 'أي من هذه المهام العملية الملموسة تستمتع بالقيام بها اليوم إذا طُلبت منك؟',
    options: [
      {
        id: 'q3_opt1',
        textEn: 'Writing an interactive web feature in JavaScript that fetches and displays real-time data.',
        textAr: 'كتابة ميزة ويب تفاعلية بلغة جافاسكربت تجلب البيانات وتعرضها لحظياً.',
        points: { programming: 3, design: 0, data: 1, marketing: 0, business: 0 }
      },
      {
        id: 'q3_opt2',
        textEn: 'Redesigning a mobile app checkout screen in Figma to make it sleek and painless.',
        textAr: 'إعادة تصميم شاشة الدفع لتطبيق موبايل على Figma لتكون فائقة السلاسة والجمال.',
        points: { programming: 0, design: 3, data: 0, marketing: 1, business: 0 }
      },
      {
        id: 'q3_opt3',
        textEn: 'Cleaning a database table with SQL and creating an interactive dashboard in Power BI.',
        textAr: 'تنظيف جدول بيانات ضخم باستخدام SQL وإنشاء لوحة تحكم تفاعلية في Power BI.',
        points: { programming: 1, design: 0, data: 3, marketing: 0, business: 1 }
      },
      {
        id: 'q3_opt4',
        textEn: 'Launching a targeted paid campaign and writing high-converting copy for a product rollout.',
        textAr: 'إطلاق حملة إعلانية ممولة وكتابة محتوى عالي التحويل لإطلاق منتج جديد.',
        points: { programming: 0, design: 1, data: 1, marketing: 3, business: 1 }
      },
      {
        id: 'q3_opt5',
        textEn: 'Mapping out a 12-month business model roadmap, cash flow forecast, and team milestones.',
        textAr: 'رسم خارطة طريق لنموذج عمل لمدة 12 شهراً، مع توقعات التدفق النقدي ومراحل التنفيذ.',
        points: { programming: 0, design: 0, data: 1, marketing: 1, business: 3 }
      }
    ]
  },
  {
    id: 'q4_tool_pull',
    titleEn: 'Which type of tools/software naturally grab your interest when you explore online?',
    titleAr: 'ما هي نوعية الأدوات والبرامج التي تجذب انتباهك تلقائياً عند التصفح؟',
    options: [
      {
        id: 'q4_opt1',
        textEn: 'Code editors, GitHub repositories, CLI terminals, and framework documentation.',
        textAr: 'محررات الأكواد، مستودعات GitHub، أسطر الأوامر، ومستندات الإطارات البرمجية.',
        points: { programming: 3, design: 0, data: 1, marketing: 0, business: 0 }
      },
      {
        id: 'q4_opt2',
        textEn: 'Figma, design system libraries, typography inspiration, and UI animation tools.',
        textAr: 'برنامج Figma، مكتبات أنظمة التصميم، إلهام الخطوط، وأدوات التفاعل البصري.',
        points: { programming: 0, design: 3, data: 0, marketing: 1, business: 0 }
      },
      {
        id: 'q4_opt3',
        textEn: 'Jupyter Notebooks, SQL workbenches, Tableau charts, and Kaggle datasets.',
        textAr: 'بيئات Jupyter Notebook، منصات SQL، رسوم Tableau، ومجموعات بيانات Kaggle.',
        points: { programming: 1, design: 0, data: 3, marketing: 0, business: 0 }
      },
      {
        id: 'q4_opt4',
        textEn: 'Google Analytics, Meta Ads Manager, SEO keyword explorers, and CRM tools.',
        textAr: 'أدوات Google Analytics، مدير إعلانات ميتا، مستكشفات الكلمات المفتاحية SEO.',
        points: { programming: 0, design: 0, data: 1, marketing: 3, business: 1 }
      },
      {
        id: 'q4_opt5',
        textEn: 'Notion workspace templates, Jira/Trello boards, pitch decks, and financial models.',
        textAr: 'قوالب Notion، لوحات Jira/Trello، عروض تقديم المشاريع، والنماذج المالية.',
        points: { programming: 0, design: 0, data: 0, marketing: 1, business: 3 }
      }
    ]
  },
  {
    id: 'q5_failure_reaction',
    titleEn: 'How do you react when a digital feature or process breaks or fails?',
    titleAr: 'كيف تتصرف عندما تتعطل أداة رقمية أو تفشل ميزة برمجية معينة؟',
    options: [
      {
        id: 'q5_opt1',
        textEn: 'Dig straight into error logs, stack traces, and code lines until the root cause is resolved.',
        textAr: 'الغوص مباشرة في سجلات الأخطاء ومتابعة الأكواد سطر بسطر حتى إصلاح الجذر.',
        points: { programming: 3, design: 0, data: 1, marketing: 0, business: 0 }
      },
      {
        id: 'q5_opt2',
        textEn: 'Redesign the user experience and user flow so users never encounter that confusion again.',
        textAr: 'إعادة تصميم تجربة المستخدم وتدفق الواجهة حتى لا يواجه المستخدم هذا الارباك مجدداً.',
        points: { programming: 0, design: 3, data: 0, marketing: 1, business: 0 }
      },
      {
        id: 'q5_opt3',
        textEn: 'Pull system analytics and error counts to measure exact impact and affected cohorts.',
        textAr: 'سحب التحليلات وحجم التأثير لمعرفة الأرقام الدقيقة والشريحة المتأثرة بالمشكلة.',
        points: { programming: 1, design: 0, data: 3, marketing: 0, business: 1 }
      },
      {
        id: 'q5_opt4',
        textEn: 'Draft a clear, transparent communication to customers and manage brand sentiment.',
        textAr: 'صياغة بيان واضح للعملاء وإدارة الانطباع العام للمحافظة على سمعة العلامة التجارية.',
        points: { programming: 0, design: 1, data: 0, marketing: 3, business: 1 }
      },
      {
        id: 'q5_opt5',
        textEn: 'Re-evaluate team operational workflow and process protocols to prevent repeat occurrences.',
        textAr: 'إعادة تقييم عمليات العمل وإجراءات السلامة التشغيلية لضمان عدم تكرار الخلل.',
        points: { programming: 0, design: 0, data: 1, marketing: 0, business: 3 }
      }
    ]
  },
  {
    id: 'q6_feedback_motivation',
    titleEn: 'What feedback or validation motivates you most when finishing a project?',
    titleAr: 'ما نوع التقييم أو النتيجة التي تمنحك أكبر قدر من الرضا والشغف عند إنجاز مشروع؟',
    options: [
      {
        id: 'q6_opt1',
        textEn: '"It is bug-free, blazing fast, rock-solid, and completely robust under stress."',
        textAr: '"الكود خالٍ تماماً من الأخطاء، سريع للغاية، ويمتلك أداءً ثابتاً تحت أي ضغط."',
        points: { programming: 3, design: 0, data: 1, marketing: 0, business: 0 }
      },
      {
        id: 'q6_opt2',
        textEn: '"It looks stunning, feels intuitive, and people love interacting with the UI."',
        textAr: '"التصميم مذهل، ومريح جداً للاستخدام، والناس يعشقون التفاعل مع الواجهة."',
        points: { programming: 0, design: 3, data: 0, marketing: 1, business: 0 }
      },
      {
        id: 'q6_opt3',
        textEn: '"The insights are bulletproof and backed by clean statistical evidence."',
        textAr: '"النتائج والرؤى مدعومة بأدلة إحصائية قاطعة وأرقام دقيقة لا تقبل الشك."',
        points: { programming: 1, design: 0, data: 3, marketing: 1, business: 0 }
      },
      {
        id: 'q6_opt4',
        textEn: '"Viral engagement skyrocketed, conversion rates doubled, and leads are pouring in."',
        textAr: '"التفاعل ارتفع بشكل هائل، ومعدلات التحويل تضاعفت، والعملاء يتدفقون بكثرة."',
        points: { programming: 0, design: 1, data: 1, marketing: 3, business: 1 }
      },
      {
        id: 'q6_opt5',
        textEn: '"The business unit exceeded revenue targets and operations run smoothly without friction."',
        textAr: '"القطاع حقق أهدافه الأرباح بامتياز، والعمليات الإدارية تسير بسلاسة بدون معوقات."',
        points: { programming: 0, design: 0, data: 1, marketing: 1, business: 3 }
      }
    ]
  },
  {
    id: 'q7_goal_framing',
    titleEn: 'Which career outcome orientation appeals most to you right now?',
    titleAr: 'أي من التوجهات التالية تعكس أسلوبك المفضل لبناء مسارك المهني؟',
    options: [
      {
        id: 'q7_opt1',
        textEn: 'Becoming a high-value technical specialist crafting software solutions.',
        textAr: 'أن أصبح متقناً متخصصاً يبني حلولاً برمجية تقنية عالية القيمة.',
        points: { programming: 3, design: 1, data: 2, marketing: 0, business: 0 }
      },
      {
        id: 'q7_opt2',
        textEn: 'Becoming a creative digital product designer transforming ideas into interfaces.',
        textAr: 'أن أكون مصمماً للمنتجات الرقمية يبتكر الأفكار ويحولها إلى تجارب واجهات.',
        points: { programming: 1, design: 3, data: 0, marketing: 1, business: 0 }
      },
      {
        id: 'q7_opt3',
        textEn: 'Becoming an analytical decision architect turning complex data into revenue levers.',
        textAr: 'أن أكون مهندساً للبيانات والتحليلات يحول التعقيدات الإحصائية لفرص نمو.',
        points: { programming: 1, design: 0, data: 3, marketing: 1, business: 1 }
      },
      {
        id: 'q7_opt4',
        textEn: 'Becoming a growth & digital strategy engine building brand dominance.',
        textAr: 'أن أكون محركاً للنمو والاستراتيجية الرقمية يبني حضور العلامات التجارية.',
        points: { programming: 0, design: 1, data: 1, marketing: 3, business: 1 }
      },
      {
        id: 'q7_opt5',
        textEn: 'Becoming an entrepreneur or operational leader orchestrating profitable ventures.',
        textAr: 'أن أكون رائد أعمال أو قائداً تشغيلياً يدير مشروعات مربحة ومستدامة.',
        points: { programming: 0, design: 0, data: 1, marketing: 1, business: 3 }
      }
    ]
  },
  {
    id: 'q8_job_ad_snippet',
    titleEn: 'Which of these job ad snippets sounds like a position you would want to hold?',
    titleAr: 'أي من ملخصات الوظائف التالية تشعر بأنه المكان الذي تتمنى العمل فيه؟',
    options: [
      {
        id: 'q8_opt1',
        textEn: '"Looking for a Software Engineer to design, test, and ship clean scalable Web APIs."',
        textAr: '"نبحث عن مهندس برمجيات لبناء واختبار ونشر واجهات برمجة تطبيقات قوية وسريعة."',
        points: { programming: 3, design: 0, data: 1, marketing: 0, business: 0 }
      },
      {
        id: 'q8_opt2',
        textEn: '"Seeking a UI/UX Product Designer to craft seamless interactive Figma design systems."',
        textAr: '"نبحث عن مصمم واجهات وتجربة مستخدم لابتكار أنظمة تصميم تفاعلية وسلسة."',
        points: { programming: 0, design: 3, data: 0, marketing: 1, business: 0 }
      },
      {
        id: 'q8_opt3',
        textEn: '"Hiring a Data Analyst to build predictive analytics, SQL models, and executive dashboards."',
        textAr: '"نبحث عن محلل بيانات لبناء نماذج استعلامات SQL ولوحات تحكم الرؤى التنفيذية."',
        points: { programming: 1, design: 0, data: 3, marketing: 0, business: 1 }
      },
      {
        id: 'q8_opt4',
        textEn: '"Looking for a Growth Marketing Specialist to drive customer acquisition and ad performance."',
        textAr: '"نبحث عن أخصائي تسويق نمو لقيادة حملات الاستحواذ على العملاء وإدارتها."',
        points: { programming: 0, design: 1, data: 1, marketing: 3, business: 1 }
      },
      {
        id: 'q8_opt5',
        textEn: '"Seeking an Operations & Project Lead to manage cross-functional product sprints and strategy."',
        textAr: '"نبحث عن قائد عمليات ومشاريع لإدارة جولات التطبيق والاستراتيجية الإدارية."',
        points: { programming: 0, design: 0, data: 1, marketing: 1, business: 3 }
      }
    ]
  }
];

// Part B — Current Skills Checklist (40+ concrete skills grouped by field)
export const ALL_SKILLS: SkillItem[] = [
  // Programming
  { id: 'prog_html', name: 'HTML5 & Semantic Markup', field: 'programming' },
  { id: 'prog_css', name: 'CSS3, Flexbox & Responsive Grid', field: 'programming' },
  { id: 'prog_js', name: 'JavaScript ES6+ Fundamentals', field: 'programming' },
  { id: 'prog_git', name: 'Git & GitHub Version Control', field: 'programming' },
  { id: 'prog_react', name: 'React / Next.js / Vue Frontend Frameworks', field: 'programming' },
  { id: 'prog_ts', name: 'TypeScript Type Safety', field: 'programming' },
  { id: 'prog_node', name: 'Node.js / Express Backend APIs', field: 'programming' },
  { id: 'prog_python', name: 'Python General Scripting', field: 'programming' },
  { id: 'prog_sql', name: 'Relational Databases & SQL Queries', field: 'programming' },

  // Design
  { id: 'des_figma', name: 'Figma UI Prototyping', field: 'design' },
  { id: 'des_adobe', name: 'Adobe Illustrator / Photoshop', field: 'design' },
  { id: 'des_typography', name: 'Typography Fundamentals & Hierarchy', field: 'design' },
  { id: 'des_color', name: 'Color Theory & Accessibility Contrasts', field: 'design' },
  { id: 'des_wireframing', name: 'Wireframing & Low-Fi Sketching', field: 'design' },
  { id: 'des_research', name: 'User Research & Interviewing Basics', field: 'design' },
  { id: 'des_systems', name: 'Design Systems & Component Tokens', field: 'design' },
  { id: 'des_testing', name: 'Usability Testing & Micro-Interactions', field: 'design' },

  // Data
  { id: 'data_excel', name: 'Excel / Google Sheets Advanced Formulas', field: 'data' },
  { id: 'data_sql', name: 'SQL Querying (JOINs, Aggregations)', field: 'data' },
  { id: 'data_python', name: 'Python for Data Analysis (Pandas, NumPy)', field: 'data' },
  { id: 'data_bi', name: 'Power BI / Tableau Interactive Dashboards', field: 'data' },
  { id: 'data_stats', name: 'Statistics & Hypothesis Testing', field: 'data' },
  { id: 'data_cleaning', name: 'Data Wrangling & ETL Cleaning', field: 'data' },
  { id: 'data_ab', name: 'A/B Testing Experiment Design', field: 'data' },
  { id: 'data_ml', name: 'Machine Learning Basics (Scikit-Learn)', field: 'data' },

  // Marketing
  { id: 'mkt_seo', name: 'SEO Keyword Research & On-Page SEO', field: 'marketing' },
  { id: 'mkt_copywriting', name: 'Persuasive Copywriting & Messaging', field: 'marketing' },
  { id: 'mkt_social', name: 'Social Media Strategy & Content Calendar', field: 'marketing' },
  { id: 'mkt_email', name: 'Email Marketing & Automation Funnels', field: 'marketing' },
  { id: 'mkt_analytics', name: 'Google Analytics 4 (GA4) Tracking', field: 'marketing' },
  { id: 'mkt_meta_ads', name: 'Meta Ads Manager (Facebook/Instagram)', field: 'marketing' },
  { id: 'mkt_google_ads', name: 'Google Search Ads & PPC Campaigns', field: 'marketing' },
  { id: 'mkt_brand', name: 'Brand Positioning & Content Strategy', field: 'marketing' },

  // Business
  { id: 'biz_pm', name: 'Project Management & Agile Sprints', field: 'business' },
  { id: 'biz_finance', name: 'Financial Modeling & Budgeting', field: 'business' },
  { id: 'biz_sales', name: 'Sales Fundamentals & Lead Pipeline', field: 'business' },
  { id: 'biz_negotiation', name: 'Client Negotiation & Contracting', field: 'business' },
  { id: 'biz_speaking', name: 'Public Speaking & Presentation Pitching', field: 'business' },
  { id: 'biz_planning', name: 'Business Model Canvas & Market Validation', field: 'business' },
  { id: 'biz_people', name: 'People Management & Operations', field: 'business' },
  { id: 'biz_accounting', name: 'Basic Bookkeeping & Accounting Principles', field: 'business' }
];

// Part C — Context Questions
export const PART_C_QUESTIONS: PartCQuestion[] = [
  {
    id: 'overallExperience',
    titleEn: 'How many total years of general work experience do you have?',
    titleAr: 'ما هو إجمالي عدد سنوات خبرتك العملية الكلية في أي مجال؟',
    options: [
      { value: '0', labelEn: '0 years (Complete Beginner / Student)', labelAr: '0 سنوات (مبتدئ / طالب)' },
      { value: '1-2', labelEn: '1–2 years', labelAr: '1 – 2 سنة' },
      { value: '3-5', labelEn: '3–5 years', labelAr: '3 – 5 سنوات' },
      { value: '5+', labelEn: '5+ years (Experienced Professional)', labelAr: 'أكثر من 5 سنوات (محترف خبرة)' }
    ]
  },
  {
    id: 'weeklyHours',
    titleEn: 'How many focused hours can you dedicate to learning per week?',
    titleAr: 'كم عدد الساعات المخصصة التي يمكنك التفرغ لها للتعلم أسبوعياً؟',
    options: [
      { value: '<5', labelEn: '< 5 hours/week (Light casual pace)', labelAr: 'أقل من 5 ساعات أسبوعياً (وتيرة خفيفة)' },
      { value: '5-10', labelEn: '5–10 hours/week (Steady part-time)', labelAr: '5 – 10 ساعات أسبوعياً (جزئي منتظم)' },
      { value: '10-20', labelEn: '10–20 hours/week (Accelerated focus)', labelAr: '10 – 20 ساعة أسبوعياً (تركيز مكثف)' },
      { value: '20+', labelEn: '20+ hours/week (Full immersive sprint)', labelAr: '20+ ساعة أسبوعياً (تفرغ شبه كامل)' }
    ]
  },
  {
    id: 'learningFormat',
    titleEn: 'What is your preferred primary learning format?',
    titleAr: 'ما هو نمط التعلم المفضل لديك في تحصيل المهارات؟',
    options: [
      { value: 'video', labelEn: 'Self-paced video courses & tutorials', labelAr: 'دورات فيديو ذاتية الوتيرة وشروحات' },
      { value: 'interactive', labelEn: 'Interactive hands-on code/project sandboxes', labelAr: 'تطبيقات تفاعلية ومشاريع بأسلوب التجربة' },
      { value: 'docs', labelEn: 'Reading official documentation & written guides', labelAr: 'قراءة المستندات الرسمية والدلائل المكتوبة' },
      { value: 'structured', labelEn: 'Structured bootcamps & guided cohorts', labelAr: 'معسكرات مهيكلة ومجموعات دراسية' }
    ]
  },
  {
    id: 'currentStatus',
    titleEn: 'What is your current occupational status?',
    titleAr: 'ما هي حالتك الوظيفية/المهنية الحالية؟',
    options: [
      { value: 'student', labelEn: 'Student or recent graduate', labelAr: 'طالب أو خريج حديث' },
      { value: 'employed', labelEn: 'Employed full-time (looking to switch/upskill)', labelAr: 'موظف حالياً (أبحث عن تطوير/تغيير مجال)' },
      { value: 'freelancer', labelEn: 'Freelancer / Independent contractor', labelAr: 'مستقل / يعمل لحسابه الخاص' },
      { value: 'transition', labelEn: 'Between jobs / Career pivot', labelAr: 'في مرحلة انتقالية بين الوظائف' }
    ]
  },
  {
    id: 'primaryGoal',
    titleEn: 'What is your primary goal for completing this assessment?',
    titleAr: 'ما هو هدفك الرئيسي الأول من إجراء هذا التقييم؟',
    options: [
      { value: 'job', labelEn: 'Land a full-time job / career role', labelAr: 'الحصول على وظيفة بدوام كامل' },
      { value: 'freelance', labelEn: 'Build global freelance & remote income streams', labelAr: 'بناء دخل من العمل الحر والعمل عن بُعد' },
      { value: 'business', labelEn: 'Start / grow my own business or startup', labelAr: 'تأسيس أو تطوير مشروع خاص / شركة ناشئة' },
      { value: 'curious', labelEn: 'Personal growth & skill discovery', labelAr: 'تطوير شخصي واستكشاف المهارات' }
    ]
  }
];
