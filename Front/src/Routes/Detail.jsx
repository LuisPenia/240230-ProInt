import React from 'react';
import { useParams } from 'react-router-dom';
import "./Detail.css"

const Detail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="Detail">
      <div className="Detail-imgContent">
        <img src={product.imageUrl} alt={product.name} />  
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>Price: {product.price}</p>
        <p>Category: {product.mainCategory}</p>
        <p>Subcategory: {product.subCategory}</p>
        <p>Size: {product.size}</p>
        <p>{product.largeDescription}</p>
      </div>      
    </div>
  );
}

export default Detail;
