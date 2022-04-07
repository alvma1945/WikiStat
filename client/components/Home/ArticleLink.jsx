import React, { Component, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function ArticleLink(props){
 
    
    
    let notesInput = React.createRef();
    async function handleClick(e){
        console.log(notesInput);
        if(!props.link || !props.article || !props.date){
            alert('No article provided')
        } else {
            
        const requestBody = {
            method: 'POST',
            // mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                article: props.article,
                views: props.views,
                link: props.link,
                search_date: props.date,
                notes: notesInput.current.value})
        }
        
       await fetch('/db/add',requestBody).then(response => response.json()).then( data => alert('Added to favorites!')).catch((e) => alert('Something went wrong'));
       
    }
    }
    let navigate = useNavigate();
   
return(
    <div>
        <span><a href= {props.link}> {props.link} </a> </span>
        <form>
        <h4>Notes</h4>
        <input ref={notesInput} type="text" id="notes" defaultValue={props.notes}></input>
        <button type="button" onClick={handleClick}>Save to Favorites</button>
        <button onClick={()=> navigate("/Favorites")}>View Favorited links</button>
        </form>
    </div>
)
}

export default ArticleLink