import React, { useEffect, useState } from "react";
import Tours from "./tours";
import './tours.css'

const url = 'https://course-api.com/react-tours-project';

const App = () => {
    const [places,setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    

    const fetchData = () => {
        fetch(url)
            .then((response) => {
                if(response.status >= 400 && response.status <= 599 ){
                    setIsLoading(false);
                    setIsError(true);
                } else {
                    return response.json()
                };
            })
            .then((data) => {
                setIsLoading(false);
                setPlaces(data);
            })    
    }

    useEffect(() => {
        fetchData();
    }, [])

    const removeTour = (id) => {
        const newPlaces = places.filter((place) => place.id !== id);
        setPlaces(newPlaces);
    }

    const restoreTours = () =>{
      fetchData();
    }

    if (isLoading){
        return (
            <h1 className="headers">Loading...</h1>
        )
    }

    if (isError){
        return(
            <h1 className="headers">Error Occured...</h1>
        )
    }

    if(places.length === 0){
      return (
        <div>
          <h1>No Tours Left</h1>
          <button onClick={restoreTours}>Refresh</button>
        </div>
      )
    }

    return <>
        <Tours places = {places} removeTour = {removeTour}/>
    </>
}



export default App;
