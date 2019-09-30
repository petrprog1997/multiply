 module.exports = 
function multiply(a, b) {
  //your solution    
  let aArray = a.split('').reverse();
  let bArray = b.split('').reverse();
  

  let resultArray = [];
  
  for(let i = 0; i < aArray.length; i++) {
  
    for(let j = 0; j < bArray.length;  j++) {
      
      let mult = bArray[j]*aArray[i];
      
      resultArray[i+j] = (resultArray[i+j]) ? resultArray[i+j] + mult : mult ;      
    }
  }


  for(let i = 0; i<resultArray.length; i++){
    
    let num  = resultArray[i]%10;
    
    let move = Math.floor(resultArray[i]/10);
    
    resultArray[i] = num;
    
    if(resultArray[i+1]){
      resultArray[i+1] += move;
    }
    
    else if (move!=0){
      resultArray[i+1] = move;
    }
  }
  
  return resultArray.reverse().join('');
}