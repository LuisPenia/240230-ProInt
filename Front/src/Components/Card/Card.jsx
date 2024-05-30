import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

const Card = ({ product }) => {
  if (!product || !product.id || !product.nombre || !product.descripcion || !product.imagen) {
    return null; // O puedes renderizar un componente de carga o un mensaje de error
  }

  const { id, nombre, descripcion, imagen } = product;

  return (
    <div className="card">
      <div className="imageContent">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="card-content">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <Link to={`/card/${id}`} className="detail-button">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Card;