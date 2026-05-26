// timer.js – 60-sekunderstimer för diskussionssteget
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
      document.getElementById('start-btn').textContent = 'Fortsätt';
      document.getElementById('timer-status').textContent = 'Pausad';
      return;
    }
    if (timeLeft === 0) return;
    running = true;
    document.getElementById('start-btn').textContent = 'Pausa';
    document.getElementById('timer-status').textContent = 'Diskutera nu';
    timerInterval = setInterval(function () {
      timeLeft--;
      updateRing();
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        running = false;
        document.getElementById('start-btn').textContent = 'Starta 60 sek diskussion';
        document.getElementById('timer-status').textContent = 'Tiden är ute';
      }
    }, 1000);
  };

  window.resetTimer = function () {
    clearInterval(timerInterval);
    running = false;
    timeLeft = TOTAL_SECS;
    updateRing();
    const btn = document.getElementById('start-btn');
    const status = document.getElementById('timer-status');
    if (btn) btn.textContent = 'Starta 60 sek diskussion';
    if (status) status.textContent = 'Redo';
  };

  document.addEventListener('DOMContentLoaded', updateRing);
})();
