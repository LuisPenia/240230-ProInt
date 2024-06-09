import React, { useState, useEffect } from 'react';
import "./Home.css";
import lupa from "../assets/lupa.png";
import { useNavigate } from 'react-router-dom';
import Categorias from "../Components/Categoria/Categorias";
import ProductList from "../Components/ProducList/ProductList";

const Home = ({ products, onAddProduct  }) => {
  const [localProducts, setLocalProducts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  const handleLupaClick = () => {
    navigate('/userFilter');
  };

  return (
    <div className="home">
      <section className="buscador">
        <h2>Encuentra tu disfraz perfecto</h2>
        <p>Explora nuestra amplia colección de disfraces para todas las ocasiones. Utiliza el buscador para encontrar exactamente lo que necesitas</p>
        <div>
          <img src={lupa} alt="Buscar" onClick={handleLupaClick} />
        </div>
      </section>
      
      <Categorias products={products}/>
      
      <ProductList products={localProducts} onAddProduct={onAddProduct}/>
    
    </div>
  );
};

export default Home;
