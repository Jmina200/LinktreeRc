const video = document.getElementById("bgVideo");
const buttons = document.getElementById("buttons");
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");

// 1. AL CARGAR: Asegurar que los botones estén ocultos
buttons.classList.remove("show");

// 2. AL DAR CLIC EN "VER VIDEO" (Activa sonido y reproduce)
startBtn.addEventListener("click", () => {
    // Desvanece la pantalla negra
    startScreen.style.opacity = "0";
    setTimeout(() => { startScreen.style.display = "none"; }, 500);

    // Configura y arranca el video
    video.muted = false;
    video.currentTime = 0;
    video.play();
});

// 3. LÓGICA DE APARICIÓN (A los 6.5 segundos)
video.addEventListener("timeupdate", () => {
    // MIENTRAS el video esté entre el segundo 0 y el 6.5...
    if (video.currentTime < 6.5) {
        // ...mantenemos los botones ocultos
        buttons.classList.remove("show");
    } 
    // CUANDO el video pase del segundo 6.5...
    else {
        // ...mostramos los botones
        buttons.classList.add("show");
    }
});