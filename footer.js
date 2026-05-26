(function () {
  const isIndex = window.location.pathname.endsWith('index.html') 
    || window.location.pathname.endsWith('/');
  if (!isIndex) return;

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <p class="footer-copy">&copy; 2026 Per Björkman</p>
    <a class="footer-contact" href="om.html">Om Mentorn</a>
    <a class="footer-contact" href="mailto:per.a.bjorkman@gmail.com">Kontakta mig</a>
  `;
  const wrapper = document.querySelector('.page-wrapper');
  if (wrapper) wrapper.appendChild(footer);
})();