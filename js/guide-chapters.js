(() => {
  const player = document.getElementById('guide-player');
  document.querySelectorAll('[data-chapter]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (!player || typeof player.contentWindow.playChapter !== 'function') return;
      event.preventDefault();
      player.parentElement.scrollIntoView({ block: 'start' });
      player.contentWindow.playChapter(Number(link.dataset.chapter));
      player.focus({ preventScroll: true });
    });
  });
})();
