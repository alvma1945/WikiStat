const express = require('express');
const { restart } = require('nodemon');

const dbController = require('../controllers/dbController.js');

const router = express.Router();

router.post('/add',dbController.addFavorite,(req,res)=> {
    res.status(200).json(res.locals.newFav)
})

module.exports = router