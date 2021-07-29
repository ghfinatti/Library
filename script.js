let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    let bookAdd = new Book(title, author, pages, read);
    myLibrary.push(bookAdd);
}

addBookToLibrary('teste', 'kkkdkke', 'oi', 'aff');

console.log(myLibrary);