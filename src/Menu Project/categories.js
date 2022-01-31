import React from "react";

const Category = ({filterItems, categories}) => {

    return (
        // WE CAN MAKE THE CATEGORY MANUALLY THIS WAY
        // <div>
        //     <button className="menuBtn" onClick={() => filterItems('all')}>
        //         All
        //     </button>
        //     <button className="menuBtn" onClick={() => filterItems('lunch')}>
        //         Lunch
        //     </button>
        //     <button className="menuBtn" onClick={() => filterItems('shakes')}>
        //         Shakes
        //     </button>
        //     <button className="menuBtn" onClick={() => filterItems('breakfast')}>
        //         Breakfast
        //     </button>
        // </div>

        // WE CAN AUTOMATE THIS WAY USING THE UNIQUECATEGORIES FUNCTION BUILT IN MAIN.JS

        <div className="menuCategories ">
            {categories.map((category) => {
                return (
                    <div>
                        <button className="menuBtn" onClick={() => filterItems(category)}>{category}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Category;