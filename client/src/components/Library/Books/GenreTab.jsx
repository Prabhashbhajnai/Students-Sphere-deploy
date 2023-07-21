import React from 'react';
import classnames from 'classnames';
import { useLocation, Link, useParams } from 'react-router-dom';

const GenreTabs = (props) => {
    const { id } = useParams();
    return (
        <Link to={`/library/books/${props.route}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={classnames("text-gray-500 font-light", { "text-red-400 font-semibold": props.isActive, })}>
                <h3 className="text-lg font-medium">{props.title}</h3>
            </div>
        </Link>
    )
};

const GenreTabsContainer = (props) => {

    const location = useLocation();

    const currentPath = location.pathname;

    const tabs = [
        {
            title: "Fantasy Fiction",
            route: "fantasyfiction",
            isActive: currentPath.includes("fantasyfiction"),
        },
        {
            title: "Romance",
            route: "romance",
            isActive: currentPath.includes("romance"),
        },
        {
            title: "Text-Book",
            route: "textbook",
            isActive: currentPath.includes("textbook"),
        },
        {
            title: "Science Fiction",
            route: "science-fic",
            isActive: currentPath.includes("science-fic"),
        },
        {
            title: "Science & technology",
            route: "science-tech",
            isActive: currentPath.includes("science-tech"),
        }
    ];

    return (
        <>
            <div className='flex flex-col px-3 gap-4 md:gap-4 scrollbar-hide'>
                {tabs.map((tab) => (
                    <GenreTabs {...tab} key={`123${tab.route}`} />
                ))}
            </div>
        </>
    );
};

export default GenreTabsContainer;