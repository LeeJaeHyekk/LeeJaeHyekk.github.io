// Email link handler - Modern toast notification with clipboard copy
// ESM Module

import { getCurrentLanguage } from './language-switcher.js';

/**
 * Create and show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Toast type ('success' or 'info')
 */
export function createToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast-notification toast-' + type;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  toast.setAttribute('aria-atomic', 'true');
  
  const icon = type === 'success' ? '✓' : '✕';
  const iconSpan = document.createElement('span');
  iconSpan.className = 'toast-icon';
  iconSpan.setAttribute('aria-hidden', 'true');
  iconSpan.textContent = icon;
  
  const messageSpan = document.createElement('span');
  messageSpan.className = 'toast-message';
  messageSpan.textContent = message;
  
  toast.appendChild(iconSpan);
  toast.appendChild(messageSpan);
  
  document.body.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => {
    toast.classList.add('toast-show');
  }, 10);
  
  // Remove toast after animation
  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Success status
 */
export function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).then(() => {
      return true;
    }).catch(() => {
      return false;
    });
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return Promise.resolve(successful);
    } catch (err) {
      document.body.removeChild(textArea);
      return Promise.resolve(false);
    }
  }
}

/**
 * Handle email link click event
 * @param {Event} e - Click event
 * @param {string} email - Email address
 */
export function handleEmailClick(e, email) {
  e.preventDefault();
  
  // Copy to clipboard
  copyToClipboard(email).then((success) => {
    const lang = getCurrentLanguage();
    const messages = {
      ko: {
        copied: '이메일 주소가 클립보드에 복사되었습니다: ',
        address: '이메일 주소: '
      },
      en: {
        copied: 'Email address copied to clipboard: ',
        address: 'Email address: '
      }
    };
    
    if (success) {
      createToast(messages[lang].copied + email, 'success');
      
      // Optionally open mailto after a short delay
      setTimeout(() => {
        window.location.href = 'mailto:' + email;
      }, 500);
    } else {
      createToast(messages[lang].address + email, 'info');
      // Fallback: open mailto directly
      window.location.href = 'mailto:' + email;
    }
  });
}

/**
 * Initialize email handler
 */
export function initEmailHandler() {
  const emailLinks = document.querySelectorAll('.email-link');
  
  emailLinks.forEach((link) => {
    const email = link.getAttribute('data-email') || link.getAttribute('href').replace('mailto:', '');
    link.addEventListener('click', (e) => handleEmailClick(e, email));
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEmailHandler);
} else {
  initEmailHandler();
}
