import React from "react";
import { Route } from "react-router-dom";

//Layout
import LibraryTeacherLayout from "../../Layout/Library/Teacher.Library.Layout";

const LibraryTeacherLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <LibraryTeacherLayout>
                        <Component {...props} />
                    </LibraryTeacherLayout>
                )}
            />
        </>
    );
};

export default LibraryTeacherLayoutHOC;