import React from "react";
import { Route } from "react-router-dom";

//Layout
import LibraryHomeLayout from "../../Layout/Library/Home.Library.Layout";

const LibraryHomeLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <LibraryHomeLayout>
                        <Component {...props} />
                    </LibraryHomeLayout>
                )}
            />
        </>
    );
};

export default LibraryHomeLayoutHOC;