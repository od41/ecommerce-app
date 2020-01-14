import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = (props) => {

    const template = <div>
                    <h1>{props.text}</h1>
                </div>
    if(props.link) {
        return(
            <Link to={props.linkto} >
                {template}
            </Link>
        ) 
    } else {
        return template
    }
    

}

