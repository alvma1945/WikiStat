import React, { Component, useState, useEffect} from 'react';
import axios from 'axios'

function ArticleLink(props){
 

    async function handleClick(e){
        console.log('button')
        const requestBody = {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                article: props.article,
                views: props.views,
                link: props.link,
                date: props.date})
           
        }
        console.log(requestBody);
       await fetch('/db/add',requestBody).then(response => response.json()).then( data => alert(data)).catch((e) => console.log(e));
    }
return(
    <div>
        <span><a href= {props.link}> {props.link} </a> </span>
        <button type="button" onClick={handleClick}>Save to Favorites</button>
        <button>View Favorited links</button>
    </div>
)
}

export default ArticleLink