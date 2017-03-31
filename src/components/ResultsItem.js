import React from 'react';

const ResultsItem = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <a href={props.link} target='_blank'>Wikipedia Article</a>
        </div>
    )
};

export default ResultsItem;
