import React from 'react';
import Accordion from './accordion';
import questions from './data';

const Container = () => {

    return (
        <div>
            <h3>Questions and answers about login</h3>
            <section>
                {questions.map((question) => {
                    return <Accordion key={question.id} {...question}/>
                })}
            </section>
        </div>
    )
}

export default Container;