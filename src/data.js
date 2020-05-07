// estas funciones son de ejemplo
export const anotherExample = () => {
  return 'OMG';
};
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
    const filterOrderReverse=filterOrder.reverse();
    return filterOrderReverse;
  }
  
}
export default orderData;