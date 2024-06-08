import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

const Card = ({ product }) => {
  if (!product || !product.id || !product.name || !product.description || !product.imageUrl
  ) {
    return null; // O puedes renderizar un componente de carga o un mensaje de error
  }

  const { id, name, description, imageUrl } = product;

  return (
    <div className="card">
      <div className="imageContent">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/card/${id}`} className="detail-button">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Card;