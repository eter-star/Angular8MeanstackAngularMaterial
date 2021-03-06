const express = require('express');
const app = express();
const studentRoute = express.Router();

// Student model
let Student = require('../model/Student');
// Book model
let Book = require('../model/Book');
//Recipe model
let Recipe = require('../model/Recipe');


// Add Student
studentRoute.route('/add-student').post((req, res, next) => {
  Student.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Add Book
studentRoute.route('/add-book').post((req, res, next) => {
  Book.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Add Recipoe
studentRoute.route('/add-recipe').post((req, res, next) => {
  Recipe.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all student
studentRoute.route('/').get((req, res) => {
  Student.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get all recipes
studentRoute.route('/recipes/').get((req, res) => {
  Recipe.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get all books
studentRoute.route('/books/').get((req, res) => {
  Book.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Get single student
studentRoute.route('/read-student/:id').get((req, res) => {
  Student.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single recipe
studentRoute.route('/read-recipe/:id').get((req, res) => {
  Recipe.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single book
studentRoute.route('/read-book/:id').get((req, res) => {
  Recipe.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



// Update student
studentRoute.route('/update-student/:id').put((req, res, next) => {
  Student.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Update recipe
studentRoute.route('/update-recipe/:id').put((req, res, next) => {
  Recipe.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Recipe successfully updated!')
    }
  })
})

// Update recipe
studentRoute.route('/update-recipe/:id').put((req, res, next) => {
  Recipe.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Recipe successfully updated!')
    }
  })
})


// Delete student
studentRoute.route('/delete-student/:id').delete((req, res, next) => {
  Student.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Delete recipe
studentRoute.route('/delete-recipe/:id').delete((req, res, next) => {
  Recipe.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Delete book
studentRoute.route('/delete-book/:id').delete((req, res, next) => {
  Book.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})


module.exports = studentRoute;
