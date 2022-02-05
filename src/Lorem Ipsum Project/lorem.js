import React, {useState} from "react";
import data from './data'
const Lorem = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(data);

    const handleSubmit = (event) =>{
        event.preventDefault();
        let amount = parseInt(count)
        console.log(amount)
        setText(data.slice(0, amount));
    }

    return(
        <div >
            <h1 className="headers">Tired Of Lorem Ipsum ?</h1>
            <form onSubmit={handleSubmit} className="lorem-form">
                <label htmlFor="amount" className="LPlabel">Paragraphs: </label>
                <input type='number' id="amount" name="amount" className="LPinput" onChange={(event) => setCount(event.target.value)}></input>
                <button type="submit" className="LPbtn">Generate</button>
            </form>
            {text.map((item, itemIndex) => {
                return <article key={itemIndex} className="lorem-text">{item}</article>
            })}
        </div>
    )
}

export default Lorem;