import express from "express";

import { getBooks, createBook } from "../controllers/books.js";

const router = express.Router();

router.get("/books", getBooks)
router.post("/book", createBook)
// router.get("/user/:id", getUser)
// router.delete("/user/:id", deleteUser)
// router.put("/user/:id", updateUser)

export default router;