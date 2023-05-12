// Comentarios en javascrip en linea
/* Comentarios en parrafos*/
//  OTROS TAMAÑOS DE FOTO TRAIDAS DE LA API
//   <img src="${data.results['0'].picture.medium}" width="200px" class="img-fluid rounded-circle">
//   <img src="${data.results['0'].picture.thumbnail}" width="200px" class="img-fluid rounded-circle">

const URL = 'https://randomuser.me/api/?results=5';
fetch(URL)
    .then(response => response.json())
    .then(data => {

        // let elemFoto = document.getElementById('info-img-nombre')
        let elemDatos = document.getElementById('coordinators')
        // console.log(data.results['0'])
        console.log(data.results)
        console.log("Cantidad de registros:" + data.results.length);
        let nombres;
        for (var i = 0; i < data.results.length; i++) {
            nombres = data.results[i].name.first + " " + data.results[i].name.last;
            // console.log(nombres)
            elemDatos.innerHTML += ` <article>     
        <img src="${data.results[i].picture.large}" class="coord-image" alt="foto de perfil">        
        <p class="coord-names"> ${nombres}</p>
        <p class="coord-phone"> ${data.results[i].phone}</p>  
        <p class="coord-country">${data.results[i].location.country}</p>
        </article>   
    `
    // <p class="coord-names"> ${data.results[i].name.first}, ${data.results[i].name.last}</p>
    //         elemDatos.innerHTML += `        
    //     <p>Edad: <span class="perfil-datos">${data.results[i].dob.age}</span> años</p>
    //     <p>E-mail: <span class="perfil-datos">${data.results[i].email}</span> </p>
    //     <p>Teléfono: <span class="perfil-datos">${data.results[i].phone}</span> </p>    
    //     <p>País: <span class="perfil-datos">${data.results[i].location.country}</span> </p>
    //     <p>Ciudad: <span class="perfil-datos">${data.results[i].location.city}</span> </p>    
    // `

        }


    })
    .catch(err => console.log(err))