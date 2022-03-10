import React, { useState, useEffect, useCallback } from "react";
import produtoService from "../../services/ProdutosService";
import { Card, Container, Form, Table, Button } from "react-bootstrap";
import { FaEye, FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import "../../assets/styles/home.scss"
export default function HomePage() {
      const [produtos, setProdutos] = useState([]);

      const getProdutos = useCallback(() => {
            produtoService.obterProdutos().then((response) => {
                  setProdutos(response.data);
                  console.log(response.data);
            })
                  .catch((error) => {
                        console.log(error);
                  })
      }, []);

      useEffect(() => {
            getProdutos();
      }, [getProdutos]);

      return (
            <Container fluid className="mt-4">
                  <div class="row" id="row-main">
                        <div class="col-md-3" id="sidebar">

                              <div id="menu">
                                    <h3 class="link-titulo">Filtrar por</h3>
                                    <ul class="box">
                                          <li><a href="#">Número</a></li>
                                          <li><a href="#">Nome</a></li>
                                          <li><a href="#">Preço</a></li>
                                          <li ><a href="#">Descrição</a></li>
                                    </ul>
                              </div>
                        </div>

                  </div>


                  <Card className="shadow  bg-white rounded">
                        <Card.Header className="card-header h5">
                              Listagem Produtos
                        </Card.Header>
                        <Card.Body className="bg-white">
                              <Table hover responsive>
                                    <thead >
                                          <tr>
                                                <th>#</th>
                                                <th>Produto</th>
                                                <th>Preço</th>
                                                <th>Descrição</th>
                                                <th>Ações</th>
                                          </tr>
                                    </thead>
                                    <tbody >
                                          {produtos.map((produto, key) => {
                                                return (
                                                      <tr key={key}>
                                                            <td>{produto.id}</td>
                                                            <td>{produto.nome}</td>
                                                            <td>{produto.preco}</td>
                                                            <td>{produto.descricao}</td>
                                                            <td>
                                                                  <Button
                                                                        variant="outline-primary"
                                                                        size="sm"
                                                                        className="btn-actions shadow-none"

                                                                  >
                                                                        <FaEye />
                                                                  </Button>
                                                                  <Button
                                                                        variant="outline-danger"
                                                                        size="sm"
                                                                        className="btn-actions shadow-none"

                                                                  >
                                                                        <FaTrashAlt />
                                                                  </Button>
                                                                  <Button
                                                                        variant="outline-warning"
                                                                        size="sm"
                                                                        className="btn-actions shadow-none"

                                                                  >
                                                                        <FaPencilAlt />
                                                                  </Button>
                                                            </td>
                                                      </tr>
                                                )
                                          })}
                                    </tbody>
                              </Table>
                        </Card.Body>
                  </Card>
            </Container>


      )

}