import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import './ReservasForm.css';

const ReservasForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    hora: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    console.log('Formulario cancelado');
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleAccept = () => {
    console.log('Formulario aceptado');
  };

  const handleUpdateClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setShowModal(false);
  };

  return (
    <div className="reservas-form-container">
      <form className="reservas-form" onSubmit={handleSubmit}>
        <h2>Formulario de Reservas</h2>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            className="form-control"
            value={formData.fecha}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora:</label>
          <input
            type="time"
            id="hora"
            name="hora"
            className="form-control"
            value={formData.hora}
            onChange={handleChange}
          />
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-accept" onClick={handleAccept}>Aceptar</button>
          <button type="button" className="btn btn-submit" onClick={handleUpdateClick}>Actualizar</button>
          <button type="button" className="btn btn-cancel" onClick={handleCancel}>Cancelar</button>
          <button type="button" className="btn btn-back" onClick={handleBack}>Retornar</button>
        </div>
      </form>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleModalSubmit}>
            <Form.Group controlId="modalFecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="modalHora">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Actualizar
            </Button>
            <Button variant="secondary" onClick={handleModalClose}>
              Cerrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ReservasForm;
