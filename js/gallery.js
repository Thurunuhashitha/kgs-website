/* ============================================================
   KGS CONSTRUCTION & TRANSPORT — gallery.js
   ============================================================ */

let lbImages = [];
let lbIndex  = 0;

function openLightbox(project) {
  lbImages = [];
  project.photos.forEach((src, i) => {
    lbImages.push({
      src,
      caption: `${project.name} — Photo ${i + 1} of ${project.photos.length}`,
    });
  });
  lbIndex = 0;
  showLbImage();
  const lb = document.getElementById("lightbox");
  if (lb) {
    lb.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function showLbImage() {
  const img     = document.getElementById("lbImg");
  const caption = document.getElementById("lbCaption");
  const counter = document.getElementById("lbCounter");
  if (!img) return;

  img.style.opacity = "0";
  setTimeout(() => {
    img.src = lbImages[lbIndex].src;
    img.onerror = function () {
      this.src = ""; this.alt = "Photo not available";
      this.style.minHeight = "200px"; this.style.background = "#1a1a1a";
    };
    if (caption) caption.textContent = lbImages[lbIndex].caption;
    if (counter) counter.textContent = `${lbIndex + 1} / ${lbImages.length}`;
    img.style.opacity = "1";
  }, 150);
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (lb) {
    lb.classList.remove("active");
    document.body.style.overflow = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("lbClose");
  const prevBtn  = document.getElementById("lbPrev");
  const nextBtn  = document.getElementById("lbNext");
  const lightbox = document.getElementById("lightbox");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
      showLbImage();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      lbIndex = (lbIndex + 1) % lbImages.length;
      showLbImage();
    });
  }
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft")  { lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; showLbImage(); }
    if (e.key === "ArrowRight") { lbIndex = (lbIndex + 1) % lbImages.length; showLbImage(); }
  });
});
