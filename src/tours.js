import React from 'react';
import Tour from './tour';

const Tours = ({places, removeTour}) => {
    return (
        <div>
            <nav className='navBar'>
                <h1 className="headers">Our Tours</h1>
                <p className='underline'></p>
            </nav>
            <main className='toursDiv'>
                {places.map((place) => {
                return <Tour key={place.id} {...place} removeTour ={removeTour}/>
                })}
            </main>
        </div>
    );
}

export default Tours;