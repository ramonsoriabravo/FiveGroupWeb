// Ramón Soria Bravo - (Mostrar/Ocultar) bloques con click en titulos H2
'use strict';
// Asigno los bloques y los botones h2
const bloques = document.querySelectorAll('.bloque');
const h2botones = document.querySelectorAll('.h2boton');

// Recorro los h2 y les les asigno un click 
// de modo que cuando se haga click en el titulo (agregue/quite) 
// la clase oculto del bloque seleccionado.
h2botones.forEach((h2boton, i) => {
  h2boton.addEventListener('click', () => {
    const bloque = bloques[i];
    bloque.classList.toggle('oculto');
  });
});
