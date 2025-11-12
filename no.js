const base = document.getElementById("Base");
const aceptarOriginal = document.getElementById("Aceptar");
const rechazar = document.getElementById("Rechazar");

let posOriginal = { left: 0, top: 0 };
let aceptarFlotante = null;

window.addEventListener("DOMContentLoaded", () => {
  const baseRect = base.getBoundingClientRect();
  const btnRect = aceptarOriginal.getBoundingClientRect();

  posOriginal.left = btnRect.left - baseRect.left;
  posOriginal.top = btnRect.top - baseRect.top;

  aceptarOriginal.style.visibility = "hidden";

  aceptarFlotante = aceptarOriginal.cloneNode(true);
  aceptarFlotante.id = "AceptarFlotante";
  aceptarFlotante.style.position = "absolute";
  aceptarFlotante.style.left = `${posOriginal.left}px`;
  aceptarFlotante.style.top = `${posOriginal.top}px`;
  aceptarFlotante.style.zIndex = "10";
  aceptarFlotante.style.visibility = "visible";
  aceptarFlotante.style.pointerEvents = "auto";
  aceptarFlotante.style.transition = "left 0.25s ease, top 0.25s ease";
  base.appendChild(aceptarFlotante);

  aceptarFlotante.addEventListener("mouseenter", moverBotonFlotante);
  base.addEventListener("mouseleave", () => {
    aceptarFlotante.style.left = `${posOriginal.left}px`;
    aceptarFlotante.style.top = `${posOriginal.top}px`;
  });
});

// ===== Botón “Sí” =====
aceptarOriginal.addEventListener("click", () => {
  window.location.href = "si.html";
});

// ===== Botón “No” =====
rechazar.addEventListener("click", () => {
  window.location.href = "clase.html";
});

function moverBotonFlotante() {
  const baseRect = base.getBoundingClientRect();
  const btnRect = aceptarFlotante.getBoundingClientRect();
  const maxX = baseRect.width - btnRect.width - 20;
  const maxY = baseRect.height - btnRect.height - 20;
  const nuevoX = Math.random() * Math.max(0, maxX);
  const nuevoY = Math.random() * Math.max(0, maxY);
  aceptarFlotante.style.left = `${nuevoX}px`;
  aceptarFlotante.style.top = `${nuevoY}px`;
}