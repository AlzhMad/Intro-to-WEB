let users = [

    {"login":"ilyas", "password": "qwerty"},

    {"login":"eldar", "password": "qqqqq"},

    {"login":"assylkhan", "password": "qweqwe"},

    {"login":"anel", "password": "asdasd"},

    {"login":"alibek", "password": "aaaaaa"}

];

let login = prompt('Login:');
let password = prompt('Password:');

let userIn = false;

for(let u of users){
        if(u.login == login && u.password == password){
                userIn = true;
                alert('Welcome, you are authenticated'); 
                break;
        }
}

 
if(!userIn){
        alert('User not found');
}