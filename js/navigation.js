/* ============================================================
   KGS CONSTRUCTION & TRANSPORT — navigation.js
   ============================================================ */

// NAVBAR SCROLL
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });
}

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });
}

// ACTIVE NAV LINK (IntersectionObserver)
const sectionEls = document.querySelectorAll("section[id]");
if (sectionEls.length > 0) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id    = entry.target.getAttribute("id");
        const navEl = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (navEl && entry.isIntersecting) {
          document.querySelectorAll(".nav-links a").forEach(a => (a.style.color = ""));
          navEl.style.color = "var(--gold)";
        }
      });
    },
    { threshold: 0.4 }
  );
  sectionEls.forEach(s => navObserver.observe(s));
}
