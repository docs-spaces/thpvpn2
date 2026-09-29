(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (!header || !toggle || !nav) return;
  header.classList.add("is-enhanced");
  toggle.hidden = false;
  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    closeMenu();
    if (link.hash && link.pathname === location.pathname) {
      const target = document.getElementById(link.hash.slice(1));
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    }
  });
  header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus();
    }
  });
  matchMedia("(max-width: 900px)").addEventListener("change", closeMenu);
  function revealHashTarget() {
    const target = document.getElementById(location.hash.slice(1));
    if (target && target.tagName === "DETAILS") target.open = true;
  }
  revealHashTarget();
  addEventListener("hashchange", revealHashTarget);
})();
