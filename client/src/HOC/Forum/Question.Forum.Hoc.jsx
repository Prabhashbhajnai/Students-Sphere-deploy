import React from 'react';
import { Route } from "react-router-dom";

// Layout
import ForumQuestionLayout from '../../Layout/Forum/Question.Forum.layout';

const ForumQuestionLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <ForumQuestionLayout>
                        <Component {...props} />
                    </ForumQuestionLayout>
                )} 
            />
        </>
    );
};

export default ForumQuestionLayoutHOC;