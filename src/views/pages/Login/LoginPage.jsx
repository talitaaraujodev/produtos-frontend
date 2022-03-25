import React, { useState } from "react";
import usuarioService from "../../../services/UsuarioService";
import utils from "../../../utils";
import "./login.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function LoginPage(props) {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      email: email,
      password: password,
    };
    await usuarioService
      .login(params)
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          utils.setToken(response.data.token);
          history.push("/home");
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  return (
    <div className="container-login">
      <div className="form-container-login">
        <div className="content-login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Digite o email..."
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <label className="label">Senha</label>
            <input
              type="password"
              placeholder="Digite a senha..."
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <button className="btn-login" type="submit" onClick={()=>handleSubmit()}>
              Enviar
            </button>
          </form>
          <Link className="link-register" to="/register">
            Cadastrar
          </Link>
        </div>
      </div>
    </div>
  );
}
