/* ============================================================
   THE OLD CLARENCE BREWERY C.1881 — main.js
   GSAP + ScrollTrigger animations — ui-ux-pro-max enhanced
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Inject persistent UI elements ────────────────────────
  injectScrollProgress();
  injectPageTransition();

  // ── Register ScrollTrigger ────────────────────────────────
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    initAnimations();
  }

  // ── Scroll progress bar ───────────────────────────────────
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
    }, { passive: true });
  }

  // ── Nav scroll state ──────────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  // ── Nav active page highlight ─────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.color = 'var(--blush)';
    }
  });

  // ── Mobile menu ───────────────────────────────────────────
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks  = document.querySelector('.nav__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Page transitions ──────────────────────────────────────
  initPageTransitions();

  // ── Heritage strip counter animation ─────────────────────
  initCounters();

});

// ── Inject scroll progress bar ────────────────────────────
function injectScrollProgress() {
  if (document.querySelector('.scroll-progress')) return;
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(bar, document.body.firstChild);
}

// ── Inject page transition overlay ───────────────────────
function injectPageTransition() {
  if (document.querySelector('.page-transition')) return;
  const overlay = document.createElement('div');
  overlay.className = 'page-transition';
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);
}

// ── Page exit/enter transitions ───────────────────────────
function initPageTransitions() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const overlay = document.querySelector('.page-transition');
  if (!overlay) return;

  // Fade in on arrival (overlay starts visible, fades out)
  overlay.style.opacity = '1';
  overlay.style.transition = 'none';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      overlay.style.opacity = '0';
    });
  });

  // Fade out on internal link click
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') ||
        href.startsWith('http') || href.startsWith('//')) return;

    link.addEventListener('click', e => {
      e.preventDefault();
      const target = href;
      overlay.style.transition = 'opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      overlay.style.opacity = '1';
      setTimeout(() => { window.location.href = target; }, 460);
    });
  });
}

// ── Heritage strip number counters ────────────────────────
function initCounters() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const counterTargets = {
    '1881': { start: 1840, suffix: '' },
    'Eight': null,
    '15 Min': { start: 0, suffix: ' Min', numericTarget: 15 },
    '2022': { start: 2000, suffix: '' },
  };

  document.querySelectorAll('.heritage-strip__value').forEach(el => {
    const text = el.textContent.trim();
    const config = counterTargets[text];
    if (!config) return;

    const numericTarget = config.numericTarget || parseInt(text);
    if (isNaN(numericTarget)) return;

    const start = config.start;
    const suffix = config.suffix;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        animateCounter(el, start, numericTarget, suffix, 1200);
      });
    }, { threshold: 0.5 });

    observer.observe(el);
  });
}

function animateCounter(el, from, to, suffix, duration) {
  const startTime = performance.now();
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(from + (to - from) * eased) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ── Animations ────────────────────────────────────────────
function initAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // ── Hero title cinematic entrance (word-level stagger) ───
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    const rawHTML = heroTitle.innerHTML;
    const textNode = heroTitle.firstChild;
    if (textNode && textNode.nodeType === 3) {
      // wrap each word
      const words = textNode.textContent.trim().split(/\s+/);
      const wrapped = words.map(w => `<span class="hero-word" style="display:inline-block; overflow:hidden"><span style="display:inline-block">${w}</span></span>`).join(' ');
      textNode.replaceWith(Object.assign(document.createElement('span'), { innerHTML: wrapped }));

      gsap.from('.hero-word > span', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: 'power4.out',
        delay: 0.5
      });
    }

    // animate year badge and subtitle separately
    gsap.from('.hero__year', { opacity: 0, y: 20, duration: 1, ease: 'power3.out', delay: 1.1 });
  }

  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    gsap.from(['.hero__eyebrow', '.hero__subtitle', '.hero__content .btn'], {
      opacity: 0,
      y: 24,
      stagger: 0.18,
      duration: 1,
      ease: 'power3.out',
      delay: 0.6
    });
  }

  // ── Hero parallax (multi-layer) ──────────────────────────
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2
      }
    });
  }

  // Parallax the hero content upward slightly as user scrolls
  const heroContentEl = document.querySelector('.hero__content');
  if (heroContentEl) {
    gsap.to(heroContentEl, {
      yPercent: -12,
      opacity: 0.4,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'center top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // ── Explore teaser parallax ───────────────────────────────
  const exploreBg = document.querySelector('.explore-teaser__bg');
  if (exploreBg) {
    gsap.to(exploreBg, {
      yPercent: 22,
      ease: 'none',
      scrollTrigger: {
        trigger: '.explore-teaser',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  }

  // ── Page hero parallax ───────────────────────────────────
  const pageHeroBg = document.querySelector('.page-hero__bg');
  if (pageHeroBg) {
    gsap.to(pageHeroBg, {
      yPercent: 22,
      ease: 'none',
      scrollTrigger: {
        trigger: '.page-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });
  }

  // ── History preview image parallax (second layer) ────────
  const historyImg = document.querySelector('.history-preview__image-wrap img');
  if (historyImg) {
    gsap.to(historyImg, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.history-preview',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  // ── Generic .reveal elements ──────────────────────────────
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  // ── Image reveals ─────────────────────────────────────────
  gsap.utils.toArray('.reveal-image').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 1.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  });

  // ── Heritage strip items stagger ─────────────────────────
  const stripItems = gsap.utils.toArray('.heritage-strip__item');
  if (stripItems.length) {
    gsap.from(stripItems, {
      opacity: 0,
      y: 24,
      stagger: 0.1,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.heritage-strip',
        start: 'top 85%'
      }
    });
  }

  // ── Feature cards stagger with 3D tilt hint ──────────────
  const featureCards = gsap.utils.toArray('.feature-card');
  if (featureCards.length) {
    gsap.from(featureCards, {
      opacity: 0,
      y: 60,
      rotateX: 4,
      stagger: 0.15,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.features__grid',
        start: 'top 82%'
      }
    });
  }

  // ── Testimonials stagger ──────────────────────────────────
  const testimonials = gsap.utils.toArray('.testimonial');
  if (testimonials.length) {
    gsap.from(testimonials, {
      opacity: 0,
      y: 50,
      stagger: 0.18,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 82%'
      }
    });
  }

  // ── Explore cards stagger ────────────────────────────────
  const exploreCards = gsap.utils.toArray('.explore-card');
  if (exploreCards.length) {
    gsap.from(exploreCards, {
      opacity: 0,
      scale: 0.95,
      stagger: 0.12,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.explore-items',
        start: 'top 82%'
      }
    });
  }

  // ── Masonry items ─────────────────────────────────────────
  const masonryItems = gsap.utils.toArray('.masonry__item');
  if (masonryItems.length) {
    gsap.from(masonryItems, {
      opacity: 0,
      y: 30,
      stagger: 0.06,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.masonry',
        start: 'top 85%'
      }
    });
  }

  // ── History grid sections ────────────────────────────────
  gsap.utils.toArray('.history-body__grid').forEach(grid => {
    gsap.from(grid, {
      opacity: 0,
      y: 70,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 82%'
      }
    });
  });

  // ── Amenity items stagger ─────────────────────────────────
  const amenityItems = gsap.utils.toArray('.amenity-item');
  if (amenityItems.length) {
    gsap.from(amenityItems, {
      opacity: 0,
      y: 30,
      stagger: 0.08,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.amenities__grid',
        start: 'top 85%'
      }
    });
  }

  // ── Hero scroll indicator pulse ───────────────────────────
  const scrollHint = document.querySelector('.hero__scroll');
  if (scrollHint) {
    gsap.to(scrollHint, {
      opacity: 0,
      y: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'center top',
        end: 'bottom top',
        scrub: true
      }
    });
  }
}
