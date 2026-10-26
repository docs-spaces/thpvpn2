(() => {
  const dialog = document.getElementById("rd-notice");
  if (!dialog || typeof dialog.showModal !== "function") return;
  const seenKey = "thpvpn:rd-notice-seen";
  let opener;

  function open() {
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }
  function remember() {
    try { localStorage.setItem(seenKey, "1"); } catch (error) { /* storage unavailable */ }
  }

  document.querySelectorAll('[data-notice-open="rd-notice"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      // Preserve the standard open-in-new-tab behavior.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      open();
    });
  });
  dialog.querySelectorAll("[data-notice-close]").forEach((button) => {
    button.addEventListener("click", () => dialog.close());
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    remember();
    if (opener) opener.focus();
    opener = null;
  });

  // Show automatically on the first visit only.
  let seen = false;
  try { seen = localStorage.getItem(seenKey) === "1"; } catch (error) { seen = false; }
  if (!seen) open();
})();
