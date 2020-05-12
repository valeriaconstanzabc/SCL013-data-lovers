
export const orderData = (dataArray, condition) => {
  let filterOrder = dataArray; //Arreglo nuevo donde guardaremos persojes ordenados
  if(condition==0){
    return filterOrder;
  }
  if(condition == 1){
    filterOrder.sort((a, b) => a.name.localeCompare(b.name));
    return filterOrder;
  }
  if(condition==2){
    filterOrder.sort((a, b) => a.name.localeCompare(b.name));
    const filterOrderReverse = filterOrder.reverse();
    return filterOrderReverse;
  }
  
}

export const filterGender = (dataArray, gender) => {
  let filterData = dataArray.filter((dato) => dato.gender === gender);
  return filterData;
}

export const filterHouse = (dataArray, house) => {
  let dataHouse = dataArray.filter((dato) => dato.house === house);
  return dataHouse;
}

export const filterAncestry = (dataArray, ancestry) => {
  let dataAncestry = dataArray.filter(dato => dato.ancestry === ancestry);
  return dataAncestry;
}


export const filterStaff  = (dataArray, staff) => {
  let dataStaff  = dataArray.filter (dato => dato.hogwartsStaff  ===  true);
     return dataStaff;
}

export const filterStuddent  = (dataArray, studdent) => {
  let dataStuddent  = dataArray.filter (dato => dato.hogwartsStudent  ===  true);
     return dataStuddent;
}