
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Book = new Schema({
  book_isbn: {
    type: String
  },
  book_title: {
    type: String
  },
  book_author: {
    type: String
  },
  book_publicationdate: {
    type: Date
  }
}, {
  collection: 'books'
})

module.exports = mongoose.model('Book', Book)
