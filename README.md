# Resit Subject : Advanced Web Technologies
-  View Books and Add Book web pages


## Start MEAN Stack App
Start Angular app & install required dependencies
- git clone https://github.com/eter-star/Angular8MeanstackAngularMaterial.git
- Run `npm install` from the root of the project
- run `ng serve --open` to start angular

## Start Backend
- run `cd backend`
- run `npm install`
- run `nodemon`

MEAN stack backend URL:
- http://localhost:8000/api/books

- MEAN stack RESTful APIs using Express JS
- RESTful APIs Method					API URL
- GET									/api/books
- POST									/add-book
- GET									/read-book/id
- PUT									/update-book/id
- DELETE								/delete-book/id


## Start MongoDB
I assume you have already set up MongoDB community edition in your local development system, if not then you can take the help from the following tutorial. [https://docs.mongodb.com/manual/administration/install-community/](https://docs.mongodb.com/manual/administration/install-community/)

- mongod --config /usr/local/etc/mongod.conf
- brew services start mongodb-community@4.2
- mongo
