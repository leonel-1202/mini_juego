document.getElementById("byeBtn").addEventListener("click", () => {
    const contenido = document.getElementById("Base");
    const pantallaCierre = document.getElementById("pantallaCierre");

    // Oculta el contenido principal con un efecto
    contenido.style.opacity = "0";
    contenido.style.transform = "scale(0.9)";
    contenido.style.transition = "all 1s ease";

    setTimeout(() => {
        contenido.style.display = "none";
        pantallaCierre.classList.remove("oculto");
        pantallaCierre.classList.add("mostrar");
    }, 1000);

    // Simula el cierre completo
    setTimeout(() => {
        pantallaCierre.style.opacity = "0";
        document.body.style.background = "black";
    }, 4000);
});
