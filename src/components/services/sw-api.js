import './sw-api.css'
import {useEffect, useState} from 'react'
import StarShipCard from './StarShipCard.js';


function GetAllStarships(){
    const [Ships, setStarShips] = useState([])

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch('https://swapi.dev/api/starships/');
            const data = await res.json() 
            setStarShips(data.results)
        } catch(error){
         //console.log(error)
        }
    } 
    fetchData();

    }, 
    [setStarShips]);


    return (
        <div 
        className="cardData">
             {Ships.map((Ships) => 
             <div className="tile">
                <StarShipCard name={Ships.name} 
                 key={Ships.id}
                 />
                </div>
                )}
        </div>
    );
}

export default GetAllStarships;