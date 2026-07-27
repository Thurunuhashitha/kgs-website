/* ============================================================
   KGS CONSTRUCTION & TRANSPORT — animations.js
   ============================================================ */

// HERO — JS-DRIVEN STAGGERED ANIMATIONS
function runHeroAnimations() {
  const steps = [
    { id: "heroBadge", delay: 100  },
    { id: "hw1",       delay: 340  },
    { id: "hw2",       delay: 470  },
    { id: "hw3",       delay: 600  },
    { id: "heroDesc",  delay: 790  },
    { id: "heroCtas",  delay: 960  },
    { id: "heroTrust", delay: 1100 },
    { id: "heroRight", delay: 560  }, // slides in alongside the title words
  ];
  steps.forEach(({ id, delay }) => {
    const el = document.getElementById(id);
    if (el) setTimeout(() => el.classList.add("anim-in"), delay);
  });
}

// HERO PARTICLES
function spawnParticles() {
  const container = document.getElementById("heroParticles");
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const p    = document.createElement("div");
    p.className = "hero-particle";
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const dur  = Math.random() * 10 + 12;
    const del  = Math.random() * 18;
    const dx   = (Math.random() - 0.5) * 80;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%; bottom:0;
      --dx:${dx}px;
      animation-duration:${dur}s;
      animation-delay:${del}s;
    `;
    container.appendChild(p);
  }
}

// SCROLL REVEAL (IntersectionObserver)
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px 0px 0px" }
  );
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));
}
