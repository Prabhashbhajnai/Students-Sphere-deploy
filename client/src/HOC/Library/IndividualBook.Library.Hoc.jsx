import React from "react";
import { Route } from "react-router-dom";

//Layout
import IndividualBookLayout from "../../Layout/Library/IndividualBook.Library.Layout";

const IndividualBookLayoutHOC = ({component: Component, ...rest}) => {
    return (
    <>
      <Route 
         {...rest} 
         component={(props) => (
           <IndividualBookLayout>
             <Component {...props}/>
           </IndividualBookLayout>
        )} 
      />
    </>
  );
};

export default IndividualBookLayoutHOC;