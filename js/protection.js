// Content protection script
// ESM Module

/**
 * Disable right-click context menu
 */
export function disableContextMenu() {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
}

/**
 * Disable drag and drop for all elements
 */
export function disableDragDrop() {
  // Disable drag and drop for all elements
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  }, true); // Use capture phase to catch all drag events

  // Disable drag for images specifically
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', (e) => {
      e.preventDefault();
      return false;
    }, true);
  });

  // Disable drag for all links
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    link.setAttribute('draggable', 'false');
    link.addEventListener('dragstart', (e) => {
      e.preventDefault();
      return false;
    }, true);
  });

  // Disable drag for all text elements
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, div');
  textElements.forEach((element) => {
    element.setAttribute('draggable', 'false');
    element.addEventListener('dragstart', (e) => {
      e.preventDefault();
      return false;
    }, true);
  });
}

/**
 * Disable common keyboard shortcuts for developer tools
 */
export function disableKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Disable F12
    if (e.key === 'F12' || e.code === 'F12') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+Shift+I (Chrome DevTools)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.code === 'KeyI')) {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+Shift+J (Chrome Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.code === 'KeyJ')) {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+C / Cmd+C (Copy)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.code === 'KeyC')) {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+X / Cmd+X (Cut)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'x' || e.code === 'KeyX')) {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+A / Cmd+A (Select All)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'a' || e.code === 'KeyA')) {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'u' || e.code === 'KeyU')) {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && (e.key === 's' || e.code === 'KeyS')) {
      e.preventDefault();
      return false;
    }
  });
}

/**
 * Disable copy event
 */
export function disableCopy() {
  document.addEventListener('copy', (e) => {
    e.clipboardData.setData('text/plain', '');
    e.preventDefault();
    return false;
  });
}

/**
 * Disable cut event
 */
export function disableCut() {
  document.addEventListener('cut', (e) => {
    e.clipboardData.setData('text/plain', '');
    e.preventDefault();
    return false;
  });
}

/**
 * Initialize all protection features
 */
export function initProtection() {
  disableContextMenu();
  disableDragDrop();
  disableKeyboardShortcuts();
  disableCopy();
  disableCut();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProtection);
} else {
  initProtection();
}
