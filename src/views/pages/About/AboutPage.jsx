import React from "react";
import "./about.scss";
import programming from "../../../assets/images/programming.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function AboutPage() {
  return (
    <div className="container-about">
      <div className="content-about">
        <h2 className="text-center">
          Sobre o <span>Plant Shop</span>
        </h2>
        <p>
          Projeto Desenvolvido para afins de estudo e prática. Com isso o Plant
          Shop é um mini sistema simplificado para o cadastro de produtos e
          categoria, afim de realizar todo o CRUD e suas devidas implementações
          e fluxo do projeto.
        </p>

        <LazyLoadImage
          src={programming}
          alt="Programming"
          effect="blur"
          draggable={false}
        />

        <span className="text-about-footer">By Talita Araujo :)💚 </span>
      </div>
    </div>
  );
}
