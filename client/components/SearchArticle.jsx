import axios from 'axios';
import React, { Component, useState, useEffect} from 'react';
import SearchedArticle from './SearchedArticle';


function SearchArticle(){
   const [searchedArticle,updateSearch] = useState([]);

async function fetchArticle(article,startDate,endDate){
    await axios(`/api/${article}/${startDate}/${endDate}`).then(data => {
        updateSearch(data.data.article);
    // populate(data);

    })
    
}
let sDateInput = React.createRef();
let eDateInput = React.createRef();
let sArticle = React.createRef();
function handleClick(e){
  
    fetchArticle(sArticle.current.value,sDateInput.current.value,eDateInput.current.value)

}

    const resultArray = []
    for(let i=0;i<searchedArticle.length;i++){
        searchedArticle.push(<SearchedArticle key= {searchedArticle[i].timestamp} article = {searchedArticle[i].article} timestamp = {searchedArticle[i].timestamp} project = {searchedArticle[i].project} views = {searchedArticle[i].views}/>)
    }
    console.log('hello',searchedArticle);

    
    return (
        <div>
        <h1>SEARCH</h1>
        <form >
        <input ref={sArticle} type="text" id="article" ></input>
        <input ref={sDateInput} type="date" id="article" ></input>
        <input ref={eDateInput} type="date" id="article" ></input>
        <button type="button" id="search" onClick={ handleClick }> Search </button>
        <ul>
          {resultArray}
        </ul>
        </form>
        </div>
    )
}

export default SearchArticle