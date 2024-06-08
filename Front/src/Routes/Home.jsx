// Home.js

/*
import React, { useState, useEffect } from 'react';
import "./Home.css";
import lupa from "../assets/lupa.png";
import { Link } from 'react-router-dom';
import Categorias from "../Components/Categoria/Categorias";
import ProductList from "../Components/ProducList/ProductList";
import Overlay from '../Components/Overlay/Overlay';
import Popup from '../Components/Poppup/Poppup';

const Home = ({ products, onAddProduct }) => {
  const [localProducts, setLocalProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="home">
      <section className="buscador">
        <h2>Bienvenido te invitamos a explorar Categorias</h2>
        <p>Encuentra el disfraz que necesitas alquilar</p>
        <div>
          <input type="text" placeholder="¿Qué Disfraz buscas?" />
          <Link onClick={togglePopup}><img src={lupa} alt="" /></Link>
        </div>
      </section>

      <Categorias products={products} />
      <ProductList products={localProducts} onAddProduct={onAddProduct} />

      <Overlay showPopup={showPopup} togglePopup={togglePopup}>
        <Popup togglePopup={togglePopup}>
          <h2>Este es un pop-up</h2>
          <p>Contenido del pop-up...</p>
        </Popup>
      </Overlay>
    </div>
  );
};

export default Home;
*/

import React, { useState, useEffect } from 'react';
import "./Home.css";
import lupa from "../assets/lupa.png";
import { Link } from 'react-router-dom';
import Categorias from "../Components/Categoria/Categorias";
import ProductList from "../Components/ProducList/ProductList";

const Home = ({ products, onAddProduct  }) => {
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  return (
    <div className="home">
      <section className="buscador">
        <h2>Bienvenido te invitamos a explorar Categorias</h2>
        <p>Encuentra el disfraz que necesitas alquilar</p>
        <div>
          <input type="text" placeholder="¿Qué Disfraz buscas?"/>
          <Link><img src={lupa} alt="" /></Link>
        </div>
      </section>
      
      <Categorias products={products}/>
      
      <ProductList products={localProducts} onAddProduct={onAddProduct}/>
    
    </div>
  );
};

export default Home;
