// Mostrar mensaje al hacer clic en el botón
document.getElementById("botonMensaje").addEventListener("click", () => {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "¡Hola! Has hecho clic en el botón 😄";
});

// Validar formulario de contacto
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre === "" || correo === "") {
    alert("Por favor, completa todos los campos.");
  } else {
    alert(`Gracias por contactarnos, ${nombre}! 😊`);
    e.target.reset();
  }
});
