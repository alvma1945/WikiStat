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
                start_date: props.startDate.current.value,
                end_date: props.endDate.current.value,
                search_date: props.date,
                notes: notesInput.current.value})
        }
        
       await fetch('/db/add',requestBody).then(response => response.json()).then( data => alert('Added to favorites!')).catch((e) => alert('Something went wrong'));
       
    }
    }
    let navigate = useNavigate();
    // console.log(props.startDate.current.value)
    // console.log(props.endDate.current.value)
   
return(
    <div id="linkWrap">
        <span><a href= {props.link}> {props.link} </a> </span>
        <form>
        <h2>Add to Favorites</h2>
        <textarea ref={notesInput} type="text" className="notes" defaultValue={`Add notes`}></textarea>
        </form>
        <button type="button" onClick={handleClick}>Save to Favorites</button>
        <button onClick={()=> navigate("/Favorites")}>View Favorites</button>
    </div>
)
}

export default ArticleLink