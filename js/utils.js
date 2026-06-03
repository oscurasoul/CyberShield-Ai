// Utility Functions

/**
 * Get current language from localStorage or config
 */
function getCurrentLanguage() {
  return localStorage.getItem(CONFIG.STORAGE_KEYS.LANGUAGE) || CONFIG.DEFAULT_LANGUAGE;
}

/**
 * Get current theme from localStorage or config
 */
function getCurrentTheme() {
  return localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) || CONFIG.DEFAULT_THEME;
}

/**
 * Get translation for a key
 */
function getTranslation(key, lang) {
  const currentLang = lang || getCurrentLanguage();
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS[CONFIG.DEFAULT_LANGUAGE][key] || key;
}

/**
 * Animate counter numbers
 */
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
}

/**
 * Intersection Observer for scroll animations
 */
function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('element-show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: CONFIG.SCROLL_THRESHOLD,
  });

  document.querySelectorAll('.element-hidden').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function
 */
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Format date to readable string
 */
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}

/**
 * Simulate toxicity detection (client-side simulation)
 */
function analyzeToxicity(text) {
  const toxicKeywords = {
    critical: ['kill', 'die', 'hate', 'stupid', 'dumb', 'idiot'],
    high: ['loser', 'trash', 'worst', 'ugly', 'fat', 'disgusting'],
    medium: ['bad', 'terrible', 'awful', 'sucks', 'lame'],
    low: ['not great', 'not good', 'could be better'],
  };

  let score = 0;
  const lowerText = text.toLowerCase();

  for (const word of toxicKeywords.critical) {
    if (lowerText.includes(word)) score = Math.min(score + 0.25, 1);
  }

  for (const word of toxicKeywords.high) {
    if (lowerText.includes(word)) score = Math.min(score + 0.15, 1);
  }

  for (const word of toxicKeywords.medium) {
    if (lowerText.includes(word)) score = Math.min(score + 0.08, 1);
  }

  for (const word of toxicKeywords.low) {
    if (lowerText.includes(word)) score = Math.min(score + 0.03, 1);
  }

  // Add some randomness for demo purposes
  score = Math.min(score + Math.random() * 0.1, 1);

  return Math.round(score * 100) / 100;
}

/**
 * Get toxicity level details
 */
function getToxicityLevel(score) {
  for (const [key, level] of Object.entries(CONFIG.TOXICITY_LEVELS)) {
    if (score >= level.min && score <= level.max) {
      return { ...level, key };
    }
  }
  return CONFIG.TOXICITY_LEVELS.CRITICAL;
}

/**
 * Generate unique ID
 */
function generateId() {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Deep clone object
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Save to localStorage with JSON
 */
function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('Storage error:', e);
    return false;
  }
}

/**
 * Get from localStorage with JSON
 */
function getFromStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Storage error:', e);
    return null;
  }
}

/**
 * Remove from localStorage
 */
function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error('Storage error:', e);
    return false;
  }
}

/**
 * Copy to clipboard
 */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification('Copied to clipboard!', 'success');
  }).catch((err) => {
    console.error('Copy error:', err);
    showNotification('Failed to copy', 'error');
  });
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    border-radius: 8px;
    z-index: 9999;
    animation: slideInRight 0.3s ease;
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

/**
 * Calculate risk score
 */
function calculateRiskScore(answers) {
  let score = 0;
  const weights = {
    'yes': 10,
    'sometimes': 5,
    'never': 0,
    'very': 10,
    'somewhat': 5,
    'not': 0,
  };

  Object.values(answers).forEach((answer) => {
    score += weights[answer] || 0;
  });

  return Math.min(100, Math.max(0, score));
}

/**
 * Get element position
 */
function getElementPosition(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
    width: rect.width,
    height: rect.height,
  };
}

/**
 * Is element in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.bottom >= 0 &&
    rect.right >= 0
  );
}

/**
 * Smooth scroll to element
 */
function smoothScrollTo(element) {
  element.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Get random item from array
 */
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Shuffle array
 */
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
