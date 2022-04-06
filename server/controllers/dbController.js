const axios = require('axios');
const model = require('../models/Models.js')

const dbController = {};

const createErr = (errInfo) => {
    const {method, err} = errInfo;
    return{
        log: `dbController.${method}: Error: Error is ${err}`,
        message: {err: ` ${err}`}
    }
}
dbController.addFavorite = async (req,res,next) => {
    console.log(req.body)
    try{
    res.locals.newFav = await model.Articles.create(req.body);
    return next();
    } catch(e){
        next(createErr({
            method: 'addFavorite',
            err: 'Issue with adding favorited article to database'
        }))

    }
    


}

module.exports = dbController