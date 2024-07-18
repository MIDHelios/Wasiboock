import React, { useState } from 'react';
import NavigationBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ReservasForm from '../components/ReservasForm';
import PaymentForm from '../components/PaymentForm'; // Importa el formulario de pagos

import { Container } from 'react-bootstrap';

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'reservas':
        return <ReservasForm />;
      case 'dashboard':
        return <div>Dashboard View</div>; // Aquí debería ir el componente de Dashboard si lo tienes
      case 'Pagos':
        return <PaymentForm />; // Muestra el formulario de pagos cuando se selecciona 'Pagos'
      case 'customers':
        return <div>Customers View</div>; // Reemplaza con el componente Customers si lo tienes
      default:
        return <div>Dashboard View</div>; // Vista por defecto
    }
  };

  return (
    <div>
      <NavigationBar />
      <Container fluid className='m-0 p-0 d-flex'>
        <Sidebar setCurrentView={setCurrentView} />
        <div className="main-content flex-grow-1">
          {renderView()}
        </div>
      </Container>
    </div>
  );
}

export default Home;

