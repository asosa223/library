//declare library array that will store book objects ✅
//Create function to add book object to array ✅
    //get user input for title, author, pages and if they have read or not ✅
//push object into library array ✅
//write a function that will loop through the array✅
    //display each book onto webpage (could use table)✅
//add a new book button ✅
    //button will display a form page ✅
        //form input will be author, title, pages, have read or have not read✅
        //user will submit and pass object✅
//add a button that will remove book from webpage
//add a button that will change its read status

let myLibrary = [];

const addNewBookBtn = document.getElementById('add-book');
const form = document.getElementById('form');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
//let read = true;
const haveRead = document.getElementById('have-read');
const haveNotRead = document.getElementById('have-not-read');

addNewBookBtn.addEventListener('click', () => {

    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'flex';
      } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
      }
})

//BOOK OBJECT
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author
    this.pages = pages;
    this.read = read;
}

//GET BOOK INFO
//Book.prototype.info = function() {
//    return `${this.title} by ${this.author}, ${this.pages} pages, You ${this.read}`;
//}

//Adds book object into my library array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

//user creates a book
function createBook() {
    form.addEventListener('submit', (e) =>{
        e.preventDefault(); //prevents page from reloading
        const userBook = new Book(title.value, author.value, pages.value, read())
        addBookToLibrary(userBook);
        addBookToTable();
        form.style.display = 'none';
    });
}

//book is created by:
    //user enters book info into form
    //when submit is clicked, info is passed to createBook function
        //refresh is prevented
        //new book object is created
        //book object is pushed into myLibrary array
        //add to table function is called
        //last object in array is stored in lastObj var
        //we loop through last object and grab each value
        //it is then stored into tr html string
        //tr is then appended into table
//I need to remove book from table
    //issue: last object is always grabbed from my library array
        //I could tie a class/id/data-atrribute to tr with index
    //Issue: add book to table function will loop through whole array instead of last object in array

//function addBookToTable() {
//    const table = document.getElementById('table');
//    let lastObj = myLibrary[myLibrary.length - 1]; //get last object in my library 
//    let tr = `<tr>`;
//
//    for (let value in lastObj){
//        let i = 0;
//        tr += `<td class="id=tr-${i}"> ${lastObj[value]} </td>`;
//    }
//
//    table.innerHTML += tr;  
//}

function addBookToTable() {
    const table = document.getElementById('table');
    let i = 0;

    //for (let i = 0; i < myLibrary[myLibrary.length - 1]; i++)
    do {
        let bookObj = myLibrary[myLibrary.length - 1];
        i++;

        let row = document.createElement('tr');
        row.className = `tr-${i}`;

        let properties = ['title', 'author', 'pages', 'read'];
    
        for (let j = 0; j < properties.length; j++) {
            let cell = document.createElement('td');
            cell.innerHTML = bookObj[properties[j]];
            row.appendChild(cell);
        }

        table.appendChild(row);
    } while (i < 1);
}

   

function read() {
    if (haveRead.checked === true && haveNotRead.checked === false) {
        return 'Have Read';
    }
    else if (haveNotRead.checked === true && haveRead.checked === false) {
        return 'Have Not Read';
    }
    else {
        alert('error'); 
    }
}


createBook();


