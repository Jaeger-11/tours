import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

const Tab = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);
    const [order, setOrder] =useState(0);

    const fetchData = () => {
        fetch(url)
            .then((resp) => resp.json())
            .then((info) => {
                setData(info) 
                setIsLoading(false)
            });
    }

    useEffect(() => {
        fetchData()
    },[])
    console.log(data)

    if (isLoading){
        return <h2 className='headers'>Loading...</h2>
    }

    const {company, id, dates, duties, title} = data[order];
    return(
        <div>
            <header>
                <h1 className="headers">Experience</h1>
                <p className='underline'></p>
            </header>
            <div>
                <aside>
                    {data.map((item, index) => {
                        return <button className={index===order ? 'jobActive' : 'jobBtn'} key={index} onClick={()=> setOrder(index)}>
                            {item.company}
                        </button>
                    })}
                </aside>
                <section key={id}>
                    <h3>{title}</h3>
                    <button>{company}</button>
                    <p>{dates}</p>
                    <article>
                        {duties.map((duty, index) => {
                            return (
                                <div key={index}>
                                    <FaAngleDoubleRight/>
                                    <p>{duty}</p>
                                </div>
                            )
                        })}
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Tab;