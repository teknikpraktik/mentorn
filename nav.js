(function () {
  const total = 4;
  let current = 0;

  function buildNav() {
    const headerInner = document.querySelector('.header-inner');
    if (!headerInner) return;

    const counter = document.getElementById('step-counter');
    if (counter) counter.remove();

    const existing = document.getElementById('nav-cluster');
    if (existing) existing.remove();

    const cluster = document.createElement('div');
    cluster.id = 'nav-cluster';

    const prevBtn = document.createElement('button');
    prevBtn.id = 'prev-btn';
    prevBtn.setAttribute('aria-label', 'Föregående');
    prevBtn.innerHTML = '&#8249;';
    prevBtn.onclick = () => navigate(-1);
    cluster.appendChild(prevBtn);

    const divL = document.createElement('div');
    divL.className = 'nav-divider';
    cluster.appendChild(divL);

    const dots = [];
    for (let i = 0; i < total; i++) {
      const btn = document.createElement('button');
      btn.className = 'step-dot';
      btn.textContent = i + 1;
      btn.setAttribute('aria-label', 'Gå till steg ' + (i + 1));
      btn.onclick = (function(n) { return function() { goTo(n); }; })(i);
      dots.push(btn);
      cluster.appendChild(btn);
    }

    const divR = document.createElement('div');
    divR.className = 'nav-divider';
    cluster.appendChild(divR);

    const nextBtn = document.createElement('button');
    nextBtn.id = 'next-btn';
    nextBtn.setAttribute('aria-label', 'Nästa');
    nextBtn.innerHTML = '&#8250;';
    nextBtn.onclick = () => navigate(1);
    cluster.appendChild(nextBtn);

    const rightSlot = headerInner.querySelector('div');
    if (rightSlot) {
      rightSlot.appendChild(cluster);
    } else {
      headerInner.appendChild(cluster);
    }

    const navRow = document.querySelector('.nav-row');
    if (navRow) navRow.style.display = 'none';

    window._navDots = dots;
    render();
  }

  function render() {
    const dots = window._navDots;
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!dots || !prevBtn || !nextBtn) return;

    dots.forEach((b, i) => b.classList.toggle('active', i === current));

    if (current === 0) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }

    if (current === total - 1) {
      nextBtn.textContent = 'Klar';
      nextBtn.classList.add('klar');
    } else {
      nextBtn.innerHTML = '&#8250;';
      nextBtn.classList.remove('klar');
    }
  }

  function goTo(n) {
    document.getElementById('step-' + current).classList.remove('visible');
    current = n;
    document.getElementById('step-' + current).classList.add('visible');
    render();
    if (typeof resetTimer === 'function' && n !== 2) resetTimer();
    window.scrollTo(0, 0);
  }

  window.navigate = function (dir) {
    if (current === total - 1 && dir === 1) {
      window.location.href = '../index.html';
      return;
    }
    goTo(Math.max(0, Math.min(total - 1, current + dir)));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildNav);
  } else {
    buildNav();
  }
})();
