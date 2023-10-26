import React from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "./Layout";

const LayoutRoute = ({ component: Component, title, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props} title={title}>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default LayoutRoute;
