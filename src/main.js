import data from './data/potter/potter.js'

const dataPotter=data;
const dataArray=Object.values(dataPotter);

const root=document.getElementById("root");
for(let i=0;i<dataArray.length;i++){    
   
   /*root.innerHTML += `<img src="${dataArray[i].image}" alt="">`
   root.innerHTML += `<p>Nombre: ${dataArray[i].name} <br> ${dataArray[i].house}</p>`*/
   document.getElementById('characters').innerHTML += `
   <div class="root">
        <img src="${dataArray[i].image}" alt="">
        <h3>${dataArray[i].name}</h3>
        <p>Especie: ${dataArray[i].house}</p>
    </div>`;
}

document.getElementById("homePage").style.display = "none";

let enterButton = document.getElementById("enterButton");
enterButton.addEventListener('click', ()=>{
    document.getElementById("welcome").style.display = "none";
    document.getElementById("homePage").style.display = "block";
});