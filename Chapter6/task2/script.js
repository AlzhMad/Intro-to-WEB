let n = parseInt(prompt('Enter the number of elements'));
let arr = [];

while (n>0) {
    let i = parseInt(prompt('Enter an element'));
    arr.push(i);
    n--;  
}
 
let max = Math.max(...arr);

alert(max);
