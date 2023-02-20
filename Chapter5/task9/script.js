let n = parseInt(prompt('INSERT YOUR AMOUNT IN KZT: '));

let choice = prompt('1- CONVERT TO USD\n\n2- CONVERT TO EUR\n\n3- CONVERT TO GBP');

let converted;

if(choice==1)
converted = Number(n/380).toFixed(2) +' USD';
else if(choice==2)
converted = Number(n/430).toFixed(2) + ' EUR';
else
converted = Number(n/480).toFixed(2) + ' GBP';

alert(converted);