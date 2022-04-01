import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../../assets/styles/global.scss";
import Loader from "../Loader/Loader";
export default function Layout(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="container-layout">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container-main">
          <NavBar />
          <div className="content">{props.children}</div>
          <Footer />
        </div>
      )}
    </div>
  );
}
