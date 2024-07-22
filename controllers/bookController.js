const Book = require('../models/Book');

const createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).send(`Book Created successfully${book}`);
    } catch (err) {
        res.status(400).send({ error: 'Failed to create book', details: err.message });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        if(books.length <= 0){
            res.status(404).send({ error: 'No books available' });
        }
        res.status(200).send(books);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch books', details: err.message });
    }
};

const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send({ error: 'Book not found' });
        }
        res.status(200).send(`Searched Book ${book}`);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch book', details: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).send({ error: 'Book not found' });
        }
        res.status(200).json({ message: 'Book updated successfully', book });
    } catch (err) {
        res.status(400).send({ error: 'Failed to update book', details: err.message });
    }
};

const deleteBook = async (req, res) => {
    
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).send({ error: 'Book not found' });
        }
        res.status(200).send({ message: 'Book deleted' });
    } catch (err) {
        res.status(500).send({ error: 'Failed to delete book', details: err.message });
    }
};

module.exports = { createBook, getAllBooks, getBook, updateBook, deleteBook };
