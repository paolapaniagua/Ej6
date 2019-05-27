import React from 'react';
import './style.scss';

const Card = ({ title, id }) =>(
        <div className="card mt-3" >
          <h3 className="card-header">Post número: {id}</h3>
          <div className="card-body">
            <h1 className="card-title ">{title}</h1>
            <a href={`/posts/${id}`} className="btn btn-primary">Leer post</a>            
          </div>
        </div>
)    

export default Card;