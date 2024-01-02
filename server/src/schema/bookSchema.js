import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    titulo: String,
    num_paginas: String,
    isbn: String,
    editora: String,
}, {
    timestamps: true,
});

const BookModel = mongoose.model('books', BookSchema);

export default BookModel