import React from 'react';
import classnames from 'classnames';

const Buttons = (props) => {
    return (
        <>
            <button 
                className={classnames(
                    "flex items-center px-3 py-2 rounded-lg border hover:bg-red-400 hover:text-black",
                    {
                        "bg-red-400": props.isActive,
                        "text-white": props.isActive,
                    }
                )}
            >
                {props.children}
            </button>           
        </>
    );
};

export default Buttons;