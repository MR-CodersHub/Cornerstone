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
    const isHome = activePage === 'home' || activePage === 'home1' || activePage === 'home2';
    const isAbout = activePage === 'about';
    const isBuy = activePage === 'buy';
    const isSell = activePage === 'sell-rent' || activePage === 'sell';
    const isBlog = activePage === 'blog';
    const isPricing = activePage === 'pricing';

    const html = `
      <header class="cs-navbar" role="banner">
        <div class="cs-navbar__inner">
          <!-- Logo -->
          <a href="${base}index.html" class="cs-navbar__logo" aria-label="Cornerstone Real Estate Home">
            <div class="cs-navbar__logo-icon">C</div>
            <div class="cs-navbar__logo-text">
              <span class="cs-navbar__logo-name">Cornerstone</span>
              <span class="cs-navbar__logo-tagline">Real Estate</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="cs-navbar__nav" role="navigation" aria-label="Main Navigation">
            <!-- Home Dropdown -->
            <div class="cs-navbar__nav-item">
              <a href="${base}index.html" class="cs-navbar__nav-link ${isHome ? 'active' : ''}">
                <span>Home</span>
                <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
              </a>
              <div class="cs-navbar__dropdown">
                <a href="${base}index.html" class="cs-navbar__dropdown-link ${activePage === 'home' || activePage === 'home1' ? 'active' : ''}">Home 1 (General)</a>
                <a href="${base}pages/home2.html" class="cs-navbar__dropdown-link ${activePage === 'home2' ? 'active' : ''}">Home 2 (Featured & Categories)</a>
              </div>
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
          </nav>

          <!-- Right Action Buttons -->
          <div class="cs-navbar__actions">
            <!-- Dark / Light Mode Toggle -->
            <button class="cs-navbar__icon-btn js-theme-toggle" aria-label="Toggle Dark/Light Mode" title="Toggle Theme">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </button>

            <!-- RTL / LTR Toggle -->
            <button class="cs-navbar__icon-btn js-rtl-toggle" style="font-size:0.75rem;font-weight:700;" aria-label="Toggle RTL/LTR Direction" title="Toggle Direction">RTL</button>

            <!-- Login / Register Button -->
            <a href="${base}pages/login.html" class="cs-navbar__login-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>Sign In</span>
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
            <div class="cs-mobile-nav__item">
              <a href="#" class="cs-mobile-nav__link has-submenu ${isHome ? 'active' : ''}">
                <span>Home</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
              </a>
              <div class="cs-mobile-nav__submenu">
                <a href="${base}index.html" class="cs-mobile-nav__sub-link">Home 1 (General)</a>
                <a href="${base}pages/home2.html" class="cs-mobile-nav__sub-link">Home 2 (Featured & Categories)</a>
              </div>
            </div>

            <a href="${base}pages/about.html" class="cs-mobile-nav__link ${isAbout ? 'active' : ''}">About</a>
            <a href="${base}pages/buy.html" class="cs-mobile-nav__link ${isBuy ? 'active' : ''}">Buy Properties</a>
            <a href="${base}pages/sell-rent.html" class="cs-mobile-nav__link ${isSell ? 'active' : ''}">Sell / Rent</a>
            <a href="${base}pages/blog.html" class="cs-mobile-nav__link ${isBlog ? 'active' : ''}">Blog</a>
            <a href="${base}pages/pricing.html" class="cs-mobile-nav__link ${isPricing ? 'active' : ''}">Pricing</a>

            <div class="cs-mobile-nav__actions">
              <a href="${base}pages/login.html" class="cs-navbar__login-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Sign In / Register</span>
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
        <div class="container">
          <div class="cs-footer__grid">
            <!-- Col 1: Agency Brand & Contacts -->
            <div class="cs-footer__col">
              <a href="${base}index.html" class="cs-footer__brand-logo">
                <div class="cs-footer__brand-icon">C</div>
                <div>
                  <div class="cs-footer__brand-name">Cornerstone</div>
                  <div class="cs-footer__brand-tagline">Real Estate</div>
                </div>
              </a>
              <p class="cs-footer__agency-desc">
                India's premier real estate consultancy. Delivering transparent, high-integrity property advisory across luxury residential, commercial assets, and land parcels.
              </p>
              <div class="cs-footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Level 8, Express Towers, Nariman Point, Mumbai, India 400021</span>
              </div>
              <div class="cs-footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+91 (022) 6789 0000 / +91 98201 12345</span>
              </div>
              <div class="cs-footer__contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>concierge@cornerstone.in</span>
              </div>
              <!-- Social Icons -->
              <div class="cs-footer__socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="cs-footer__social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="cs-footer__social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="cs-footer__social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="cs-footer__social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div class="cs-footer__col">
              <h4 class="cs-footer__col-heading">Quick Links</h4>
              <ul class="cs-footer__links">
                <li><a href="${base}pages/about.html" class="cs-footer__link">About Us</a></li>
                <li><a href="${base}pages/buy.html" class="cs-footer__link">Buy Property</a></li>
                <li><a href="${base}pages/sell-rent.html" class="cs-footer__link">Sell / Rent</a></li>
                <li><a href="${base}pages/blog.html" class="cs-footer__link">Real Estate Blog</a></li>
                <li><a href="${base}pages/pricing.html" class="cs-footer__link">Pricing Plans</a></li>
                <li><a href="${base}pages/contact.html" class="cs-footer__link">Contact Us</a></li>
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

            <!-- Col 4: Resources -->
            <div class="cs-footer__col">
              <h4 class="cs-footer__col-heading">Resources</h4>
              <ul class="cs-footer__links">
                <li><a href="${base}pages/buyer-dashboard.html" class="cs-footer__link">Buyer Dashboard</a></li>
                <li><a href="${base}pages/seller-dashboard.html" class="cs-footer__link">Seller Dashboard</a></li>
                <li><a href="${base}pages/sell-rent.html" class="cs-footer__link">List a Property</a></li>
                <li><a href="${base}pages/pricing.html" class="cs-footer__link">Membership Plans</a></li>
                <li><a href="${base}pages/login.html" class="cs-footer__link">User Portal</a></li>
              </ul>
            </div>

            <!-- Col 5: Newsletter -->
            <div class="cs-footer__col">
              <h4 class="cs-footer__newsletter-heading">Property Briefing</h4>
              <p class="cs-footer__newsletter-sub">
                Receive curated market intelligence, off-market opportunities, and investment insights weekly.
              </p>
              <form class="cs-footer__newsletter-form" onsubmit="event.preventDefault(); const inp=this.querySelector('input'); if(inp.value && inp.value.includes('@')){ if(window.showToast) window.showToast('Subscribed to Cornerstone Briefing!','success'); inp.value=''; } else { if(window.showToast) window.showToast('Please enter a valid email address','error'); }">
                <input type="email" class="cs-footer__newsletter-input" placeholder="Your work or personal email" required aria-label="Email Address" />
                <button type="submit" class="cs-footer__newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="cs-footer__bottom">
          <div class="container">
            <div class="cs-footer__bottom-inner">
              <div class="cs-footer__copyright">
                &copy; 2024 Cornerstone Real Estate. All rights reserved. Registered under RERA Maharashtra &amp; Delhi.
              </div>
              <div class="cs-footer__bottom-links">
                <a href="${base}pages/privacy.html" class="cs-footer__bottom-link">Privacy Policy</a>
                <a href="${base}pages/terms.html" class="cs-footer__bottom-link">Terms of Service</a>
                <a href="${base}pages/contact.html" class="cs-footer__bottom-link">Support</a>
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
