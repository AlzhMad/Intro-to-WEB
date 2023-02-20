let n = parseInt(prompt('Enter the amount'));
let res;

if(n%380==0){
res = 'ONLY '+n/380 +' USD';
}
else{
res = parseInt(n/380) + ' USD and '+ ((n/380)- parseInt(n/380)).toFixed(2)*100 +' cents'; 
}

alert(res);