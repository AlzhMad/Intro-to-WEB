let choice = prompt('Choose your branch:\n\n1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:');

if(choice==1){
    choice=prompt('1 - Math, 2 - Physics:');
    if(choice==1){
        alert('You are Financier');
    }
    else{
        alert('You are Engineer');
    }
}
else if(choice==2){
    choice=prompt('1 - History, 2 - Foreign Languages:');
    if(choice==1){
        alert('You are Historic or Diplomat');
    }
    else{
        alert('You are Translator');
    }
}
else if(choice==3){
    choice=prompt('1 - Drawing, 2 -Singing:');
    if(choice==1){
        alert('You are Painter or Architect');
    }
    else{
        alert('You are Singer or Tamada');
    }
}
else if(choice==4){
    choice=prompt('1 - Team, 2 - Individual:');
    if(choice==1){
        alert('You are footballer or Basketball player');
    }
    else{
        alert('ou are boxer or tennis player');
    }
}