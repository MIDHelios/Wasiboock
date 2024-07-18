import React from 'react';

const Heroes: React.FC = () => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center ">
        <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Hotel "Los Anturios"</h1>
        <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Pagina para reservas de servicios en el hotel los anturios que facilitara en el momento de pedir un cuarto, ven y visita nuestro hotel! </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
            <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Heroes;
