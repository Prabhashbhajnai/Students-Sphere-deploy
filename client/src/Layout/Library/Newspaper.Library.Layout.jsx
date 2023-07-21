import React from 'react';

//Components
import Navbar from '../../components/Navbar';

const LibraryNewspaperLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="">
                {props.children}
            </div>
        </>
    );
};

export default LibraryNewspaperLayout;