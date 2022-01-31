import React, { useEffect, useState } from 'react';
import person from './data';
import {FaAngleRight, FaAngleLeft} from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const {id, name, job, image, text} = person[index];
    console.log(person[index]);

    useEffect(() => {
        let slide = setInterval(() => {setIndex(CheckNumber(index + 1))}, 6000)
        return () => clearInterval(slide)
    }, [index])

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
        <div className='review' key={id}>
            <div className='reviewImageContainer'>
                <img src={image} alt='Profile display' className='reviewImages'/>
                <span className='quoteIcon'></span>
            </div>
            <h4 className='reviewAuthor'>{name}</h4>
            <p className='reviewJob'>{job}</p>
            <p className='reviewInfo'>{text}</p>
            <div className='reviewButtonContainer'>
                <button className='arrowLeft' onClick={Previous}>
                    <FaAngleLeft/>
                </button>
                <button className='arrowRight' onClick={Next}>
                    <FaAngleRight/>
                </button>
            </div>
            <button className='randomBtn' onClick={Random}>Surprise Me</button>
        </div>
    )
        
}

export default Review;