let a = parseInt(prompt('Enter one side'));
let b = parseInt(prompt('Enter another side'));
let c = parseInt(prompt('And another side'));
if(a>b+c || b>a+c || c>a+b)
alert('NO');
else alert('YES');