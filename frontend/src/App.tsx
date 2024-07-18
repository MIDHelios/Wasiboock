import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import ReservationsForm from './components/ReservasForm';
import PaymentForm from './components/PaymentForm';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ReservasForm" element={<ReservationsForm />} />
          <Route path="/PaymenForm" element={<PaymentForm />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
