let n = parseInt(prompt('Enter the number of elements'));
let arr = [];

while (n>0) {
    let i = parseInt(prompt('Enter an element'));
    arr.push(i);
    n--;  
}

let sum = 0;

for(let i=0;i<arr.length;i++){
    sum = sum + arr[i];
}

alert(sum +" "+sum/arr.length);
