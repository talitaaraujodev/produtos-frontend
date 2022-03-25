import React, { useState } from "react";
import "./register.scss";
import register from "../../../assets/images/register.jpg";
import { Link } from "react-router-dom";
import usuarioService from "../../../services/UsuarioService";

export default function RegisterLogin() {
  const [email, setEmail] = useState();
  const [nome, setNome] = useState();
  const [password, setPassword] = useState();

  const cadastro = async (e) => {
    e.preventDefault();
    const params = {
      nome: nome,
      email: email,
      password: password,
    };
    await usuarioService
      .register(params)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  return (
    <div className="container-register">
      <div className="form-container-register">
        <div className="left">
          <h2 className="text-center text-dark">Cadastre-se</h2>
          <p className="text-center text-dark font-weight-bold">
            Preencha os campos corretamente
          </p>
          <form onSubmit={cadastro}>
            <label htmlFor="nome" className="label">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              placeholder="Digite o nome..."
              className="input"
              onChange={(e) => setNome(e.target.value)}
            />
            <label htmlFor="email" className="label">
              E-mail
            </label>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="Digite o e-mail..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="label">
              Senha
            </label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Digite a senha..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <button className="btn-register" onClick={cadastro}>Enviar</button>
          <Link className="text-center link-login" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
      <div className="right">
        <img src={register} alt="Imagem de cadastro do usuário" />
      </div>
    </div>
  );
}
