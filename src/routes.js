import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GithubRepoList from "./pages/GithubRepoList";
import Location from "./pages/Location";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={GithubRepoList} />
      <Route path="/location" component={Location} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
