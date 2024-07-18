import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './PaymentForm.css';

const PaymentForm: React.FC = () => {
  const [paymentType, setPaymentType] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Aquí podrías agregar la lógica para enviar los datos del formulario al backend
    console.log('Formulario enviado:', { paymentType, cardNumber, expiryDate, cvv });
  };

  return (
    <Container className='mt-5'>
      <Form onSubmit={handleFormSubmit} className='payment-form'>
        <h4>Información de tipo de pagos</h4>
        
        <Form.Group controlId='formPaymentType'>
          <Form.Label>Select Payment Type</Form.Label>
          <Form.Select
            value={paymentType}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setPaymentType(e.target.value)}
            required
          >
            <option value=''>Choose...</option>
            <option value='credit'>Credit Card</option>
            <option value='debit'>Debit Card</option>
            <option value='paypal'>PayPal</option>
            <option value='bank'>Bank Transfer</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId='formCardNumber'>
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type='text'
            value={cardNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCardNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId='formExpiryDate'>
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type='text'
            placeholder='MM/YYYY'
            value={expiryDate}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setExpiryDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId='formCvv'>
          <Form.Label>CVV</Form.Label>
          <Form.Control
            type='text'
            value={cvv}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCvv(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit Payment
        </Button>
      </Form>
    </Container>
  );
};

export default PaymentForm;

