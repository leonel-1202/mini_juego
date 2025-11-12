// ======== Referencias ========
const base = document.getElementById("Base");
const rechazarOriginal = document.getElementById("Rechazar");
const aceptar = document.getElementById("Aceptar");

// ======== Variables para el botón "No" ========
let posicionOriginal = { left: 0, top: 0 };
let rechazarFlotante = null;

// ======== Inicialización ========
const baseRect = base.getBoundingClientRect();
const btnRect = rechazarOriginal.getBoundingClientRect();
posicionOriginal.left = btnRect.left - baseRect.left;
posicionOriginal.top = btnRect.top - baseRect.top;
rechazarOriginal.style.visibility = "hidden";

rechazarFlotante = rechazarOriginal.cloneNode(true);
rechazarFlotante.id = "RechazarFlotante";
rechazarFlotante.style.position = "absolute";
rechazarFlotante.style.left = `${posicionOriginal.left}px`;
rechazarFlotante.style.top = `${posicionOriginal.top}px`;
rechazarFlotante.style.visibility = "visible";
rechazarFlotante.style.pointerEvents = "auto";
rechazarFlotante.style.transition = "left 0.15s ease, top 0.15s ease";
base.appendChild(rechazarFlotante);

// ======== Eventos ========
rechazarFlotante.addEventListener("mouseenter", moverBotonFlotante);
base.addEventListener("mouseleave", () => {
  rechazarFlotante.style.left = `${posicionOriginal.left}px`;
  rechazarFlotante.style.top = `${posicionOriginal.top}px`;
});

// Si logra dar clic en "No", redirige a no.html
rechazarFlotante.addEventListener("click", () => {
  window.location.href = "no.html";
});

// Botón “Sí” genera corazones y luego redirige
aceptar.addEventListener("click", () => {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "absolute";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = "100vh";
    heart.style.fontSize = `${1 + Math.random() * 2}rem`;
    heart.style.opacity = "0.9";
    heart.style.animation = `subir ${3 + Math.random() * 3}s linear forwards`;
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }

  setTimeout(() => {
    window.location.href = "si.html";
  }, 2000);
});

// ======== Movimiento ========
function moverBotonFlotante() {
  const botonRect = rechazarFlotante.getBoundingClientRect();
  const maxX = base.clientWidth - botonRect.width;
  const maxY = base.clientHeight - botonRect.height;
  const nuevoX = Math.random() * Math.max(0, maxX);
  const nuevoY = Math.random() * Math.max(0, maxY);
  rechazarFlotante.style.left = `${nuevoX}px`;
  rechazarFlotante.style.top = `${nuevoY}px`;
}

// ======== Animación de corazones ========
const style = document.createElement("style");
style.innerHTML = `
@keyframes subir {
  to { transform: translateY(-110vh); opacity: 0; }
}`;
document.head.appendChild(style);