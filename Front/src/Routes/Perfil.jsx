import { useEffect, useState } from 'react';
import { useUser } from '../../src/UserContext';
import "./Perfil.css";

const Perfil = ({ products }) => {
  const { user, logout } = useUser();
  
  const [fechas, setFechas]         = useState ([]);
  const [ventas, setVentas]         = useState ([]);
  const [mercaderia, setMercaderia] = useState ([]);

  useEffect(() => {
    setFechas     (user.purchaseHistoryDate.split("|"))
    setVentas     (user.purchaseHistorySale.split("|"))
    setMercaderia (user.purchaseHistoryId.split("|"))
  }, []);

  if (user.purchaseHistoryId){
    console.log(mercaderia);
    console.log(ventas);
    console.log(fechas);
  }

    const [currentProducts, setCurrentProducts] = useState(
  [
  
    { id:1,name:'Spiderman infantil',price:21.99,mainCategory:'Niños',subCategory:'Comic',imageUrl:'https://m.media-amazon.com/images/I/71RwXhXL71L._AC_SX569_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Traje ajustado de licra con estampado de',largeDescription:'Traje ajustado de licra con estampado de telaraña, máscara y lanzadores de telarañas',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
    { id:2,name:'Bombero infantil',price:19.75,mainCategory:'Niños',subCategory:'Oficios',imageUrl:'https://m.media-amazon.com/images/I/81F8WH2Oy-L._AC_SX569_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'M',description:'Mono de trabajo resistente al fuego, cas',largeDescription:'Mono de trabajo resistente al fuego, casco y herramientas',reservas:'2024-06-15,2024-06-18|2024-06-20,2024-07-23'},
    { id:3,name:'Cleopatra adulto',price:25.49,mainCategory:'Mujer',subCategory:'Personaje histórico',imageUrl:'https://m.media-amazon.com/images/I/61ej8HfX28L._AC_SY550_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'L',description:'Vestido largo de tela brillante, collar ',largeDescription:'Vestido largo de tela brillante, collar y brazaletes dorados',reservas:'2024-06-04,2024-06-06|2024-06-15,2024-06-18'},
    { id:4,name:'Arlequin adulto',price:32.47,mainCategory:'Mujer',subCategory:'Comic',imageUrl:'https://m.media-amazon.com/images/I/61rkb1JXfoL._AC_SL1470_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'S',description:'Mono de cuerpo entero negro y rojo decor',largeDescription:'Mono de cuerpo entero negro y rojo decorado con rombos, volante rojo en el huello y antifaz negro.',reservas:'2024-06-04,2024-06-06'},
    { id:5,name:'Caballero medieval adulto',price:39.98,mainCategory:'Hombre',subCategory:'Personaje histórico',imageUrl:'https://m.media-amazon.com/images/I/91huuXnwjyL._AC_SX679_.jpg',imageURL_2:'',imageURL_3:'',imageURL_4:'',size:'XL',description:'Túnica con capa, cinturón, 2 medallones ',largeDescription:'Túnica con capa, cinturón, 2 medallones y puños. Otros accesorios no están incluidos.',reservas:'2024-06-20,2024-07-23'},
   
  ]);
  
  return (

    <div className='perfilUsuario'>
      <div>
        <h4>
          {'Hola '+
          user.name +" "+ user.lastname
          +', qué grato tenerte por aquí. Te invitamos a revisar tu perfil y el historial de productos con los que hemos interactuado.'}
        </h4>
      </div>

      <div>
          <table className='tablaFilter'>
            <thead>
              <tr>
                <th>{'Nombre:    '+user.name +" "+ user.lastname}</th>
                <th>{'Correo:    '+user.email}</th>
              </tr>
            </thead>
          </table>
       </div>

      <div>
       <table>
        <thead>
          <tr>
            <th>Detalles</th>
            <th>Precio</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product.id}>
              <td className='imagenPerfil' >
                <img src={product.imageUrl} alt={product.name} />
                <p>{product.name}</p>
              </td>
              <td>{product.price}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      <a>{user.purchaseHistoryId}</a>
      <div>{user.purchaseHistorySale}</div>
      <div>{user.purchaseHistoryDate}</div>

    </div>
    
  )
}

export default Perfil