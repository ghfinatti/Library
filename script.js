let myLibrary = [];
const booksContainer = document.querySelector('.bookscontainer');

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
}

function addBookTitle(title){
    const eachBookContainer = document.querySelector('.book')
    
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    eachBookContainer.appendChild(titleDiv);
    titleDiv.textContent = `Title: ${title}`
}

function addBookAuthor(author){
    const eachBookContainer = document.querySelector('.book')
    
    let authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    eachBookContainer.appendChild(authorDiv);
    authorDiv.textContent = `Author: ${author}`
}

function addBookPages(pages){
    const eachBookContainer = document.querySelector('.book')
    
    let pagesDiv = document.createElement('div');
    pagesDiv.classList.add('pages');
    eachBookContainer.appendChild(pagesDiv);
    pagesDiv.textContent = `Pages: ${pages}`
}

function addBookRead(){
    const eachBookContainer = document.querySelector('.book')
    
    let readDiv = document.createElement('div');
    readDiv.classList.add('read');
    eachBookContainer.appendChild(readDiv);
    readDiv.textContent = 'Read:';
    const readContainer = document.querySelector('.read');
    let readBox = document.createElement('input');
    readBox.type = 'checkbox';
    readContainer.appendChild(readBox);
}

function addBookToLibrary(title, author, pages, read){
    let bookAdd = new Book(title, author, pages, read);
    myLibrary.push(bookAdd);
    addBook(title, author, pages, read);
}

addBookToLibrary('teste', 'kkkdkke', 'oi', 'aff');