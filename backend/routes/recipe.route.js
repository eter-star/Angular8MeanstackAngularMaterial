const express = require('express');
const app = express();
const recipeRoute = express.Router();

// Recipe model
let Recipe = require('../model/Recipe');

// Add Recipe
recipeRoute.route('/add-recipe').post((req, res, next) => {
  Recipe.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
