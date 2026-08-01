export function playSwitchAudio(state) {
  if (state === 'system') return;

  const path = state === 'light'
    ? 'assets/audio/light-switch-audio/light-switch-on.mp3'
    : 'assets/audio/light-switch-audio/light-switch-off.mp3';

  try {
    const sound = new Audio(path);
    sound.volume = 0.3;
    sound.play().catch(() => {});
  } catch (err) {}
}
