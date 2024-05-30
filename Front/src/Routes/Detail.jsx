import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './detail.css';

// Objeto que mapea los IDs de disfraces a las características
const disfrazCaracteristicas = {
  1: [
    { id: 1, nombre: 'Característica 1', imagen: 'https://via.placeholder.com/50' },
    { id: 2, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
    { id: 3, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
    { id: 4, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
  ],
  2: [
    { id: 1, nombre: 'Característica 3', imagen: 'https://via.placeholder.com/50' },
    { id: 2, nombre: 'Característica 4', imagen: 'https://via.placeholder.com/50' },
    { id: 3, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
  ],
  3: [
    { id: 1, nombre: 'Característica 3', imagen: 'https://via.placeholder.com/50' },
    { id: 2, nombre: 'Característica 4', imagen: 'https://via.placeholder.com/50' },
    { id: 3, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
    { id: 4, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
    { id: 5, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
  ],
  4: [
    { id: 1, nombre: 'Característica 3', imagen: 'https://via.placeholder.com/50' },
    { id: 2, nombre: 'Característica 4', imagen: 'https://via.placeholder.com/50' },
  ],
  5: [
    { id: 1, nombre: 'Característica 3', imagen: 'https://via.placeholder.com/50' },
    { id: 2, nombre: 'Característica 4', imagen: 'https://via.placeholder.com/50' },
    { id: 3, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
    { id: 4, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
    { id: 5, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
  ],
  6: [
    { id: 1, nombre: 'Incluye accesorios', imagen: 'https://via.placeholder.com/50' },
    { id: 2, nombre: 'Característica 4', imagen: 'https://via.placeholder.com/50' },
  ],
  7: [
    { id: 1, nombre: 'Característica 3', imagen: 'https://via.placeholder.com/50' },
    { id: 2, nombre: 'Característica 4', imagen: 'https://via.placeholder.com/50' },
    { id: 3, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
  ],
  8: [
    { id: 1, nombre: 'Característica 3', imagen: 'https://via.placeholder.com/50' },
    { id: 2, nombre: 'Característica 4', imagen: 'https://via.placeholder.com/50' },
  ],
  9: [
    { id: 1, nombre: 'Característica 3', imagen: 'https://via.placeholder.com/50' },
    { id: 2, nombre: 'Característica 4', imagen: 'https://via.placeholder.com/50' },
    { id: 3, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
    { id: 4, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
    { id: 5, nombre: 'Característica 2', imagen: 'https://via.placeholder.com/50' },
  ],
  10: [
    { id: 1, nombre: 'Característica 3', imagen: 'https://via.placeholder.com/50' },
    { id: 2, nombre: 'Característica 4', imagen: 'https://via.placeholder.com/50' },
  ],
  // Agrega más disfraces y características aquí
};

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8081/disfraces/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  const { nombre, descripcion, imagen } = product;
  const caracteristicasDelDisfraz = disfrazCaracteristicas[id] || [];

  return (
    <div>
      <div className="detail">
        <div>
          <div className="header-detail">
            <button className="volver-btn" onClick={() => navigate(-1)}>←</button>
            <h2>{nombre}</h2>
          </div>
          <div className="content">
            <img src={imagen} alt={nombre} />
            <div>
              <h3>Descripción del disfraz:</h3>
              <p>{descripcion}</p>
            </div>
          </div>
          <div className="Section-Caracteristicas">
            <h3>Características:</h3>
            {caracteristicasDelDisfraz.map(c => (
              <div key={c.id}>
                <img src={c.imagen} alt={c.nombre} />
                <p>{c.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;