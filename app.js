/* ============================================================
   KGS CONSTRUCTION & TRANSPORT — app.js
   ============================================================ */

// ──────────────────────────────────────────────
// DATA — ROAD CONCRETING PROJECTS
// ──────────────────────────────────────────────
const concreteProjects = [
  {
    id: "senanayakapura",
    name: "Senanayakapura Road Concreting",
    location: "Senanayakapura GN Division",
    status: "completed",
    photos: [
      "assets/ROAD CONCRETING/Senanayakapura GN Division/Senanayakapura01.jpg",
      "assets/ROAD CONCRETING/Senanayakapura GN Division/Senanayakapura02.jpg",
      "assets/ROAD CONCRETING/Senanayakapura GN Division/Senanayakapura03.jpg",
      "assets/ROAD CONCRETING/Senanayakapura GN Division/Senanayakapura04.jpg",
      "assets/ROAD CONCRETING/Senanayakapura GN Division/Senanayakapura05.jpg",
      "assets/ROAD CONCRETING/Senanayakapura GN Division/Senanayakapura06.jpg",
      "assets/ROAD CONCRETING/Senanayakapura GN Division/Senanayakapura07.jpg",
    ],
    totalPhotos: 7,
  },
];

// ──────────────────────────────────────────────
// DATA — BUILDING PROJECTS
// ──────────────────────────────────────────────
const buildingProjects = [
  {
    id: "house-ratnapura",
    name: "Two-Storey Residence",
    location: "Ratnapura",
    size: "2,400 sq.ft",
    price: "Rs. 7.20 Mn",
    duration: "9 Months",
    status: "completed",
    photos: [
      "assets/house_ratnapura01.jpg",
      "assets/house_ratnapura02.jpg",
      "assets/house_ratnapura03.jpg",
    ],
    totalPhotos: 12,
  },
];

// ──────────────────────────────────────────────
// DATA — LAND DEVELOPMENT
// ──────────────────────────────────────────────
const landProjects = [
  {
    id: "embankment-kegalle",
    name: "Large Embankment Filling",
    location: "Kegalle District",
    size: "3.5 Acres",
    price: "Rs. 18.00 Mn",
    duration: "5 Months",
    status: "completed",
    photos: [
      "assets/land_keg01.jpg",
      "assets/land_keg02.jpg",
      "assets/land_keg03.jpg",
    ],
    totalPhotos: 10,
  },
];

// ──────────────────────────────────────────────
// DATA — EXCAVATOR PROJECTS
// ──────────────────────────────────────────────
const excavatorProjects = [
  {
    id: "tank-ampara",
    name: "Irrigation Tank Digging",
    location: "Buddhangala",
    status: "completed",
    photos: [
      "assets/EXCAVATOR PROJECTS/Nawagampura tank/biddhangala_tank01.jpg",
      "assets/EXCAVATOR PROJECTS/Nawagampura tank/biddhangala_tank02.jpg",
    ],
    totalPhotos: 2,
  },
  {
    id: "clearing-batticaloa",
    name: "Land Clearing & Tree Removal",
    location: "Batticaloa Area",
    status: "completed",
    photos: [
      "assets/EXCAVATOR PROJECTS/Clearing-batticaloa/batticaloa_clear01.jpg",
      "assets/EXCAVATOR PROJECTS/Clearing-batticaloa/batticaloa_clear02.jpg",
      "assets/EXCAVATOR PROJECTS/Clearing-batticaloa/batticaloa_clear03.jpg",
    ],
    totalPhotos: 9,
  },
];

// ──────────────────────────────────────────────
// LIGHTBOX STATE
// ──────────────────────────────────────────────
let lbImages = [];
let lbIndex  = 0;

// ──────────────────────────────────────────────
// BUILD PROJECT CARD
// ──────────────────────────────────────────────
function buildCard(project) {
  const card = document.createElement("div");
  card.className = "project-card reveal";

  const statusClass = project.status === "completed" ? "status-completed" : "status-ongoing";
  const statusLabel = project.status === "completed" ? "Completed" : "Ongoing";

  const mainPhoto = project.photos[0] || null;
  const thumb1    = project.photos[1] || null;
  const thumb2    = project.photos[2] || null;

  const makeImg = (src) =>
    src
      ? `<img src="${src}" alt="${project.name}" loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=\\'photo-placeholder\\'><i class=\\'fas fa-image\\'></i><span>Photo</span></div>'">`
      : `<div class="photo-placeholder"><i class="fas fa-image"></i><span>Photo</span></div>`;

  card.innerHTML = `
    <div class="project-card-header" data-project="${project.id}">
      <div class="photo-strip">
        <div class="photo-main">${makeImg(mainPhoto)}</div>
        <div class="photo-thumbs">
          <div class="photo-thumb">${makeImg(thumb1)}</div>
          <div class="photo-thumb">${makeImg(thumb2)}</div>
        </div>
      </div>
      <div class="view-gallery-overlay">
        <button class="gallery-btn">
          <i class="fas fa-images"></i> VIEW GALLERY (${project.totalPhotos})
        </button>
      </div>
      <div class="photo-count-badge">
        <i class="fas fa-camera"></i> ${project.totalPhotos} Photos
      </div>
    </div>
    <div class="project-card-body">
      <div class="project-location"><i class="fas fa-map-marker-alt"></i> ${project.location}</div>
      <div class="project-name">${project.name}</div>
      <span class="project-status ${statusClass}">
        <span class="status-dot"></span>${statusLabel}
      </span>
    </div>
  `;

  card.querySelector(".project-card-header").addEventListener("click", () => openLightbox(project));
  return card;
}

