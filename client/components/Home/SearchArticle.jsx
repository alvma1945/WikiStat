import axios from 'axios';
import React, { Component, useState, useEffect} from 'react';
import SearchedArticle from './SearchedArticle';
import ArticleLink from './ArticleLink'


function SearchArticle(){
   const [searchedArticle,updateSearch] = useState([]);
   

async function fetchArticle(article,startDate,endDate){
    
    await axios.get(`/api/${article}/${startDate}/${endDate}`).then(data => {
        console.log(data);
        updateSearch(data.data.article);
        
    

    })
    
}
let sDateInput = React.createRef();
let eDateInput = React.createRef();
let sArticle = React.createRef();
function handleClick(e){
  
fetchArticle(sArticle.current.value,sDateInput.current.value,eDateInput.current.value).catch((e) => alert(e))

}
console.log(searchedArticle);
    const resultArray = []
    for(let i=0;i<searchedArticle.length;i++){
        resultArray.push(<SearchedArticle key= {searchedArticle[i].timestamp} article = {searchedArticle[i].article} timestamp = {searchedArticle[i].timestamp} project = {searchedArticle[i].project} views = {searchedArticle[i].views}/>)
    }
   
    let link = ''
    let articleN = ''
    let date;
    let views; 
    if(searchedArticle.length!==0){
        link = `https://en.wikipedia.org/wiki/${searchedArticle[0].article}`
        articleN = searchedArticle[0].article;
        date = new Date();
        views = searchedArticle[0].views
        console.log( articleN,date,views,link)
    }
 
    return (
        <div>
        <h4>Search for an Article</h4>
        <form >
        <input ref={sArticle} type="text" id="article" ></input>
        <input ref={sDateInput} type="date" id="article" ></input>
        <input ref={eDateInput} type="date" id="article" ></input>
        <button type="button" id="search" onClick={ handleClick }> Search </button>
        </form>
        <ul>
          {resultArray}
        </ul>
        <div> <ArticleLink link = {link} article = {articleN} date ={date} views = {views} /></div>
        
        </div>
    )
}

export default SearchArticle