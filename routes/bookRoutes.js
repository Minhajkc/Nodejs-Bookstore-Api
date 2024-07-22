/**
 * @swagger
 * tags:
 *   name: Book
 *   description: Operations for managing books
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     tags:
 *       - Book
 *     summary: Create a new book
 *     description: Create a new book with title, author, description, and price.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "The Great Gatsby"
 *               author:
 *                 type: string
 *                 example: "F. Scott Fitzgerald"
 *               description:
 *                 type: string
 *                 example: "A novel set in the Roaring Twenties"
 *               price:
 *                 type: number
 *                 example: 10.99
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Book Created successfully"
 *       400:
 *         description: Bad request, validation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to create book"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Server error"
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     tags:
 *       - Book
 *     summary: Get all books
 *     description: Retrieve a list of all books.
 *     responses:
 *       200:
 *         description: Successfully retrieved list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   author:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *       404:
 *         description: No books available
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No books available"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Server error"
 */

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     tags:
 *       - Book
 *     summary: Get a book by ID
 *     description: Retrieve a book by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved the book
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Book not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Server error"
 */

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     tags:
 *       - Book
 *     summary: Update a book by ID
 *     description: Update the details of a book using its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "The Great Gatsby"
 *               author:
 *                 type: string
 *                 example: "F. Scott Fitzgerald"
 *               description:
 *                 type: string
 *                 example: "A novel set in the Roaring Twenties"
 *               price:
 *                 type: number
 *                 example: 10.99
 *     responses:
 *       200:
 *         description: Book updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Book updated successfully"
 *                 book:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     author:
 *                       type: string
 *                     description:
 *                       type: string
 *                     price:
 *                       type: number
 *       400:
 *         description: Bad request, validation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to update book"
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Book not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Server error"
 */

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     tags:
 *       - Book
 *     summary: Delete a book by ID
 *     description: Remove a book from the collection using its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to delete
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Book deleted"
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Book not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Server error"
 */


const express = require('express')
const bookController = require('../controllers/bookController')
const auth = require('../middleware/auth')
const router = express.Router();
router.post('/',auth, bookController.createBook)
router.get('/',bookController.getAllBooks);
router.get('/:id',bookController.getBook)
router.put('/:id',auth,bookController.updateBook)
router.delete('/:id',auth,bookController.deleteBook)
module.exports = router;