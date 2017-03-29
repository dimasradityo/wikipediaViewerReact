import React from 'react';
import '../stylesheets/Button.css';

const Button = (props) => {
    return(
        <button className="buttonCommon">{props.children}</button>
    );
};

export { Button };

