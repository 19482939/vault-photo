function login() {
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  if (password === "1234") {
    mensaje.innerHTML = "Acceso correcto ✅";
  } else {
    mensaje.innerHTML = "Contraseña incorrecta ❌";
  }
}

// Registrar Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}
