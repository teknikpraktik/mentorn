(function () {
  const total = 4;
  const labels = ['Koncept', 'Exempel', 'Diskussion', 'Uppgift'];
  let current = 0;

  function goTo(n) {
    document.getElementById('step-' + current).classList.remove('visible');
    current = n;
    document.getElementById('step-' + current).classList.add('visible');
    const counter = document.getElementById('step-counter');
    if (counter) counter.textContent = (current + 1) + ' / ' + total;
    document.getElementById('prev-btn').style.display = current === 0 ? 'none' : '';
    document.getElementById('next-btn').textContent =
      current === total - 1 ? 'Klar' : 'Nästa';
    if (typeof resetTimer === 'function' && n !== 2) resetTimer();
  }

  window.navigate = function (dir) {
    if (current === total - 1 && dir === 1) {
      window.location.href = '../index.html';
      return;
    }
    goTo(Math.max(0, Math.min(total - 1, current + dir)));
    window.scrollTo(0, 0);
  };
})();