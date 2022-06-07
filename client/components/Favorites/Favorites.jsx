
import React, {useEffect, useState}  from 'react';

import { useNavigate } from 'react-router-dom';
import Cards from './Cards'


function Favorites() {
    let navigate = useNavigate();
    const [Favorites,setFavorites] = useState([])
    const [refresh,setRefresh] = useState(false)

    useEffect(()=>{
        fetchFromDB().catch(console.error);
    },[refresh])

    async function fetchFromDB(){
        
       const response = await fetch('/db/get').then(data => data.json());
        setFavorites(response);

        
    }
    
    async function Delete(id){
        await fetch(`db/${id}`,{method:"DELETE"})
        refresh ? setRefresh(false) : setRefresh(true);
    }
    async function Update(id,passedNotes){
        const responseBody = {
            method: "PATCH",
            mode: "cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            notes : passedNotes
            }),
        }
        const response = await fetch(`db/${id}`,responseBody)
        const data = await response.json()
        
        refresh ? setRefresh(false) : setRefresh(true);
    }

    
    const dbCards = [];
    for(let i=0;i<Favorites.length;i++){
        dbCards.push(<Cards key={Favorites[i]._id} id={Favorites[i]._id} article= {Favorites[i].article} views={Favorites[i].views} endDate ={Favorites[i].end_date} startDate ={Favorites[i].start_date} link={Favorites[i].link} notes={Favorites[i].notes} searchDate = {Favorites[i].search_date} update={Update} delete={Delete} />)

    }
    return (
        <main>
            
        <h1> FAVORITES </h1>
        <div className="favDiv">
        <button id = "Hpage" onClick={()=> navigate("/")}>Back to Home Page</button>
        </div>
        <div id="cardsWrapper">
            {dbCards}
        </div>
        
        </main>
    )
}

export default Favorites