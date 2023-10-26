import React from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./HomePage";

const HomePageRoute = ({ component: Component, title, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <HomePage {...props} title={title}>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Component {...props} />
        </HomePage>
      )}
    />
  );
};

export default HomePageRoute;
