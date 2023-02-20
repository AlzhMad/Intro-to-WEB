let n = parseInt(prompt('Enter the number'));

let pay;
if(n*120>4000)
pay = 0.9*120*n;
else
pay = 120*n;

alert(pay + " KZT");