import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container, ButtonGroup } from 'react-bootstrap';

const SignupForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [verifyEmail, setVerifyEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [verifyPassword, setVerifyPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleSignup = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Signup successful');
        localStorage.setItem('token', data.token); // Guarda el token si el backend lo devuelve
        navigate('/dashboard'); // Navega a la página de dashboard después del registro exitoso
      } else {
        setMessage(data.message); // Muestra el mensaje de error del backend
      }
    } catch (error) {
      setMessage('Error signing up'); // Muestra un mensaje genérico en caso de error
    }
  };

  return (
    <Container className='d-flex align-items-center justify-content-center min-vh-100 min-vw-100 bg-dark'>
      <div className='w-25 border rounded shadow-sm overflow-hidden p-4 text-white'>
        <Form onSubmit={handleSignup}>
          <h4>Signup</h4>
          {message && <Alert variant="info">{message}</Alert>}
          <Form.Group controlId="formFirstName">
            <Form.Label>User first name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>User last name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmailVerify">
            <Form.Label>Verify email</Form.Label>
            <Form.Control
              type="email"
              value={verifyEmail}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setVerifyEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPasswordVerify">
            <Form.Label>Verify password</Form.Label>
            <Form.Control
              type="password"
              value={verifyPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setVerifyPassword(e.target.value)}
              required
            />
          </Form.Group>
          <ButtonGroup className="w-100 pt-4">
            <Button variant="warning" type="submit">Signup</Button>
            <Button variant="danger" type="button" href='/'>Home</Button>
          </ButtonGroup>
        </Form>
      </div>
    </Container>
  );
}

export default SignupForm;
