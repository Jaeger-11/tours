import React, { useState } from 'react';
import './generator.css';
import SingleColor from './singleColor';
import Values from 'values.js';


const Generator = () => {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('#f15025').all(10));

    const handleSubmit = (event) => {
        event.preventDefault();
        try{
            let colors = new Values(color).all(10);
            setList(colors)
            console.log(colors)
        } catch (error){
            setError(true);
            console.log(error);
        }
    }

    return(
        <div>
            <section className='Container'>
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit} >
                    <input type='text' 
                    value={color} onChange={(event) => {setColor(event.target.value)}} 
                    placeholder='#f15025' className={`${error ? 'error' : null}`}/>
                    <button className='cbtn' type='submit'> submit</button>
                </form>
            </section>
            <section className='colors'>
                {list.map((color, index)=> {
                    return <SingleColor key={index} {...color} index = {index} hexColor={color.hex}/>
                })}
            </section>
        </div>
    )
}

export default Generator;