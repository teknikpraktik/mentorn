// timer.js – 60-sekunderstimer, startas genom klick på ringen
(function () {
  const TOTAL_SECS = 60;
  const CIRCUMFERENCE = 2 * Math.PI * 44;
  let timeLeft = TOTAL_SECS;
  let timerInterval = null;
  let running = false;

  function updateRing() {
    const ring = document.getElementById('ring');
    const label = document.getElementById('ring-label');
    if (!ring || !label) return;
    const offset = CIRCUMFERENCE * (1 - timeLeft / TOTAL_SECS);
    ring.style.strokeDashoffset = offset;
    label.textContent = timeLeft;
    const urgent = timeLeft <= 10 && timeLeft > 0;
    const done = timeLeft === 0;
    ring.className = 'ring-fill' + (urgent ? ' urgent' : done ? ' done-color' : '');
    label.className = 'ring-label' + (urgent ? ' urgent' : done ? ' done-color' : '');
  }

  window.startTimer = function () {
    if (running) {
      clearInterval(timerInterval);
      running = false;
      return;
    }
    if (timeLeft === 0) {
      timeLeft = TOTAL_SECS;
      updateRing();
      return;
    }
    running = true;
    timerInterval = setInterval(function () {
      timeLeft--;
      updateRing();
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        running = false;
      }
    }, 1000);
  };

  window.resetTimer = function () {
    clearInterval(timerInterval);
    running = false;
    timeLeft = TOTAL_SECS;
    updateRing();
  };

  document.addEventListener('DOMContentLoaded', function () {
    updateRing();
    const wrap = document.querySelector('.timer-ring-wrap');
    if (wrap) {
      wrap.style.cursor = 'pointer';
      wrap.addEventListener('click', window.startTimer);
    }
  });
})();