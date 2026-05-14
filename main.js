/* ========================================================================
   YI CHAMBER — Minimal JS
   No framework, no dependencies. Pure vanilla.
   ======================================================================== */

(function () {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. Topbar scroll state
  //    - Adds .is-scrolled when user has scrolled past hero
  //    - Toggles .is-light / .is-dark based on section background
  // ------------------------------------------------------------------------
  const topbar = document.querySelector('.topbar');
  const hero   = document.querySelector('.hero');

  function updateTopbar() {
    if (!topbar || !hero) return;
    const heroBottom = hero.getBoundingClientRect().bottom;
    const isPastHero = heroBottom < 80;
    topbar.classList.toggle('is-scrolled', isPastHero);

    // Determine background color of section currently under the topbar
    // by sampling the element at y=40px from top-center
    const probe = document.elementFromPoint(window.innerWidth / 2, 40);
    if (!probe) return;
    const section = probe.closest('.section, .hero, .footer');
    if (!section) return;

    const isDarkSection =
      section.classList.contains('hero') ||
      section.classList.contains('section--dark') ||
      section.classList.contains('s3') ||
      section.classList.contains('s5') ||
      section.classList.contains('s6') ||
      section.classList.contains('s7') ||
      section.classList.contains('footer');

    if (topbar.classList.contains('is-scrolled')) {
      topbar.classList.remove('is-dark');
      topbar.classList.add('is-light');
    } else if (isDarkSection) {
      topbar.classList.remove('is-light');
      topbar.classList.add('is-dark');
    } else {
      topbar.classList.remove('is-dark');
      topbar.classList.add('is-light');
    }
  }
  updateTopbar();
  window.addEventListener('scroll', updateTopbar, { passive: true });
  window.addEventListener('resize', updateTopbar);

  // ------------------------------------------------------------------------
  // 2. Reveal-on-scroll: elements with .reveal fade up when they enter view
  // ------------------------------------------------------------------------
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    // Fallback: reveal everything immediately
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  // ------------------------------------------------------------------------
  // 3. Smooth scroll for in-page anchors (CSS does this via scroll-behavior;
  //    this is a small enhancement that offsets for fixed topbar)
  // ------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 60;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();
