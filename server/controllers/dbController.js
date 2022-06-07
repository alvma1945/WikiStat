const axios = require('axios');

const Articles = require('../models/Models.js')

const dbController = {};

const createErr = (errInfo) => {
    const {method, err} = errInfo;
    return{
        log: `dbController.${method}: Error: Error is ${err}`,
        message: {err: ` ${err}`}
    }
}
dbController.addFavorite = async (req,res,next) => {
    try{
    res.locals.newFav = await Articles.create(req.body);
    return next();
    } catch(e){
        next(createErr({
            method: 'addFavorite',
            err: 'Issue with adding favorited article to database'
        }))

    }
}

dbController.getExisting = async (req,res,next) => {
   
    try{
        res.locals.dbarticles = await Articles.find({});
    return next();
    } catch(e){
        next(createErr({
            method: 'getExisting',
            err: 'Issue with getting articles from database'
        }))

    }
}

dbController.updateNotes = async(req,res,next)=>{
   const {id} = req.params
   
    
    const {notes} = req.body
  
    try{
        res.locals.dbupdate = await Articles.findOneAndUpdate({_id:id},{notes: notes},{new:true});
    return next();
    } catch(e){
        next(createErr({
            method: 'updateNotes',
            err: 'Issue with getting articles from database'
        }))

    }
}

dbController.deleteArticle = async(req,res,next) =>{
    const {id} = req.params;
    try{
    
    await Articles.deleteOne({_id:id});
      
    return next();
    } catch(e){
        next(createErr({
            method: 'deleteArticle',
            err: 'Issue with getting articles from database'
        }))

    }
}
    




module.exports = dbController