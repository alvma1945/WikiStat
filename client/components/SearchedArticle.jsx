
import React, { Component, useState, useEffect} from 'react';
function SearchedArticle(props){
    let newArticle = '';
    for(let i=0; i<props.article.length;i++){
        if(props.article[i]!=='_'){
            newArticle += props.article[i]
        } else {
            newArticle += ' '
        }
    }

    return(
        <div>
        <li>
             {`${props.timestamp} ${newArticle}  ${props.views}`}
        </li>
        </div>
    )
}


export default SearchedArticle