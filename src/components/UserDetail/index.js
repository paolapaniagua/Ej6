import React from 'react';

const UserDetail = ({name, username,email,id,company,address,website,phone}) => (
  
<div className="pt-4">
  <div className="datosPersonales table-responsive">
    <h1 className="text-center mb-4 text-primary"> Usuario: {id} </h1>

    <h2 className="mb-4 text-danger">Datos personales</h2>
    
    <table className="table table-striped mt-100em mb-5">

      <thead className="thead-dark">
        <tr>              
            <th scope="col">Nombre</th>
            <th scope="col">Nombre de Usuario</th>
            <th scope="col">Email</th>
            <th scope="col">Dirección</th>
            <th scope="col">Ciudad</th>
        </tr>
      </thead>
          
      <tbody>              
        <tr>                                
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>{address && address.street}</td>
          <td>{address && address.city}</td>
        </tr>                              
      </tbody>
    </table>
  </div>

  <div className="datosEmpresa table-responsive">
    <h2 className="mb-4 text-danger">Datos Empresariales</h2>
    
    <table className="table table-striped mt-100em">

      <thead className="thead-dark">
        <tr>              
            <th scope="col">Compañía</th>
            <th scope="col">Sitio Web</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Servicios</th>
            <th scope="col">Especialidad</th>
        </tr>
      </thead>
          
      <tbody>              
        <tr>                                
          <td>{company && company.name}</td>
          <td>{website}</td>
          <td>{phone}</td>
          <td>{company && company.bs}</td>
          <td>{company && company.catchPhrase}</td>
        </tr>                              
      </tbody>
    </table>
  </div>
</div>
);

export default UserDetail;