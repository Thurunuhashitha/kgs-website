/* ============================================================
   KGS CONSTRUCTION & TRANSPORT — app.js (Main Core)
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
  {
    id: "saddhathissapura",
    name: "Saddhathissapura Road Concreting",
    location: "Saddhathissapura GN Division",
    status: "ongoing",
    photos: [
      "assets/ROAD CONCRETING/Saddhathissapura GN Division/Saddhathissapura01.jpg",
      "assets/ROAD CONCRETING/Saddhathissapura GN Division/Saddhathissapura02.jpg",
      "assets/ROAD CONCRETING/Saddhathissapura GN Division/Saddhathissapura03.jpg", 
    ],
    totalPhotos: 3,
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
    totalPhotos: 3,
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
    totalPhotos: 3,
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
    ],
    totalPhotos: 1,
  },
  {
    id: "clearing-batticaloa",
    name: "Land Clearing & Tree Removal",
    location: "Batticaloa Area",
    status: "completed",
    photos: [
      "assets/EXCAVATOR PROJECTS/Clearing-batticaloa/batticaloa_clear01.jpg", 
    ],
    totalPhotos: 1,
  },
];

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

  card.querySelector(".project-card-header").addEventListener("click", () => {
    if (typeof openLightbox === "function") {
      openLightbox(project);
    }
  });
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
  if (typeof initReveal === "function") {
    initReveal();
  }
}

// ──────────────────────────────────────────────
// CONTACT FORM
// ──────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      this.innerHTML = `
        <div class="form-success">
          <i class="fas fa-check-circle"></i>
          <h4>Message Sent!</h4>
          <p>Thank you for contacting KGS Construction &amp; Transport. We will get back to you shortly.</p>
        </div>
      `;
    });
  }
});

// ──────────────────────────────────────────────
// INIT CORE APP
// ──────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderGrid("projectsGrid",  concreteProjects);
  renderGrid("buildingGrid",  buildingProjects);
  renderGrid("landGrid",      landProjects);
  renderGrid("excavatorGrid", excavatorProjects);

  // Add reveal to service cards BEFORE initReveal so observer catches them
  document.querySelectorAll(".service-card").forEach((card, i) => {
    card.classList.add("reveal");
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  if (typeof runHeroAnimations === "function") runHeroAnimations();
  if (typeof spawnParticles === "function") spawnParticles();
  if (typeof initReveal === "function") initReveal();

  // Fallback: force-show any .reveal elements still hidden after 1.5s
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      el.style.transitionDelay = "0s";
      el.classList.add("visible");
    });
  }, 1500);
});
