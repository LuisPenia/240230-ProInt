import './Footer.css';
import logo from '../../assets/logoFooter.png';


import serie00 from '../../assets/disfraLand series/LogoMov_0000.png';
import serie01 from '../../assets/disfraLand series/LogoMov_0001.png';
import serie02 from '../../assets/disfraLand series/LogoMov_0002.png';
import serie03 from '../../assets/disfraLand series/LogoMov_0003.png';
import serie04 from '../../assets/disfraLand series/LogoMov_0004.png';
import serie05 from '../../assets/disfraLand series/LogoMov_0005.png';
import serie06 from '../../assets/disfraLand series/LogoMov_0006.png';
import serie07 from '../../assets/disfraLand series/LogoMov_0007.png';
import serie08 from '../../assets/disfraLand series/LogoMov_0008.png';
import serie09 from '../../assets/disfraLand series/LogoMov_0009.png';
import serie10 from '../../assets/disfraLand series/LogoMov_0010.png';
import serie11 from '../../assets/disfraLand series/LogoMov_0011.png';
import serie12 from '../../assets/disfraLand series/LogoMov_0012.png';
import serie13 from '../../assets/disfraLand series/LogoMov_0013.png';
import serie14 from '../../assets/disfraLand series/LogoMov_0014.png';
import serie15 from '../../assets/disfraLand series/LogoMov_0015.png';
import serie16 from '../../assets/disfraLand series/LogoMov_0016.png';
import serie17 from '../../assets/disfraLand series/LogoMov_0017.png';
import serie18 from '../../assets/disfraLand series/LogoMov_0018.png';
import serie19 from '../../assets/disfraLand series/LogoMov_0019.png';
import serie20 from '../../assets/disfraLand series/LogoMov_0020.png';
import serie21 from '../../assets/disfraLand series/LogoMov_0021.png';
import serie22 from '../../assets/disfraLand series/LogoMov_0022.png';
import serie23 from '../../assets/disfraLand series/LogoMov_0023.png';
import serie24 from '../../assets/disfraLand series/LogoMov_0024.png';
import serie25 from '../../assets/disfraLand series/LogoMov_0025.png';
import serie26 from '../../assets/disfraLand series/LogoMov_0026.png';
import serie27 from '../../assets/disfraLand series/LogoMov_0027.png';
import serie28 from '../../assets/disfraLand series/LogoMov_0028.png';
import serie29 from '../../assets/disfraLand series/LogoMov_0029.png';
import serie30 from '../../assets/disfraLand series/LogoMov_0030.png';
import serie31 from '../../assets/disfraLand series/LogoMov_0031.png';
import serie32 from '../../assets/disfraLand series/LogoMov_0032.png';
import serie33 from '../../assets/disfraLand series/LogoMov_0033.png';
import serie34 from '../../assets/disfraLand series/LogoMov_0034.png';

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
  serie32,
  serie33,
  serie34,
];

const [currentFrame, setCurrentFrame] = useState(0);

useEffect(() => {
  const frameCount = frames.length;
  const interval = setInterval(() => {
    setCurrentFrame(prevFrame => (prevFrame + 1) % frameCount);
  }, 48); // Cambia el fotograma cada 100ms

  return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
}, [frames.length]);

















return (

  <footer className="footer">
  <div className="container">
    <div className="footer-content">
      


      <div className="animation-container">
        <img src={frames[currentFrame]} alt="Animación" />
      </div>

 

 
      
      <p className="footer-copyright">
        &copy; {currentYear} Disfrazlandia. Todos los derechos reservados.
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
  
</footer>
);
};
export default Footer;