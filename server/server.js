const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const wikiRouter = require('./routers/wikiRouter.js')
const dbRouter = require('./routers/dbRouter.js')



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());



app.use('/api',wikiRouter);
// app.get('/api',wikiController.top10,(req,res) => {
//   return res.status(200).json( {article: res.locals.article})})
app.use('/db',dbRouter)



if(process.env.NODE_ENV==='production'){
    //serve the contents of the dist folder after running webpack
    app.use('/dist', express.static(path.join(__dirname, '../dist')));
    // serve index.html on the route '/'
    app.get('/', (req, res) => {
      return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    });
    }

    
app.use('/*',(req,res) => {return res.status(200).sendFile(path.join(__dirname, '../index.html'))});

  const globalErrorHandler = (err,req,res,next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 404,
      message: {err: 'an error occured'}
    }

    const errObj = Object.assign({},defaultErr,err);
    res.status(errObj.status).json(errObj.messages);
  }
  
  app.use(globalErrorHandler);
  app.listen(3000);