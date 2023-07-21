import React from 'react';

const NewspaperCard = (props) => {
    return (
        <a href={props.link} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
            <div className="bg-white p-3 w-80 rounded-2xl ease-in-out hover:shadow-lg transform transition duration-1000 hover:scale-105 overflow-hidden ">
                <div className="w-full h-56 lg:64 relative border">
                    <img
                        src={props.image}
                        alt="Books"
                        className="w-full h-full"
                    />
                </div>
                <div className=" my-2 items-center flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium">{props.name}</h4>
                    </div>
                </div>
            </div>
        </ a>
    );
};

export default NewspaperCard;