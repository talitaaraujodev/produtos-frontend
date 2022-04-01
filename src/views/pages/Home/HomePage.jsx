import React, { useState, useEffect, useCallback } from "react";
import "./home.scss";
import produtoService from "../../../services/ProdutosService";
import adao from "../../../assets/images/adao.jpg";
import babosa from "../../../assets/images/babosa.jpg";
import palmeira from "../../../assets/images/palmeira.jpg";
import caju from "../../../assets/images/caju.jpg";
import sansiveira from "../../../assets/images/sansiveira.jpg";
import folheira from "../../../assets/images/folheira.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
              <LazyLoadImage src={palmeira} alt="Planta Palmeira" />
              <h6>Palmeira</h6>
            </div>

            <div className="card-item">
              <LazyLoadImage src={caju} alt="Planta Pé de Caju" effect="blur" draggable={false}/>
              <h6>Cajueiro</h6>
            </div>

            <div className="card-item">
              <LazyLoadImage src={babosa} alt="Planta Babosa" effect="blur" draggable={false}/>
              <h6>Babosa</h6>
            </div>

            <div className="card-item">
              <LazyLoadImage src={adao} alt="Planta Costela de Adão" effect="blur" draggable={false}/>
              <h6>Costela de Adão</h6>
            </div>

            <div className="card-item">
              <LazyLoadImage src={sansiveira} alt="Planta Sansiveira" effect="blur" draggable={false}/>
              <h6> Sansiveira </h6>
            </div>

            <div className="card-item">
              <LazyLoadImage src={folheira} alt="Planta Folheira" effect="blur" draggable={false}/>
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
