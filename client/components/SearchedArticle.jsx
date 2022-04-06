
import React, { Component, useState, useEffect} from 'react';
function SearchedArticle(props){


    return(
        <li>
             <a href = {`https://en.wikipedia.org/wiki/${props.article}` }>{`${props.timestamp} ${props.article}  ${props.views}`}</a>
        </li>
    )
}


export default SearchedArticle