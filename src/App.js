import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Header from "./components/partials/Header";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

import "./App.css";

import LandingPage from "./components/LandingPage";

function App() {
  let history = useHistory();
  let token = localStorage.getItem("token");
  if (!token) {
    history.push("/loginPage");
  } else {
    history.push("/");
  }

  return (
    <div>
      {token ? <Header /> : <></>}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/loginPage" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
