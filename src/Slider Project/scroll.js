import React, {useState} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { useEffect } from 'react/cjs/react.development';

const Scroll = ({people}) => {
    const [order, setOrder] = useState(0)

    useEffect(() => {
        const lastIndex = people.length - 1;
        if(order < 0){
            setOrder(lastIndex);
        }
        if(order > lastIndex){
            setOrder(0)
        }
    }, [order, people])

    useEffect(() => {
        let setSlider = setInterval(() => {
            setOrder(order + 1);
        }, 5000);
        return () => clearInterval(setSlider)
    }, [order])

    const nextPerson = () =>{
        setOrder((index) => {
            let newIndex = index + 1;
            return newIndex
        });
    }

    const prevPerson = () =>{
        setOrder((index) => {
            let newIndex = index - 1;
            return newIndex
        });
    }

    return(
        <div className='section-center'>
            {people.map((person, personIndex) => {
                const {id, image, title, quote, name} = person;
                let position = 'nextSlide';
                if(order === personIndex){
                    position = 'activeSlide';
                }
                if(personIndex === order - 1 || (order === 0 && personIndex === people.length - 1)){
                    position = 'lastSlide';
                }
                return (
                    <article key={id} className= {position}>
                        <img src={image} className='person-img' alt='review'/>
                        <h4>{name}</h4>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight/>
                    </article>
            )})}
            <div className='scrollButtons'>
                <button onClick={prevPerson} className='prev'><FiChevronLeft/></button>
                <button onClick={nextPerson} className='next'><FiChevronRight/></button>
            </div>
        </div>
    )
}

export default Scroll;