import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Header from "./components/partials/Header";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

import "./App.css";

import LandingPage from "./components/LandingPage";

function App() {
  let history = useHistory();
  let header = <Header />;
  let token = localStorage.getItem("token");
  if (!token) {
    history.push("/landingPage");
    header = null;
  }

  return (
    <div>
      {header}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/landingPage" component={LandingPage} />
        <Route exact path="/loginPage" component={LoginPage} />
        <Route exact path="/">
          <Redirect to="/loginPage" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
