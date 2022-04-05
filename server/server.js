const express = require('express');
const app = express();
const path = require('path');

if(process.env.NODE_ENV==='production'){
    //serve the contents of the dist folder after running webpack
    app.use('/dist', express.static(path.join(__dirname, '../dist')));
    // serve index.html on the route '/'
    app.get('/', (req, res) => {
      return res.status(200).sendFile(path.join(__dirname, '../index.html'));
    });
    }
app.listen(3000);