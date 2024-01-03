
import BookModel from '../schema/bookSchema.js'

// get all books
export const getBooks = async (req, res) => {
    try {
        const books = await BookModel.find({}).sort([['_id', -1]]);
        res.json({ error: null, books: books });
    } catch (error) {
        return res.status(400).json({ error });
    }
};


// post para criar livros
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

// delete para deletar os livros
export const deleteBook = async (req, res) => {
    try {
        const id = req.params.id
        // console.log(id)
        const book = await BookModel.deleteOne({ _id: id })
        return res.status(201).json({ message: "Livro deletado com sucesso" });
    } catch (error) {
        return res.status(400).json({ error });
    }
}
// getOne para pegar um livro
export const getBook = async (req, res) => {
    try {
        const id = req.params.id
        // console.log(id)
        const book = await BookModel.findOne({ _id: id })
        return res.status(201).json({ book: book });
    } catch (error) {
        return res.status(400).json({ error });
    }
}

// update para atualizar os livros
export const updateBook = async (req, res) => {
    try {
        const id = req.params.id

        const rest = {
            titulo: req.body.titulo,
            num_paginas: req.body.num_paginas,
            isbn: req.body.isbn,
            editora: req.body.editora,
        };

        const data = await BookModel.findByIdAndUpdate({ _id: id }, rest)

        return res.status(201).json({ message: "Livro atualizado com sucesso", data: data });
    } catch (error) {
        return res.status(400).json({ error });
    }
}