import React from 'react';
import { useState } from 'react/cjs/react.development';
import data from './data';
import Scroll from './scroll';

const Slider = () => {
    
    const [people,setPeople] = useState(data)

    

    return(
            <div className='section'>
                <div >
                <h1 className="headers">Reviews</h1>
                <p className='underline'></p>
                </div>
                <Scroll people = {people} />
            </div>
    )

}

export default Slider;