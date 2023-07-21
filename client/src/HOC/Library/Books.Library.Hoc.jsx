import React from "react";
import { Route } from "react-router-dom";

//Layout
import BooksLayout from "../../Layout/Library/Books.Library.Layout";

const BooksLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <BooksLayout>
                        <Component {...props} />
                    </BooksLayout>
                )}
            />
        </>
    );
};

export default BooksLayoutHOC;