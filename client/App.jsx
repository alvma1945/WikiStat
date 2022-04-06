import React, { Component, useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import Top10 from './components/Top10.jsx'
import SearchArticle from './components/SearchArticle'

// import { useEffect } from 'react/cjs/react.production.min';


    



function App(){
//doesn't return anything
  
    // for(let i=2;i<12;i++){
    //  const [rank , setTop10 ] = useState(json.article.articles[i]);
    // }
    
  
      
   
    return( 
    
    <div id='app'>
        <main>
        <h1>One Stop Shop for Wikipedia MetaData</h1>
        <h2>Trending Articles</h2>
        <Top10/>
        <div>
        <SearchArticle/>
        </div>
        </main>
    </div>)
};



export default App;