const express = require('express');
const { restart } = require('nodemon');

const dbController = require('../controllers/dbController.js');

const router = express.Router();

router.post('/add',dbController.addFavorite,(req,res)=> {
    res.status(200).json(res.locals.newFav)
})

router.get('/get',dbController.getExisting,(req,res)=>{
    res.status(200).json(res.locals.dbarticles)
})

router.patch('/:id', dbController.updateNotes,(req,res)=>{
    res.status(200).json(res.locals.dbupdate)
})

router.delete('/:id', dbController.deleteArticle,(req,res)=>{
    res.status(200).end();
})

module.exports = router