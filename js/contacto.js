function validarForm(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
  
    // Obtener los elementos del formulario
    const nombreInput = document.getElementById('name');
    const telefonoInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const checkboxes = document.querySelectorAll('#opciones input[type="checkbox"]');
    const terminosCheckbox = document.getElementById('terminosCondiciones');
  
    // Validar nombre y apellido
    // .trim() es para eliminar espacios en blanco al comienzo y final de un string
    if (nombreInput.value.trim().length < 2) {
      document.getElementById('errorNombre').textContent = 'Por favor, ingrese su nombre y apellido.';
      nombreInput.focus();
      return false;
    } else {
      document.getElementById('errorNombre').textContent = '';
    }
  
    // Validar teléfono
    if (telefonoInput.value.trim().length < 7 || telefonoInput.value.trim().length > 15) {
      document.getElementById('errorTelefono').textContent = 'Por favor, ingrese su teléfono.';
      telefonoInput.focus();
      return false;
    } else {
      document.getElementById('errorTelefono').textContent = '';
    }
  
    // Validar correo electrónico
    if (emailInput.value.trim() === '') {
      document.getElementById('errorMail').textContent = 'Por favor, ingrese su correo electrónico.';
      emailInput.focus();
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      document.getElementById('errorMail').textContent = 'Por favor, ingrese un correo electrónico válido.';
      emailInput.focus();
      return false;
    } else {
      document.getElementById('errorMail').textContent = '';
    }
  
    // Validar al menos un checkbox seleccionado
    let isChecked = false;
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        isChecked = true;
      }
    });
    if (!isChecked) {
      document.getElementById('errorCheckbox').textContent = 'Por favor, seleccione al menos un servicio.';
      checkboxes[0].focus();
      return false;
    } else {
      document.getElementById('errorCheckbox').textContent = '';
    }
  
    // Validar aceptación de términos y condiciones
    if (!terminosCheckbox.checked) {
      document.getElementById('errorTerminos').textContent = 'Por favor, acepte los términos y condiciones de uso.';
      terminosCheckbox.focus();
      return false;
    } else {
      document.getElementById('errorTerminos').textContent = '';
    }
  
    // Si todo está correcto, enviar el formulario
    alert("Formulario enviado exitosamente");
    document.getElementById("formularioValidado").submit();
  }
  
//EASTER EGG

console.log("EASTER EGG: Ejecuta la funcion easterEgg()...");

function easterEgg() {
  console.log('Haga click en "Direccion: Calle Falsa 123, Caba"');
}

function sorpresa() {
  document.getElementById("easterEgg");
  var circle = document.createElement("div");
  var texto = document.createElement("p");
  texto.id = "texto";
  circle.id = "myCircle";
  texto.innerHTML = "¡Te queremos profe!";
  document.body.appendChild(circle);
  circle.appendChild(texto);
}


