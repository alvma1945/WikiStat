
const express = require('express');

const wikiController = require('../controllers/wikiControllers.js');

const router = express.Router();

router.get('/:article/:startDate/:endDate', wikiController.getArticle, (req,res) => {
  return res.status(200).json( {article: res.locals.oneArticle} )
})
router.get('/:date', wikiController.top10dynamic, (req,res) => {
  return res.status(200).json( {article: res.locals.articleV} )
})
router.get('/', wikiController.top10, (req,res) => {
    return res.status(200).json( {article: res.locals.article} )
  })




module.exports = router
