let books = [

    {"name":"It", "author": "Steven King", "isbn":"1", "price":"500"},
    {"name":"Shining", "author": "Steven King", "isbn":"2", "price":"500"},
    {"name":"Carry", "author": "Steven King", "isbn":"3", "price":"500"},
    {"name":"Harry Potter and the Prisoner of Azkaban ", "author": "Joanne Rowling", "isbn":"4", "price":"500"}

];

let author = prompt('Autor:').toLowerCase();

let booklist ="";

for(let book of books){
        if(book.author.toLowerCase().match(author)){
                booklist = booklist + book.name+"-"+book.author +"-"+ book.isbn+" "+book.price+"\n";
        }
}

alert(booklist);
alert('ok');
 
