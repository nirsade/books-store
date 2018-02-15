var axios = require('axios');

module.exports = {
    getBooks: function () {
        return axios.get('https://vast-hollows-50722.herokuapp.com/books').then(res => {
            if (res.data.message) {
                throw new Error(res.date.message);
            } else {
                return res.data;
            }
        }, res => {
            throw new Error(res.date.message);
        });
    },
    addBook: (book) => {
        return axios.post('https://vast-hollows-50722.herokuapp.com/books', {
            "genre": book.genre,
            "title": book.title,
            "publication_date": book.date,
            "description": book.description,
            "author": book.author,
            "isbn": book.isbn,
            "price": book.price,
        }).then(res => {
            return res.data;
        }, res => {
            throw new Error(res.date.message);
        })
    },
    deleteBook: (bookId) => {
        return axios.delete('https://vast-hollows-50722.herokuapp.com/books/' + bookId)
            .then(res => {

            }, res => {
                throw new Error(res.date.message);
            })
    }
}