
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

    let newDate = ''
    for (let i=0;i<props.timestamp.length-2;i++){
        if(i===4 || i===6 || i===8 ){
            newDate+='/';
        }
        newDate+=props.timestamp[i]
    }

    return(
        
        <li>
             {`${newDate}  ---------->  ${props.views}`}
        </li>
       
    )
}


export default SearchedArticle