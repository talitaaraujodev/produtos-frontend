import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../../assets/styles/global.scss";

export default function Layout(props) {
  return (
    <div class="container-layout">
      <div class="container-main">
  <NavBar/>
        <div class="content">{props.children}</div>
        <Footer/>
      </div>
    </div>
  );
}
