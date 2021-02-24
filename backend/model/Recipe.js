const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Recipe = new Schema({
  recipe_name: {
    type: String
  },
  recipe_description: {
    type: String
  }
}, {
  collection: 'recipes'
})

module.exports = mongoose.model('Recipe', Recipe)
