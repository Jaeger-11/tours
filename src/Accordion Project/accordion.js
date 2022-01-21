import React, { useState } from 'react';

const Accordion = ({id,title, info}) => {
    const [showInfo, setShowInfo] = useState(false);

    return(
        <article key={id}>
            <header>
                <h4>{title}</h4>
                <button onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? 'Hide' : 'Show'}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default Accordion;