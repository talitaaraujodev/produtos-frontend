import React, { useState } from "react";
import loginService from "../../services/LoginService";
import utils from "../../utils";
import "../../assets/styles/login.scss"
import { Link } from "react-router-dom";

export default function LoginPage(props) {

      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const handleSubmit = async (e) => {
            e.preventDefault();
            const params = {
                  email: email,
                  password: password
            }
            await loginService.login(params).then(response => {
                  console.log(response.data);
                  if (response.data.token) {
                        utils.setToken(response.data.token);
                        props.history.push("/home");
                  }
            }).catch(erro => {
                  console.log(erro);
            })
      }
      return (
            <div className="container-login">
                  <div className="form-container-login">
                        <div className="content-login">
                              <h2>Login</h2>
                              <form onSubmit={handleSubmit}>
                                    <label className="label">Email</label>
                                    <input type="email" placeholder="Digite seu email..." onChange={(e) => setEmail(e.target.value)} className="input" />
                                    <label className="label">Senha</label>
                                    <input type="password" placeholder="Digite seu password..." onChange={(e) => setPassword(e.target.value)} className="input" />
                                    <button className="btn-login" type="submit">Enviar</button>
                              </form>
                        </div>
                  </div>
            </div>
      )

}