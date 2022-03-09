import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import loginService from "../../services/LoginService";
import utils from "../../utils";

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
                        props.history.push("/produtos");
                  }
            }).catch(erro => {
                  console.log(erro);
            })
      }
      return (
            <div className="container-login">
                  <div className="container-main">
                        <Form onSubmit={handleSubmit}>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Digite seu email..." onChange={(e) => setEmail(e.target.value)} />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Digite seu password..." onChange={(e) => setPassword(e.target.value)} />
                              </Form.Group>
                        <Button variant="primary" type="submit">Enviar</Button>
                        </Form>
                  </div>
            </div>
      )

}