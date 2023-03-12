let arr = [];
let enter = true;

while (enter) {    
    let i = parseInt(prompt('Enter an element'));
    if(i==0){
      enter =false;
    }
    else{
      arr.push(i);
    }    
}
  console.log(arr.length);

  let positive = "";;

  for(let i=0;i<arr.length;i++){
    if(arr[i]>=0){
      positive = positive+arr[i]+" ";
    }
  }
  
  
  alert(positive);
  