let n = parseInt(prompt('Enter the number of elements'));
let arr = [];

while (n>0) {
    let i = prompt('Enter an element');
    arr.push(i);
    n--;  
}
  console.log(arr.length);

let toFind = (prompt('Enter the number to find'));

if(arr.indexOf(toFind)>-1){
  alert("YES");
}else{alert("NO");}