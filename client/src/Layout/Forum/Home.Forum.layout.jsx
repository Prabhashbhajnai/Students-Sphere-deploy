import React from 'react'

// components
import ForumNavbar from '../../components/Navbar/ForumNavbar';

const ForumHomeLayout = (props) => {
    return (
        <>
            <ForumNavbar />
            <div className=''>
                {props.children}
            </div>

        </>
    );
};

export default ForumHomeLayout;