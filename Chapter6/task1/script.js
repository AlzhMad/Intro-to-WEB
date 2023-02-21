let n = parseInt(prompt('Enter the number of elements'));
let arr = [];

while (n>0) {
    let i = prompt('Enter an element');
    arr.push(i);
    n--;  
}
  console.log(arr.length);

let j = arr.length-1;
 let res ="";
while(j>=0){
    console.log(arr[j]);
    res = res + arr[j]+" ";
    j--;
}

alert(res);
