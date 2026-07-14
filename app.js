function login() {
  const password = document.getElementById("password").value;

  if (password === "1234") {
    document.body.innerHTML = `
      <div style="text-align:center; padding:40px;">
        <h1>🔒 Vault Photo</h1>
        <h2>Bienvenido</h2>

        <input type="file" id="foto" accept="image/*">

        <br><br>

        <button onclick="subirFoto()">
          Guardar Foto
        </button>

        <div id="galeria" style="margin-top:20px;"></div>
      </div>
    `;
  } else {
    document.getElementById("mensaje").innerText =
      "❌ Contraseña incorrecta";
  }
}

function subirFoto() {
  const archivo = document.getElementById("foto").files[0];

  if (!archivo) {
    alert("Selecciona una foto.");
    return;
  }

  const lector = new FileReader();

  lector.onload = function(e) {
    document.getElementById("galeria").innerHTML +=
      `<img src="${e.target.result}" width="150" style="margin:10px;border-radius:10px;">`;
  };

  lector.readAsDataURL(archivo);
}
