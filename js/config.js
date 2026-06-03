// Configuration and Constants
const CONFIG = {
  // Language settings
  DEFAULT_LANGUAGE: 'en',
  SUPPORTED_LANGUAGES: ['en', 'ar'],

  // Theme settings
  DEFAULT_THEME: 'dark',
  THEMES: ['dark', 'light'],

  // Local storage keys
  STORAGE_KEYS: {
    LANGUAGE: 'cybershield_language',
    THEME: 'cybershield_theme',
    USER_DATA: 'cybershield_user_data',
    QUIZ_SCORES: 'cybershield_quiz_scores',
  },

  // Animation settings
  ANIMATION_DURATION: 600,
  SCROLL_THRESHOLD: 0.1,

  // Pages
  PAGES: {
    HOME: 'index.html',
    ABOUT: 'about.html',
    TYPES: 'types.html',
    PSYCHOLOGY: 'psychology.html',
    EFFECTS: 'effects.html',
    PLATFORMS: 'platforms.html',
    AI_DETECTION: 'ai-detection.html',
    SIMULATOR: 'simulator.html',
    RESPONSE_COACH: 'response-coach.html',
    RISK_ASSESSMENT: 'risk.html',
    SUPPORT: 'support.html',
    PARENTS: 'parents.html',
    TEACHERS: 'teachers.html',
    PRIVACY: 'privacy.html',
    LAWS: 'laws.html',
    RESEARCH: 'research.html',
    SUCCESS_STORIES: 'success.html',
    FUTURE: 'future.html',
    SCENARIOS: 'scenarios.html',
    DASHBOARD: 'dashboard.html',
    MAP: 'map.html',
    QUIZ: 'quiz.html',
    CONTACT: 'contact.html',
  },

  // API/Data URLs (would be actual endpoints in production)
  API: {
    TOXICITY_CHECK: '/api/toxicity',
    SENTIMENT_ANALYSIS: '/api/sentiment',
    HATE_SPEECH_DETECTION: '/api/hate-speech',
  },

  // Toxicity Levels
  TOXICITY_LEVELS: {
    SAFE: { min: 0, max: 0.2, label: 'Safe', icon: '✅', color: '#10b981' },
    LOW: { min: 0.2, max: 0.4, label: 'Low', icon: '⚠️', color: '#f59e0b' },
    MEDIUM: { min: 0.4, max: 0.6, label: 'Medium', icon: '⚠️', color: '#f97316' },
    HIGH: { min: 0.6, max: 0.8, label: 'High', icon: '🚨', color: '#ef4444' },
    CRITICAL: { min: 0.8, max: 1, label: 'Critical', icon: '🔴', color: '#dc2626' },
  },
};

// Localization Data
const TRANSLATIONS = {
  en: {
    appTitle: 'CyberShield AI',
    tagline: 'Fighting Cyberbullying Through Artificial Intelligence',
    home: 'Home',
    about: 'About',
    types: 'Types',
    psychology: 'Psychology',
    effects: 'Effects',
    platforms: 'Platforms',
    aiDetection: 'AI Detection',
    simulator: 'Simulator',
    responseCoach: 'Response Coach',
    riskAssessment: 'Risk Assessment',
    support: 'Support',
    parents: 'Parents',
    teachers: 'Teachers',
    privacy: 'Privacy',
    laws: 'Laws & Ethics',
    research: 'Research',
    successStories: 'Success Stories',
    future: 'Future AI',
    scenarios: 'Scenarios',
    dashboard: 'Dashboard',
    map: 'Global Map',
    quiz: 'Quiz',
    contact: 'Contact',
    sourcesDeepDive: 'Sources & Deep Dive',
  },
  ar: {
    appTitle: 'درع الإنترنت الذكي',
    tagline: 'محاربة التنمر الإلكتروني من خلال الذكاء الاصطناعي',
    home: 'الرئيسية',
    about: 'حول',
    types: 'الأنواع',
    psychology: 'علم النفس',
    effects: 'التأثيرات',
    platforms: 'المنصات',
    aiDetection: 'كشف الذكاء الاصطناعي',
    simulator: 'محاكي',
    responseCoach: 'مدرب الرد',
    riskAssessment: 'تقييم المخاطر',
    support: 'الدعم',
    parents: 'الآباء',
    teachers: 'المعلمون',
    privacy: 'الخصوصية',
    laws: 'القوانين والأخلاقيات',
    research: 'البحث',
    successStories: 'قصص النجاح',
    future: 'المستقبل',
    scenarios: 'السيناريوهات',
    dashboard: 'لوحة القيادة',
    map: 'الخريطة العالمية',
    quiz: 'الاختبار',
    contact: 'اتصل بنا',
    sourcesDeepDive: 'المصادر والمزيد من المعلومات',
  },
};

// Statistics Data
const STATISTICS = {
  cyberbullyingPercentage: 59,
  repeatedHarassment: 37,
  seekProfessionalHelp: 15,
  countriesWithPrograms: 182,
};

// Platforms Data
const PLATFORMS_DATA = [
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: '🎵',
    risk: 'High',
    users: '1.5B',
    safetyTools: ['Reporting', 'Blocking', 'Comment Filtering', 'Privacy Settings'],
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '📸',
    risk: 'High',
    users: '2B',
    safetyTools: ['Reporting', 'Blocking', 'Restricted Accounts', 'Limits'],
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    icon: '👻',
    risk: 'Medium',
    users: '750M',
    safetyTools: ['Reporting', 'Blocking', 'Disappearing Messages'],
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    icon: '𝕏',
    risk: 'Very High',
    users: '500M',
    safetyTools: ['Reporting', 'Blocking', 'Muting', 'Quality Filters'],
  },
  {
    id: 'discord',
    name: 'Discord',
    icon: '🎮',
    risk: 'Medium',
    users: '500M',
    safetyTools: ['Moderation', 'Reporting', 'Roles & Permissions'],
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: '▶️',
    risk: 'Medium',
    users: '2.5B',
    safetyTools: ['Comment Management', 'Reporting', 'Blocking', 'Restricted Mode'],
  },
];
