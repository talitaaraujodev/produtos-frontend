import React, { useState } from "react";
import { Row, Col, Table, Button, Card, Modal, Form } from "react-bootstrap";
import { FaEye, FaTrashAlt, FaPencilAlt, FaPlus } from "react-icons/fa";
import "./categoria.scss";

export default function CategoriaPage() {
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
  return (
    <div className="container-categoria">
      <Row className="d-flex justify-content-center align-items-start">
        <Col lg={9} md={9} sm={6} xl={9}>
          <div className="table-header d-flex justify-content-between align-items-center ">
            <h2>Categorias cadastradas</h2>
            <button onClick={() => openModalCadastro()}>
              <FaPlus /> Nova Categoria
            </button>
          </div>
          <Card className="shadow rounded">
            <Table responsive hover className="bg-white ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tipo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>51</td>
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
                      onClick={() => openModalVisualize()}
                    >
                      <FaEye />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>51</td>
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
                      onClick={() => openModalVisualize()}
                    >
                      <FaEye />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>51</td>
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
                      onClick={() => openModalVisualize()}
                    >
                      <FaEye />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>51</td>
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
                      onClick={() => openModalVisualize()}
                    >
                      <FaEye />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>51</td>
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
                      onClick={() => openModalVisualize()}
                    >
                      <FaEye />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>51</td>
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
                      className="btn-actions "
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
        </Col>
      </Row>
      {/* Modal nova categoria */}
      <Modal show={modalCadasto} onHide={() => modalCadasto(false)}>
        <Modal.Header className="header-modal">
          <Modal.Title className="title-modal">Nova Planta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="POST">
            <Form.Group>
              <Form.Label>Tipo</Form.Label>
              <Form.Control type="text" placeholder="Digite o tipo.." />
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
      {/* Modal deletar categoria */}
      <Modal show={modalDelete} onHide={() => modalDelete(false)}>
        <Modal.Header className="bg-danger">
          <Modal.Title className="text-white">Excluir Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalDelete}>
            Voltar
          </Button>
          <Button variant="danger">Excluir</Button>
        </Modal.Footer>
      </Modal>
       {/* Modal para editar categoria */}
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
              <Form.Label>Tipo</Form.Label>
              <Form.Control type="text" placeholder="Digite o tipo.." />
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
          <Modal.Title className="text-white">Visualizar Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Categoria #859</h3>
          <strong>
            Tipo:<span>50,00</span>
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
