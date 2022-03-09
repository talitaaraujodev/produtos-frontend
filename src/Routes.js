import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./views/pages/HomePage";
import AboutPage from "./views/pages/AboutPage";
import LoginPage from "./views/pages/LoginPage";
import ProdutosPage from "./views/pages/ProdutosPage";

export default function ScreensRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={<LoginPage />} />
        <Layout>
          <Route path="/" component={<HomePage />} />
          <Route path="/about" component={<AboutPage />} />
          <Route path="/produto" component={<ProdutosPage />} />
        </Layout>
      </Switch>
    </Router>
  );
}