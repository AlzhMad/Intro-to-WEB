let cars = [
  {"model":"KIA", "year": 2019, "volume":1.1, "price":500},
  {"model":"Toyota", "year": 2021, "volume":2.1, "price":600},
];


let carlist ="";
let exit = false;
while(exit==false){
  let choice = prompt('INSERT [0] ADD CAR\nINSERT [1] TO SEARCH BY NAME\nINSERT [2] TO SEARCH BY YEAR\nINSERT [3] TO SEARCH BY ENGINE VOLUME\nINSERT [4] TO SEARCH BY PRICE\nINSERT [5] TO EXIT');

if(choice=="0"){


    let model = prompt("Enter the model:");
    let year = parseInt(prompt("Enter the year:"));
    let volume = parseFloat(prompt("Enter the volume:"));
    let price = parseInt(prompt("Enter the price:"));
    cars.push({"model": model, "year": year, "volume":volume, "price":price});

    for(let car of cars){
      carlist = carlist + car.model+"-"+ car.year +"-"+car.volume+" "+car.price+"\n";
    }
    alert(carlist);
} 
else if(choice =="1")
{
  let model= prompt("Enter the model:");

  for(let car of cars){
    if(car.model.toLowerCase().match(model.toLowerCase())){
      carlist = carlist + car.model+"-"+ car.year +"-"+car.volume+" "+car.price+"\n";
    }
  }
  alert(carlist);
}
else if(choice =="2")
{
  let year= parseInt(prompt("Enter the year:"));

  for(let car of cars){
    if(car.year == year){
      carlist = carlist + car.model+"-"+ car.year +"-"+car.volume+" "+car.price+"\n";
    }
  }
  alert(carlist);
}
else if(choice =="3")
{
  let volume= parseFloat(prompt("Enter the volume:"));

  for(let car of cars){
    if(car.volume == volume){
      carlist = carlist + car.model+"-"+ car.year +"-"+car.volume+" "+car.price+"\n";
    }
  }
  alert(carlist);
}
else if(choice =="4")
{
  let price= parseInt(prompt("Enter the price:"));

  for(let car of cars){
    if(car.price == price){
      carlist = carlist + car.model+"-"+ car.year +"-"+car.volume+" "+car.price+"\n";
    }
  }
  alert(carlist);
}
else if(choice =="5"){
  exit = true;
}

}