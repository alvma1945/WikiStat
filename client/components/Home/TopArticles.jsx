import React, { Component, useState, useEffect} from 'react';


function TopArticles(props){
    let newArticle = '';
    for(let i=0; i<props.article.length;i++){
        if(props.article[i]!=='_'){
            newArticle += props.article[i]
        } else {
            newArticle += ' '
        }
    }
     
      return (
  
        <li>
            {`${props.rank} ${newArticle} ${props.views}`}
        </li>
       
  
      )
}






export default TopArticles