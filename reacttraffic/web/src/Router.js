import React from "react";
import _ from "lodash";
import { Redirect, Switch } from "react-router-dom";
import Routes from "./routes";

const routePrefix = process.env.REACT_APP_ROUTE_PREFIX;

const renderRoute = ({
  key,
  path,
  exact,
  component: Component,
  title,
  layout: Layout,
}) => {
  return (
    <Layout
      key={key}
      exact={exact}
      path={path}
      title={title}
      component={Component}
    />
  );
};

const App = () => {
  const routes = _.map(Routes, renderRoute);

  const initialRoute = _.isUndefined(routePrefix)
    ? Routes[0].path
    : routePrefix + Routes[0].path;

  return (
    <Switch>
      {/* <Redirect from="/" to={initialRoute} exact /> */}
      {routes}
    </Switch>
  );
};

export default App;
