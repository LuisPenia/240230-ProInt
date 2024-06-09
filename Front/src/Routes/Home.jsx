import React, { useState, useEffect } from 'react';
import "./Home.css";
import lupa from "../assets/lupa.png";
import { useNavigate } from 'react-router-dom';
import Categorias from "../Components/Categoria/Categorias";
import ProductList from "../Components/ProducList/ProductList";

const Home = ({ products, onAddProduct  }) => {
  const [localProducts, setLocalProducts] = useState([]);
  const [searchText, setSearchText] = useState(''); // Estado para almacenar el texto de búsqueda
  const navigate = useNavigate();
  
  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

// Esta función maneja el cambio en el valor de búsqueda
const handleSearchChange = (e) => {
  setSearchText(e.target.value); // Actualiza el estado con el texto ingresado
};

// Esta función maneja el clic en la imagen de la lupa
const handleLupaClick = () => {
  navigate(`/userFilter?search=${searchText}`); // Pasamos el texto de búsqueda como parámetro en la URL
};

  return (
    <div className="home">
      <section className="buscador">
        <h2>Bienvenido te invitamos a explorar Categorias</h2>
        <p>Encuentra el disfraz que necesitas alquilar</p>
        <div>
          {/* Input de búsqueda */}
          <input
            type="text"
            placeholder="¿Qué disfraz buscas?"
            value={searchText}
            onChange={handleSearchChange}
          />
          {/* La imagen de la lupa es clickeable */}
          <img
            src={lupa}
            alt="Buscar"
            style={{ cursor: 'pointer' }}
            onClick={handleLupaClick}
          />
        </div>
      </section>
      
      <Categorias products={products}/>
      
      <ProductList products={localProducts} onAddProduct={onAddProduct}/>
    
    </div>
  );
};

export default Home;
