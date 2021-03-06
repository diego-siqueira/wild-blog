/*
This file define controller for Post, this class extend from Controller class.
With this extended class, this class obtain all methodd from parent class
*/
'use strict'
// Require parent class
let Controller = require('./Controller');
// Require model (schema) use with this controller
let Post = require('../models/post')

class PostsController extends Controller {


  constructor() {
    super(Post)
  }


  find(req, res, next) {
    // Get all documents and filter with queries string (req.query : ex. http://domain.ext/api/?query=string)
    this.model.find({
      published: true
    }, function(err, documents) {
      res.json(documents)
    })
  }

  findById(req, res, next) {
    // Get a unique document by request param, this param need to be id
    this.model.findById(req.params.id, (err, document) => {
      if (err){
        next(err)
      }
      if (document.published == false) {
        res.status(401).send("Article not published yet!");
      } else {
        res.json(document)
      }
    })
  }

  findBookmarked(req, res, next) {
    // Get all documents and filter with queries string (req.query : ex. http://domain.ext/api/?query=string)
    this.model.find({
      bookmark: true
    }, function(err, documents) {
      res.json(documents)
    })
  }

}

module.exports = PostsController
