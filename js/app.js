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
    price: "Rs. 22.00 Mn",
    duration: "1 Month",
    status: "completed",
    photos: [
      "assets/road-concreting/senanayakapura/senanayakapura01.jpg",
      "assets/road-concreting/senanayakapura/senanayakapura02.jpg",
      "assets/road-concreting/senanayakapura/senanayakapura03.jpg",
      "assets/road-concreting/senanayakapura/senanayakapura04.jpg",
      "assets/road-concreting/senanayakapura/senanayakapura05.jpg",
      "assets/road-concreting/senanayakapura/senanayakapura06.jpg",
      "assets/road-concreting/senanayakapura/senanayakapura07.jpg",
    ],
    totalPhotos: 7,
  },
  {
    id: "saddhathissapura",
    name: "Saddhathissapura Road Concreting",
    location: "Saddhathissapura GN Division",
    price: "Rs. 64.00 Mn",
    duration: "2 Months",
    status: "ongoing",
    photos: [
      "assets/road-concreting/saddhathissapura/Saddhathissapura01.jpg",
      "assets/road-concreting/saddhathissapura/Saddhathissapura02.jpg",
      "assets/road-concreting/saddhathissapura/Saddhathissapura03.jpg",
      "assets/road-concreting/saddhathissapura/Saddhathissapura04.jpg",
      "assets/road-concreting/saddhathissapura/Saddhathissapura05.jpg",
      "assets/road-concreting/saddhathissapura/Saddhathissapura06.jpg",
      "assets/road-concreting/saddhathissapura/Saddhathissapura07.jpg",
      "assets/road-concreting/saddhathissapura/Saddhathissapura08.jpg",
    ],
    totalPhotos: 8,
  },
];

// ──────────────────────────────────────────────
// DATA — BUILDING PROJECTS
// ──────────────────────────────────────────────
const buildingProjects = [
  // Photos coming soon — add images to assets/building-projects/ and list them here
];

// ──────────────────────────────────────────────
// DATA — CIVIL CONSTRUCTION WORKS
// ──────────────────────────────────────────────
const civilProjects = [
  // Photos coming soon — add images to assets/civil-projects/ and list them here
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
      "assets/excavator-projects/nawagampura-tank/biddhangala_tank01.jpg",
    ],
    totalPhotos: 1,
  },
  {
    id: "clearing-batticaloa",
    name: "Land Clearing & Tree Removal",
    location: "Batticaloa Area",
    status: "completed",
    photos: [
      "assets/excavator-projects/clearing-batticaloa/batticaloa_clear01.jpg",
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
  const thumb1 = project.photos[1] || null;
  const thumb2 = project.photos[2] || null;

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
    <div class="project-location">
      <i class="fas fa-map-marker-alt"></i> ${project.location}
    </div>

    <div class="project-name">${project.name}</div>

    ${project.price
      ? `
        <div class="project-info">
          <div><i class="fas fa-money-bill-wave"></i> <strong>Price:</strong> ${project.price}</div>
          <div><i class="fas fa-calendar-alt"></i> <strong>Duration:</strong> ${project.duration}</div>
        </div>
      `
      : ""
    }

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

  if (data.length === 0) {
    grid.innerHTML = `<p class="coming-soon-msg"><i class="fas fa-clock"></i> Projects coming soon...</p>`;
    return;
  }

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
  renderGrid("projectsGrid", concreteProjects);
  renderGrid("buildingGrid", buildingProjects);
  renderGrid("civilGrid", civilProjects);
  renderGrid("excavatorGrid", excavatorProjects);

  // Add reveal to service cards BEFORE initReveal so observer catches them
  document.querySelectorAll(".service-card").forEach((card, i) => {
    card.classList.add("reveal");
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  if (typeof runHeroAnimations === "function") runHeroAnimations();
  if (typeof spawnAmbientOrbs === "function") spawnAmbientOrbs();
  if (typeof initReveal === "function") initReveal();

  // Fallback: force-show any .reveal elements still hidden after 1.5s
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      el.style.transitionDelay = "0s";
      el.classList.add("visible");
    });
  }, 1500);
});
