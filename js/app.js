import { initTheme } from './theme.js';
import { initTypingDemo } from './typing.js';
import { initCopyButtons } from './copy.js';
import { initKeyFeedback } from './keys.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingDemo();
  initCopyButtons();
  initKeyFeedback();
});
