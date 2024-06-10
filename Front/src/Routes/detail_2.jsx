import React from 'react';
import { useParams } from 'react-router-dom';

const Detail_2 = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Category: {product.mainCategory}</p>
      <p>Subcategory: {product.subCategory}</p>
      <p>Size: {product.size}</p>
      <p>{product.largeDescription}</p>
    </div>
  );
}

export default Detail_2;
