import data from './data/potter/potter.js'

const dataPotter=data;
let dataArray=Object.values(dataPotter);

const root=document.getElementById("root");

for(let i=0;i<dataArray.length;i++){    
   let characters = document.getElementById('characters').innerHTML += `
   <div class="root">
        <img src="${dataArray[i].image}" alt="">
        <h3>${dataArray[i].name}</h3>
        <p>${dataArray[i].house}</p>
    </div>`;
}

function vaciar() {
    characters.innerHTML = "";
}

const select = document.getElementById("alphabeticalSearch");
select.addEventListener("change", () =>{
    vaciar();
    let condition = select.options[select.selectedIndex].index;
    if(condition==1){
        //Función que ordena alfabéticamente
        dataArray.sort((a, b) => a.name.localeCompare(b.name));
        
        for(let i=0;i<dataArray.length;i++){    
            document.getElementById('characters').innerHTML += `
            <div class="root">
                <img src="${dataArray[i].image}" alt="">
                <h3>${dataArray[i].name}</h3>
                <p>${dataArray[i].house}</p>
            </div>`;
        }
    }if(condition==2){
        //Arreglo con orden alfabético descendente
        const dataArrayReverse=dataArray.reverse();
        
        for(let i=0;i<dataArrayReverse.length;i++){    
            document.getElementById('characters').innerHTML += `
            <div class="root">
                <img src="${dataArrayReverse[i].image}" alt="">
                <h3>${dataArrayReverse[i].name}</h3>
                <p>${dataArrayReverse[i].house}</p>
            </div>`;
        }
    }
})


document.getElementById("homePage").style.display = "none";

let enterButton = document.getElementById("enterButton");
enterButton.addEventListener('click', ()=>{
    document.getElementById("welcome").style.display = "none";
    document.getElementById("homePage").style.display = "block";
});