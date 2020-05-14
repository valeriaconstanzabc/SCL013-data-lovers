import data from './data/potter/potter.js'
import {orderData, filterGender, filterHouse, filterAncestry, filterStaff} from './data.js'

//Creamos el modal de cada personaje con su correspondiente información
function createModal (dataArray) {
    let modal=document.getElementById("myModal"); //Modal general html
    let modalContainer = document.getElementById("modalContent"); //Modal cuadrito blanco html
    let imgButton=document.getElementsByClassName("imgButton"); //imagen que actua como boton. Ingresada en el js
    
    modal.style.display = "none"; //Para esconder el modal general al cargar la página

    for(let i=0; i<imgButton.length; i++){ //recorremos el for de las imagenes que creamos
        let img=imgButton[i]; //guardamos cada imagen en una variable con posición i
        
        img.addEventListener ('click', ()=>{ //agregamos el evento a la imagen
            modal.style.display = "block"; //al hacer click traemos el modal general

            //creamos el modal html en el js. /modal cuadrito blanco
            modalContainer.innerHTML += ` 
            <div class="frame">
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

            let span = document.getElementsByClassName("close")[0]; // al momento de cerrar, hace este evento/
            span.addEventListener('click', ()=>{ //evento del click en la x
                modal.style.display = "none"; //Escondemos el modal general
                modalContainer.innerHTML="";  //Limpiamos el modal con la informacion (cuadrito blanco)
            });
        });

        window.onclick = function(event) { //evento para que al hacer click fuera del modal se cierre
            if (event.target == modal) {
              modal.style.display = "none";
              modalContainer.innerHTML="";
            }
        }
    }   
}

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
    createModal(dataArray);
}


//Ordenamos todos los personajes en orden alfabético
const select = document.getElementById("alphabeticalSearch");
select.addEventListener("change", () =>{
    characters.innerHTML = "";
    dataArray=Object.values(dataPotter);
    let condition = select.options[select.selectedIndex].index;
    let orderResult = orderData(dataArray, condition);
    
    for(let i=0;i<orderResult.length;i++){    
        characters.innerHTML += `
        <div id="boton" class="root">
             <img src="${orderResult[i].image}" alt="" class="imgButton">
             <h3>${orderResult[i].name}</h3>
             <p>${orderResult[i].house}</p>
         </div>`;
         createModal(orderResult);
    }
})


//Creamos el filtro de búsqueda en tiempo real
/*const search = document.querySelector("#search");
const filter = () =>{
    const search = document.querySelector("#search").value;
    characters.innerHTML = "";
    const informationSearch = search.toLowerCase();
    
    
    for (let i=0; i<dataArray.length; i++){
        let characterName = dataArray[i].name.toLowerCase();
        let searchArray;
        
        if(characterName.indexOf(informationSearch) !== -1){
            searchArray=dataArray[i];
            
        for(let i=0;i<searchArray.length;i++){
            console.log(searchArray);
            characters.innerHTML += `
            <div  class="root">
                <img src="${searchArray[i].image}" alt="" class="imgButton">
                <h3>${searchArray[i].name}</h3>
                <p>${searchArray[i].house}</p>
            </div>`;
            createModal(searchArray);
        }
        }
       
        
    } 
    if (characters.innerHTML === ""){
        characters.innerHTML += `
        <div  class="root">
            <p>Personaje no encontrado...</p>
        </div>`;
    }
} */
//search.addEventListener('keyup', filter)
search.addEventListener("keyup",()=>{
    const search = document.querySelector("#search").value;
    characters.innerHTML = "";
    const informationSearch = search.toLowerCase();
    
    
    let searchArray=[];
    for (let i=0; i<dataArray.length; i++){
        let characterName = dataArray[i].name.toLowerCase();
        if(characterName.indexOf(informationSearch) !== -1){
            
            searchArray.push(dataArray[i]); //Guardando resultados de la busqueda en arreglo nuevo
            
            console.log("Arreglo nuevo con los resultados de busqueda");
            console.log(searchArray);
            
        }
        
    } 
    console.log("SearchArray con personajes encontrados"+searchArray)
    for(let i=0;i<searchArray.length;i++){
                console.log("Entro al for nuevo"+searchArray);
                characters.innerHTML += `
                <div  class="root">
                    <img src="${searchArray[i].image}" alt="" class="imgButton">
                    <h3>${searchArray[i].name}</h3>
                    <p>${searchArray[i].house}</p>
                </div>`; 
                createModal(searchArray);
    }
    if (characters.innerHTML === ""){
        characters.innerHTML += `
        <div  class="root">
            <p>Personaje no encontrado...</p>
        </div>`;
    }
})

//Creamos filtro de género
const selectGender = document.getElementById("genderSearch");
selectGender.addEventListener("change", () =>{
    characters.innerHTML = "";
    
    let gender = selectGender.options[selectGender.selectedIndex].value;
    let genderResult = filterGender(dataArray, gender);
    for(let i=0;i<genderResult.length;i++){    
        characters.innerHTML += `
        <div id="boton" class="root">
             <img src="${genderResult[i].image}" alt="" class="imgButton">
             <h3>${genderResult[i].name}</h3>
             <p>${genderResult[i].house}</p>
         </div>`;
         createModal(genderResult);
    }
    
})

//Creamos filtro de casa
const selectHouse = document.getElementById("houseSearch");
selectHouse.addEventListener("change", () =>{
    characters.innerHTML = "";
    
    let house = selectHouse.options[selectHouse.selectedIndex].value;
    let houseResult = filterHouse(dataArray, house);
    
    for(let i=0;i<houseResult.length;i++){    
        characters.innerHTML += `
        <div id="boton" class="root">
             <img src="${houseResult[i].image}" alt="" class="imgButton">
             <h3>${houseResult[i].name}</h3>
             <p>${houseResult[i].house}</p>
         </div>`;
         createModal(houseResult);
    }
})

//Creamos filtro de linaje
const selectAncestry = document.getElementById("ancestrySearch");
selectAncestry.addEventListener("change", () =>{
    characters.innerHTML = "";
    
    let ancestry = selectAncestry.options[selectAncestry.selectedIndex].value;
    let ancestryResult = filterAncestry(dataArray, ancestry);
    
    for(let i=0;i<ancestryResult.length;i++){    
        characters.innerHTML += `
        <div id="boton" class="root">
             <img src="${ancestryResult[i].image}" alt="" class="imgButton">
             <h3>${ancestryResult[i].name}</h3>
             <p>${ancestryResult[i].house}</p>
         </div>`;
         createModal(ancestryResult);
    }
})

//Creamos filtro de rol profesor
const selectStaff = document.getElementById("staffSearch");
selectStaff.addEventListener("change", () =>{
    characters.innerHTML = "";
    
    let staff = selectStaff.options[selectStaff.selectedIndex].value;
    let staffResult = filterStaff(dataArray, staff);
    
    
    for(let i=0;i<staffResult.length;i++){    
        characters.innerHTML += `
        <div id="boton" class="root">
             <img src="${staffResult[i].image}" alt="" class="imgButton">
             <h3>${staffResult[i].name}</h3>
             <p>${staffResult[i].house}</p>
         </div>`;
         createModal(staffResult);
    }
})
