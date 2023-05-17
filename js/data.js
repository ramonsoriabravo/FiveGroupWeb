// Trae 5 registros de la API randomuser.me y los agrega al id=coordinators

const URL = 'https://randomuser.me/api/?results=5';
fetch(URL)
    .then(response => response.json())
    .then(data => {
        let elemDatos = document.getElementById('coordinators')
        // console.log(data.results['0'])
        // console.log(data.results)
        let nombres;
        for (var i = 0; i < data.results.length; i++) {
            nombres = data.results[i].name.first + " " + data.results[i].name.last;            
            elemDatos.innerHTML += ` <article>     
        <img src="${data.results[i].picture.large}" class="coord-image" alt="foto de ${nombres}">        
        <p class="coord-names"> ${nombres}</p>
        <p class="coord-phone"> ${data.results[i].phone}</p>  
        <p class="coord-country">${data.results[i].location.country}</p>
        </article>   
    `        }
    })
    .catch(err => console.log(err))