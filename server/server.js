const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const wikiRouter = require('./wikiRouter.js')
const wikiController = require('./controllers.js')


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());



 app.use('/api',wikiRouter);
// app.get('/api',wikiController.top10,(req,res) => {
//   return res.status(200).json( {article: res.locals.article})})




if(process.env.NODE_ENV==='production'){
    //serve the contents of the dist folder after running webpack
    app.use('/dist', express.static(path.join(__dirname, '../dist')));
    // serve index.html on the route '/'
    app.get('/', (req, res) => {
      return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    });
    }

    
app.use('/*',(res,req)=>{res.status(400).send('NOT FOUND')});

  const globalErrorHandler = (err,req,res,next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 404,
      message: {err: 'an error occured'}
    }

    const errObj = Object.assign({},defaultErr,err);
    console.log(errObj.log);
    res.status(errObj.status).json(errObj.messages);
  }
  
  app.use(globalErrorHandler);
  app.listen(3000);