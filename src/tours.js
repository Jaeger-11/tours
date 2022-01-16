import React from 'react';
import Tour from './tour';

const Tours = ({places, removeTour}) => {
    return (
        <div>
            <h1 className="headers">Our Tours</h1>
            {places.map((place) => {
            return <Tour key={place.id} {...place} removeTour ={removeTour}/>
            })}
        </div>
    );
}

export default Tours;