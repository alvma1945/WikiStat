// const { resolveTo } = require("react-router/lib/router");
const axios = require('axios');


const wikiController = {};
const createErr = (errInfo) => {
    const {method, err} = errInfo;
    return{
        log: `wikiController.${method}: Error: Error is ${err}`,
        message: {err: ` ${err}`}
    }
}

wikiController.top10 = async (req,res,next) => {
    let today = new Date().toISOString().slice(0, 10);
    let yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate()-2)
    yesterday = yesterday.toISOString().slice(0, 10);
  yesterday = yesterday.replaceAll('-','/')
 
    
     
    const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia.org/all-access/${yesterday}`

    try{
       
        const response = await axios.get(url);
        res.locals.article = response.data.items[0];
        
       return next();
    }catch{
        next(createErr({
            method: 'top10',
            err: 'Cannot grab initial 1op 10 articles with information provided'
        }))
    }
};

wikiController.top10dynamic = async (req,res,next) => {
   let {date} = req.params
   
   date = date.replaceAll('-','/')
 
     
    const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia.org/all-access/${date}`

    try{
       
        const response = await axios.get(url);
        res.locals.articleV = response.data.items[0];
       
        
       return next();
    }catch{
        next(createErr({
            method: 'top10dynamic',
            err: 'Cannot grab top 10 articles with information provided'
        }))
    }
};
wikiController.getArticle = async (req,res,next) => {
   
   let {article, startDate, endDate} = req.params;
   startDate = startDate.replaceAll('-','')
   endDate = endDate.replaceAll('-','')
   const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia.org/all-access/user/${article}/daily/${startDate}/${endDate}`
    try{
   response = await axios.get(url);
   
   res.locals.oneArticle = response.data.items;
   return next()
    } catch{
        next(createErr({
            method: 'getArticle',
            err: 'Cannot grab article with information provided'
        }))
    }
  


}
module.exports = wikiController