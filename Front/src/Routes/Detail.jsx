import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Detail.css"

const Detail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  useEffect (() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div className="Detail">

      <div className="Detail-imgContent">
        <img src={product.imageUrl} alt={product.name} />  
      </div>

      <div className="Detail-textContent">
        <h2>{product.name}</h2>
        <h2>Precio: {product.price}</h2>
        <a>...</a>
        <p>{product.subCategory} para {product.mainCategory}</p>
        <p>Talla: {product.size}</p>
        <a>...</a>
        <p>{product.largeDescription}</p>
      </div>

      <div className="Detail-calendarContent">
      </div>

    </div>
  );
}

export default Detail;
