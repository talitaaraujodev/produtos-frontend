import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.scss";
import { FaSignInAlt} from "react-icons/fa";
import logo from "../assets/images/produtos.png";
export default function NavBar() {
  return (
    <React.Fragment>
      <header>
        <nav className='nav'>
          <p className='navbar-logo'>
            Projeto Produtos :)
          </p>
          
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' >
                Sobre
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/produto' className='nav-links' >
                Produtos
              </Link>
            </li>
          </ul>
          <button className="btn-logout">Sair<FaSignInAlt className="ml-1" /></button>
        </nav>
      </header>
    </React.Fragment>
  );
}