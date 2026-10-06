/* ============================================================
   CleanPro - JS específico de la página Nosotros
   Renderiza el equipo.
   ============================================================ */
(function () {
  "use strict";

  function renderEquipo() {
    const container = document.getElementById("equipoList");
    if (!container || !window.CLEANPRO) return;

    container.innerHTML = window.CLEANPRO.equipo.map((p, i) => `
      <div class="reveal delay-${(i + 1) * 100} card-lift bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100">
        <div class="aspect-square overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
          <img src="${p.foto}" alt="${p.nombre}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </div>
        <div class="p-6">
          <h3 class="font-bold text-slate-900">${p.nombre}</h3>
          <div class="mt-1 text-sm text-cyan-600 font-semibold">${p.cargo}</div>
          <p class="mt-3 text-sm text-slate-600 leading-relaxed">${p.bio}</p>
        </div>
      </div>
    `).join("");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
  }

  document.addEventListener("DOMContentLoaded", renderEquipo);
})();