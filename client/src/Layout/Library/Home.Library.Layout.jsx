import React from 'react';

//Components
import Navbar from '../../components/Navbar';

const LibraryHomeLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="">
                {props.children}
            </div>
        </>
    );
};

export default LibraryHomeLayout;