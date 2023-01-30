import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { CreateStory } from "./components/Pages/CreateStory";
import { Home } from "./components/Pages/Home";
import { Room } from "./components/Pages/Room";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/story" exact component={CreateStory} />
        <Route path="/room" exact component={Room} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
