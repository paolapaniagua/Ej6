import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const CardDetail = ({id,title, body,userId}) => (
  <div className="pt-4">  
    <div className="card c-conteiner text-center border border-dark">
      <div className="card-header border-buttom border-dark">
        Post: {id}
      </div>
      
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{body}</p>
      </div>
      
      <div className="card-footer border-top border-dark">
        Posteado por el usuario número: {userId}
        <a href={`/users/${userId}`} className="badge badge-primary ml-2 ">Ir al perfil del usuario</a>
      </div>
    </div>

    <div className="card-action mt-2">
      <Link to='/'>
        Volver al listado
      </Link>
    </div>
  </div>
);

export default CardDetail;