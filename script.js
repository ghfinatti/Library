let myLibrary = [];
const booksContainer = document.querySelector('.bookscontainer');
const addBookButton = document.querySelector('.addbook');
const form = document.querySelector('#formElem');
const formTitle = document.querySelector('#titlef');
const formAuthor = document.querySelector('#authorf');
const formPages = document.querySelector('#pagesf');
const formRead = document.querySelector('#readf');


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read){
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    booksContainer.appendChild(bookDiv);
    addBookTitle(title);
    addBookAuthor(author);
    addBookPages(pages);
    addBookRead(read);
    addDeleteButton();
}

function addBookTitle(title){
    eachBookContainer = document.querySelectorAll('.book')
    let booksArray = Array.from(eachBookContainer)
    
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    booksArray[booksArray.length-1].appendChild(titleDiv);
    titleDiv.textContent = `Title: ${title}`
}

function addBookAuthor(author){
    eachBookContainer = document.querySelectorAll('.book')
    let booksArray = Array.from(eachBookContainer)

    let authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    booksArray[booksArray.length-1].appendChild(authorDiv);
    authorDiv.textContent = `Author: ${author}`
}

function addBookPages(pages){
    eachBookContainer = document.querySelectorAll('.book');
    let booksArray = Array.from(eachBookContainer);
    
    let pagesDiv = document.createElement('div');
    pagesDiv.classList.add('pages');
    booksArray[booksArray.length-1].appendChild(pagesDiv);
    pagesDiv.textContent = `Pages: ${pages}`
}

function addBookRead(){
    eachBookContainer = document.querySelectorAll('.book');
    let booksArray = Array.from(eachBookContainer);

    let readDiv = document.createElement('div');
    readDiv.classList.add('read');
    booksArray[booksArray.length-1].appendChild(readDiv);
    
    readDiv.textContent = 'Read:';
    const readContainer = document.querySelectorAll('.read');
    let readArray = Array.from(readContainer);
    let readBox = document.createElement('input');
    readBox.id = 'read-box';
    readBox.type = 'checkbox';
    readArray[readArray.length-1].appendChild(readBox);
    readBox.checked = formRead.checked;
}

function addBookToLibrary(title, author, pages, read){
    let bookAdd = new Book(title, author, pages, read);
    myLibrary.push(bookAdd);
    addBook(title, author, pages, read)
}

function addDeleteButton(){
    eachBookContainer = document.querySelectorAll('.book');
    let booksArray = Array.from(eachBookContainer);

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('remove-button');
    deleteButton.textContent = 'Delete'
    booksArray[booksArray.length-1].appendChild(deleteButton);
    deleteButtons = document.querySelectorAll('.remove-button');
}

function updateDataAtt(){
    eachBookContainer = document.querySelectorAll('.book');
    for(let i = 0; i <= eachBookContainer.length-1; i++){
        eachBookContainer[i].dataset.num = i
    }
}

addBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(formTitle.value == "" || formAuthor.value == "" || formPages.value == ""){
        alert('Please fill all fields')
    }
    else{
        addBookToLibrary(formTitle.value, formAuthor.value, formPages.value, formRead.checked);
        updateDataAtt();
        formTitle.value = formAuthor.value = formPages.value = "";
        formRead.checked = false;
        saveLocalStorage();
    }
})

document.addEventListener('click', (e) => {
    if(Array.from(e.target.classList)[0] == 'remove-button'){
        e.target.parentNode.remove();
        arrayNum = parseInt(e.target.parentNode.dataset.num);
        updateDataAtt();
        myLibrary.splice(arrayNum, 1);
        saveLocalStorage();
    }
    if(e.target.id == 'read-box'){
        arrayNum = parseInt(e.target.parentNode.parentNode.dataset.num);
        if(e.target.checked == true){
            myLibrary[arrayNum].read = true;
        }
        if(e.target.checked == false){
            myLibrary[arrayNum].read = false;
        }
        saveLocalStorage();
    }
})

function saveLocalStorage(){
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

function restoreLocalStorage(){
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    if (myLibrary == null){
        myLibrary = [];
    }
    for(let i = 0; i < myLibrary.length; i++){
        title = myLibrary[i].title;
        author = myLibrary[i].author;
        pages = myLibrary[i].pages;
        read = myLibrary[i].read;
        addBook(title, author, pages, read);
    }
}

restoreLocalStorage();
