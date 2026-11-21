/**
 * Cornerstone Real Estate — Reusable Component Renderers (js/components.js)
 * Provides:
 * - renderNavbar(containerId, activePage, basePath)
 * - renderFooter(containerId, basePath)
 * - renderPropertyCard(property, basePath)
 */

(function () {
  'use strict';

  /**
   * Helper to resolve the correct basePath ('../' or '') if not explicitly passed
   */
  function resolveBasePath(basePath) {
    if (typeof basePath === 'string') return basePath;
    const path = window.location.pathname;
    return (path.includes('/pages/') || path.includes('\\pages\\')) ? '../' : '';
  }

  // -------------------------------------------------------------
  // 1. renderNavbar
  // -------------------------------------------------------------
  window.renderNavbar = function (containerId, activePage = '', basePath) {
    const el = document.getElementById(containerId);
    if (!el) {
      console.warn(`renderNavbar: container #${containerId} not found`);
      return;
    }

    const base = resolveBasePath(basePath);

    // Active page helpers
    const isHome = activePage === 'home' || activePage === 'home1';
    const isHome2 = activePage === 'home2';
    const isAbout = activePage === 'about';
    const isBuy = activePage === 'buy';
    const isSell = activePage === 'sell-rent' || activePage === 'sell';
    const isBlog = activePage === 'blog';
    const isPricing = activePage === 'pricing';
    const isContact = activePage === 'contact';

    const html = `
      <header class="cs-navbar" role="banner">
        <div class="cs-navbar__inner">
          <!-- Logo -->
          <a href="${base}index.html" class="cs-navbar__logo" aria-label="Cornerstone — Foundation of Prime Living">
            <div class="cs-navbar__logo-icon">
              <svg class="cs-logo-svg" viewBox="0 0 48 48" width="48" height="48" style="width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;min-width:100%!important;min-height:100%!important;display:block!important;flex-shrink:0!important;" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="csNavGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF1D0"/>
      <stop offset="45%" stop-color="#E5C788"/>
      <stop offset="80%" stop-color="#C6A56B"/>
      <stop offset="100%" stop-color="#936F2C"/>
    </linearGradient>
    <linearGradient id="csNavGoldLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#EAD3A2"/>
      <stop offset="100%" stop-color="#C6A56B"/>
    </linearGradient>
    <linearGradient id="csNavGoldDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B89454"/>
      <stop offset="100%" stop-color="#5C4214"/>
    </linearGradient>
    <linearGradient id="csNavNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B3244"/>
      <stop offset="100%" stop-color="#0E1922"/>
    </linearGradient>
  </defs>
  <rect width="48" height="48" rx="10" fill="url(#csNavNavyGrad)"/>
  <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="9.25" fill="none" stroke="url(#csNavGoldGrad)" stroke-width="1.5" stroke-opacity="0.85"/>
  <path d="M24 8.5 L38 16.5 L24 24.5 L10 16.5 Z" fill="url(#csNavGoldLight)"/>
  <path d="M10 16.5 L24 24.5 L24 38.5 L10 30.5 Z" fill="url(#csNavGoldGrad)"/>
  <path d="M24 24.5 L38 16.5 L38 30.5 L24 38.5 Z" fill="url(#csNavGoldDark)"/>
  <path d="M24 14.5 L32 19 L24 23.5 L16 19 Z" fill="#0E1922" fill-opacity="0.9"/>
  <path d="M16 19 L24 23.5 L24 33.5 L16 29 Z" fill="#132330" fill-opacity="0.95"/>
  <path d="M24 23.5 L32 19 L32 29 L24 33.5 Z" fill="#1A3346" fill-opacity="0.85"/>
  <path d="M24 11.5 L34.5 17.5 L24 23.5 L18 20 Z" fill="url(#csNavGoldLight)"/>
  <path d="M14 20 L18 17.5 L18 31 L14 28.5 Z" fill="url(#csNavGoldLight)"/>
  <path d="M14 28.5 L24 34.5 L34.5 28.5 L34.5 31.5 L24 37.5 L14 31.5 Z" fill="url(#csNavGoldGrad)"/>
  <polygon points="24,5 26.5,8 24,11 21.5,8" fill="#FFFFFF"/>
  <circle cx="24" cy="8" r="1.2" fill="#FFF9ED"/>
</svg>
            </div>
            <div class="cs-navbar__logo-text">
              <span class="cs-navbar__logo-name">Cornerstone</span>
              <span class="cs-navbar__logo-tagline">Foundation of Prime Living</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="cs-navbar__nav" role="navigation" aria-label="Main Navigation">
            <div class="cs-navbar__nav-item">
              <a href="${base}index.html" class="cs-navbar__nav-link ${isHome ? 'active' : ''}">Home</a>
            </div>

            <div class="cs-navbar__nav-item">
              <a href="${base}pages/home2.html" class="cs-navbar__nav-link ${isHome2 ? 'active' : ''}">Home 2</a>
            </div>

            <div class="cs-navbar__nav-item">
              <a href="${base}pages/about.html" class="cs-navbar__nav-link ${isAbout ? 'active' : ''}">About</a>
            </div>

            <div class="cs-navbar__nav-item">
              <a href="${base}pages/buy.html" class="cs-navbar__nav-link ${isBuy ? 'active' : ''}">Buy</a>
            </div>

            <div class="cs-navbar__nav-item">
              <a href="${base}pages/sell-rent.html" class="cs-navbar__nav-link ${isSell ? 'active' : ''}">Sell / Rent</a>
            </div>

            <div class="cs-navbar__nav-item">
              <a href="${base}pages/blog.html" class="cs-navbar__nav-link ${isBlog ? 'active' : ''}">Blog</a>
            </div>

            <div class="cs-navbar__nav-item">
              <a href="${base}pages/pricing.html" class="cs-navbar__nav-link ${isPricing ? 'active' : ''}">Pricing</a>
            </div>

            <div class="cs-navbar__nav-item">
              <a href="${base}pages/contact.html" class="cs-navbar__nav-link ${isContact ? 'active' : ''}">Contact</a>
            </div>
          </nav>

          <!-- Right Action Buttons -->
          <div class="cs-navbar__actions">
            <!-- User Profile Menu -->
            <div class="cs-navbar__profile">
              <button class="cs-navbar__icon-btn cs-navbar__profile-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Open profile menu" title="Profile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </button>
              <div class="cs-navbar__profile-menu" role="menu" aria-label="Profile links">
                <a href="${base}pages/user-dashboard.html" class="cs-navbar__profile-link" role="menuitem">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span>User Dashboard</span>
                </a>
                <a href="${base}pages/admin-dashboard.html" class="cs-navbar__profile-link" role="menuitem">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <span>Admin Dashboard</span>
                </a>
              </div>
            </div>

            <!-- Dark / Light Mode Toggle -->
            <button class="cs-navbar__icon-btn js-theme-toggle" aria-label="Toggle Dark/Light Mode" title="Toggle Theme">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </button>

            <!-- RTL / LTR Toggle -->
            <button class="cs-navbar__icon-btn js-rtl-toggle" style="font-size:0.75rem;font-weight:700;" aria-label="Toggle RTL/LTR Direction" title="Toggle Direction">RTL</button>

            <!-- Login / Register Button -->
            <a href="${base}pages/login.html" class="cs-navbar__login-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
              <span>Login</span>
            </a>

            <!-- Mobile Hamburger Toggle -->
            <button class="cs-navbar__hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div class="cs-navbar__mobile-menu">
          <div class="cs-mobile-nav">
            <a href="${base}index.html" class="cs-mobile-nav__link ${isHome ? 'active' : ''}">Home</a>
            <a href="${base}pages/home2.html" class="cs-mobile-nav__link ${isHome2 ? 'active' : ''}">Home 2</a>
            <a href="${base}pages/about.html" class="cs-mobile-nav__link ${isAbout ? 'active' : ''}">About</a>
            <a href="${base}pages/buy.html" class="cs-mobile-nav__link ${isBuy ? 'active' : ''}">Buy Properties</a>
            <a href="${base}pages/sell-rent.html" class="cs-mobile-nav__link ${isSell ? 'active' : ''}">Sell / Rent</a>
            <a href="${base}pages/blog.html" class="cs-mobile-nav__link ${isBlog ? 'active' : ''}">Blog</a>
            <a href="${base}pages/pricing.html" class="cs-mobile-nav__link ${isPricing ? 'active' : ''}">Pricing</a>
            <a href="${base}pages/contact.html" class="cs-mobile-nav__link ${isContact ? 'active' : ''}">Contact</a>

            <div class="cs-mobile-nav__actions">
              <a href="${base}pages/contact.html" class="cs-mobile-nav__book-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>Book Now</span>
              </a>
              <a href="${base}pages/login.html" class="cs-mobile-nav__login-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    `;

    el.innerHTML = html;
  };

  // -------------------------------------------------------------
  // 2. renderFooter
  // -------------------------------------------------------------
  window.renderFooter = function (containerId, basePath) {
    const el = document.getElementById(containerId);
    if (!el) {
      console.warn(`renderFooter: container #${containerId} not found`);
      return;
    }

    const base = resolveBasePath(basePath);

    const html = `
      <footer class="cs-footer" role="contentinfo">
        <div class="cs-footer__glow" aria-hidden="true"></div>
        <div class="container">
          <!-- ROW 1: Property Briefing Newsletter Bar -->
          <div class="cs-footer__briefing-bar">
            <div class="cs-footer__briefing-copy">
              <span class="cs-footer__briefing-eyebrow">Exclusive Intelligence</span>
              <h3 class="cs-footer__briefing-title">Cornerstone Property Briefing</h3>
              <p class="cs-footer__briefing-sub">Receive curated market intelligence, off-market opportunities, and luxury investment insights weekly.</p>
            </div>
            <form class="cs-footer__briefing-form" onsubmit="event.preventDefault(); const inp=this.querySelector('input'); if(inp.value && inp.value.includes('@')){ if(window.showToast) window.showToast('Subscribed to Cornerstone Briefing!','success'); inp.value=''; } else { if(window.showToast) window.showToast('Please enter a valid email address','error'); }">
              <div class="cs-footer__input-wrap">
                <svg class="cs-footer__input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 7l-10 6L2 7"></path></svg>
                <input type="email" class="cs-footer__newsletter-input" placeholder="Enter your email address" required aria-label="Email Address" />
              </div>
              <button type="submit" class="cs-footer__newsletter-btn">Subscribe</button>
            </form>
          </div>

          <div class="cs-footer__rule" aria-hidden="true"></div>

          <!-- ROW 2: 4-Column Row (Brand, Quick Links, Property Types, Direct Lines) -->
          <div class="cs-footer__grid-4">
            <!-- Col 1: Brand & Legacy -->
            <div class="cs-footer__col-brand">
              <a href="${base}index.html" class="cs-footer__brand-logo" aria-label="Cornerstone — Foundation of Prime Living">
                <div class="cs-footer__brand-icon">
                  <svg class="cs-logo-svg" viewBox="0 0 48 48" width="48" height="48" style="width:100%!important;height:100%!important;max-width:100%!important;max-height:100%!important;min-width:100%!important;min-height:100%!important;display:block!important;flex-shrink:0!important;" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="csFtrGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF1D0"/>
      <stop offset="45%" stop-color="#E5C788"/>
      <stop offset="80%" stop-color="#C6A56B"/>
      <stop offset="100%" stop-color="#936F2C"/>
    </linearGradient>
    <linearGradient id="csFtrGoldLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#EAD3A2"/>
      <stop offset="100%" stop-color="#C6A56B"/>
    </linearGradient>
    <linearGradient id="csFtrGoldDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B89454"/>
      <stop offset="100%" stop-color="#5C4214"/>
    </linearGradient>
    <linearGradient id="csFtrNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B3244"/>
      <stop offset="100%" stop-color="#0E1922"/>
    </linearGradient>
  </defs>
  <rect width="48" height="48" rx="10" fill="url(#csFtrNavyGrad)"/>
  <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="9.25" fill="none" stroke="url(#csFtrGoldGrad)" stroke-width="1.5" stroke-opacity="0.85"/>
  <path d="M24 8.5 L38 16.5 L24 24.5 L10 16.5 Z" fill="url(#csFtrGoldLight)"/>
  <path d="M10 16.5 L24 24.5 L24 38.5 L10 30.5 Z" fill="url(#csFtrGoldGrad)"/>
  <path d="M24 24.5 L38 16.5 L38 30.5 L24 38.5 Z" fill="url(#csFtrGoldDark)"/>
  <path d="M24 14.5 L32 19 L24 23.5 L16 19 Z" fill="#0E1922" fill-opacity="0.9"/>
  <path d="M16 19 L24 23.5 L24 33.5 L16 29 Z" fill="#132330" fill-opacity="0.95"/>
  <path d="M24 23.5 L32 19 L32 29 L24 33.5 Z" fill="#1A3346" fill-opacity="0.85"/>
  <path d="M24 11.5 L34.5 17.5 L24 23.5 L18 20 Z" fill="url(#csFtrGoldLight)"/>
  <path d="M14 20 L18 17.5 L18 31 L14 28.5 Z" fill="url(#csFtrGoldLight)"/>
  <path d="M14 28.5 L24 34.5 L34.5 28.5 L34.5 31.5 L24 37.5 L14 31.5 Z" fill="url(#csFtrGoldGrad)"/>
  <polygon points="24,5 26.5,8 24,11 21.5,8" fill="#FFFFFF"/>
  <circle cx="24" cy="8" r="1.2" fill="#FFF9ED"/>
</svg>
                </div>
                <div class="cs-footer__brand-text">
                  <div class="cs-footer__brand-name">Cornerstone</div>
                  <div class="cs-footer__brand-tagline">Foundation of Prime Living</div>
                </div>
              </a>
              <p class="cs-footer__agency-desc">
                India's premier real estate consultancy. Delivering transparent, high-integrity property advisory across luxury residential, commercial assets, and land parcels.
              </p>
              <div class="cs-footer__socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="cs-footer__social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="cs-footer__social-link" aria-label="X (formerly Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="cs-footer__social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="cs-footer__social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="cs-footer__social-link" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div class="cs-footer__col">
              <h4 class="cs-footer__col-heading">Quick Links</h4>
              <ul class="cs-footer__links">
                <li><a href="${base}index.html" class="cs-footer__link">Home</a></li>
                <li><a href="${base}pages/home2.html" class="cs-footer__link">Home 2</a></li>
                <li><a href="${base}pages/about.html" class="cs-footer__link">About</a></li>
                <li><a href="${base}pages/buy.html" class="cs-footer__link">Buy</a></li>
                <li><a href="${base}pages/sell-rent.html" class="cs-footer__link">Sell / Rent</a></li>
                <li><a href="${base}pages/blog.html" class="cs-footer__link">Blog</a></li>
                <li><a href="${base}pages/pricing.html" class="cs-footer__link">Pricing</a></li>
                <li><a href="${base}pages/contact.html" class="cs-footer__link">Contact</a></li>
              </ul>
            </div>

            <!-- Col 3: Property Types -->
            <div class="cs-footer__col">
              <h4 class="cs-footer__col-heading">Property Types</h4>
              <ul class="cs-footer__links">
                <li><a href="${base}pages/buy.html?type=Apartment" class="cs-footer__link">Apartments</a></li>
                <li><a href="${base}pages/buy.html?type=Villa" class="cs-footer__link">Luxury Villas</a></li>
                <li><a href="${base}pages/buy.html?type=House" class="cs-footer__link">Independent Houses</a></li>
                <li><a href="${base}pages/buy.html?type=Plot" class="cs-footer__link">Plots / Land</a></li>
                <li><a href="${base}pages/buy.html?type=Commercial" class="cs-footer__link">Commercial Offices</a></li>
                <li><a href="${base}pages/buy.html?transaction=rent" class="cs-footer__link">Rental Listings</a></li>
              </ul>
            </div>

            <!-- Col 4: Direct Lines (Contact Info) -->
            <div class="cs-footer__col cs-footer__col-contact">
              <h4 class="cs-footer__col-heading">Direct Lines</h4>
              <div class="cs-footer__contact-list">
                <a class="cs-footer__contact-item" href="https://www.google.com/maps/search/?api=1&amp;query=Express%20Towers%20Nariman%20Point%20Mumbai" target="_blank" rel="noopener noreferrer">
                  <span class="cs-footer__contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </span>
                  <div class="cs-footer__contact-details">
                    <span class="cs-footer__contact-label">Visit Office</span>
                    <span class="cs-footer__contact-val">Level 8, Express Towers, Nariman Point, Mumbai 400021</span>
                  </div>
                </a>
                <a class="cs-footer__contact-item" href="tel:+912267890000">
                  <span class="cs-footer__contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span>
                  <div class="cs-footer__contact-details">
                    <span class="cs-footer__contact-label">Phone Inquiry</span>
                    <span class="cs-footer__contact-val">+91 (022) 6789 0000 / +91 98201 12345</span>
                  </div>
                </a>
                <a class="cs-footer__contact-item" href="mailto:concierge@cornerstone.in">
                  <span class="cs-footer__contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 7l-10 6L2 7"></path></svg>
                  </span>
                  <div class="cs-footer__contact-details">
                    <span class="cs-footer__contact-label">Concierge Email</span>
                    <span class="cs-footer__contact-val">concierge@cornerstone.in</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- ROW 3: Bottom Bar -->
        <div class="cs-footer__bottom">
          <div class="container">
            <div class="cs-footer__bottom-inner">
              <div class="cs-footer__copyright">
                &copy; 2026 Cornerstone Real Estate. All rights reserved. Registered under RERA Maharashtra &amp; Delhi.
              </div>
              <div class="cs-footer__bottom-links">
                <a href="${base}pages/sitemap.html" class="cs-footer__bottom-link">Sitemap</a>
                <a href="${base}pages/privacy.html" class="cs-footer__bottom-link">Privacy Policy</a>
                <a href="${base}pages/terms.html" class="cs-footer__bottom-link">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;

    el.innerHTML = html;
  };

  // -------------------------------------------------------------
  // 3. renderPropertyCard
  // -------------------------------------------------------------
  window.renderPropertyCard = function (property, basePath) {
    if (!property) return '';

    const base = resolveBasePath(basePath);
    const detailsUrl = `${base}pages/property-details.html?id=${property.id}`;

    // Status class mapping
    let statusBadgeClass = 'badge-available';
    if (property.status === 'Under Offer') statusBadgeClass = 'badge-offer';
    if (property.status === 'Sold') statusBadgeClass = 'badge-sold';
    if (property.status === 'Rented') statusBadgeClass = 'badge-rented';

    // Type badge class
    const typeBadgeClass = property.listingType === 'For Rent' ? 'badge-rent' : 'badge-sale';

    // Check if saved
    const isSaved = window.isPropertySaved ? window.isPropertySaved(property.id) : false;

    return `
      <article class="property-card" data-property-id="${property.id}">
        <div class="property-card__image-wrap">
          <img src="${property.image}" alt="${property.title}" class="property-card__image" loading="lazy" />
          <div class="property-card__overlay-badges">
            <span class="badge ${typeBadgeClass}">${property.listingType}</span>
            <span class="badge badge-gold">${property.type}</span>
          </div>
          <button class="property-card__save-btn ${isSaved ? 'saved' : ''}" 
                  data-save-id="${property.id}" 
                  aria-label="${isSaved ? 'Remove from saved' : 'Save property'}">
            <svg viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="property-card__body">
          <div class="property-card__price">${property.priceDisplay}</div>
          <h3 class="property-card__title" title="${property.title}">${property.title}</h3>
          
          <div class="property-card__location">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span class="truncate">${property.location}</span>
          </div>

          <div class="property-card__specs">
            ${property.bedrooms > 0 ? `
              <div class="property-card__spec" title="${property.bedrooms} Bedrooms">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path><path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"></path><path d="M3 18h18"></path></svg>
                <span>${property.bedrooms} Beds</span>
              </div>
            ` : ''}

            ${property.bathrooms > 0 ? `
              <div class="property-card__spec" title="${property.bathrooms} Bathrooms">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"></path><path d="M4 12h16"></path><path d="M6 12V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v7"></path></svg>
                <span>${property.bathrooms} Baths</span>
              </div>
            ` : ''}

            <div class="property-card__spec" title="${property.area} Square Feet">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              <span>${property.area.toLocaleString()} sqft</span>
            </div>
          </div>

          <div class="property-card__footer">
            <span class="badge ${statusBadgeClass}">${property.status}</span>
            <a href="${detailsUrl}" class="property-card__view-btn">View Details</a>
          </div>
        </div>
      </article>
    `;
  };

})();
