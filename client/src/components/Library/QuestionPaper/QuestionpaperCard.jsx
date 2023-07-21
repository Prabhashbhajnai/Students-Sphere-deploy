import React from 'react';
import { Link } from 'react-router-dom'

const QuestionPaperCard = (props) => {
    return (
        <a href={props.location} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
            <div className='w-full bg-white mt-3 border-[1.5px] px-2 text-xl h-16 rounded-xl transition duration-100 ease-in-out hover:shadow-lg transform transition duration-100 hover:scale-105 overflow-hidden'>
                <button className='mt-3 flex'>{props.examType} {props.date}</button>
            </div>
        </a>
    );
};

export default QuestionPaperCard;