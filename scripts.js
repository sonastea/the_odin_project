let myLibrary = [];

//constructor
function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.pages = numPages;
    this.read = read;
    this.info = () => {
        return title + " by " + author + ", " + numPages + ", " + read;
    }
};

Book.prototype.toggleRead = () => this.read = this.read ? false : true;

function addBookToLibrary() {

};

function render = () => console.table(myLibrary);

function populateLibrary() {
    const badWolf = new Book("Brown Girl", "John Smith", 269, false);
    const gingerBoy = new Book("The Red Haired Boy", "Wendy's Girl", 250, true);
};