function nthRoot(x, n) {
    if (x < 0 && n % 2 === 1)
        return -Math.pow(-x, 1/n);
    else
        return Math.pow(x, 1/n)
}


let arr = [];
let enter = true;

while (enter) {    
    let i = parseInt(prompt('Enter an element'));
    if(i==0){
      enter =false;
    }
    else{
      arr.push(i);
    }    
}
  console.log(arr.length);

  let mult = 1;

  for(let i=0;i<arr.length;i++){
      mult = mult * arr[i];
  }
  
  let avggeom = nthRoot(mult, arr.length);
  
  alert(avggeom);
  