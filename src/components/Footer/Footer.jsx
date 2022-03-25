import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer(){
      return(
            <div className="container-footer">
                  <div className="content-footer">
                        <h3>Plant Shop</h3> 
                        <ul>
                              <li><Link to="/home">Home</Link></li>
                              <li><Link to="/about">About</Link></li>
                              <li><Link to="/home">Plantas</Link></li>
                              <li><Link to="/home">Categorias</Link></li>
                        </ul>
                        <p>&copy; Plant Shop 2022</p>
                  </div>
            </div>
      )
}