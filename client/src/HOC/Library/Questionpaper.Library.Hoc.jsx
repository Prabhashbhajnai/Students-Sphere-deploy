import React from "react";
import { Route } from "react-router-dom";

//Layout
import LibraryQuestionpaperLayout from "../../Layout/Library/Questionpaper.Library.Layout";

const LibraryQuestionpaperLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <LibraryQuestionpaperLayout>
                        <Component {...props} />
                    </LibraryQuestionpaperLayout>
                )}
            />
        </>
    );
};

export default LibraryQuestionpaperLayoutHOC;