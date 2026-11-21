/**
 * Cornerstone Real Estate — Global Application Scripts (js/app.js)
 * Handles:
 * - Dark / Light Theme Toggle (persisted to 'cs_theme')
 * - RTL / LTR Direction Toggle (persisted to 'cs_direction')
 * - Back-to-Top Button
 * - Smooth Anchor Scrolling
 * - Global Toast Notification System (window.showToast)
 * - Mobile Navbar Toggle & Dropdown Listeners
 * - Scroll Reveal via IntersectionObserver
 * - Favorite / Saved Properties Helpers ('cs_saved_properties')
 * - Recently Viewed Properties Tracking ('cs_recently_viewed')
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // 0. Inline SVG Icon Helper (used in JS-generated markup)
  // -------------------------------------------------------------
  const ICON_PATHS = {
    'bell': '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
    'calendar': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
    'clock': '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
    'eye': '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
    'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
    'heart': '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 23.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>',
    'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
    'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
    'tag': '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>'
  };

  function csIcon(name, size = 16) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align: -0.15em; flex-shrink: 0;">${ICON_PATHS[name] || ''}</svg>`;
  }
  window.csIcon = csIcon;

  // -------------------------------------------------------------
  // 1. Theme Management (Dark / Light)
  // -------------------------------------------------------------
  const THEME_KEY = 'cs_theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    updateThemeToggleIcons(theme === 'dark');
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    const newTheme = isDark ? 'dark' : 'light';
    try {
      localStorage.setItem(THEME_KEY, newTheme);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    updateThemeToggleIcons(isDark);
    if (window.showToast) {
      window.showToast(`Switched to ${newTheme} mode`, 'info');
    }
  }

  function updateThemeToggleIcons(isDark) {
    document.querySelectorAll('.js-theme-toggle').forEach(btn => {
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      // Sun icon when dark (click to make light), Moon icon when light (click to make dark)
      btn.innerHTML = isDark
        ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    });
  }

  // -------------------------------------------------------------
  // 2. Direction Management (RTL / LTR)
  // -------------------------------------------------------------
  const DIR_KEY = 'cs_direction';

  function applyDirection(dir) {
    if (dir === 'rtl') {
      document.body.classList.add('rtl');
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.body.classList.remove('rtl');
      document.documentElement.setAttribute('dir', 'ltr');
    }
    updateRtlToggleButtons(dir === 'rtl');
  }

  function toggleDirection() {
    const isRtl = document.body.classList.toggle('rtl');
    const newDir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', newDir);
    try {
      localStorage.setItem(DIR_KEY, newDir);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    updateRtlToggleButtons(isRtl);
    if (window.showToast) {
      window.showToast(`Layout direction set to ${newDir.toUpperCase()}`, 'info');
    }
  }

  function updateRtlToggleButtons(isRtl) {
    document.querySelectorAll('.js-rtl-toggle').forEach(btn => {
      btn.setAttribute('aria-label', isRtl ? 'Switch to LTR' : 'Switch to RTL');
      btn.setAttribute('title', isRtl ? 'Switch to LTR' : 'Switch to RTL');
      btn.textContent = isRtl ? 'LTR' : 'RTL';
    });
  }

  // -------------------------------------------------------------
  // 3. Saved Properties System (LocalStorage)
  // -------------------------------------------------------------
  const SAVED_KEY = 'cs_saved_properties';

  window.getSavedProperties = function () {
    try {
      const data = localStorage.getItem(SAVED_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  };

  window.isPropertySaved = function (id) {
    const list = window.getSavedProperties();
    return list.includes(id);
  };

  window.toggleSaveProperty = function (id) {
    let list = window.getSavedProperties();
    let saved = false;
    if (list.includes(id)) {
      list = list.filter(item => item !== id);
      saved = false;
    } else {
      list.push(id);
      saved = true;
    }
    try {
      localStorage.setItem(SAVED_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }

    // Update heart icons across the page for this property
    document.querySelectorAll(`[data-save-id="${id}"]`).forEach(btn => {
      if (saved) {
        btn.classList.add('saved');
        btn.setAttribute('aria-label', 'Remove from saved');
      } else {
        btn.classList.remove('saved');
        btn.setAttribute('aria-label', 'Save property');
      }
    });

    if (window.showToast) {
      window.showToast(
        saved ? 'Property added to saved favorites!' : 'Property removed from saved favorites',
        saved ? 'success' : 'info'
      );
    }

    // Dispatch custom event for reactive dashboard/page updates
    window.dispatchEvent(new CustomEvent('propertySavedChanged', { detail: { id, saved, list } }));

    return saved;
  };

  // -------------------------------------------------------------
  // 4. Recently Viewed Properties Tracking
  // -------------------------------------------------------------
  const RECENT_KEY = 'cs_recently_viewed';

  window.addRecentlyViewed = function (id) {
    try {
      let recent = localStorage.getItem(RECENT_KEY);
      recent = recent ? JSON.parse(recent) : [];
      recent = recent.filter(item => item !== id);
      recent.unshift(id);
      if (recent.length > 8) recent = recent.slice(0, 8);
      localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
    } catch (e) {
      console.warn('Recently viewed error:', e);
    }
  };

  window.getRecentlyViewed = function () {
    try {
      const data = localStorage.getItem(RECENT_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  };

  // -------------------------------------------------------------
  // 5. Toast Notification System
  // -------------------------------------------------------------
  window.showToast = function (message, type = 'info', duration = 3500) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    } else if (type === 'error') {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    } else if (type === 'warning') {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
    } else {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div class="toast-content">
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" aria-label="Close notification">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    `;

    container.appendChild(toast);

    function removeToast() {
      toast.classList.add('leaving');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }

    toast.querySelector('.toast-close').addEventListener('click', removeToast);
    setTimeout(removeToast, duration);
  };

  // -------------------------------------------------------------
  // 6. Sticky Navbar on Scroll
  // -------------------------------------------------------------
  function initStickyNavbar() {
    const navbar = document.querySelector('.cs-navbar');
    if (!navbar) return;

    function handleScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // -------------------------------------------------------------
  // 7. Back-to-Top Button
  // -------------------------------------------------------------
  function initBackToTop() {
    let btn = document.getElementById('back-to-top');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'back-to-top';
      btn.setAttribute('aria-label', 'Back to top');
      btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>`;
      document.body.appendChild(btn);
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -------------------------------------------------------------
  // 8. Scroll Reveal (IntersectionObserver)
  // -------------------------------------------------------------
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
  }

  // -------------------------------------------------------------
  // 9. Accordions Init
  // -------------------------------------------------------------
  function initAccordions() {
    document.addEventListener('click', (e) => {
      const header = e.target.closest('.accordion-header');
      if (!header) return;
      const item = header.closest('.accordion-item');
      if (!item) return;

      const parentAccordion = item.closest('.accordion');
      const isCurrentlyOpen = item.classList.contains('open');

      // Optional single-open behavior if accordion has data-single attribute
      if (parentAccordion && parentAccordion.hasAttribute('data-single')) {
        parentAccordion.querySelectorAll('.accordion-item.open').forEach(openItem => {
          if (openItem !== item) openItem.classList.remove('open');
        });
      }

      item.classList.toggle('open', !isCurrentlyOpen);
    });
  }

  // -------------------------------------------------------------
  // 10. Global Listeners Setup
  // -------------------------------------------------------------
  function initApp() {
    // 1. Initialise theme
    let savedTheme = 'light';
    try {
      savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    } catch (e) {}
    applyTheme(savedTheme);

    // 2. Initialise direction
    let savedDir = 'ltr';
    try {
      savedDir = localStorage.getItem(DIR_KEY) || 'ltr';
    } catch (e) {}
    applyDirection(savedDir);

    // 3. Delegate Theme & RTL toggle clicks
    document.addEventListener('click', (e) => {
      const themeBtn = e.target.closest('.js-theme-toggle');
      if (themeBtn) {
        e.preventDefault();
        toggleTheme();
        return;
      }

      const rtlBtn = e.target.closest('.js-rtl-toggle');
      if (rtlBtn) {
        e.preventDefault();
        toggleDirection();
        return;
      }

      const saveBtn = e.target.closest('[data-save-id]');
      if (saveBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = saveBtn.getAttribute('data-save-id');
        if (id) window.toggleSaveProperty(id);
        return;
      }
    });

    // 4. Mobile hamburger toggle delegation
    document.addEventListener('click', (e) => {
      const hamburger = e.target.closest('.cs-navbar__hamburger');
      if (hamburger) {
        e.preventDefault();
        const menu = document.querySelector('.cs-navbar__mobile-menu');
        const isOpen = hamburger.classList.toggle('open');
        if (menu) menu.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return;
      }

      // Close mobile menu when clicking outside or on a link
      const mobileLink = e.target.closest('.cs-mobile-nav__link:not(.has-submenu), .cs-mobile-nav__sub-link');
      if (mobileLink) {
        const hamburger = document.querySelector('.cs-navbar__hamburger');
        const menu = document.querySelector('.cs-navbar__mobile-menu');
        if (hamburger) hamburger.classList.remove('open');
        if (menu) menu.classList.remove('open');
        document.body.style.overflow = '';
      }

      // Mobile submenu toggle
      const parentLink = e.target.closest('.cs-mobile-nav__link.has-submenu');
      if (parentLink) {
        e.preventDefault();
        const submenu = parentLink.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle('open');
        }
      }
    });

    // 5. Sticky Nav, Back to top & Scroll Reveal
    initStickyNavbar();
    initBackToTop();
    initScrollReveal();
    initAccordions();

    // 6. Smooth scrolling for internal anchor links
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  // Export functions to global scope
  window.CornerstoneApp = {
    applyTheme,
    toggleTheme,
    applyDirection,
    toggleDirection,
    initScrollReveal
  };
})();
