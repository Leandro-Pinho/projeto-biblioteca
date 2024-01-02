
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