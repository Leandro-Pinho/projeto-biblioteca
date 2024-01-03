
import BookModel from '../schema/bookSchema.js'

// get all public parties
export const getBooks = async (req, res) => {
    try {
        const books = await BookModel.find({}).sort([['_id', -1]]);
        res.json({ error: null, books: books });
    } catch (error) {
        return res.status(400).json({ error });
    }
};

export const createBook = async (req, res) => {
    try {
        if (req.body.titulo === '' || req.body.num_paginas === '' || req.body.isbn === '' || req.body.editora === '') {
            return res.status(400).json({ message: 'O campo é obrigatório' });
        }

        const book = await BookModel.create({
            titulo: req.body.titulo,
            num_paginas: req.body.num_paginas,
            isbn: req.body.isbn,
            editora: req.body.editora,
        });
    
        return res.status(201).json({ message: "Livro criado com sucesso" });
    } catch (error) {
        return res.status(400).json({ error });
    }
};