import React from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import AuthLayout from "./AuthLayout";

const AuthLayoutRoute = ({ component: Component, title, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AuthLayout {...props} title={title}>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Component {...props} />
        </AuthLayout>
      )}
    />
  );
};

export default AuthLayoutRoute;
