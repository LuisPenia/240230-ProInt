import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home_2.css';

const Home_2 = ({ products }) => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
      const getRandomProducts = (products, count) => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };
  
      setRandomProducts(getRandomProducts(products, 10));
    }, [products]);
  
    return (
      <div className="product-gallery">
        {randomProducts.map((product) => (
          <Link to={`/detail_2/${product.id}`} className="product-card" key={product.id}>
            <div className="card-content">
                <div >
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{'$'+product.price}</p></div>
                </div>
          </Link>
        ))}
      </div>
    );
  }

export default Home_2;
