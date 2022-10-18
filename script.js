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
//add a button that will remove book from webpage ✅
//add a button that will change its read status

let myLibrary = [];

const addNewBookBtn = document.getElementById('add-book');
const form = document.getElementById('form');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let haveRead = document.getElementById('have-read');



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
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, You ${this.read}`;
}

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
        title.value = '';
        author.value = '';
        pages.value = '';
        haveRead.checked = false;
    });
}


function addBookToTable() {
    const table = document.getElementById('table');

    for (let i = 0; i < 1; i++) {
        let bookObj = myLibrary[myLibrary.length - 1]; //Stores last book object in array
        let row = document.createElement('tr');
        row.className = `tr-${myLibrary.length - 1}`;
        
        let properties = ['title', 'author', 'pages', 'read'];

        for (let j = 0; j < properties.length; j++) {
            let cell = document.createElement('td');
            cell.innerHTML = bookObj[properties[j]];
            row.appendChild(cell);
        }

        let td = document.createElement('td');
        let btn = document.createElement("button");
        btn.innerHTML = 'remove';

        td.appendChild(btn);
        row.appendChild(td);
        table.appendChild(row);

        btn.addEventListener('click', (e) => {
            row.remove();
        })
    }
}

   

function read() {
    let readBtn = document.createElement('button');
    readBtn.innerHTML = 'read';

    if (haveRead.checked === true) {
        return 'Have Read';
    }
    else {
        return 'Have Not Read';
    }
}


createBook();


