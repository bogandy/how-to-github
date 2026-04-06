/* ============================================================
   Firefly — main.js
   Vanilla JS: nav scroll state, reveal animations, form submit
   ============================================================ */

'use strict';

// ── Nav: add .scrolled class once user scrolls past 40px ──
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page is already scrolled
}

// ── Mobile nav toggle ──
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks?.classList.toggle('is-open');
});

// Close mobile nav when a link is clicked
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  });
});

// ── Scroll-reveal via IntersectionObserver ──
//    Elements with class="reveal" fade+slide in as they enter the viewport.
//    Entries arriving in the same callback batch are staggered automatically.
const revealObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter(e => e.isIntersecting);
    visible.forEach((entry, i) => {
      entry.target.style.transitionDelay = `${i * 65}ms`;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Select dropdowns: swap chevron based on open/closed state ──
// Native <select> has no open/close events, so we approximate:
// open on mousedown, close on blur (click outside / tab away) or change (option picked).
document.querySelectorAll('select').forEach(select => {
  select.addEventListener('mousedown', function () { this.setAttribute('data-open', ''); });
  select.addEventListener('blur',      function () { this.removeAttribute('data-open'); });
  select.addEventListener('change',    function () { this.removeAttribute('data-open'); });
});

// ── Evaluation carousel ──
(function () {
  const carousel = document.querySelector('.eval-carousel-inner');
  if (!carousel) return;

  const slides   = Array.from(carousel.querySelectorAll('.eval-slide'));
  const dots     = Array.from(carousel.querySelectorAll('.eval-dot'));
  const fill     = carousel.querySelector('.eval-progress-fill');
  const DURATION = 8000; // ms per slide

  let current   = 0;
  let raf       = null;
  let paused    = false;
  let elapsed   = 0;
  let startTime = null;

  function goTo(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    dots[current].removeAttribute('aria-current');

    current = index;

    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
    dots[current].setAttribute('aria-current', 'true');

    // Reset progress
    elapsed = 0;
    fill.style.width = '0%';
    if (!paused) startTimer();
  }

  function startTimer() {
    cancelAnimationFrame(raf);
    startTime = performance.now() - elapsed;
    raf = requestAnimationFrame(tick);
  }

  function tick(now) {
    elapsed = now - startTime;
    const progress = Math.min(elapsed / DURATION, 1);
    fill.style.width = `${progress * 100}%`;

    if (progress >= 1) {
      goTo((current + 1) % slides.length);
    } else {
      raf = requestAnimationFrame(tick);
    }
  }

  // Pause on hover
  carousel.addEventListener('mouseenter', () => {
    paused = true;
    cancelAnimationFrame(raf);
  });

  carousel.addEventListener('mouseleave', () => {
    paused = false;
    startTime = performance.now() - elapsed;
    raf = requestAnimationFrame(tick);
  });

  // Dot clicks
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goTo(i));
  });

  // Arrow clicks
  carousel.querySelector('.eval-arrow--prev')?.addEventListener('click', () => {
    goTo((current - 1 + slides.length) % slides.length);
  });
  carousel.querySelector('.eval-arrow--next')?.addEventListener('click', () => {
    goTo((current + 1) % slides.length);
  });

  // Respect reduced-motion: skip auto-advance
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) startTimer();
}());

// ── Application form: client-side submit feedback ──
const form        = document.querySelector('.apply-form');
const formSuccess = document.querySelector('.form-success');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic constraint-validation API check (browsers handle most of it,
  // but we surface a tidy summary for any missed fields)
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Hide form, reveal success message
  form.setAttribute('hidden', '');
  formSuccess?.classList.add('is-visible');
  formSuccess?.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
