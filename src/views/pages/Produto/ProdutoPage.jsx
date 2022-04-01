import React, { useState } from "react";
import "./produto.scss";
import adao from "../../../assets/images/adao.jpg";
import babosa from "../../../assets/images/babosa.jpg";
import { Col, Row, Table, Button, Card, Modal, Form } from "react-bootstrap";
import {
  FaEye,
  FaTrashAlt,
  FaPencilAlt,
  FaAngleLeft,
  FaPlus,
} from "react-icons/fa";
import Select from "react-select";
export default function ProdutoPage() {
  const [modalCadasto, setModalCadasto] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalVisualize, setModalVisualize] = useState(false);
  // modais
  function openModalCadastro() {
    setModalCadasto(true);
  }
  function closeModalCadastro() {
    setModalCadasto(false);
  }
  function openModalDelete() {
    setModalDelete(true);
  }
  function closeModalDelete() {
    setModalDelete(false);
  }
  function openModalEdit() {
    setModalEdit(true);
  }
  function closeModalEdit() {
    setModalEdit(false);
  }
  function openModalVisualize() {
    setModalVisualize(true);
  }
  function closeModalVisualize() {
    setModalVisualize(false);
  }
  const itemsOptions = [
    { value: "Medicinal", label: "Medicinal" },
    { value: "Decorativa", label: "Decorativa" },
    { value: "Frutifera", label: "Frutifera" },
  ];
  return (
    <div className="container-produto">
      <Row className="d-flex justify-content-center align-items-start">
        <Col lg={2} md={2} sm={2} xl={2}>
          <div className="col-category">
            <h5>Categorias</h5>
            <ul className="list-category">
              <li>Flores</li>
              <li>Folheira</li>
              <li>Jardim</li>
              <li>Decorativa</li>
              <button>
                <FaAngleLeft className="icon-btn" />
                Voltar
              </button>
            </ul>
          </div>
        </Col>
        <Col lg={10} md={10} sm={10} xl={10}>
          <div className="col-table">
            <div className=" col-table-header d-flex justify-content-between align-items-center ">
              <h2>Plantas cadastradas</h2>
              <button onClick={() => openModalCadastro()}>
                <FaPlus /> Nova Planta
              </button>
            </div>
            <Card className="shadow rounded">
              <Table responsive hover className="bg-white ">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>24</td>
                    <td>
                      <img src={babosa} alt="" />
                    </td>

                    <td>Babosa</td>

                    <td>20,00</td>
                    <td>teste descrição</td>

                    <td>Medicinal</td>
                    <td>
                      <Button
                        variant="outline-warning"
                        size="sm"
                        className="btn-actions"
                        onClick={() => openModalEdit()}
                      >
                        <FaPencilAlt />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="btn-actions  "
                        onClick={() => openModalDelete()}
                      >
                        <FaTrashAlt />
                      </Button>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="btn-actions"
                        onClick={()=>openModalVisualize()}
                      >
                        <FaEye />
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>
                      <img src={adao} alt="" />
                    </td>

                    <td>Babosa</td>

                    <td>20,00</td>
                    <td>teste descrição</td>

                    <td>Medicinal</td>
                    <td>
                      <Button
                        variant="outline-warning"
                        size="sm"
                        className="btn-actions"
                        onClick={() => openModalEdit()}
                      >
                        <FaPencilAlt />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="btn-actions"
                        onClick={() => openModalDelete()}
                      >
                        <FaTrashAlt />
                      </Button>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="btn-actions"
                        onClick={() => openModalVisualize()}
                      >
                        <FaEye />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Col>
      </Row>
      {/* Modal nova planta */}
      <Modal show={modalCadasto} onHide={() => modalCadasto(false)}>
        <Modal.Header className="header-modal">
          <Modal.Title className="title-modal">Nova Planta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="POST">
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome.." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Preço</Form.Label>
              <Form.Control type="number" placeholder="Digite o preço.." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Selecione a imagem</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
            <Form.Group>
              <Form.Label>Selecione a categoria</Form.Label>
              <Select
                isSearchable={false}
                placeholder="Selecione o cliente"
                name="color"
                options={itemsOptions}
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModalCadastro} variant="secondary">
            Voltar
          </Button>
          <Button variant="success">Salvar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal deletar planta */}
      <Modal show={modalDelete} onHide={() => modalDelete(false)}>
        <Modal.Header className="bg-danger">
          <Modal.Title className="text-white">Excluir Planta</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalDelete}>
            Voltar
          </Button>
          <Button variant="danger">Excluir</Button>
        </Modal.Footer>
      </Modal>
      {/* Modal para editar planta */}
      <Modal show={modalEdit} onHide={() => modalEdit(false)}>
        <Modal.Header className="bg-warning">
          <Modal.Title className="text-white">Editar Planta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="POST">
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite o nome.." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Preço</Form.Label>
              <Form.Control type="number" placeholder="Digite o preço.." />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Selecione a imagem</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
            <Form.Group>
              <Form.Label>Selecione a categoria</Form.Label>
              <Select
                isSearchable={false}
                placeholder="Selecione o cliente"
                name="color"
                options={itemsOptions}
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModalEdit} variant="secondary">
            Voltar
          </Button>
          <Button variant="success">Salvar</Button>
        </Modal.Footer>
      </Modal>
      {/* Modal de visualização */}
      <Modal show={modalVisualize} onHide={() => modalVisualize(false)}>
        <Modal.Header className="bg-primary">
          <Modal.Title className="text-white">Visualizar Planta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Planta #859</h3>
          <strong>
            Nome:<span>Teste</span>
          </strong>
          <strong>
            Preço:<span>50,00</span>
          </strong>
          <strong>
            Descrição:<span>Teste teste teste</span>
          </strong>
          <strong>
            Categoria:<span>Testeee</span>
          </strong>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModalVisualize} variant="secondary">
            Voltar
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
}
