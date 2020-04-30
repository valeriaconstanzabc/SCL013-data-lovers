import data from './data/potter/potter.js'

const dataPotter=data;
let dataArray=Object.values(dataPotter);

const root=document.getElementById("root");
for(let i=0;i<dataArray.length;i++){    
   document.getElementById('characters').innerHTML += `
   <div class="root">
        <img src="${dataArray[i].image}" alt="">
        <h3>${dataArray[i].name}</h3>
        <p>Especie: ${dataArray[i].house}</p>
    </div>`;
}


for(let i=0;i<dataArray.length;i++){    
    document.getElementById('characters').innerHTML += `
    <div class="root">
        <img src="${dataArray[i].image}" alt="">
        <h3>${dataArray[i].name}</h3>
        <p>Especie: ${dataArray[i].house}</p>
    </div>`;
}

const select = document.getElementById("alphabeticalSearch");

select.addEventListener("change", () =>{
    let condition = select.options[select.selectedIndex].index;
    console.log(condition);

    if(condition==1){
        //Función que ordena alfabéticamente
        dataArray.sort((a, b) => a.name.localeCompare(b.name));
        console.log(dataArray);
    }
    if(condition==2){
        //Arreglo con orden alfabético descendente
        const dataArrayReverse=dataArray.reverse();
        console.log(dataArrayReverse);
    }

})



document.getElementById("homePage").style.display = "none";

let enterButton = document.getElementById("enterButton");
enterButton.addEventListener('click', ()=>{
    document.getElementById("welcome").style.display = "none";
    document.getElementById("homePage").style.display = "block";
});