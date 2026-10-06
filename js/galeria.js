/* ============================================================
   CleanPro - JS específico de Galería
   Renderiza grid con filtros por categoría y lightbox con teclado.
   ============================================================ */
(function () {
  "use strict";

  let currentFilter = "todos";
  let currentIndex = 0;
  let visibleItems = [];

  function renderFiltros() {
    const container = document.getElementById("filtrosGaleria");
    if (!container || !window.CLEANPRO) return;

    container.innerHTML = window.CLEANPRO.categoriasGaleria.map(cat => `
      <button data-cat="${cat.id}" class="filtro-btn px-5 py-2 rounded-full text-sm font-semibold transition-all ${cat.id === 'todos' ? 'bg-gradient-to-r from-cyan-500 to-blue-700 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
        ${cat.label}
      </button>
    `).join("");

    container.querySelectorAll(".filtro-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentFilter = btn.dataset.cat;
        container.querySelectorAll(".filtro-btn").forEach(b => {
          b.classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-700", "text-white", "shadow-md");
          b.classList.add("bg-slate-100", "text-slate-700");
        });
        btn.classList.remove("bg-slate-100", "text-slate-700");
        btn.classList.add("bg-gradient-to-r", "from-cyan-500", "to-blue-700", "text-white", "shadow-md");
        renderGrid();
      });
    });
  }

  function renderGrid() {
    const container = document.getElementById("galeriaGrid");
    const vacio = document.getElementById("galeriaVacio");
    if (!container || !window.CLEANPRO) return;

    const items = currentFilter === "todos"
      ? window.CLEANPRO.galeria
      : window.CLEANPRO.galeria.filter(g => g.categoria === currentFilter);

    visibleItems = items;
    vacio.classList.toggle("hidden", items.length > 0);

    container.innerHTML = items.map((g, i) => `
      <button data-index="${i}" class="galeria-item reveal-scale group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow" aria-label="Ver imagen: ${g.alt}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
          <div class="text-left text-white">
            <div class="text-xs uppercase tracking-wider opacity-80">${g.categoria}</div>
            <div class="font-bold">${g.alt}</div>
          </div>
        </div>
        <div class="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 text-cyan-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
        </div>
      </button>
    `).join("");

    container.querySelectorAll(".galeria-item").forEach(item => {
      item.addEventListener("click", () => {
        currentIndex = parseInt(item.dataset.index, 10);
        openLightbox();
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    container.querySelectorAll(".reveal-scale:not(.is-visible)").forEach(el => observer.observe(el));
  }

  function openLightbox() {
    const lb = document.getElementById("lightbox");
    if (!lb || !visibleItems.length) return;
    updateLightbox();
    lb.classList.add("is-active");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function closeLightbox() {
    const lb = document.getElementById("lightbox");
    if (!lb) return;
    lb.classList.remove("is-active");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  function updateLightbox(direction) {
    const lbImg = document.getElementById("lbImage");
    const lbCounter = document.getElementById("lbCounter");
    const lb = document.getElementById("lightbox");
    if (!lbImg || !visibleItems.length) return;

    if (direction) lb.classList.add("is-changing");
    setTimeout(() => {
      const item = visibleItems[currentIndex];
      lbImg.src = item.src;
      lbImg.alt = item.alt;
      lbCounter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;
      lb.classList.remove("is-changing");
    }, direction ? 150 : 0);
  }

  function next() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightbox(true);
  }
  function prev() {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightbox(true);
  }

  function initLightboxControls() {
    document.getElementById("lbClose").addEventListener("click", closeLightbox);
    document.getElementById("lbPrev").addEventListener("click", prev);
    document.getElementById("lbNext").addEventListener("click", next);

    document.getElementById("lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      const lb = document.getElementById("lightbox");
      if (!lb.classList.contains("is-active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderFiltros();
    renderGrid();
    initLightboxControls();
  });
})();