const express = require('express');
const router = express.Router();

const ProductModel = require('../models/ProductModel.js');

router.post('/add',
    function(req, res) {

        // Receive data for MongoDB
        let newDocument = {
            "author": req.body.aut,
            "title": req.body.title,
            "genre": req.body.genre,
            "price": req.body.price,
            "image": req.body.image,
        }

        // Create the document in MongoDB
        ProductModel
        .create(newDocument)
        .then(
            function(dbDocument) {
                // Send the document to client
                res.json(dbDocument)
            }
        )
        // Otherwise, if error occurs catch it...
        .catch(
            function(error) {
                console.log('/addproduct error', error);

                res.send('An error occured');
            }
        );
    }
);


router.post('/find',
    function(req, res) {
        ProductModel
        .find( { "title": req.body.title

        } )
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        .catch(
            function(error) {
                console.log('/findproduct error', error);
                res.send('An error occured');

            }
        );
    }
);

router.put("/update", 
function (req, res) {
  let newDocument = {};

  if (req.body.author) {
    newDocument["author"] = req.body.authr;
  }

  if (req.body.title) {
    newDocument["title"] = req.body.title;
  } 
  if (req.body.genre) {
    newDocument["genre"] = req.body.genre;
  } 
  if (req.body.price) {
    newDocument["price"] = req.body.price;
  }

ProductModel.findOneAndUpdate(
    {
      title: req.body.title,
    },
    {
      $set: newDocument,
    },
    {
      new: true,
    }
  )
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/produts/update error", error);
      res.send("An error occured");
    }); });


module.exports = router;