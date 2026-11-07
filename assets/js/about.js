/* About · Tommy Ho — theme toggle, reveals, active nav (vanilla) */
(() => {
  const root = document.documentElement;
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Theme toggle: explicit choice wins, otherwise follow the OS
  const btn = document.getElementById('theme-toggle');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  btn?.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('th-theme', next); } catch (e) {}
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('[data-reveal]').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    io.observe(el);
  });

  // Active section in nav + hide bar on scroll down
  const links = [...document.querySelectorAll('.topnav a')];
  const bar = document.getElementById('topbar');
  const secs = links.map((a) => document.querySelector(a.getAttribute('href')));
  let lastY = scrollY;
  addEventListener('scroll', () => {
    const y = scrollY;
    bar.classList.toggle('is-hidden', y > lastY + 4 && y > innerHeight);
    if (y < lastY - 4) bar.classList.remove('is-hidden');
    lastY = y;
    let cur = -1;
    secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) cur = i; });
    links.forEach((a, i) => a.classList.toggle('is-active', i === cur));
  }, { passive: true });
})();
