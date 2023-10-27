const bookModel = require('../model/bookModel');
const queries = require('../db/queries');
var dbConnection = require('../db/connection');


exports.getBooks = async (req, res) => {
    try {
        var getAllBooks = queries.queryList.GET_BOOKS_QUERY;
        var result = await dbConnection.dbQuery(getAllBooks);
        return res.status(200).send(JSON.stringify(result.rows));
    } catch (error) {
        console.log(`Error: ${error}`)
        return res.status(500).send({error: "Failed to list the stores"});
    }
}

exports.getBookDetails = async (req, res) => {
    try {
        const book_id = req.params.book_id;
        var getDetails = queries.queryList.GET_BOOK_DETAILS_QUERY;
        var result = await dbConnection.dbQuery(getDetails, [book_id]);
        return res.status(200).send(JSON.stringify(result.rows));
    } catch (error) {
        console.log(`Error: ${error}`)
        return res.status(500).send({error: "Failed to list book details"});
    }
}

exports.createBook = async (req, res) => {
    try {
        const bookTitle = req.body.bookTitle;
        const bookDescription = req.body.bookDescription;
        const bookAuthor = req.body.bookAuthor;
        const bookPublisher = req.body.bookPublisher;
        const bookPages = req.body.bookPages;
        const storeCode = req.body.storeCode;
        const createdBy = "admin";
        const createdOn = new Date();

        
        if (!bookTitle || !bookAuthor || !bookPublisher || !storeCode)
            return res.status(500).send({error: 'book title, author, publisher, store code cannot be empty'});
        
        var values = [bookTitle, bookDescription, bookAuthor, bookPublisher, bookPages, storeCode, createdOn, createdBy];
        var createBook = queries.queryList.CREATE_BOOK_QUERY;
        await dbConnection.dbQuery(createBook, values);
        return res.status(201).send('created succesfully');
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).send({error: "Failed to create a book"});
    }
    
}

exports.updateBook = async (req, res) => {
    try {
        const createdBy = "admin";
        const createdOn = new Date();
        
        const bookId = req.body.bookId;
        
        const bookTitle = req.body.bookTitle;
        const bookDescription = req.body.bookDescription;
        const bookAuthor = req.body.bookAuthor;
        const bookPublisher = req.body.bookPublisher;
        const bookPages = req.body.bookPages;
        const storeCode = req.body.storeCode;
        if (!bookId)
            return res.status(500).send({error: 'book id cannot be empty'});
            
        if (!bookTitle || !bookAuthor || !bookPublisher || !storeCode)
            return res.status(500).send({error: 'book title, author, publisher, store code cannot be empty'});

        
        var values = [bookTitle, bookDescription, bookAuthor, bookPublisher, bookPages, storeCode, createdOn, createdBy, bookId];

        var updateBook = queries.queryList.UPDATE_BOOK_QUERY;
        await dbConnection.dbQuery(updateBook, values);
        return res.status(201).send(`Succesfully updated  book with title: ${bookTitle}`);
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).send({error: "Failed to update a book"});
    }
    
}

exports.deleteBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        if (!bookId)
            return res.status(500).send({error: 'book id cannot be empty'});

        var deleteBook = queries.queryList.DELETE_BOOK_QUERY;
        await dbConnection.dbQuery(deleteBook, [bookId]);
        return res.status(201).send(`Succesfully deleted`);
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).send({error: `Failed to delete book with id ${bookId}`});
    }
    
}
