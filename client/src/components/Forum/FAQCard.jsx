import React from 'react';
import { Link } from 'react-router-dom';

const FAQCard = (props) => {
    return (
        <Link to={props.link} >
            <h1 className='text-blue-500'>{props.question}</h1>
        </Link>
    );
};

export default FAQCard;