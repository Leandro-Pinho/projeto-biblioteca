import express from "express";

import { getBooks } from "../controllers/books.js";

const router = express.Router();

router.get("/books", getBooks)
// router.post("/user", createUser)
// router.get("/user/:id", getUser)
// router.delete("/user/:id", deleteUser)
// router.put("/user/:id", updateUser)

export default router;