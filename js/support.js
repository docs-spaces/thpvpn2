(() => {
  const dialog = document.querySelector(".image-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;
  const image = dialog.querySelector("#expanded-image");
  const caption = dialog.querySelector("#image-caption");
  const area = dialog.querySelector(".dialog-image-area");
  const zoom = dialog.querySelector("#zoom-image");
  const close = dialog.querySelector("#close-image");
  let opener;

  document.querySelectorAll("[data-lightbox]").forEach((link) => {
    link.addEventListener("click", (event) => {
      // Preserve the standard open-in-new-tab behavior.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      const thumbnail = link.querySelector("img");
      image.src = link.href;
      image.alt = thumbnail.alt;
      caption.textContent = thumbnail.alt;
      area.classList.remove("is-zoomed");
      zoom.setAttribute("aria-pressed", "false");
      zoom.textContent = "ขยายภาพ";
      dialog.showModal();
      document.body.classList.add("dialog-open");
      area.scrollTo(0, 0);
      close.focus();
    });
  });
  zoom.addEventListener("click", () => {
    const enlarged = area.classList.toggle("is-zoomed");
    zoom.setAttribute("aria-pressed", String(enlarged));
    zoom.textContent = enlarged ? "ย่อภาพ" : "ขยายภาพ";
  });
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  // Native dialog supplies Escape, modal focus containment, and screen reader semantics.
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    if (opener) opener.focus();
  });
})();
