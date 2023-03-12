let n = parseInt(prompt('Enter the number of elements'));
let arr = [];

while (n>0) {
    let i = prompt('Enter an element');
    arr.push(i);
    n--;  
}
  console.log(arr.length);
  let mult =1;

  for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
      mult = mult*arr[i];
    }
  }
  
  
  alert(mult);
  