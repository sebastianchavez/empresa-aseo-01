/* ============================================================
   CleanPro - JS específico de la página de inicio
   Renderiza servicios destacados, beneficios y testimonios.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Iconos SVG inline ---------- */
  const ICONS = {
    home: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>',
    building: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
    sparkles: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>',
    briefcase: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
    square: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>',
    rectangle: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /></svg>',
    hammer: '<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>',
    leaf: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21l3.6-3.6A8 8 0 0112 4m0 11.6V21m0-7.4c0-1.6.6-3 1.6-4.2M14 4h6v6m-6 0a6 6 0 00-6 6" /></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    thumbs: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 18.17m0 0V8m0 10.17l-3.421-1.957A2 2 0 012 14.479V7.521a2 2 0 011.579-1.943L7 4.83m0 0V4a2 2 0 012-2h2.343a1 1 0 01.707.293l3.828 3.828A1 1 0 0115 6.586V9a1 1 0 01-1 1H7z" /></svg>',
    tag: '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" /></svg>'
  };

  /* ---------- 1. Servicios destacados ---------- */
  function renderServiciosDestacados() {
    const container = document.getElementById("serviciosDestacados");
    if (!container || !window.CLEANPRO) return;

    const items = window.CLEANPRO.servicios.filter((s) => s.destacado).slice(0, 4);
    container.innerHTML = items.map((s, i) => `
      <div class="reveal delay-${(i + 1) * 100} card-lift bg-white p-7 rounded-2xl shadow-md border border-slate-100 group">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          ${ICONS[s.icono] || ICONS.sparkles}
        </div>
        <h3 class="mt-5 text-lg font-bold text-slate-900">${s.titulo}</h3>
        <p class="mt-3 text-sm text-slate-600 leading-relaxed">${s.descripcion}</p>
        <a href="contacto.html?servicio=${s.slug}" class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-700">
          Cotizar
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>
    `).join("");
  }

  /* ---------- 2. Beneficios ---------- */
  function renderBeneficios() {
    const container = document.getElementById("beneficiosList");
    if (!container || !window.CLEANPRO) return;

    container.innerHTML = window.CLEANPRO.beneficios.map((b, i) => `
      <div class="reveal delay-${(i % 4 + 1) * 100} card-lift p-6 rounded-2xl bg-slate-50 border border-slate-100 group">
        <div class="w-12 h-12 rounded-xl bg-white text-cyan-600 flex items-center justify-center shadow-sm group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all">
          ${ICONS[b.icono] || ICONS.check}
        </div>
        <h3 class="mt-4 font-bold text-slate-900">${b.titulo}</h3>
        <p class="mt-2 text-sm text-slate-600 leading-relaxed">${b.descripcion}</p>
      </div>
    `).join("");
  }

  /* ---------- 3. Testimonios ---------- */
  function renderTestimonios() {
    const container = document.getElementById("testimoniosList");
    if (!container || !window.CLEANPRO) return;

    container.innerHTML = window.CLEANPRO.testimonios.map((t, i) => `
      <div class="reveal delay-${(i + 1) * 100} card-lift bg-white/10 backdrop-blur-sm border border-white/20 p-7 rounded-2xl">
        <div class="flex items-center gap-1 text-amber-400">
          ${Array.from({ length: t.rating }, () => '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>').join("")}
        </div>
        <p class="mt-4 text-cyan-50 leading-relaxed">"${t.texto}"</p>
        <div class="mt-5 flex items-center gap-3 pt-5 border-t border-white/10">
          <img src="${t.foto}" alt="${t.nombre}" class="w-12 h-12 rounded-full border-2 border-cyan-400" />
          <div>
            <div class="font-bold">${t.nombre}</div>
            <div class="text-xs text-cyan-200">${t.cargo}</div>
          </div>
        </div>
      </div>
    `).join("");
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderServiciosDestacados();
    renderBeneficios();
    renderTestimonios();

    // Re-aplicar observer a elementos dinámicos
    if ("IntersectionObserver" in window) {
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
  });
})();