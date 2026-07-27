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

// AMBIENT ORBS
function spawnAmbientOrbs() {
  const container = document.createElement("div");
  container.className = "ambient-orbs-container";
  
  // Colors matching the theme (Gold and deep blue/slate)
  const colors = ["rgba(212,160,23,0.3)", "rgba(55,65,81,0.5)", "rgba(240,192,64,0.2)"];
  
  // Use fewer orbs on mobile for better performance
  const isMobile = window.innerWidth <= 768;
  const numOrbs = isMobile ? 2 : 6;
  
  for (let i = 0; i < numOrbs; i++) {
    const orb = document.createElement("div");
    orb.className = "ambient-orb";
    
    // Slightly smaller orbs on mobile
    const baseSize = isMobile ? 150 : 200;
    const size = Math.random() * (isMobile ? 150 : 300) + baseSize; 
    
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const dur = Math.random() * 10 + 20; // Slower on mobile/desktop for smoother frames
    const del = Math.random() * 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    orb.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${left}vw; top: ${top}vh;
      background: ${color};
      animation-duration: ${dur}s;
      animation-delay: ${del}s;
    `;
    
    container.appendChild(orb);
  }
  
  document.body.prepend(container);
}
