import React from 'react';

interface SidebarProps {
  setCurrentView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCurrentView }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark min-vh-100" style={{ width: "280px" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Servicios del Hotel</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page" onClick={() => setCurrentView('home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white" onClick={() => setCurrentView('dashboard')}>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white" onClick={() => setCurrentView('reservas')}>
            Reservas
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white" onClick={() => setCurrentView('Pagos')}>
            Pagos
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white" onClick={() => setCurrentView('customers')}>
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

