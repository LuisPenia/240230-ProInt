import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import { useUser } from '../UserContext';
import Calendario2 from '../Components/Calendario/Calendario2';

const Detail2 = ({ products }) => {

  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));
  
  const [selectedDateRange, setSelectedDateRange] = useState(null);  
  const [showModal, setShowModal] = useState(false);
  const { user } = useUser();

  const handleDateRangeChange = (range) => {
    const { startDate, endDate } = range;
    const reservaString = `${startDate},${endDate}`;
    setSelectedDateRange(reservaString);
  };

  const handleReservaClick = () => {
    if (user) {
      setShowModal(true);
    } else {
      alert('Para poder reservar un disfraz, Ud. debe **Iniciar Sesion**');
    }

    const formDatab = new FormData();
    formDatab.append('Id', product.id);
    formDatab.append('Reserva', selectedDateRange); 

    console.log(product.id);

    fetch(
      "https://script.google.com/macros/s/AKfycbyYCJ-mtFbqBjUPQqJD-g5YyCL9k3jwz5gG7z4DRbpS6gpgRCIwGPguz9CB1C5--jt9Pg/exec",
      //"https://script.google.com/macros/s/AKfycbwJCA0KZPHtTZONu7MUonjv2csv-CaY_Dvm1CUqHDSJoWcNJh4ndn0mYPHm7RbczoYdtw/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  return (
    <div className="Detail">
      <div className="Detail-imgContent">
        <img src={product?.imageUrl} alt={product?.name} />
      </div>

      <div className="Detail-textContent">
        <h2>{product?.name}</h2>
        <h1>$ {product?.price}</h1>
        <a>...</a>
        <p>{product?.subCategory} para {product?.mainCategory}</p>
        <p>Talle: {product?.size}</p>
        <a>...</a>
        <p>{product?.largeDescription}</p>
      </div>

      <div className="Detail-calendar">
        <Calendario2 reservas={product.reservas} onDateRangeChange={handleDateRangeChange} />
        <button className="Reserva-button" onClick={handleReservaClick}>Reservar</button>
      </div>

      {showModal && selectedDateRange && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>Rango de fechas seleccionado:</p>
            <p>{selectedDateRange}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default Detail2;
