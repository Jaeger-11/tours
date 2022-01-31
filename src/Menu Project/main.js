import React, { useState } from 'react';
import items from './data';
import Menu from './menu';
import Category from './categories';

const Main = () => {
    const [menus, setMenus] = useState(items);

    // this function automatically selects unique category
    const uniquecategories = ['all', ...new Set(items.map((item) => item.category))]
    console.log(uniquecategories)

    // WE CAN MAKE THE CATEGORY MANUALLY THROUGH THIS FUNCTION
    const filterItems = (category) => {
        if (category === 'all'){
            return setMenus(items)
        }
        let newItems = items.filter((item) => item.category === category)
        setMenus(newItems);
    }

    return (
        <section>
            <div className='main'>
                <div >
                <h1 className="headers">Our Menu</h1>
                <p className='underline'></p>
                </div>
                <Category filterItems={filterItems} categories ={uniquecategories}/>
                <div className='menuDiv'>
                    {menus.map((item) => {
                        return <Menu key={item.id}{...item}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Main;