import data from './data/potter/potter.js'
import orderData from './data.js';
const dataPotter=data;
let dataArray=Object.values(dataPotter);
const characters = document.getElementById("characters");
for(let i=0;i<dataArray.length;i++){    
   characters.innerHTML += `
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
    let orderResult = orderData(dataArray, condition);
    for(let i=0;i<orderResult.length;i++){    
        let characters = document.getElementById('characters').innerHTML += `
        <div class="root">
             <img src="${orderResult[i].image}" alt="">
             <h3>${orderResult[i].name}</h3>
             <p>${orderResult[i].house}</p>
         </div>`;
    }
})
document.getElementById("homePage").style.display = "none";
let enterButton = document.getElementById("enterButton");
enterButton.addEventListener('click', ()=>{
    document.getElementById("welcome").style.display = "none";
    document.getElementById("homePage").style.display = "block";
});