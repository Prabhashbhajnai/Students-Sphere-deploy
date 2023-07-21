import React from 'react';

//components
import Navbar from '../../components/Navbar'; 
import Sidebar from '../../components/Library/Books/Sidebar';

const BooksLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="my-4 border-r-2 border-grey-100 w-1/5">
                    <Sidebar />
                </div>
                <div className='my-4 ml-4 w-4/5'>
                    {props.children}
                </div> 
            </div>
        </>
    );
}

export default BooksLayout;