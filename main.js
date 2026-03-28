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
