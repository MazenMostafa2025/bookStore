exports.book = class book {
    constructor(bookId, title, isbn, description, publisher, author, pages){
        this.bookId = bookId;
        this.title = title;
        this.isbn = isbn;
        this.description = description;
        this.author = author;
        this.publisher = publisher;
        this.pages = pages;
    }
}