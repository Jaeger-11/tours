import React from "react";

const Menu = ({img, price, desc, title, id}) => {
    return (
        <section key={id} className="menuSection">
            <img src={img} alt="menupic" className="menuImage"/>
            <div>
                <header>
                    <h4 className="menuTitle">{title}</h4>
                    <h5 className="menuPrice">${price}</h5>
                </header>
                <p className="menuDesc">{desc}</p>
            </div>
        </section>
    )
}

export default Menu;