
import React from 'react'


const Cards = (props) => {
    
    let searchDate = ''
    let startDate = ''
    let endDate = ''
    for(let i=0;i<10;i++){
        props.searchDate[i]==='-'? searchDate +='/' : searchDate += props.searchDate[i];
        props.startDate[i]==='-'?startDate+='/' : startDate+=props.startDate[i];
        props.endDate[i]==='-'? endDate += '/' : endDate+=props.endDate[i]
    }
   
    let newArticle = '';
    for(let i=0; i<props.article.length;i++){
        if(props.article[i]!=='_'){
            newArticle += props.article[i]
        } else {
            newArticle += ' '
        }
    }
    let notesInput = React.createRef();
    return(
        <div className = 'gridItem'>
        <ul className = "card">
          <li> <span>Article: </span>{ `${newArticle}`}</li>
          <li><span>Start Date: </span>{` ${startDate}`}</li>
          <li><span>End Date: </span>{` ${endDate}`}</li>
          <li> <span>Total Views:</span>{` ${props.views}`}</li> 
          <li> <a href={props.link}> {`${props.link}`}</a></li> 
          <li> <span>Date Searched: </span> {`${searchDate}`}</li>
          <li> <span>Notes: </span>{`${props.notes}`}</li> 
        </ul>
        <textarea style = {{wrap:"hard"}} className = "notes" ref={notesInput}type="text" defaultValue={props.notes} ></textarea><br></br>
        <button id="update"onClick={()=>props.update(props.id,notesInput.current.value)} >Update</button>
        <button id="delete"onClick={()=>props.delete(props.id)}>Delete</button>
        </div>
    
    )


}


export default Cards