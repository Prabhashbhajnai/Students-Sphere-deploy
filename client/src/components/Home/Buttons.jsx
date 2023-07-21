import React from 'react';
import classnames from 'classnames';

const HomeButtons = (props) => {
    return (
        <>
            <button 
                className={classnames(
                    "flex items-center bg-white px-5 py-2 rounded-lg border hover:bg-gray-300 hover:text-black",
                    {
                        "bg-white": props.isActive,
                        /* "text-white": props.isActive, */
                    }
                )}
            >
                {props.children}
            </button>           
        </>
    );
};

export default HomeButtons;