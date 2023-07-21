import React from 'react';
import { Route } from "react-router-dom";

// Layout
import LibraryNewspaperLayout from '../../Layout/Library/Newspaper.Library.Layout';

const NewspaperLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <LibraryNewspaperLayout>
                        <Component {...props} />
                    </LibraryNewspaperLayout>
                )}
            />
        </>
    );
};

export default NewspaperLayoutHOC;