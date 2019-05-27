import React from 'react';
import Nav from '../../components/Nav';
import DetalleUsuario from '../../containers/DetalleUsuario';

const DetalleUsu = (props) => {
  return (
    <div className="detail-page">
      <Nav />
      <div className="container">
        <DetalleUsuario {...props}/>
      </div>
    </div>
  );
}

export default DetalleUsu;