// ──────────────────────────────────────────────
// RENDER GRIDS
// ──────────────────────────────────────────────
function renderGrid(containerId, data) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = "";
  data.forEach((project, i) => {
    const card = buildCard(project);
    card.style.transitionDelay = `${i * 0.12}s`;
    grid.appendChild(card);
  });
  initReveal();
}

// ──────────────────────────────────────────────
// LIGHTBOX
// ──────────────────────────────────────────────
function openLightbox(project) {
  lbImages = [];
  for (let i = 0; i < project.totalPhotos; i++) {
    lbImages.push({
      src:     project.photos[i % project.photos.length],
      caption: `${project.name} — Photo ${i + 1} of ${project.totalPhotos}`,
    });
  }
  lbIndex = 0;
  showLbImage();
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

function showLbImage() {
  const img     = document.getElementById("lbImg");
  const caption = document.getElementById("lbCaption");
  const counter = document.getElementById("lbCounter");
  img.style.opacity = "0";
  setTimeout(() => {
    img.src = lbImages[lbIndex].src;
    img.onerror = function () {
      this.src = ""; this.alt = "Photo not available";
      this.style.minHeight = "200px"; this.style.background = "#1a1a1a";
    };
    caption.textContent = lbImages[lbIndex].caption;
    counter.textContent = `${lbIndex + 1} / ${lbImages.length}`;
    img.style.opacity = "1";
  }, 150);
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => {
  lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
  showLbImage();
});
document.getElementById("lbNext").addEventListener("click", () => {
  lbIndex = (lbIndex + 1) % lbImages.length;
  showLbImage();
});
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target === document.getElementById("lightbox")) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("lightbox").classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft")  { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; showLbImage(); }
  if (e.key === "ArrowRight") { lbIndex = (lbIndex + 1) % lbImages.length; showLbImage(); }
});

// ──────────────────────────────────────────────
// NAVBAR SCROLL
// ──────────────────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

// ──────────────────────────────────────────────
// HAMBURGER
// ──────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");
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

// ──────────────────────────────────────────────
// SCROLL REVEAL (IntersectionObserver)
// ──────────────────────────────────────────────
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
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
  );
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));
}

// ──────────────────────────────────────────────
// ACTIVE NAV LINK (IntersectionObserver)
// ──────────────────────────────────────────────
const sectionEls = document.querySelectorAll("section[id]");
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

// ──────────────────────────────────────────────
// CONTACT FORM
// ──────────────────────────────────────────────
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  this.innerHTML = `
    <div class="form-success">
      <i class="fas fa-check-circle"></i>
      <h4>Message Sent!</h4>
      <p>Thank you for contacting KGS Construction &amp; Transport. We will get back to you shortly.</p>
    </div>
  `;
});

// ──────────────────────────────────────────────
// FILTER PROJECTS (called from service links)
// ──────────────────────────────────────────────
function filterProjects(cat) {
  const map = {
    concrete:  "#projects",
    building:  "#building-projects",
    land:      "#land-projects",
    excavator: "#excavator",
  };
  const target = map[cat];
  if (target) setTimeout(() => document.querySelector(target)?.scrollIntoView({ behavior: "smooth" }), 50);
}
window.filterProjects = filterProjects;

// ──────────────────────────────────────────────
// HERO — JS-DRIVEN STAGGERED ANIMATIONS
//
// Hero elements start with opacity:0 / transform via CSS.
// We add .anim-in in sequence so transitions always fire
// (CSS-only animation: delays can miss the paint frame on
//  some browsers when the script hasn't loaded yet).
// ──────────────────────────────────────────────
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

// ──────────────────────────────────────────────
// HERO PARTICLES
// ──────────────────────────────────────────────
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

// ──────────────────────────────────────────────
// SERVICE CARDS — add reveal class
// ──────────────────────────────────────────────
document.querySelectorAll(".service-card").forEach((card, i) => {
  card.classList.add("reveal");
  card.style.transitionDelay = `${i * 0.1}s`;
});

// ──────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderGrid("projectsGrid",  concreteProjects);
  renderGrid("buildingGrid",  buildingProjects);
  renderGrid("landGrid",      landProjects);
  renderGrid("excavatorGrid", excavatorProjects);

  runHeroAnimations();
  spawnParticles();
  initReveal();
});
