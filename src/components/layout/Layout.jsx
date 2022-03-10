import React from "react";
import NavBar from "../NavBar";
import "../../assets/styles/global.scss";

export default function Layout(props) {
  return (
    <div class="container-layout">
      <div class="container-main">
  <NavBar/>
        <div class="content">{props.children}</div>
      </div>
    </div>
  );
}
