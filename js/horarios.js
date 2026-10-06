/* ============================================================
   CleanPro - JS específico de Horarios
   Renderiza la tabla de turnos semanales.
   ============================================================ */
(function () {
  "use strict";

  function statusBadge(value) {
    if (value === "Cerrado") {
      return `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold">
        <span class="w-2 h-2 rounded-full bg-slate-400"></span> Cerrado
      </span>`;
    }
    if (value === "Solo urgencias") {
      return `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
        <span class="w-2 h-2 rounded-full bg-amber-500"></span> Solo urgencias
      </span>`;
    }
    return `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
      <span class="w-2 h-2 rounded-full bg-emerald-500"></span> ${value}
    </span>`;
  }

  function renderTurnos() {
    const container = document.getElementById("turnosTable");
    if (!container || !window.CLEANPRO) return;

    container.innerHTML = window.CLEANPRO.turnos.map((t, i) => `
      <tr class="border-b border-slate-100 hover:bg-slate-50/50 transition-colors reveal delay-${(i + 1) * 60}">
        <td class="px-6 py-4 font-bold text-slate-900">${t.dia}</td>
        <td class="px-4 py-4 text-center">${statusBadge(t.manana)}</td>
        <td class="px-4 py-4 text-center">${statusBadge(t.tarde)}</td>
        <td class="px-4 py-4 text-center">${statusBadge(t.noche)}</td>
      </tr>
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

  document.addEventListener("DOMContentLoaded", renderTurnos);
})();