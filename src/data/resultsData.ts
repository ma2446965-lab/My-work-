import { FieldKey } from './quizQuestions';

export type EntryLevel = 'beginner' | 'intermediate' | 'advanced';

export interface ResourceItem {
  name: string;
  url?: string;
  type?: string;
}

export interface RoadmapPhase {
  phaseNumber: number;
  titleEn: string;
  titleAr: string;
  estimatedHours: number;
  outcomeEn: string;
  outcomeAr: string;
  resources: ResourceItem[];
}

export interface ResultNode {
  fieldKey: FieldKey;
  level: EntryLevel;
  skillNameEn: string;
  skillNameAr: string;
  whyThisSkillEn: string;
  whyThisSkillAr: string;
  baseHoursRequired: number;
  firstStepEn: string;
  firstStepAr: string;
  roadmap: RoadmapPhase[];
}

export const RESULTS_DATA: Record<string, ResultNode> = {
  // 1. Programming x Beginner
  'programming_beginner': {
    fieldKey: 'programming',
    level: 'beginner',
    skillNameEn: 'HTML, CSS & the Foundations of the Web',
    skillNameAr: 'HTML و CSS وأساسيات هيكلة الويب',
    whyThisSkillEn: 'You scored highest for Programming but do not yet know any of the checklist items, so you need the actual starting point of web development—structuring content with HTML and styling it with CSS—before touching any real logic. Everything else (JavaScript, frameworks, backend work) is built directly on top of this. It is also the fastest route to building something visible and shareable within the first two weeks, which matters a lot for staying motivated early on.',
    whyThisSkillAr: 'لقد حققت أعلى نتيجة في مجال البرمجة ولكنك لم تحدد مهارات سابقة في القائمة، لذا فإن البداية الحقيقية تكمن في أساسيات الويب: هيكلة المحتوى باستخدام HTML وتنسيقه بـ CSS قبل الانتقال للمنطق والتشفير. جميع الإطارات ولغات الويب تبنى على هذا الأساس، وهو أسرع طريق لبناء تطبيق مرئي ومشاركته في أول أسبوعين لتعزيز تحفيزك.',
    baseHoursRequired: 90,
    firstStepEn: 'Go to freecodecamp.org, create a free account, and finish the first 3 lessons of the Responsive Web Design certification today—about 30 minutes.',
    firstStepAr: 'توجه إلى freecodecamp.org، أنشئ حساباً مجانياً، وأكمل أول 3 دروس في شهادة تصميم الويب المتجاوب اليوم — يستغرق ذلك حوالي 30 دقيقة.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'How the Web Actually Works',
        titleAr: 'كيف يعمل الويب والدواخل التقنية',
        estimatedHours: 8,
        outcomeEn: 'Understand client/server basics, what HTML/CSS/JS each do, set up VS Code and a dev-tools habit.',
        outcomeAr: 'فهم كافٍ لآلية العميل/الخادم، أدوار HTML/CSS/JS، وإعداد بيئة العمل VS Code وأدوات المتصفح.',
        resources: [
          { name: 'MDN Web Docs: Getting started with the web' },
          { name: 'freeCodeCamp: Web Development Intro Video' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'HTML Structure & Semantics',
        titleAr: 'هيكلة وتنسيق HTML الدلالي',
        estimatedHours: 15,
        outcomeEn: 'Build a multi-section page using correct semantic HTML tags.',
        outcomeAr: 'بناء صفحة متعددة الأقسام باستخدام وسمات HTML الدلالية الصحيحة وتسهيل وصول المحرك.',
        resources: [
          { name: 'freeCodeCamp Responsive Web Design (HTML Section)' },
          { name: 'MDN HTML Basics Guide' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'CSS Fundamentals',
        titleAr: 'أساسيات CSS والتنسيق البصري',
        estimatedHours: 20,
        outcomeEn: 'Style layouts using the box model, color, and typography, and understand the cascade.',
        outcomeAr: 'تنسيق تخطيطات الصفحة باستخدام نموذج الصندوق، الألوان، الخطوط، وفهم التتابع الطبيعي.',
        resources: [
          { name: 'freeCodeCamp CSS Fundamentals' },
          { name: 'Kevin Powell CSS YouTube Channel' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Responsive Layout: Flexbox & Grid',
        titleAr: 'التخطيط المتجاوب: Flexbox و Grid',
        estimatedHours: 20,
        outcomeEn: 'Build a fully responsive 3-page site that works seamlessly on mobile and desktop.',
        outcomeAr: 'بناء موقع متجاوب من 3 صفحات يعمل بسلاسة التامة على الشاشات الكبيرة والهواتف.',
        resources: [
          { name: 'CSS-Tricks Flexbox & Grid Complete Guides' },
          { name: 'Flexbox Froggy & Grid Garden Browser Games' }
        ]
      },
      {
        phaseNumber: 5,
        titleEn: 'Git & GitHub Basics',
        titleAr: 'إدارة الإصدارات بـ Git و GitHub',
        estimatedHours: 8,
        outcomeEn: 'Commit, push, and host a static site on GitHub Pages comfortably.',
        outcomeAr: 'القدرة على حفظ التغييرات واستضافة موقعك الثابت على GitHub Pages مجاناً.',
        resources: [
          { name: 'GitHub Official Hello World Guide' },
          { name: 'freeCodeCamp Git & GitHub Crash Course' }
        ]
      },
      {
        phaseNumber: 6,
        titleEn: 'Build a Real Capstone Project',
        titleAr: 'بناء مشروع التخرج التطبيقي',
        estimatedHours: 15,
        outcomeEn: 'Construct a complete personal portfolio site live on the internet.',
        outcomeAr: 'إنشاء موقع سيرتك الذاتية ومعرض أعمالك بالكامل ونشره حياً على شبكة الإنترنت.',
        resources: [
          { name: 'Frontend Mentor Challenge Briefs' },
          { name: 'MDN Web Accessibility (a11y) Guide' }
        ]
      },
      {
        phaseNumber: 7,
        titleEn: 'Polish, Test & Share',
        titleAr: 'الصقل والتجربة والمشاركة',
        estimatedHours: 4,
        outcomeEn: 'Fix color contrast, test on real mobile devices, and share link on LinkedIn.',
        outcomeAr: 'معالجة التباين البصري، تجربة الموقع على الهواتف، ومشاركة الرابط على LinkedIn.',
        resources: [
          { name: 'WAVE Web Accessibility Evaluation Tool' }
        ]
      }
    ]
  },

  // 2. Programming x Intermediate
  'programming_intermediate': {
    fieldKey: 'programming',
    level: 'intermediate',
    skillNameEn: 'JavaScript & Interactive Front-End Development',
    skillNameAr: 'جافاسكربت وتطوير الواجهات التفاعلية',
    whyThisSkillEn: 'You already have markup/styling basics; real programming logic in JavaScript is the natural next step and opens the door to any framework afterward. JavaScript powers dynamic client-side interactions, data fetching, and state updates.',
    whyThisSkillAr: 'تمتلك بالفعل أساسيات الهيكلة والتنسيق، ولذا فإن تعلّم المنطق البرمجي بلغة جافاسكربت هو الخطوة الطبيعية التالية التي تفتح لك أبواب إطارات العمل الحديثة والتفاعل مع المستخدم.',
    baseHoursRequired: 110,
    firstStepEn: 'Complete the first section of freeCodeCamp’s JavaScript Algorithms and Data Structures certification today.',
    firstStepAr: 'أكمل الجزء الأول من شهادة خوارزميات وهياكل بيانات جافاسكربت على freeCodeCamp اليوم.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'JS Syntax & Core Data Types',
        titleAr: 'صياغة جافاسكربت وأنواع البيانات',
        estimatedHours: 15,
        outcomeEn: 'Master variables, loops, arrays, objects, and control flow in modern ES6+.',
        outcomeAr: 'إتقان المتغيرات، الحلقات، المصفوفات، الكائنات، وتدفق التحكم في معايير ES6+.',
        resources: [
          { name: 'freeCodeCamp JavaScript Algorithms & Data Structures' },
          { name: 'javascript.info (The Modern JavaScript Tutorial)' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Functions & Scope',
        titleAr: 'الدوال ونطاق المتغيرات',
        estimatedHours: 15,
        outcomeEn: 'Understand closures, higher-order functions, arrow syntax, and block scope.',
        outcomeAr: 'فهم الإغلاقات (closures)، الدوال العالية، ونطاق الكتل المتغيرة.',
        resources: [
          { name: 'javascript.info: Functions and Closures' },
          { name: 'MDN JavaScript Functions Guide' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'DOM Manipulation & Events',
        titleAr: 'التحكم في شجرة DOM والأحداث',
        estimatedHours: 20,
        outcomeEn: 'Dynamically update web elements, handle user clicks, inputs, and form events.',
        outcomeAr: 'تحديث عناصر الصفحة ديناميكياً، والتعامل مع نقرات وإدخالات المستخدم.',
        resources: [
          { name: 'freeCodeCamp DOM Manipulation Course' },
          { name: 'DOM Enlightenment Guide' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Asynchronous JS & Fetch API',
        titleAr: 'البرمجة غير المتزامنة وربط REST APIs',
        estimatedHours: 20,
        outcomeEn: 'Handle Promises, async/await, fetch third-party JSON APIs, and render dynamic data.',
        outcomeAr: 'إتقان Promises و Async/Await وجلب البيانات الخارجية وعرضها.',
        resources: [
          { name: 'MDN Asynchronous JavaScript Guide' },
          { name: 'The Odin Project: Async JS & APIs' }
        ]
      },
      {
        phaseNumber: 5,
        titleEn: 'Build an Interactive Web App',
        titleAr: 'بناء تطبيق ويب تفاعلي كامل',
        estimatedHours: 25,
        outcomeEn: 'Create a functional Weather Dashboard or Task Kanban board storing data in localStorage.',
        outcomeAr: 'إنشاء تطبيق متكامل مثل لوحة مهام حية تحفظ البيانات في التخزين المحلي.',
        resources: [
          { name: 'Frontend Mentor Intermediate JS Challenges' },
          { name: 'JavaScript30 by Wes Bos' }
        ]
      },
      {
        phaseNumber: 6,
        titleEn: 'JS Tooling & NPM',
        titleAr: 'أدوات بناء جافاسكربت و NPM',
        estimatedHours: 15,
        outcomeEn: 'Use Node/NPM, bundling basics with Vite, and module imports/exports.',
        outcomeAr: 'استخدام حزم NPM وأدوات البناء الحديثة مثل Vite وتنظيم الوحدات البرمجية.',
        resources: [
          { name: 'Node.js Docs: Introduction to NPM' },
          { name: 'Vite Official Guide' }
        ]
      }
    ]
  },

  // 3. Programming x Advanced
  'programming_advanced': {
    fieldKey: 'programming',
    level: 'advanced',
    skillNameEn: 'React & Modern Frontend Engineering',
    skillNameAr: 'إطار العمل React وهندسة الواجهات الحديثة',
    whyThisSkillEn: 'With several core skills in place, the highest-leverage move is a production framework to build real scalable applications. React is the dominant industry standard, providing component component architecture, custom hooks, and rich ecosystem tools.',
    whyThisSkillAr: 'مع امتلاكك لمهارات برمجية متعددة، فإن النقلة الأكثر تأثيراً هي إتقان إطار عمل احترافي لبناء تطبيقات ضخمة. يظل React المعيار الأول عالمياً لبناء مكونات قابلة لإعادة الاستخدام.',
    baseHoursRequired: 140,
    firstStepEn: 'Go through the official React Quick Start tutorial today and build the interactive tic-tac-toe example.',
    firstStepAr: 'اطلع على دليل البداية السريعة في موقع React الرسمي اليوم وقم بإنشاء لعبة Tic-Tac-Toe التفاعلية.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'React Component & JSX Mental Model',
        titleAr: 'بنية المكونات و JSX في React',
        estimatedHours: 20,
        outcomeEn: 'Master props, state, JSX syntax, and component breakdown.',
        outcomeAr: 'فهم الخصائص، حالات المكونات، صياغة JSX، وتقسيم الواجهة لمكونات صغيرة.',
        resources: [
          { name: 'Official React Documentation (react.dev)' },
          { name: 'freeCodeCamp React Course' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Hooks & State Management',
        titleAr: 'الخطافات Hooks وإدارة الحالة',
        estimatedHours: 25,
        outcomeEn: 'Master useState, useEffect, useContext, useReducer, and custom hooks.',
        outcomeAr: 'إتقان إدارة دورة حياة المكون والتحكم بالحالة مع useState و useEffect والخطافات المخصصة.',
        resources: [
          { name: 'React Docs: Managing State' },
          { name: 'Epic React Fundamentals by Kent C. Dodds' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'Routing & Client Architecture',
        titleAr: 'التنقل بين الصفحات وترتيب المشروع',
        estimatedHours: 20,
        outcomeEn: 'Configure React Router, multi-page routing, layout wrappers, and query parameters.',
        outcomeAr: 'إعداد React Router، والتنقل بين الصفحات متعددة المسارات والمحاذاة.',
        resources: [
          { name: 'React Router Official Documentation' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'TypeScript with React',
        titleAr: 'دمج TypeScript مع React لأمان الشفرة',
        estimatedHours: 25,
        outcomeEn: 'Type React props, events, state hooks, and API responses confidently.',
        outcomeAr: 'تطبيق الأنواع البرمجية المحمية على خصائص وأحداث واستجابات APIs.',
        resources: [
          { name: 'React TypeScript Cheatsheet' },
          { name: 'TypeScript Official Handbook' }
        ]
      },
      {
        phaseNumber: 5,
        titleEn: 'State & Data Fetching Libraries',
        titleAr: 'إدارة البيانات المتقدمة وجلب البيانات',
        estimatedHours: 25,
        outcomeEn: 'Implement TanStack Query (React Query) or Zustand for server/global state.',
        outcomeAr: 'استخدام أدوات إدارة الحالة العالمية وجلب البيانات التلقائي بكفاءة.',
        resources: [
          { name: 'TanStack Query Official Docs' },
          { name: 'Zustand GitHub Documentation' }
        ]
      },
      {
        phaseNumber: 6,
        titleEn: 'Production Full Stack SaaS Build',
        titleAr: 'بناء تطبيق متكامل جاهز للإنتاج',
        estimatedHours: 25,
        outcomeEn: 'Build and deploy a full feature React SaaS dashboard to Vercel/Netlify.',
        outcomeAr: 'إنشاء ونشر لوحة تحكم سحابية متكاملة على منصة Vercel بنجاح.',
        resources: [
          { name: 'The Odin Project: React Final Capstone' }
        ]
      }
    ]
  },

  // 4. Design x Beginner
  'design_beginner': {
    fieldKey: 'design',
    level: 'beginner',
    skillNameEn: 'Design Fundamentals & Figma Basics',
    skillNameAr: 'أساسيات التصميم وأساسيات استخدام Figma',
    whyThisSkillEn: 'Before diving into complex user experience workflows, you need the fundamental visual grammar—typography, color hierarchy, grid alignment—paired with basic Figma tool fluency. This builds a solid creative baseline for all future design tracks.',
    whyThisSkillAr: 'قبل الغوص في أبحاث وتجارب المستخدمين المعقدة، تحتاج إلى إتقان القواعد البصرية الأساسية: التسلسل الهرمي للخطوط، تباين الألوان، والمحاذاة، بالإضافة إلى إتقان استخدام برنامج Figma.',
    baseHoursRequired: 70,
    firstStepEn: 'Complete Figma’s free Figma for Beginners interactive video course today.',
    firstStepAr: 'أكمل دورة Figma للمبتدئين التفاعلية المجانية المتاحة على موقع Figma اليوم.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'Visual Design Grammar',
        titleAr: 'قواعد التكوين والتناسق البصري',
        estimatedHours: 12,
        outcomeEn: 'Understand typography scales, visual hierarchy, color theory, and white space.',
        outcomeAr: 'فهم أحجام الخطوط، التسلسل البصري للعين، تباين الألوان، والمسافات البيضاء.',
        resources: [
          { name: 'HackDesign Free Weekly Lessons' },
          { name: 'Refactoring UI Sample Articles' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Figma Canvas & Shape Tools',
        titleAr: 'أدوات الرسم والتصميم في Figma',
        estimatedHours: 15,
        outcomeEn: 'Master frames, vector tools, Boolean operations, and image masks in Figma.',
        outcomeAr: 'إتقان استخدام الإطارات، أدوات المتجهات، والعمليات المنطقية في Figma.',
        resources: [
          { name: 'Figma Official YouTube Channel (Figma for Beginners)' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'UI Components & Styles',
        titleAr: 'عناصر الواجهات وأنماط الألوان والخطوط',
        estimatedHours: 15,
        outcomeEn: 'Create reusable color palettes, typography styles, and basic UI buttons.',
        outcomeAr: 'إنشاء لوحات ألوان قابلة للاستخدام، أنماط الخطوط، والأزرار الأساسية.',
        resources: [
          { name: 'Figma Learn: Styles & Libraries' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Recreating Existing Apps',
        titleAr: 'تفكيك وإعادة تصميم تطبيقات قائمة',
        estimatedHours: 18,
        outcomeEn: 'Copy-design 3 popular mobile screens pixel-for-pixel to build muscle memory.',
        outcomeAr: 'إعادة رسم 3 شاشات لتطبيقات شهيرة بدقة لتدريب العين واليد على التفاصيل.',
        resources: [
          { name: 'Mobbin.com UI Screen Reference' },
          { name: 'Pttrns Mobile Design Archive' }
        ]
      },
      {
        phaseNumber: 5,
        titleEn: 'First Landing Page Design',
        titleAr: 'تصميم أول صفحة هبوط متكاملة',
        estimatedHours: 10,
        outcomeEn: 'Design a clean, polished desktop landing page and publish file link for review.',
        outcomeAr: 'تصميم صفحة هبوط ممتازة ومتناسقة ومشاركة الرابط للحصول على انطباعات.',
        resources: [
          { name: 'Figma Community Practice Files' }
        ]
      }
    ]
  },

  // 5. Design x Intermediate (Reference Example)
  'design_intermediate': {
    fieldKey: 'design',
    level: 'intermediate',
    skillNameEn: 'Figma Prototyping & Design Systems',
    skillNameAr: 'بناء النماذج التفاعلية وأنظمة التصميم في Figma',
    whyThisSkillEn: 'You already know several design fundamentals, so the highest-leverage next step is going from making individual screens look good to designing systems that scale—reusable components, consistent tokens, and interactive prototypes that communicate exactly how something should behave. This is the skill gap between junior and mid-level design work.',
    whyThisSkillAr: 'تمتلك معرفة بالأساسيات، والنقلة النوعية التالية هي الانتقال من تصميم شاشات منفردة إلى بناء أنظمة تصميم متكاملة قابلة للتوسع بمكونات متكررة ونماذج تفاعلية حية تبين حركة العناصر وسلوكها المستهدف.',
    baseHoursRequired: 90,
    firstStepEn: 'Open Figma’s official Auto layout tutorial today and rebuild one existing design of yours using it.',
    firstStepAr: 'افتح درس Auto layout الرسمي في موقع Figma اليوم وأعد هيكلة أحد تصاميمك السابقة باستخدامه.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'Figma Fluency Beyond Basics',
        titleAr: 'الاحترافية المتقدمة في Figma',
        estimatedHours: 10,
        outcomeEn: 'Master auto-layout, responsive constraints, components, and variant properties.',
        outcomeAr: 'إتقان استخدام التنسيق التلقائي Auto-layout، القيود، والمكونات والمتغيرات.',
        resources: [
          { name: 'Figma Official Auto Layout Tutorial' },
          { name: 'Figma Official Components & Variants Guide' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Design Tokens & Systems Thinking',
        titleAr: 'رمزية التصميم والتفكير بالأنظمة',
        estimatedHours: 15,
        outcomeEn: 'Build a reusable component library (colors, type scale, spacing, buttons, inputs).',
        outcomeAr: 'بناء مكتبة مكونات شاملة (مقياس ألوان، خطوط، مسافات، أزرار، حقول إدخال).',
        resources: [
          { name: 'Figma Community Open Design Systems' },
          { name: 'Nielsen Norman Group Design Systems Articles' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'Interaction & Interactive Prototyping',
        titleAr: 'التفاعل وبناء النماذج التفاعلية الحية',
        estimatedHours: 15,
        outcomeEn: 'Wire up a clickable, realistic prototype with smooth smart-animate transitions and states.',
        outcomeAr: 'ربط الشاشات بنماذج تفاعلية قابلة للنقر مع حركات Smart-Animate انتقالية.',
        resources: [
          { name: 'Figma Official Interactive Prototyping Guide' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'UX Principles in Practice',
        titleAr: 'تطبيق مبادئ تجربة المستخدم',
        estimatedHours: 15,
        outcomeEn: 'Apply core usability heuristics to evaluate and redesign a real friction point.',
        outcomeAr: 'تطبيق قواعد الاستخدام لتقييم ومعالجة النقاط المعقدة في تجربة المستخدم.',
        resources: [
          { name: 'Nielsen Norman Group 10 Usability Heuristics' }
        ]
      },
      {
        phaseNumber: 5,
        titleEn: 'Lightweight User Testing',
        titleAr: 'اختبارات الاستخدام الخفيفة',
        estimatedHours: 15,
        outcomeEn: 'Run 3–5 informal usability testing sessions on your prototype and document findings.',
        outcomeAr: 'إجراء 3 إلى 5 جلسات اختبار مع مستخدمين حقيقيين وتدوين الملاحظات والمشاكل.',
        resources: [
          { name: 'NN/g Discount Usability Testing Guide' }
        ]
      },
      {
        phaseNumber: 6,
        titleEn: 'Case Study Project & Portfolio Polish',
        titleAr: 'صياغة دراسة حالة ونشر معرض الأعمال',
        estimatedHours: 20,
        outcomeEn: 'Turn one project into a polished structured case study (problem → process → outcome).',
        outcomeAr: 'تحويل المشروع لقصة دراسة حالة متكاملة (المشكلة ← خطوات العمل ← النتائج).',
        resources: [
          { name: 'Behance / Notion Portfolio Templates' }
        ]
      }
    ]
  },

  // 6. Design x Advanced
  'design_advanced': {
    fieldKey: 'design',
    level: 'advanced',
    skillNameEn: 'UX Research, Usability Testing & Portfolio Case Studies',
    skillNameAr: 'أبحاث تجربة المستخدم واختبارات القابلية وصياغة دراسات الحالة',
    whyThisSkillEn: 'At this level, tool skill is no longer the bottleneck—process rigor, research methodologies, and clear business communication are what unlock senior roles and high-paying client contracts.',
    whyThisSkillAr: 'عند الوصول لهذا المستوى، لا تشكل المهارات الأدواتية العائق، بل تعميق منهجيات البحث العلمي واختبارات القابلية وربط نتائج التصميم بأهداف النمو التجاري هي ما ينقلك لفئة المصممين الخبراء.',
    baseHoursRequired: 100,
    firstStepEn: 'Read Nielsen Norman Group’s introductory article on usability testing today and outline a research plan for one existing project.',
    firstStepAr: 'اقرأ مقال Nielsen Norman Group المرجعي حول اختبارات الاستخدام اليوم وارسم مخططاً لبحث مستخدمين لمشروع سابق.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'User Research Methodologies',
        titleAr: 'منهجيات البحث الكيفي والكمي',
        estimatedHours: 20,
        outcomeEn: 'Plan user interviews, survey design, persona creation, and empathy mapping.',
        outcomeAr: 'تخطيط المقابلات مع المستخدمين، بناء استبيانات، وصياغة الشخصيات المستهدفة.',
        resources: [
          { name: 'NN/g UX Research Methods Overview' },
          { name: 'Interaction Design Foundation Articles' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Information Architecture & Journey Mapping',
        titleAr: 'هندسة المعلومات وخرائط رحلة المستخدم',
        estimatedHours: 20,
        outcomeEn: 'Structure complex app sitemaps, card sorting exercises, and user flow charts.',
        outcomeAr: 'رسم خرائط تدفق المستخدم والهيكل التنظيمي للمعلومات بالتطبيقات الكبيرة.',
        resources: [
          { name: 'NN/g Information Architecture Guide' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'Usability Test Execution',
        titleAr: 'تنفيذ وإدارة اختبارات القابلية',
        estimatedHours: 20,
        outcomeEn: 'Moderate testing sessions, record qualitative pain points, and quantify task completion.',
        outcomeAr: 'إدارة جلسات الاختبار الحي مع تسجيل الأخطاء ومعدلات نجاح إنجاز المهام.',
        resources: [
          { name: 'Steve Krug: Don’t Make Me Think Usability Testing' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Design Strategy & Business Alignment',
        titleAr: 'استراتيجية التصميم وربطها بالأرباح',
        estimatedHours: 20,
        outcomeEn: 'Tie UX metrics (SUS, CES, retention) directly to ROI and business KPIs.',
        outcomeAr: 'ربط مؤشرات تجربة المستخدم بالعائد على الاستثمار وأهداف الربحية للشركات.',
        resources: [
          { name: 'InVision Design Maturity Reports' }
        ]
      },
      {
        phaseNumber: 5,
        titleEn: 'Senior Portfolio Presentation',
        titleAr: 'إعداد المعرض المهني المتقدم',
        estimatedHours: 20,
        outcomeEn: 'Publish 2 comprehensive end-to-end UX case studies showcasing deep research.',
        outcomeAr: 'نشر دراستي حالة تفصيلية تعكس خطوات التفكير والحلول والتأثير المالي.',
        resources: [
          { name: 'Best UX Portfolio Case Studies Archive' }
        ]
      }
    ]
  },

  // 7. Data x Beginner
  'data_beginner': {
    fieldKey: 'data',
    level: 'beginner',
    skillNameEn: 'Excel/Google Sheets & SQL Fundamentals',
    skillNameAr: 'أساسيات الجداول الممتدة Excel و لغة SQL للبيانات',
    whyThisSkillEn: 'Before touching Python or complex Machine Learning models, real entry-level data analysis runs heavily on spreadsheet calculations and structured database querying using SQL. These form 80% of daily data analyst requests.',
    whyThisSkillAr: 'قبل الانتقال للغات البرمجة ونماذج الذكاء الاصطناعي، تعتمد 80% من مهام تحليل البيانات في الشركات على إتقان الجداول الممتدة Excel وكتابة استعلامات قواعد البيانات SQL.',
    baseHoursRequired: 60,
    firstStepEn: 'Start Kaggle Learn’s free Intro to SQL micro-course today (takes about 3 hours).',
    firstStepAr: 'ابدأ دورة مقدمة في SQL المجانية المتاحة على Kaggle Learn اليوم (تستغرق حوالي 3 ساعات).',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'Excel Data Wrangling & Pivot Tables',
        titleAr: 'معالجة البيانات والداول المحورية في Excel',
        estimatedHours: 15,
        outcomeEn: 'Master VLOOKUP/XLOOKUP, INDEX/MATCH, Pivot Tables, and chart visualization.',
        outcomeAr: 'إتقان دوال VLOOKUP و XLOOKUP والجداول المحورية Pivot Tables وإنشاء الرسوم.',
        resources: [
          { name: 'ExcelIsFun YouTube Free Series' },
          { name: 'Coursera Everyday Excel (Free Audit)' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Relational Databases & SQL SELECT',
        titleAr: 'قواعد البيانات واستعلامات SQL الأساسية',
        estimatedHours: 15,
        outcomeEn: 'Write SQL queries with WHERE, ORDER BY, GROUP BY, and aggregate functions.',
        outcomeAr: 'كتابة استعلامات ترشيح وتجميع البيانات باستخدام WHERE و GROUP BY.',
        resources: [
          { name: 'Kaggle Learn: Intro to SQL' },
          { name: 'SQLBolt Interactive Lessons' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'SQL JOINs & Database Relations',
        titleAr: 'ربط الجداول JOINs والعلاقات',
        estimatedHours: 15,
        outcomeEn: 'Join multiple database tables cleanly with INNER, LEFT, and FULL JOINs.',
        outcomeAr: 'دمج البيانات من جداول متعددة بكفاءة عالية وفهم المفاتيح الأساسية.',
        resources: [
          { name: 'Kaggle Learn: Advanced SQL' },
          { name: 'Mode Analytics SQL Tutorial' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'First Data Analysis Project',
        titleAr: 'مشروع تحليل بيانات تطبيقي متكامل',
        estimatedHours: 15,
        outcomeEn: 'Clean a public e-commerce dataset and summarize 5 key business findings in a deck.',
        outcomeAr: 'تنظيف مجموعة بيانات حقيقية واستخراج 5 توصيات عمل رئيسية وإبرازها.',
        resources: [
          { name: 'Kaggle Datasets Repository' }
        ]
      }
    ]
  },

  // 8. Data x Intermediate
  'data_intermediate': {
    fieldKey: 'data',
    level: 'intermediate',
    skillNameEn: 'Python for Data Analysis (Pandas & Visualization)',
    skillNameAr: 'لغة بايثون لتحليل البيانات (Pandas والتمثيل البصري)',
    whyThisSkillEn: 'You already handle spreadsheets and basic SQL query syntax comfortably; Python unlocks programmatic automation, manipulation of massive datasets, and custom data storytelling via libraries like Pandas, Matplotlib, and Seaborn.',
    whyThisSkillAr: 'أنت تتعامل بالفعل مع الجداول واستعلامات SQL بمرونة، ولذا فإن لغة بايثون هي الأداة الكفيلة بأتمتة المهام ومعالجة ملايين السجلات وإبراز الرؤى عبر مكتبات Pandas و Visualization.',
    baseHoursRequired: 100,
    firstStepEn: 'Complete Kaggle Learn’s free Python and Pandas micro-courses this week.',
    firstStepAr: 'أكمل دورتي بايثون و Pandas المجانيتين على منصة Kaggle Learn خلال هذا الأسبوع.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'Python Data Fundamentals',
        titleAr: 'أساسيات بايثون الخاصة بالبيانات',
        estimatedHours: 15,
        outcomeEn: 'Master Python lists, dictionaries, list comprehensions, and functions.',
        outcomeAr: 'إتقان القوائم، القواميس، الدالات المخصصة، ومعالجة النصوص ببايثون.',
        resources: [
          { name: 'Kaggle Learn: Python Course' },
          { name: 'Automate the Boring Stuff with Python' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Pandas DataFrames & Manipulation',
        titleAr: 'التعامل مع البيانات الضخمة بمكتبة Pandas',
        estimatedHours: 25,
        outcomeEn: 'Filter, merge, pivot, group, and handle missing values in complex DataFrames.',
        outcomeAr: 'تصفية، دمج، تنظيف، ومعالجة البيانات المفقودة في جداول DataFrames.',
        resources: [
          { name: 'Pandas Official Documentation (10 Minutes to Pandas)' },
          { name: 'Kaggle Learn: Pandas Micro-Course' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'Exploratory Data Analysis (EDA) & Charts',
        titleAr: 'استكشاف البيانات ورسم المخططات البصرية',
        estimatedHours: 25,
        outcomeEn: 'Plot histograms, scatter plots, and heatmaps using Matplotlib and Seaborn.',
        outcomeAr: 'رسم الرسوم البيانية الإحصائية وخرائط التباين الحراري للبيانات.',
        resources: [
          { name: 'Kaggle Learn: Data Visualization' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Interactive Dashboards with Streamlit',
        titleAr: 'بناء لوحات تحكم تفاعلية بـ Streamlit',
        estimatedHours: 20,
        outcomeEn: 'Build a live web dashboard running Python data filters and host on Streamlit Cloud.',
        outcomeAr: 'تحويل كود بايثون إلى تطبيق لوحة تحكم ويب تفاعلي مباشر مجاني.',
        resources: [
          { name: 'Streamlit Official Get Started Tutorial' }
        ]
      },
      {
        phaseNumber: 5,
        titleEn: 'Real Dataset EDA Portfolio Project',
        titleAr: 'نشر مشروع تحليل استكشافي كامل',
        estimatedHours: 15,
        outcomeEn: 'Publish a clean, documented Jupyter Notebook analyzing a Kaggle dataset.',
        outcomeAr: 'توثيق ونشر دفتر Jupyter يحلل مسألة حقيقية بأسلوب إحصائي منظم.',
        resources: [
          { name: 'GitHub Data Science Portfolio Guide' }
        ]
      }
    ]
  },

  // 9. Data x Advanced (Reference Example)
  'data_advanced': {
    fieldKey: 'data',
    level: 'advanced',
    skillNameEn: 'Applied Machine Learning with Python',
    skillNameAr: 'تعلم الآلة التطبيقي بـ Python',
    whyThisSkillEn: 'With four or more data skills already in place, spreadsheets and dashboards are no longer your ceiling—the highest-value next step is learning to build predictive models, which is what separates a data analyst role from a data scientist role and typically commands the largest jump in pay.',
    whyThisSkillAr: 'مع امتلاكك لأربع مهارات بيانات أو أكثر، لم تعد لوحات البيانات والجداول هي سقف قدراتك. الخطوة الأحدث قيمة هي بناء نماذج التنبؤ وتعلّم الآلة، وهو ما يميز عالم البيانات عن المحلل ويحقق قفزة نوعية في العائد.',
    baseHoursRequired: 150,
    firstStepEn: 'Go to kaggle.com/learn today and complete the Python micro-course—it is free and takes about 3 hours.',
    firstStepAr: 'توجه إلى kaggle.com/learn اليوم وأكمل دورة بايثون السريعة — دورة مجانية تستغرق حوالي 3 ساعات.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'Python Refresher for Data',
        titleAr: 'تنشيط قدرات بايثون المتقدمة للبيانات',
        estimatedHours: 15,
        outcomeEn: 'Comfortable with functions, loops, and data structures in a data context.',
        outcomeAr: 'إتقان صياغة الدوال المركبة ومعالجة الهياكل البيانية المتقدمة.',
        resources: [
          { name: 'Kaggle Learn Python Micro-Course' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Pandas & NumPy Deep Dive',
        titleAr: 'التعمق في Pandas و NumPy',
        estimatedHours: 25,
        outcomeEn: 'Clean, reshape, and analyze real messy datasets comfortably.',
        outcomeAr: 'تنظيف وتغيير شكل البيانات المعقدة والمصفوفات المتعددة الأبعاد.',
        resources: [
          { name: 'Kaggle Learn Pandas Course' },
          { name: 'Pandas Docs 10 Minutes to Pandas' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'Statistics Refresher',
        titleAr: 'مراجعة الإحصاء والاحتمالات التطبيقية',
        estimatedHours: 20,
        outcomeEn: 'Distributions, hypothesis testing, correlation vs. causation.',
        outcomeAr: 'التوزيعات الإحصائية، اختبار الفرضيات، والتمييز بين التلازم والسببية.',
        resources: [
          { name: 'Khan Academy Statistics & Probability' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Supervised Learning Fundamentals',
        titleAr: 'أساسيات التعلم الموجه (Supervised Learning)',
        estimatedHours: 30,
        outcomeEn: 'Train, evaluate, and tune classification/regression models.',
        outcomeAr: 'تدريب واختبار وضبط نماذج الانحدار والتصنيف باستخدام Scikit-Learn.',
        resources: [
          { name: 'Kaggle Learn Intro & Intermediate Machine Learning' },
          { name: 'Scikit-Learn Official User Guide' }
        ]
      },
      {
        phaseNumber: 5,
        titleEn: 'Model Evaluation & Avoiding Pitfalls',
        titleAr: 'تقييم النماذج وتجنب الإفراط في التعلم',
        estimatedHours: 20,
        outcomeEn: 'Cross-validation, overfitting prevention, choosing correct metrics.',
        outcomeAr: 'التحقق المتقاطع (Cross-validation)، منع Overfitting، واختيار مقاييس الدقة.',
        resources: [
          { name: 'Scikit-Learn Model Evaluation Guide' }
        ]
      },
      {
        phaseNumber: 6,
        titleEn: 'Capstone Project on a Real Dataset',
        titleAr: 'مشروع التخرج المتقدم ببيانات حقيقية',
        estimatedHours: 30,
        outcomeEn: 'Pick a genuine Kaggle competition dataset and build an end-to-end Notebook.',
        outcomeAr: 'بناء نموذج تنبؤ كامل لمسابقة حقيقية على Kaggle مع مقارنة النتائج.',
        resources: [
          { name: 'Kaggle Competitions Archive' }
        ]
      },
      {
        phaseNumber: 7,
        titleEn: 'Sharing Your Work & Open Source',
        titleAr: 'نشر النتائج وبناء التواجد على GitHub',
        estimatedHours: 10,
        outcomeEn: 'Publish notebook on Kaggle/GitHub with a clear structured README.',
        outcomeAr: 'توثيق النموذج ونشره في مساحة عمل مفتوحة مع شرح النتائج كمرجع مهني.',
        resources: [
          { name: 'Kaggle Kernels Documentation' }
        ]
      }
    ]
  },

  // 10. Marketing x Beginner
  'marketing_beginner': {
    fieldKey: 'marketing',
    level: 'beginner',
    skillNameEn: 'Digital Marketing Fundamentals & SEO Basics',
    skillNameAr: 'أساسيات التسويق الرقمي وقواعد تحسين محركات البحث SEO',
    whyThisSkillEn: 'Starting out in growth requires a comprehensive understanding of customer acquisition channels—content, search, social, paid—before specializing. SEO provides the foundational mechanics of organic intent.',
    whyThisSkillAr: 'البداية الصحيحة في عالم التسويق الرقمي تتطلب إدراكاً واسعاً لمختلف قنوات جذب العملاء، مع بناء معرفة متينة بكيفية ظهور المواقع في محركات البحث SEO لاستقطاب الزوار.',
    baseHoursRequired: 50,
    firstStepEn: 'Enroll in HubSpot Academy’s free Digital Marketing certification today and complete lesson 1.',
    firstStepAr: 'انضم لشهادة التسويق الرقمي المجانية من أكاديمية HubSpot اليوم وأكمل الدرس الأول.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'Digital Marketing Channels & Funnels',
        titleAr: 'قنوات التسويق وقمع المبيعات الرقمي',
        estimatedHours: 10,
        outcomeEn: 'Understand TOFU/MOFU/BOFU customer journeys and channel selection.',
        outcomeAr: 'فهم مراحل قمع المبيعات وتحديد القنوات المناسبة لكل مرحلة.',
        resources: [
          { name: 'HubSpot Academy Digital Marketing Course' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Keyword Research & Intent',
        titleAr: 'بحث الكلمات المفتاحية وفهم النية Search Intent',
        estimatedHours: 12,
        outcomeEn: 'Find high-volume, low-competition keywords using free research tools.',
        outcomeAr: 'استخراج الكلمات المفتاحية الأكثر طلباً وتحليلاً للنية البحثية.',
        resources: [
          { name: 'Ahrefs SEO Beginners Guide' },
          { name: 'Google Keyword Planner Free Tool' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'On-Page & Technical SEO',
        titleAr: 'تحسين عناصر الصفحة والـ SEO الفني',
        estimatedHours: 15,
        outcomeEn: 'Optimize title tags, meta descriptions, headings, and site speed basics.',
        outcomeAr: 'تحسين العناوين، الأوصاف، وبنية الروابط لتصدر نتائج البحث.',
        resources: [
          { name: 'Moz Beginners Guide to SEO' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'First SEO Content Audit Project',
        titleAr: 'مشروع مراجعة وتطوير محتوى موقع حي',
        estimatedHours: 13,
        outcomeEn: 'Audit a blog or small site and optimize 3 articles for target search terms.',
        outcomeAr: 'مراجعة وتعديل 3 مقالات لموقع حي لزيادة توافقها مع محركات البحث.',
        resources: [
          { name: 'Google Search Console Free Training' }
        ]
      }
    ]
  },

  // 11. Marketing x Intermediate
  'marketing_intermediate': {
    fieldKey: 'marketing',
    level: 'intermediate',
    skillNameEn: 'Content Marketing, Copywriting & Analytics',
    skillNameAr: 'تسويق المحتوى، كتابة الإعلانات المقنعة وتحليلات Google Analytics',
    whyThisSkillEn: 'With basic channel concepts established, your growth lever is creating compelling, strategic content that drives conversions and measuring campaign metrics precisely with Web Analytics.',
    whyThisSkillAr: 'مع امتلاكك للمفاهيم الأساسية، يصبح المحفز الأكبر هو القدرة على صياغة محتوى إعلاني مقنع يحول الزوار إلى عملاء، مع قياس الأداء والأرقام عبر تحليلات المزايا.',
    baseHoursRequired: 80,
    firstStepEn: 'Complete Google’s free Google Analytics for Beginners course on Skillshop today.',
    firstStepAr: 'أكمل دورة Google Analytics للمبتدئين المجانية المتاحة على منصة Google Skillshop اليوم.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'Conversion Copywriting Principles',
        titleAr: 'كتابة الإعلانات المقنعة والتحويلية',
        estimatedHours: 15,
        outcomeEn: 'Write headline hooks, value propositions, and Call-to-Actions using AIDA framework.',
        outcomeAr: 'صياغة عناوين جذابة، وعروض القيمة، وأزرار اتخاذ الإجراء باستخدام نموذج AIDA.',
        resources: [
          { name: 'Copyhackers Free Conversion Copy Guides' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Google Analytics 4 (GA4) Mastery',
        titleAr: 'احتراف تحليلات جوجل GA4',
        estimatedHours: 25,
        outcomeEn: 'Set up GA4 event tracking, custom funnels, user acquisition reports, and conversions.',
        outcomeAr: 'إعداد تتبع الأحداث والأهداف ومصادر الزيارات في نظام GA4 الجديد.',
        resources: [
          { name: 'Google Skillshop GA4 Certifications' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'Content Marketing & Distribution',
        titleAr: 'تخطيط وتوزيع المحتوى التسويقي',
        estimatedHours: 20,
        outcomeEn: 'Create a 30-day multi-channel content calendar tailored to user personas.',
        outcomeAr: 'بناء جدول محتوى استراتيجي لمدة 30 يوماً موزعة على قنوات التواصل الإجتماعي.',
        resources: [
          { name: 'HubSpot Content Marketing Course' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Email Funnels & Automation',
        titleAr: 'الأتمتة والتسويق عبر البريد الإلكتروني',
        estimatedHours: 20,
        outcomeEn: 'Design a 5-step automated welcome email sequence that nurtured new leads.',
        outcomeAr: 'تصميم سلسلة رسائل بريدية ترحيبية مؤتمتة لبناء الثقة والتحويل.',
        resources: [
          { name: 'Mailchimp / ConvertKit Free Knowledge Base' }
        ]
      }
    ]
  },

  // 12. Marketing x Advanced
  'marketing_advanced': {
    fieldKey: 'marketing',
    level: 'advanced',
    skillNameEn: 'Paid Ads Mastery (Google Ads & Meta Ads) & Campaign Strategy',
    skillNameAr: 'إدارة الحملات الممولة المدفوعة (Meta & Google Ads) والاستراتيجية',
    whyThisSkillEn: 'At an advanced level, paid performance media mastery—optimizing CAC, ROAS, and multi-touch attribution—is what unlocks enterprise contracts and agency scale.',
    whyThisSkillAr: 'عند المستوى المتقدم، يمثل إتقان الإعلانات المدفوعة عالية الأداء وتخفيض تكلفة الاستحواذ وزيادة العائد على الإنفاق الإعلاني ROAS الأداة الأكثر قيمة لدى الشركات والوكالات.',
    baseHoursRequired: 110,
    firstStepEn: 'Start Meta Blueprint’s free Digital Marketing Associate learning path today.',
    firstStepAr: 'ابدأ مسار التعلم المجاني أخصائي التسويق الرقمي المتاح على منصة Meta Blueprint اليوم.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'Meta Ads Manager (Facebook/Instagram)',
        titleAr: 'إدارة إعلانات فيسبوك وانستغرام المتقدمة',
        estimatedHours: 25,
        outcomeEn: 'Master CBO, custom audiences, Pixel event setup, and creative testing matrix.',
        outcomeAr: 'إتقان تحسين الميزانية، الجماهير المخصصة، وإعادة الاستهداف وإعداد Pixel.',
        resources: [
          { name: 'Meta Blueprint Official Courses' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Google Search & Performance Max Ads',
        titleAr: 'إعلانات البحث وشبكة جوجل Google Ads',
        estimatedHours: 25,
        outcomeEn: 'Build search campaigns, negative keyword strategies, quality score optimizations.',
        outcomeAr: 'إعداد حملات الإعلانات النصية والبحثية المباشرة مع تحسين درجات الجودة Quality Score.',
        resources: [
          { name: 'Google Skillshop Google Ads Search Certification' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'Metrics, Attribution & CAC/LTV Unit Economics',
        titleAr: 'تحليل تكلفة العميل والعائد الإعلاني والحسابات الاقتصادية',
        estimatedHours: 25,
        outcomeEn: 'Calculate Customer Lifetime Value (LTV), Customer Acquisition Cost (CAC), and ROAS.',
        outcomeAr: 'حساب القيمة الكلية للعميل LTV مقابل تكلفة الجلب CAC لضمان ربحية الحملات.',
        resources: [
          { name: 'Reforge Performance Marketing Articles' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Full Campaign Strategy Capstone',
        titleAr: 'تخطيط استراتيجية ميزانية تسويقية كاملة',
        estimatedHours: 35,
        outcomeEn: 'Formulate a $10,000 test campaign media plan across Meta, Google, and email funnels.',
        outcomeAr: 'إعداد خطة إنفاق وتحسين إعلاني شاملة تعكس توزيع الميزانية والأداء التوقعي.',
        resources: [
          { name: 'GrowthHackers Community Case Studies' }
        ]
      }
    ]
  },

  // 13. Business x Beginner
  'business_beginner': {
    fieldKey: 'business',
    level: 'beginner',
    skillNameEn: 'Business & Financial Literacy Fundamentals',
    skillNameAr: 'أساسيات الثقافة المالية وإدارة الأعمال',
    whyThisSkillEn: 'Every business and management career track starts with understanding how companies actually generate revenue, read balance sheets, manage cash flows, and create unit economic value.',
    whyThisSkillAr: 'يبدأ أي مسار ناجح في إدارة الأعمال وفهم المشاريع بإدراك كيفية قراءة القوائم المالية، وحساب التدفقات النقدية، وإدراك آليات الأرباح والتكلفة الكلية.',
    baseHoursRequired: 50,
    firstStepEn: 'Complete the first module of Khan Academy’s free Entrepreneurship course today.',
    firstStepAr: 'أكمل الوحدة الأولى من دورة ريادة الأعمال المجانية على أكاديمية خان اليوم.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'Understanding Financial Statements',
        titleAr: 'قراءة وفهم القوائم المالية',
        estimatedHours: 12,
        outcomeEn: 'Read Income Statements, Balance Sheets, and Cash Flow Statements.',
        outcomeAr: 'فهم وتفكيك قائمة الدخل، الميزانية العمومية، وقائمة التدفقات النقدية.',
        resources: [
          { name: 'Khan Academy Finance & Capital Markets' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Unit Economics & Profitability',
        titleAr: 'اقتصاديات الوحدة وحساب الهوامش الربحية',
        estimatedHours: 13,
        outcomeEn: 'Calculate gross margin, fixed vs. variable costs, and break-even analysis.',
        outcomeAr: 'حساب هامش الربح الإجمالي، التكاليف الثابتة والمتغيرة، ونقطة التعادل.',
        resources: [
          { name: 'Investopedia Financial Fundamentals' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'Business Strategy Basics',
        titleAr: 'التفكير الاستراتيجي ونماذج الأعمال',
        estimatedHours: 15,
        outcomeEn: 'Analyze Porter’s Five Forces, SWOT frameworks, and competitive positioning.',
        outcomeAr: 'تطبيق تحليل SWOT وتحليل القوى التنافسية الخمس لتقييم الفرص.',
        resources: [
          { name: 'Corporate Finance Institute (CFI) Free Resources' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Simple Financial Model Build',
        titleAr: 'بناء نموذج مالي بسيط لمشروع',
        estimatedHours: 10,
        outcomeEn: 'Build a 12-month projected P&L spreadsheet for a hypothetical business model.',
        outcomeAr: 'إنشاء جدول توقعات الأرباح والخسائر لـ 12 شهراً لمشروع ناشئ.',
        resources: [
          { name: 'SCORE Free Business Templates' }
        ]
      }
    ]
  },

  // 14. Business x Intermediate
  'business_intermediate': {
    fieldKey: 'business',
    level: 'intermediate',
    skillNameEn: 'Project Management Fundamentals (Agile/Scrum)',
    skillNameAr: 'أساسيات إدارة المشاريع والمنهجيات المرنة Agile/Scrum',
    whyThisSkillEn: 'Project management is the single most transferable, highly-demanded skill across mid-level tech and corporate teams. Orchestrating sprints, stakeholder needs, and deadlines ensures execution.',
    whyThisSkillAr: 'إدارة المشاريع هي المهارة الأكثر طلباً ونقلاً عبر مختلف القطاعات. تنظيم الدورات البرمجية، وتلبية متطلبات أصحاب العمل، والالتزام بالمواعيد يضمن نجاح التنفيذ.',
    baseHoursRequired: 70,
    firstStepEn: 'Start the free Google Project Management Professional Certificate (audit mode) on Coursera today, lesson 1.',
    firstStepAr: 'ابدأ الدرس الأول في شهادة إدارة المشاريع المعتمدة من Google على منصة Coursera (وضع الاستماع المجاني) اليوم.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'Project Management Life Cycle',
        titleAr: 'دورة حياة المشروع وتخطيط المراحل',
        estimatedHours: 15,
        outcomeEn: 'Initiating, planning, executing, monitoring, and closing project frameworks.',
        outcomeAr: 'مراحل بدء المشروع، التخطيط، التنفيذ، المراقبة، والإغلاق الرسمي.',
        resources: [
          { name: 'Google Project Management Certificate (Coursera Audit)' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Agile & Scrum Frameworks',
        titleAr: 'منهجية Agile وتطبيق Scrum',
        estimatedHours: 20,
        outcomeEn: 'Master Sprints, Product Backlogs, Retrospectives, Daily Standups, and Burndown charts.',
        outcomeAr: 'إتقان إدارة السباقات الزمنية السريعة Sprints وإدارة المهام وتحديثات اليوم.',
        resources: [
          { name: 'Scrum.org Official Scrum Guide' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'Project Management Software (Jira/Trello)',
        titleAr: 'أدوات إدارة المشاريع Jira و Trello',
        estimatedHours: 15,
        outcomeEn: 'Set up Kanban boards, roadmap milestones, issue tracking, and team assignees.',
        outcomeAr: 'إعداد لوحات كانبان وتتبع المهام والعوائق وتوزيع الأدوار على الفريق.',
        resources: [
          { name: 'Atlassian Jira Free Guides & Tutorials' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Risk Management & Stakeholder Communication',
        titleAr: 'إدارة المخاطر والتواصل مع الشركاء',
        estimatedHours: 20,
        outcomeEn: 'Create a project charter, risk register, and clear status update reports.',
        outcomeAr: 'إعداد سجل المخاطر وتدوين الميثاق الرسمي وتقارير الإنجاز الدورية.',
        resources: [
          { name: 'PMI (Project Management Institute) Open Articles' }
        ]
      }
    ]
  },

  // 15. Business x Advanced
  'business_advanced': {
    fieldKey: 'business',
    level: 'advanced',
    skillNameEn: 'Building & Validating a Business: Lean Startup Practice',
    skillNameAr: 'تأسيس واختبار المشاريع: تطبيق منهجية الشركة الناشئة المرنة Lean Startup',
    whyThisSkillEn: 'At the advanced business tier, theory is no longer the bottleneck—structured real-world product validation, customer discovery, minimum viable product (MVP) builds, and pitch pitching are what turn concepts into market ventures.',
    whyThisSkillAr: 'عند هذا المستوى، القراءة النظرية ليست العائق. التحقق من احتياج السوق، وإجراء المقابلات مع العملاء، وبناء النماذج الأولية MVP هي المحرك الحقيقي لتأسيس مشاريع ناجحة.',
    baseHoursRequired: 90,
    firstStepEn: 'Write a one-page Lean Canvas for one business idea today using a free online template.',
    firstStepAr: 'اكتب نموذج العمل المرن (Lean Canvas) من صفحة واحدة لفكره مشروع تراودك اليوم.',
    roadmap: [
      {
        phaseNumber: 1,
        titleEn: 'The Lean Canvas Framework',
        titleAr: 'إعداد لوحة نموذج العمل المرن Lean Canvas',
        estimatedHours: 15,
        outcomeEn: 'Deconstruct a business concept into Problem, Solution, Unique Value Proposition, Channels.',
        outcomeAr: 'تفكيك الفكرة لمشكلة محددة، حل مبتكر، عرض قيمة فريد، وقنوات وصول.',
        resources: [
          { name: 'Strategyzer Business Model Canvas Guides' },
          { name: 'Leanstack Free Resources by Ash Maurya' }
        ]
      },
      {
        phaseNumber: 2,
        titleEn: 'Customer Discovery & Validation Interviews',
        titleAr: 'استكشاف واختبار العملاء والمقابلات المباشرة',
        estimatedHours: 20,
        outcomeEn: 'Conduct non-leading customer interviews to validate real market pain points.',
        outcomeAr: 'إجراء مقابلات استكشافية محايدة مع عملاء مفترضين للتحقق من حجم المشكلة.',
        resources: [
          { name: 'The Mom Test Book Summary & Guides' },
          { name: 'Y Combinator Startup School Free Curriculum' }
        ]
      },
      {
        phaseNumber: 3,
        titleEn: 'Building a No-Code / Low-Code Minimum Viable Product (MVP)',
        titleAr: 'بناء النموذج الأولي MVP بأدوات بدون كود',
        estimatedHours: 25,
        outcomeEn: 'Build a functional landing page or prototype to test pre-orders and signups.',
        outcomeAr: 'بناء صفحة هبوط لتجميع طلبات الشراء المسبق واختبار رغبة السوق.',
        resources: [
          { name: 'Y Combinator: How to Build an MVP' }
        ]
      },
      {
        phaseNumber: 4,
        titleEn: 'Pitch Decks & Investor Fundraising Fundamentals',
        titleAr: 'إعداد العروض التقديمية والتفاوض مع المستثمرين',
        estimatedHours: 20,
        outcomeEn: 'Craft a 10-slide pitch deck covering Problem, Solution, Traction, Team, Financials.',
        outcomeAr: 'صياغة عرض استثماري من 10 شرائح يشمل الإنجاز والحل والنماذج المالية.',
        resources: [
          { name: 'Sequoia Capital Pitch Deck Template' }
        ]
      },
      {
        phaseNumber: 5,
        titleEn: 'Go-to-Market (GTM) Execution',
        titleAr: 'إطلاق واستراتيجية النزول للسوق',
        estimatedHours: 10,
        outcomeEn: 'Execute first 100 customer launch campaign and establish operational feedback.',
        outcomeAr: 'تنفيذ استراتيجية الحصول على أول 100 عميل حقيقي وتحليل آرائهم.',
        resources: [
          { name: 'Y Combinator Startup Library' }
        ]
      }
    ]
  }
};
