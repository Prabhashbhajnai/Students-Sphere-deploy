import React from 'react'

// components
import Navbar from '../../components/Navbar';

const ForumQuestionLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className=''>
                {props.children}
            </div>

        </>
    );
};

export default ForumQuestionLayout;