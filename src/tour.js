import React, {useState} from 'react';

const Tour = ({id, image, info, price, name ,removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article key = {id} className="container">
                <img src={image} alt="tour location" className="images"></img>
                <section>
                    <main>
                        <h4 className="name">{name}</h4>
                        <h3 className="price">${price}</h3>
                    </main>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <span onClick={()=>{setReadMore(!readMore)}}>
                        {readMore ? 'show less' : 'read more'}
                    </span>
                </p>
                <button onClick={()=>removeTour(id)} type="button">Not Interested</button>
                </section>         
            </article>
    )
}

export default Tour;