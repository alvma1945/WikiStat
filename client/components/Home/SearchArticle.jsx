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

function handleClick(e){
  
fetchArticle(sArticle.current.value,sDateInput.current.value,eDateInput.current.value).catch((e) => alert(e))

}
console.log(searchedArticle);

const resultArray = []
let totalViews = 0;
for(let i=0;i<searchedArticle.length;i++){
    totalViews+=searchedArticle[i].views
    resultArray.push(<SearchedArticle key= {searchedArticle[i].timestamp} article = {searchedArticle[i].article} timestamp = {searchedArticle[i].timestamp} project = {searchedArticle[i].project} views = {searchedArticle[i].views}  />)
}
    let link = ''
    let articleN = ''
    let date;
    let views; 
    if(searchedArticle.length!==0){
        link = `https://en.wikipedia.org/wiki/${searchedArticle[0].article}`
        articleN = searchedArticle[0].article;
        date = new Date();
        views = totalViews
        console.log( articleN,date,views,link)
       
    }
    let sDateInput = React.createRef();
    let eDateInput = React.createRef();
    let sArticle = React.createRef();
 
    return (
        <div className="ArticleSearch">
        <h2>Search for an Article</h2>
        <form >
        <input ref={sArticle} type="text" className="input" ></input>
        <input ref={sDateInput} type="date" className="date" ></input>
        <input ref={eDateInput} type="date" className="date" ></input>
        <button type="button" id="search" onClick={ handleClick }> Search </button>
        </form>
        <ul>
          {resultArray}
        </ul>
        <div id="articleLink"> <ArticleLink startDate = {sDateInput} endDate = {eDateInput} link = {link} article = {articleN} date ={date} views = {views} /></div>
        
        </div>
    )
}

export default SearchArticle