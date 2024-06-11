import React, { useEffect } from 'react'; // Importa React y useEffect de la librería React
import { useParams } from 'react-router-dom'; // Importa useParams de react-router-dom para obtener los parámetros de la URL
import DatePicker from 'react-datepicker'; // Importa el componente DatePicker de react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos CSS para el DatePicker
import './Detail.css'; // Importa los estilos CSS personalizados para el componente Detail

const Detail = ({ products }) => { // Define el componente Detail que recibe una prop llamada products
  const { productId } = useParams(); // Extrae el productId de los parámetros de la URL usando useParams
  const product = products.find((product) => product.id === parseInt(productId)); // Busca el producto en la lista de productos que tiene el id correspondiente

  if (!product) { // Si el producto no se encuentra, muestra un mensaje de error
    return <div>Product not found</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana a la parte superior al montar el componente
  }, []); // El array vacío como dependencia asegura que esto ocurra solo una vez al montar el componente

  // Función para parsear las reservas en un formato que react-datepicker pueda entender
  const parseReservations = (reservations) => {
    if (!reservations) return []; // Si no hay reservas, retorna un array vacío

    // Divide las reservas por el carácter '|' y luego por ',' para obtener las fechas de inicio y fin
    return reservations.split('|').map(range => {
      const [start, end] = range.split(','); // Separa cada tupla de fechas
      return {
        startDate: new Date(start), // Convierte la fecha de inicio a un objeto Date
        endDate: new Date(end) // Convierte la fecha de fin a un objeto Date
      };
    });
  };

  const reservations = parseReservations(product.reservas); // Llama a la función parseReservations con las reservas del producto

  return (
    <div className="Detail"> {/* Contenedor principal del componente Detail */}

      <div className="Detail-imgContent"> {/* Contenedor de la imagen del producto */}
        <img src={product.imageUrl} alt={product.name} /> {/* Muestra la imagen del producto */}
      </div>

      <div className="Detail-textContent"> {/* Contenedor del texto descriptivo del producto */}
        <h2>{product.name}</h2> {/* Muestra el nombre del producto */}
        <h2>Precio: {product.price}</h2> {/* Muestra el precio del producto */}
        <a>...</a> {/* Enlace o espacio para información adicional */}
        <p>{product.subCategory} para {product.mainCategory}</p> {/* Muestra la subcategoría y la categoría principal del producto */}
        <p>Talla: {product.size}</p> {/* Muestra la talla del producto */}
        <a>...</a> {/* Enlace o espacio para información adicional */}
        <p>{product.largeDescription}</p> {/* Muestra una descripción larga del producto */}
      </div>

      <div className="Detail-calendarContent"> {/* Contenedor de los calendarios de reservas */}
        {reservations.map((reservation, index) => ( // Itera sobre las reservas parseadas
          <div key={index}> {/* Contenedor para cada reserva, con una clave única */}
            <DatePicker
              selected={reservation.startDate} // Fecha seleccionada inicial
              startDate={reservation.startDate} // Fecha de inicio del rango
              endDate={reservation.endDate} // Fecha de fin del rango
              selectsRange // Habilita la selección de un rango de fechas
              inline // Muestra el calendario inline, dentro del contenedor
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Detail; // Exporta el componente Detail para su uso en otras partes de la aplicación

