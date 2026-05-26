(function () {
  const isIndex = window.location.pathname.endsWith('index.html')
    || window.location.pathname.endsWith('/');
  if (!isIndex) return;

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
  <a class="footer-contact" href="om.html">Om Mentorn</a>
  <a class="footer-contact" href="mailto:per.a.bjorkman@gmail.com">Kontakta mig</a>
  <p class="footer-copy">&copy; 2026 Per Björkman</p>
`;
  const wrapper = document.querySelector('.page-wrapper');
  if (wrapper) wrapper.appendChild(footer);
})();

// Goatcounter
(function () {
  const script = document.createElement('script');
  script.dataset.goatcounter = 'https://mentorn.goatcounter.com/count';
  script.async = true;
  script.src = '//gc.zgo.at/count.js';
  document.head.appendChild(script);
})();