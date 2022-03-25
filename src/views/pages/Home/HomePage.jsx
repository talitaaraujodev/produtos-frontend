import React, { useState, useEffect, useCallback } from "react";
import produtoService from "../../../services/ProdutosService";
import "./home.scss";
import adao from "../../../assets/images/adao.jpg";
import babosa from "../../../assets/images/babosa.jpg";
import palmeira from "../../../assets/images/palmeira.jpg";
import caju from "../../../assets/images/caju.jpg";
import sansiveira from "../../../assets/images/sansiveira.jpg";
import folheira from "../../../assets/images/folheira.jpg";

export default function HomePage() {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = useCallback(() => {
    produtoService
      .obterProdutos()
      .then((response) => {
        setProdutos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getProdutos();
  }, [getProdutos]);

  return (
    <div className="container-home ">
      <section>
        <div className="section-banner-home d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h1 className="text-banner">Bem vindo ao Plant Shop</h1>
            <button className="btn-banner-home">Cadastrar Nova Planta</button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="title-cards">Plantas Cadastradas</h2>
        <div className="container-cards d-flex justify-content-center align-items-center">
          <div className="cards">
            <div className="card-item">
              <img src={palmeira} alt="Planta Palmeira" />
              <h6>Palmeira</h6>
            </div>
            <div className="card-item">
              <img src={caju} alt="Planta Pé de Caju" />
              <h6>Pé de Caju</h6>
            </div>
            <div className="card-item">
              <img src={babosa} alt="Planta Babosa" />
              <h6>Babosa</h6>
            </div>
            <div className="card-item">
              <img src={adao} alt="Planta Costela de Adão" />
              <h6>Costela de Adão</h6>
            </div>
            <div className="card-item">
              <img src={sansiveira} alt="Planta Sansiveira" />
              <h6> Sansiveira </h6>
            </div>
            <div className="card-item">
              <img src={folheira} alt="Planta Folheira" />
              <h6>Folheira</h6>
            </div>
          </div>
        </div>
        <div className="footer-cards">
          <button>Ver Mais</button>
        </div>
      </section>
      <section>
        <div className="d-flex">
          <div className="section-banner-plant">
            <h2>Variedade em plantas</h2>
            <button className="btn-banner-plant">Ver Mais</button>
          </div>
        </div>
      </section>
    </div>
  );
}
