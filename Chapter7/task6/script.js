let students = [
  {"name":"Dean", "surname": "Winchester", "gpa":4.0}
];

let studentlist ="";

let exit = false;
while(exit==false){
  let choice = prompt("PRESS 1 TO ADD STUDENT\nPRESS 2 TO LIST STUDENT\nPRESS 0 TO EXIT");

if(choice=="1"){


    let name = prompt("Enter name:");
    let surname =prompt("Enter surname:");
    let gpa = parseFloat(prompt("Enter GPA:"));
    students.push({"name": name, "surname": surname, "gpa":gpa});
} 
else if(choice =="2")
{
  
  for(let student of students){
    studentlist = studentlist + student.name+"-"+ student.surname +"-"+ student.gpa+"\n";
  }
  alert(studentlist);
}
else if(choice =="0"){
  exit = true;
}

}