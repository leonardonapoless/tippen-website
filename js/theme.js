import { playSwitchAudio } from './audio.js';

export function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const labelEl = document.getElementById('themeLabel');
  const iconEl = document.getElementById('themeSwitchIcon');
  const modes = ['system', 'light', 'dark'];

  const svgPaths = {
    light: 'assets/light-switch/switch-light.svg',
    dark: 'assets/light-switch/switch-dark.svg',
    system: 'assets/light-switch/switch-auto.svg'
  };

  let currentMode = localStorage.getItem('tippen-theme') || 'system';
  const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(mode, userInitiated = false) {
    currentMode = mode;
    localStorage.setItem('tippen-theme', mode);

    const effectiveTheme = mode === 'system'
      ? (systemQuery.matches ? 'dark' : 'light')
      : mode;

    document.documentElement.setAttribute('data-theme', effectiveTheme);

    if (toggleBtn) {
      toggleBtn.setAttribute('data-state', mode);
      toggleBtn.setAttribute('title', `Theme: ${mode.toUpperCase()}`);
    }

    if (labelEl) {
      labelEl.textContent = mode.toUpperCase();
    }

    if (iconEl) {
      iconEl.innerHTML = `<img src="${svgPaths[mode]}" width="64" height="64" alt="Theme Switch">`;
    }

    if (userInitiated) {
      playSwitchAudio(mode);
    }
  }

  applyTheme(currentMode);

  systemQuery.addEventListener('change', () => {
    if (currentMode === 'system') {
      applyTheme('system');
    }
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextIdx = (modes.indexOf(currentMode) + 1) % modes.length;
      applyTheme(modes[nextIdx], true);
    });
  }
}
