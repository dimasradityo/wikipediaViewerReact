import React from 'react';

const Button = (props) => {
    return(
        <button className="buttonCommon">{props.children}</button>
    );
};

export { Button };

