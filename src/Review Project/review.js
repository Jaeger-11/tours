import React, { useState } from 'react';
import person from './data';
import {FaAngleRight, FaAngleLeft} from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const {id, name, job, image, text} = person[index];
    console.log(person);

    const CheckNumber = (number) => {
        if (number > person.length - 1){
            return 0
        }
        if (number < 0){
            return person.length - 1
        }else return number;
    }

    const Previous = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return CheckNumber(newIndex);
        })
    }

    const Next = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return CheckNumber(newIndex);
        })
    }

    const Random = () => {
        let randomNumber = Math.floor(Math.random() * person.length);
        if (randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(CheckNumber(randomNumber));
    }

    return(
        <article className='review' key={id}>
            <div className='img-container'>
                <img src={image} alt='Profile display'/>
                <span className='quote-icon'></span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={Previous}>
                    <FaAngleLeft/>
                </button>
                <button className='next-btn' onClick={Next}>
                <FaAngleRight/>
                </button>
            </div>
            <button className='random-btn' onClick={Random}>Surprise Me</button>
        </article>
    )
        
}

export default Review;