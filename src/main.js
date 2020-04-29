import { example } from './data.js';
import data from './data/potter/potter.js'


//console.log(data);
const dataPotter=data;
const dataArray=Object.values(dataPotter);

for(let i=0;i<dataArray.lenght;i++){
    console.log(dataArray[i].name);
}
const root=document.getElementById("root");
for(let i=0;i<dataArray.length;i++){    
   // root.innerHTML+= '<img src=""+dataArray[i].image+'"alt="">'

   root.innerHTML += `<img src="${dataArray[i].image}" alt="">`
   root.innerHTML += `<p>Nombre: ${dataArray[i].name} <br> ${dataArray[i].house}</p>`
    
}

document.getElementById("homePage").style.display = "none";

let enterButton = document.getElementById("enterButton");
enterButton.addEventListener('click', ()=>{
    document.getElementById("welcome").style.display = "none";
    document.getElementById("homePage").style.display = "block";
});