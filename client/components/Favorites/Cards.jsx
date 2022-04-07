
import React, {useState}from 'react'


const Cards = (props) => {
   
    let notesInput = React.createRef();
    return(
        <div>
        <ul className = "card">
          <li> {`Article: ${props.article}`}</li> 
          <li>  {`Views: ${props.views}`}</li> 
          <li> <a href={props.link}>{`Link: ${props.link}`}</a></li> 
          <li> {`Notes: ${props.notes}`}</li> 
        </ul>
        <input ref={notesInput}type="text" defaultValue={props.notes} ></input><button onClick={()=>props.update(props.id,notesInput.current.value)} >Update</button>
        <button className ="btn"onClick={()=>props.delete(props.id)}>Delete</button>
        </div>
    
    )


}


export default Cards