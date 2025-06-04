// src/utils/helpers.js

/**
 * Capitalizes the first letter of a string
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a given length, adding ellipsis if needed
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(str, maxLength = 100) {
  if (!str) return '';
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

/**
 * Returns a new array with only unique values
 * @param {Array} arr
 * @returns {Array}
 */
export function unique(arr) {
  return Array.from(new Set(arr));
}

/**
 * Debounce function for limiting rapid function calls
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Throttle function for limiting function calls per interval
 * @param {Function} fn
 * @param {number} limit
 * @returns {Function}
 */
export function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Copies a string to the clipboard
 * @param {string} text
 * @returns {Promise<void>}
 */
export async function copyToClipboard(text) {
  if (navigator && navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  } else {
    // fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return Promise.resolve();
  }
}

/**
 * Formats a date string to a readable format
 * @param {string|Date} date
 * @param {object} options Intl.DateTimeFormat options
 * @returns {string}
 */
export function formatDate(date, options = { year: 'numeric', month: 'short', day: 'numeric' }) {
  if (!date) return '';
  return new Date(date).toLocaleDateString(undefined, options);
}

/**
 * Checks if a string is a valid URL
 * @param {string} str
 * @returns {boolean}
 */
export function isValidUrl(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

/**
 * Gets the domain from a URL
 * @param {string} url
 * @returns {string}
 */
export function getDomainFromUrl(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
}
