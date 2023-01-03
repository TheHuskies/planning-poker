import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CreateStory } from "./components/Pages/CreateStory";
import { Home } from "./components/Pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-story" exact component={CreateStory} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
