/* ============================================================
   KGS CONSTRUCTION & TRANSPORT — counter.js
   Animated Number Counters & Stat Utilities
   ============================================================ */

function initCounters() {
  const statCards = document.querySelectorAll(".hero-stat-card");
  statCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", initCounters);
