import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/pages/HomePage";
import AboutPage from "./views/pages/AboutPage";
import LoginPage from "./views/pages/LoginPage";
import Layout from "./components/layout/Layout";
import history from "./history";

export default function ScreensRoutes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/login"} component={LoginPage} />
        <Layout>
          <Route exact path={"/home"} component={HomePage} />
          <Route exact path={"/about"} component={AboutPage} />
        </Layout>
      </Switch>
    </Router>
  );
}
