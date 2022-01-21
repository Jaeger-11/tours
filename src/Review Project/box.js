import React from 'react';
import Review from './review';

const Box = () => {
    return (
        <main>
            <div className='box'>
                <div >
                <h1 className="headers">Our Reviews</h1>
                <p className='underline'></p>
                </div>
                <Review/>
            </div>
        </main>
    )
}

export default Box;