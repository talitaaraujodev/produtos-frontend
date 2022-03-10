import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/pages/HomePage";
import AboutPage from "./views/pages/AboutPage";
import LoginPage from "./views/pages/LoginPage";
import ProdutosPage from "./views/pages/ProdutosPage";
import Layout from "./components/layout/Layout";
import history from "./history";

export default function ScreensRoutes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/login"} component={LoginPage} />
        <Layout>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/about"} component={AboutPage} />
          <Route exact path={"/produto"} component={ProdutosPage} />
        </Layout>
      </Switch>
    </Router>
  );
}
