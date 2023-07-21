import React from 'react';
import { Route } from "react-router-dom";

// Layout
import ForumHomeLayout from '../../Layout/Forum/Home.Forum.layout';

const ForumHomeLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <ForumHomeLayout>
                        <Component {...props} />
                    </ForumHomeLayout>
                )} 
            />
        </>
    );
};

export default ForumHomeLayoutHOC;