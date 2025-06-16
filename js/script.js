// Functions

// --- Función para detectar el zoom "puro" del navegador ---
function getBrowserZoomFactor() {
  const currentDPR = window.devicePixelRatio;
  const initialDPR = initialDevicePixelRatio;
  const zoomFactor = currentDPR / initialDPR;
  return zoomFactor;
}

// --- Función para ajustar el offset de la fuente ---
function adjustZoomOffset() {
  const zoomFactor = getBrowserZoomFactor();
  let offsetRem = zoomFactor - 1;
  offsetRem = Math.max(-0.1, Math.min(0.5, offsetRem));

  // Actualiza la variable zoom de CSS
  root.style.setProperty("--zoom-font-offset", `${offsetRem.toFixed(3)}rem`); // toFixed(3) para evitar números flotantes muy largos
}



// --- Ajuste de zoom del navegador para fuentes ---
const root = document.documentElement;
// Almacenar el devicePixelRatio inicial para intentar calcular el zoom relativo.
let initialDevicePixelRatio = window.devicePixelRatio;

// EVENT LISTENERS
// Escuchar el evento 'resize' que se dispara cuando el usuario hace zoom
window.addEventListener("resize", adjustZoomOffset);

// Llama a la función una vez al cargar la página para establecer el offset inicial
adjustZoomOffset();
