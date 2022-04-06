
const express = require('express');
const wikiController = require('./controllers.js');

const router = express.Router();


router.get('/', wikiController.top10, (req,res) => {
    return res.status(200).json( {article: res.locals.article} )
  })
router.get('/:date', wikiController.top10dynamic, (req,res) => {
    return res.status(200).json( {article: res.locals.articleV} )
  })
router.get('/:article/:startDate/:endDate', wikiController.getArticle, (req,res) => {
    return res.status(200).json( {article: res.locals.oneArticle} )
  })


module.exports = router
