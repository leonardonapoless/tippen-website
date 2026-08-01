export function initCopyButtons() {
  const iconCopy = '<img src="assets/icons/copy.svg" width="16" height="16" alt="Copy">';
  const iconCheck = '<img src="assets/icons/check.svg" width="16" height="16" alt="Copied">';

  document.addEventListener('click', async (event) => {
    const button = event.target.closest('.copy-btn');
    if (!button) return;

    const codeContainer = button.previousElementSibling;
    if (!codeContainer) return;

    const textToCopy = Array.from(codeContainer.querySelectorAll('code'))
      .map((codeEl) => codeEl.textContent.trim())
      .join('\n');

    if (!textToCopy) return;

    try {
      await navigator.clipboard.writeText(textToCopy);
      button.classList.add('copied');
      button.innerHTML = iconCheck;

      setTimeout(() => {
        button.classList.remove('copied');
        button.innerHTML = iconCopy;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  });
}
