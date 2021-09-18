import React from "react";
import { Switch, Route,  useHistory } from "react-router-dom";
import Header from "./components/partials/Header.jsx";
import Footer from "./components/partials/Footer.jsx";

import LoginPage from "./components/loginPage/LoginPage.jsx";
import SingleCandidate from "./components/candidates/SingleCandidate.jsx";
import ReportsAdministration from "./components/adminReports/components/ReportsAdministration";


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
      {token ? <Header/> : <></>}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/loginPage" component={LoginPage} />
        <Route exact path="/singleCandidate/:id" component={SingleCandidate} />
        <Route exact path="/reportsAdministration" component={ReportsAdministration} />
       
      </Switch>
      {token ? <Footer /> : <></>}
    </div>
  );
}

export default App;
