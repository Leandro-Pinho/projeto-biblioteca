import express from "express";

import { getBooks, createBook, deleteBook } from "../controllers/books.js";

const router = express.Router();

router.get("/books", getBooks)
router.post("/book", createBook)
// router.get("/user/:id", getUser)
router.delete("/book/:id", deleteBook)
// router.put("/user/:id", updateUser)

export default router;