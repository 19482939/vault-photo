const CLAVE = "1234";

function login() {
    const password = document.getElementById("password").value;

    if (password === CLAVE) {
        document.body.innerHTML = `
            <div style="text-align:center;color:white;padding:40px;font-family:Arial;background:#111827;height:100vh;">
                <h1>🔓 Bienvenido</h1>
                <p>Acceso concedido.</p>
                <button onclick="alert('Próximamente podrás guardar tus fotos privadas.')"
                style="padding:12px 20px;border:none;border-radius:8px;background:#2563eb;color:white;font-size:16px;">
                📷 Agregar fotos
                </button>
            </div>
        `;
    } else {
        document.getElementById("mensaje").textContent = "Contraseña incorrecta";
    }
}
