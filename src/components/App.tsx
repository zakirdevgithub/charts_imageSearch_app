import React from "react";
import { Route, Switch } from "react-router-dom";
import { Menu } from "./Menu";
import { Home } from "./Home";
import { Charts } from "./Charts";
import { Search } from "./Search";
import { Error } from "./Error";

export const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/charts" component={Charts} />
        <Route exact path="/search" component={Search} />
        <Route component={Home} />
      </Switch>
    </>
  );
};
