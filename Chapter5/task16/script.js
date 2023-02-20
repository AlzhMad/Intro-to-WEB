let minutes = parseInt(prompt('Enter first number'));
if(minutes%60==0){
    res = 'ONLY '+ minutes/60 +' HOUR(S)';
}
else{
    res = parseInt(minutes/60 ) + ' HOUR(S) and '+  minutes%60 +' MINUTE(S)'; 
}
alert(res);