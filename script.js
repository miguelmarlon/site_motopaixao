/* ==========================================================================
   motopaixao — Linktree-style page
   JavaScript de apoio: pequenos detalhes de UX (ano automático no rodapé,
   feedback de toque nos botões e uma leve animação de entrada).
   Nenhuma dependência externa é necessária.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano do rodapé automaticamente
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Animação de entrada suave para os cartões de link
  const links = document.querySelectorAll(".link-btn");
  links.forEach((link, index) => {
    link.style.opacity = "0";
    link.style.transform = "translateY(10px)";
    link.style.transition = "opacity 0.4s ease, transform 0.4s ease";

    setTimeout(() => {
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    }, 100 + index * 90);
  });

  // Feedback tátil extra em dispositivos touch (garante o estado "active"
  // mesmo em navegadores que não simulam :active corretamente ao toque)
  links.forEach((link) => {
    link.addEventListener("touchstart", () => {
      link.classList.add("is-touching");
    }, { passive: true });

    link.addEventListener("touchend", () => {
      link.classList.remove("is-touching");
    }, { passive: true });
  });
});
