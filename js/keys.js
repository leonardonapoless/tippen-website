export function initKeyFeedback() {
  const keys = document.querySelectorAll('.key');
  if (!keys.length) return;

  const keyMap = {};
  keys.forEach((keyEl) => {
    const char = keyEl.textContent.trim().toLowerCase();
    if (!keyMap[char]) keyMap[char] = [];
    keyMap[char].push(keyEl);
  });

  window.addEventListener('keydown', (e) => {
    const char = e.key.toLowerCase();
    if (keyMap[char]) {
      keyMap[char].forEach((el) => el.classList.add('pressed'));
    }
  });

  window.addEventListener('keyup', (e) => {
    const char = e.key.toLowerCase();
    if (keyMap[char]) {
      keyMap[char].forEach((el) => el.classList.remove('pressed'));
    }
  });
}
