let n = parseInt(prompt('Enter the number of elements'));
let arr = [];

while (n>0) {
    let i = parseInt(prompt('Enter an element'));
    arr.push(i);
    n--;  
}

rez = "";

for(let i=0;i<arr.length;i++){
    rez = rez + Math.pow(arr[i],2)+ " ";
}

alert(rez);
