import React, { useEffect, useState } from 'react';
import Card from '../Card/Card.jsx';
import './PorductoList.css'

const ProductList = () => {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8081/disfraces');
        const data = await response.json();
        const shuffledArray = shuffleArray(data);
        setShuffledProducts(shuffledArray.slice(0, 10));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const divideIntoGrid = (products) => {
    const grid = [];
    const maxRows = 5;
    const maxCols = 2;
    const totalItems = maxRows * maxCols;
    const filledProducts = [...products, ...Array(totalItems - (products.length % totalItems)).fill(null)];
    for (let row = 0; row < maxRows; row++) {
      grid[row] = [];
      for (let col = 0; col < maxCols; col++) {
        const index = row * maxCols + col;
        if (index < products.length && index < 10) {
          grid[row][col] = products[index];
        } else {
          grid[row][col] = null;
        }
      }
    }
    return grid;
  };

  const grid = divideIntoGrid(shuffledProducts);

  return (
    <>
      {/* Lo más buscado */}
      {/* Tendencias de la temporada */}

      {grid.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="row">
          {row.map((product, colIndex) => (
            <div key={`product-${rowIndex}-${colIndex}`} className="col">
              {product ? (
                <Card product={product} />
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ProductList;