import React, { Component, useState, useEffect} from 'react';
import axios from 'axios';
import TopArticles from './TopArticles.jsx'

function Top10(){
    let today = new Date().toISOString().slice(0, 10);
    console.log(today);
    const [stateArticles,updateArticles ] = useState([]);
    const [stateDate, setDate] = useState(today)
    console.log(stateDate);
    useEffect( ()=> { 
       
     fetchData().catch(console.error)
     
      },[]);
     
      const fetchData =  async (date) => { 
          console.log('date',date)
          if (!date){
        await axios('/api').then(data => {
        const array = data.data.article.articles; 
        console.log(array)
        const resultArray =[]
        for(let i=2; i<12; i++){
        resultArray.push(array[i]);
            } 
        console.log(resultArray)
        updateArticles(resultArray)
        })
        } else {
            if(date > today) {
                alert("Even Wikipedia can't see into the future")
            } else {
            await axios(`/api/${date}`).then(data => {
             
                const array = data.data.article.articles; 
                console.log(array)
                const resultArray =[]
                for(let i=2; i<12; i++){
                resultArray.push(array[i]);
                    } 
                console.log(resultArray)
                updateArticles(resultArray)
               
                })
            }
        }
        
    }
    let dateInput = React.createRef();
    async function handleClick(e){
       console.log(dateInput.current.value)
        console.log('you pressed the button')
        fetchData(dateInput.current.value);
        
    }
    
      const topArticles = []
      for (let i=0; i<stateArticles.length;i++){
        topArticles.push(<TopArticles key={stateArticles[i].article} article={stateArticles[i].article} rank = {i+1} views = {stateArticles[i].views}/>)
      }

      console.log('top', topArticles)
      return(
    <div>
        <ul>{topArticles}</ul>
        <form >
        <input ref={dateInput} type="date" id="date"  ></input>
        <button type="button" id="submit" onClick= {handleClick}>Set Date</button>
        </form>
    </div>
      )


}



export default Top10


