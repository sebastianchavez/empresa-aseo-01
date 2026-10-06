/* ============================================================
   CleanPro - JS específico de Precios
   Renderiza planes, tabla comparativa, extras y FAQ.
   ============================================================ */
(function () {
  "use strict";

  function formatCLP(n) {
    return n.toLocaleString("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
  }

  function renderPlanes() {
    const container = document.getElementById("planesGrid");
    if (!container || !window.CLEANPRO) return;

    container.innerHTML = window.CLEANPRO.planes.map((p, i) => `
      <article class="reveal delay-${(i + 1) * 100} card-lift relative p-8 rounded-3xl border ${p.destacado ? 'bg-gradient-to-br from-cyan-600 to-blue-800 text-white border-transparent shadow-2xl scale-100 lg:scale-105' : 'bg-white border-slate-100 shadow-md'}">
        ${p.destacado ? '<span class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase rounded-full bg-amber-400 text-amber-900 shadow-lg">Más elegido</span>' : ''}
        <h3 class="text-2xl font-extrabold">${p.nombre}</h3>
        <p class="mt-3 text-sm ${p.destacado ? 'text-cyan-50' : 'text-slate-600'}">${p.descripcion}</p>
        <div class="mt-6">
          <div class="flex items-baseline gap-1">
            <span class="text-4xl md:text-5xl font-extrabold">${formatCLP(p.precio)}</span>
          </div>
          <div class="mt-1 text-sm ${p.destacado ? 'text-cyan-100' : 'text-slate-500'}">por ${p.periodicidad}</div>
        </div>
        <ul class="mt-7 space-y-3">
          ${p.features.map(f => `
            <li class="flex items-start gap-3 text-sm">
              ${f.incluido
                ? `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ${p.destacado ? 'text-cyan-200' : 'text-emerald-500'} flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ${p.destacado ? 'text-cyan-300/50' : 'text-slate-300'} flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`
              }
              <span class="${!f.incluido ? (p.destacado ? 'line-through text-cyan-200/50' : 'line-through text-slate-400') : ''}">${f.texto}</span>
            </li>
          `).join("")}
        </ul>
        <a href="contacto.html?plan=${p.id}" class="mt-8 inline-flex w-full justify-center items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-colors ${p.destacado ? 'bg-white text-cyan-700 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'}">
          Elegir ${p.nombre}
        </a>
      </article>
    `).join("");
  }

  function renderTabla() {
    const container = document.getElementById("tablaComparativa");
    if (!container || !window.CLEANPRO) return;

    const allFeatures = window.CLEANPRO.planes[0].features.map((f, i) => ({
      texto: f.texto,
      basico: window.CLEANPRO.planes[0].features[i].incluido,
      profesional: window.CLEANPRO.planes[1].features[i].incluido,
      premium: window.CLEANPRO.planes[2].features[i].incluido
    }));

    container.innerHTML = allFeatures.map(f => `
      <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
        <td class="px-6 py-4 text-sm font-medium text-slate-700">${f.texto}</td>
        <td class="px-4 py-4 text-center">${f.basico ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>' : '<span class="text-slate-300">—</span>'}</td>
        <td class="px-4 py-4 text-center bg-cyan-50/50">${f.profesional ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>' : '<span class="text-slate-300">—</span>'}</td>
        <td class="px-4 py-4 text-center">${f.premium ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-auto text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>' : '<span class="text-slate-300">—</span>'}</td>
      </tr>
    `).join("");
  }

  function renderExtras() {
    const container = document.getElementById("extrasGrid");
    if (!container || !window.CLEANPRO) return;

    container.innerHTML = window.CLEANPRO.serviciosExtras.map((e, i) => `
      <div class="reveal delay-${(i % 6 + 1) * 100} card-lift flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          </div>
          <span class="font-semibold text-slate-900">${e.nombre}</span>
        </div>
        <div class="text-right">
          <div class="text-xl font-extrabold text-cyan-600">${formatCLP(e.precio)}</div>
          <div class="text-xs text-slate-500">CLP</div>
        </div>
      </div>
    `).join("");
  }

  function renderFaq() {
    const container = document.getElementById("faqList");
    if (!container || !window.CLEANPRO) return;

    container.innerHTML = window.CLEANPRO.faqs.map((f, i) => `
      <details class="reveal delay-${(i + 1) * 100} faq-item bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <summary class="flex items-center justify-between cursor-pointer p-5 font-semibold text-slate-900 hover:bg-slate-50 transition-colors list-none">
          <span>${f.pregunta}</span>
          <span class="faq-icon w-7 h-7 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12M6 12h12" /></svg>
          </span>
        </summary>
        <div class="faq-content px-5 pb-5 text-slate-600 leading-relaxed">${f.respuesta}</div>
      </details>
    `).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderPlanes();
    renderTabla();
    renderExtras();
    renderFaq();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
  });
})();