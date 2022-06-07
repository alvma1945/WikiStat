import React, { Component, useState, useEffect} from 'react';
import axios from 'axios';
import TopArticles from './TopArticles.jsx'

function Top10(){
    let today = new Date().toISOString().slice(0, 10);
    const [stateArticles,updateArticles ] = useState([]);
    
    
    useEffect( ()=> { 
       
     fetchData().catch(console.error)
     
      },[]);
     
      const fetchData =  async (date) => { 
          if (date===undefined){
        await axios('/api/').then(data => {
        const array = data.data.article.articles; 
        const resultArray =[]
        for(let i=2; i<12; i++){
        resultArray.push(array[i]);
            } 
        updateArticles(resultArray)
        })
        } else {
            if(date > today) {
                alert("Even Wikipedia can't see into the future")
            } else {
            await axios.get(`/api/${date}`).then(data => {
             
                const array = data.data.article.articles; 
                const resultArray =[]
                for(let i=2; i<12; i++){
                resultArray.push(array[i]);
                    } 
                updateArticles(resultArray)
               
                })
            }
        }
        
    }
    let dateInput = React.createRef();
    async function handleClick(e){
        
        fetchData(dateInput.current.value).catch((e)=> alert(e));
        
    }
    
      const topArticles = []
      for (let i=0; i<stateArticles.length;i++){
        topArticles.push(<TopArticles key={stateArticles[i].article} article={stateArticles[i].article} rank = {i+1} views = {stateArticles[i].views}/>)
      }

      return(
    <div className="trending">
         <form >
        <input ref={dateInput} type="date" className="date"  ></input>
        <button type="button" id="submit" onClick= {handleClick}>Set Date</button>
        </form>
        <div id="headers">
        <h2>Rank</h2>
        <h2>What's Trending?</h2>
        <h2>Visits</h2>
        </div>
         
        <div className ="trendingWrapper">{topArticles}</div>
       
    </div>
      )


}



export default Top10


