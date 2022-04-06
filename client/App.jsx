import React, { Component, useState, useEffect} from 'react';
import { BrowserRouter, Routes,  } from 'react-router-dom';

import Top10 from './components/Top10.jsx'
import SearchArticle from './components/SearchArticle'

// import { useEffect } from 'react/cjs/react.production.min';


    



function App(){
         
    return( 
<div id='app'>
    <BrowserRouter>
    
        <main>
        <h1>One Stop Shop for Wikipedia MetaData</h1>
        <h2>Trending Articles</h2>
        <Top10/>
        <div>
        <SearchArticle/>
        </div>
        </main>
    
    </BrowserRouter>
     
</div>
    )
};



export default App;