import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/pages/Home/HomePage";
import AboutPage from "./views/pages/About/AboutPage";
import ProdutoPage from "./views/pages/Produto/ProdutoPage";
import CategoriaPage from "./views/pages/Categoria/CategoriaPage";
import LoginPage from "./views/pages/Login/LoginPage";
import RegisterLogin from "./views/pages/Register/RegisterPage";
import Layout from "./components/layout/Layout";
import history from "./history";

export default function ScreensRoutes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/login"} component={LoginPage} />
        <Route exact path={"/register"} component={RegisterLogin} />
        <Layout>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/about"} component={AboutPage} />
          <Route exact path={"/produto"} component={ProdutoPage} />
          <Route exact path={"/categoria"} component={CategoriaPage}/>
        </Layout>
      </Switch>
    </Router>
  );
}
