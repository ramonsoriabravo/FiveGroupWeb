//Funcionamieneto del menu desplagable

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

/*Con click en toogle, se agrega o quita la clase
nav-menu_visible y muestra/oculta el menu*/
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

/*Selecciona todos los links con # y agrega evento click
Cando haga click en el enlace, borre clase 
nav-menu_visible y el menu se oculte*/
const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"');
console.log(menuLinks);

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function () {
    navMenu.classList.remove("nav-menu_visible");
  });
});

//************************************************************ */
//Muestra el mensaje "Próximamente Redes Sociales" 
// con click en botones de redes sociales del footer

const linkSociales = document.querySelectorAll(".fa-brands");
const mensaje = document.querySelector(".footer-msg");

// console.log("link sociales:", linkSociales);
// console.log("Mensaje:", mensaje);

// Le agrega un click a cada link social
// cuando hagan click agrega la clase visible por determinado tiempo
// Y muestre el mensaje de Próximamente Redes Sociales
linkSociales.forEach(link => {
  link.addEventListener("click", function () {
    mensaje.classList.add("visible");
    setTimeout(function() {
      mensaje.classList.remove("visible");
    }, 2800);
  });
});



