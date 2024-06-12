import './Footer.css';
import logo from '../../assets/logoFooter.png';

import serie00 from './iron series/Ensamblaje1_0000.png';
import serie01 from './iron series/Ensamblaje1_0001.png';
import serie02 from './iron series/Ensamblaje1_0002.png';
import serie03 from './iron series/Ensamblaje1_0003.png';
import serie04 from './iron series/Ensamblaje1_0004.png';
import serie05 from './iron series/Ensamblaje1_0005.png';
import serie06 from './iron series/Ensamblaje1_0006.png';
import serie07 from './iron series/Ensamblaje1_0007.png';
import serie08 from './iron series/Ensamblaje1_0008.png';
import serie09 from './iron series/Ensamblaje1_0009.png';
import serie10 from './iron series/Ensamblaje1_0010.png';
import serie11 from './iron series/Ensamblaje1_0011.png';
import serie12 from './iron series/Ensamblaje1_0012.png';
import serie13 from './iron series/Ensamblaje1_0013.png';
import serie14 from './iron series/Ensamblaje1_0014.png';
import serie15 from './iron series/Ensamblaje1_0015.png';
import serie16 from './iron series/Ensamblaje1_0016.png';
import serie17 from './iron series/Ensamblaje1_0017.png';
import serie18 from './iron series/Ensamblaje1_0018.png';
import serie19 from './iron series/Ensamblaje1_0019.png';
import serie20 from './iron series/Ensamblaje1_0020.png';
import serie21 from './iron series/Ensamblaje1_0021.png';
import serie22 from './iron series/Ensamblaje1_0022.png';
import serie23 from './iron series/Ensamblaje1_0023.png';
import serie24 from './iron series/Ensamblaje1_0024.png';
import serie25 from './iron series/Ensamblaje1_0025.png';
import serie26 from './iron series/Ensamblaje1_0026.png';
import serie27 from './iron series/Ensamblaje1_0027.png';
import serie28 from './iron series/Ensamblaje1_0028.png';
import serie29 from './iron series/Ensamblaje1_0029.png';
import serie30 from './iron series/Ensamblaje1_0030.png';
import serie31 from './iron series/Ensamblaje1_0031.png'

import icoface from "../../assets/iconos/ico-facebook.png";
import icoinsta from "../../assets/iconos/ico-instagram.png";
import icotiktok from "../../assets/iconos/ico-tiktok.png";
import icowpp from "../../assets/iconos/ico-whatsapp.png";
import { useEffect, useState } from 'react';

const Footer = () => {
const currentYear = new Date().getFullYear();

const frames = [
  serie00,
  serie01,
  serie02,
  serie03,
  serie04,
  serie05,
  serie06,
  serie07,
  serie08,
  serie09,
  serie10,
  serie11,
  serie12,
  serie13,
  serie14,
  serie15,
  serie16,
  serie17,
  serie18,
  serie19,
  serie20,
  serie21,
  serie22,
  serie23,
  serie24,
  serie25,
  serie26,
  serie27,
  serie28,
  serie29,
  serie30,
  serie31,
];

const [currentFrame, setCurrentFrame] = useState(0);

useEffect(() => {
  const frameCount = frames.length;
  const interval = setInterval(() => {
    setCurrentFrame(prevFrame => (prevFrame + 1) % frameCount);
  }, 100); // Cambia el fotograma cada 100ms

  return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
}, [frames.length]);

















return (

  <footer className="footer">
  <div className="container">
    <div className="footer-content">
      
      <img src={logo} alt="Logo de la empresa" className="footer-logo" />

      <div className="animation-container">
        <img src={frames[currentFrame]} alt="Animación" />
      </div>

 

 
      
      <p className="footer-copyright">
        &copy; {currentYear} Nombre de la empresa. Todos los derechos reservados.
      </p>
      <div className="footer-social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icoface} alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icoinsta} alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icotiktok} alt="TikTok" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icowpp} alt="WhatsApp" />
        </a>
      </div>
    </div>
  </div>
  <script src="./animacion.js"></script>
</footer>
);
};
export default Footer;