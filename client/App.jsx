import React from 'react';
import {Routes,Route } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Favorites from './components/Favorites/Favorites.jsx'


// import { useEffect } from 'react/cjs/react.production.min';


    



function App(){
         
    return( 

    
    <Routes>
    <Route exact path='/' element={ <Home/>}/>
    <Route path="/Favorites" element={<Favorites/>}/>
    </Routes>
    
   
        // <main>
        
        
        // <h1>One Stop Shop for Wikipedia MetaData</h1>
        // <h2>Trending Articles</h2>
        // <Top10/>
        // <div>
        // <SearchArticle/>
        // </div>
        
        // </main>
    
    )
};



export default App;