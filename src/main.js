import data from './data/potter/potter.js'
import orderData from './data.js';

//Esconde y trae la página de bienvenida y la página de información
document.getElementById("homePage").style.display = "none";
let enterButton = document.getElementById("enterButton");
enterButton.addEventListener('click', ()=>{
    document.getElementById("welcome").style.display = "none";
    document.getElementById("homePage").style.display = "block";
});


//Traemos todos los personajes al inicio de la página
const dataPotter=data;
let dataArray=Object.values(dataPotter);
const characters = document.getElementById("characters");
for(let i=0;i<dataArray.length;i++){    
   characters.innerHTML += `
   <div  class="root">
        <img src="${dataArray[i].image}" alt="" class="imgButton">
        <h3>${dataArray[i].name}</h3>
        <p>${dataArray[i].house}</p>
    </div>`;
    createModal();
}


//Ordenamos todos los personajes en orden alfabético
const select = document.getElementById("alphabeticalSearch");
select.addEventListener("change", () =>{
    characters.innerHTML = "";
    
    let condition = select.options[select.selectedIndex].index;
    let orderResult = orderData(dataArray, condition);
    
    for(let i=0;i<orderResult.length;i++){    
        let characters = document.getElementById('characters').innerHTML += `
        <div id="boton" class="root">
             <img src="${orderResult[i].image}" alt="" class="imgButton">
             <h3>${orderResult[i].name}</h3>
             <p>${orderResult[i].house}</p>
         </div>`;
         createModal();
    }
})


//Creamos el modal de cada personaje con su correspondiente información
function createModal () {
    let modalContainer = document.getElementById("modalContent");
    let modal=document.getElementById("myModal");
    let imgButton=document.getElementsByClassName("imgButton");
    modal.style.display = "none";

    for(let i=0; i<imgButton.length; i++){
        let img=imgButton[i];
        
        img.addEventListener ('click', ()=>{
            
            let modalContainer = document.getElementById("modalContent");
            modal.style.display = "block";

            modalContainer.innerHTML += `
            <div class="marco">
            <div class="x">
            <span class="close">&times;</span>
            </div>
            <div  class="modalCharacters">
            
            <div class="characterInformation">
            <img src="${dataArray[i].image}" alt="" class="imgButton">
            <h3>${dataArray[i].name}</h3>
            <p>${dataArray[i].house}</p>
            </div>
            <div class="characterInformation2">
            <p>Especie: ${dataArray[i].species}</p>
            <p>Género: ${dataArray[i].gender}</p>
            <p>Fecha de nacimiento: ${dataArray[i].dateOfBirth}</p>
            <p>Año de nacimiento: ${dataArray[i].yearOfBirth}</p>
            <p>Ascendencia: ${dataArray[i].ancestry}</p>
            <p>Color de ojos: ${dataArray[i].eyeColour}</p>
            <p>Color de cabello: ${dataArray[i].hairColour}</p>
            <p>Actor/Actriz: ${dataArray[i].actor}</p>
            <p>Estado: ${dataArray[i].alive}</p><br>
            <h4>Varita mágica</h4>
            <p>Madera: ${dataArray[i].wand.wood}</p>
            <p>Núcleo: ${dataArray[i].wand.core}</p>
            <p>Longitud: ${dataArray[i].wand.length}</p>
            <p>Patronus: ${dataArray[i].patronus}</p>
            </div>
            </div>
            </div>`;

            let span = document.getElementsByClassName("close")[0];
            span.addEventListener('click', ()=>{
                modal.style.display = "none";
                modalContainer.innerHTML=""; 
            });
        });

        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
              modalContainer.innerHTML="";
            }
        }
    };   
};