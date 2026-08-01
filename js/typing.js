export function initTypingDemo() {
  const typedEl = document.getElementById('demoTyped');
  if (!typedEl) return;

  const formatDate = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const sequences = [
    { typed: '/brb', output: 'Be right back!' },
    { typed: '/date', output: formatDate },
    { typed: '@@', output: 'myemail@gmail.com' },
    { typed: '/shrug', output: '¯\\_(ツ)_/¯' },
    { typed: '/ngl', output: 'not gonna lie' }
  ];

  let currentIdx = 0;
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function playSequence(seq) {
    typedEl.textContent = '';

    for (const char of seq.typed) {
      typedEl.textContent += char;
      await wait(100 + Math.random() * 60);
    }

    await wait(200);

    const expandedText = typeof seq.output === 'function' ? seq.output() : seq.output;
    typedEl.textContent = expandedText;

    await wait(2400);
  }

  async function startLoop() {
    while (true) {
      await playSequence(sequences[currentIdx]);
      currentIdx = (currentIdx + 1) % sequences.length;
    }
  }

  startLoop();
}
