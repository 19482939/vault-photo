// Registrar Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => {
        console.log("Service Worker instalado correctamente");
      })
      .catch((error) => {
        console.log("Error al instalar Service Worker:", error);
      });
  });
}
