import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import menuIcon from "../../assets/HamburguesaIcon/menu.svg";
import closeIcon from "../../assets/HamburguesaIcon/close.svg";
import './Header.css';

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
import SlidingImage from '../Miku/SlidingImage';  // Asegúrate de ajustar la ruta según tu estructura de proyecto
import SlidingImage_1 from '../Miku/SlidingImage_1';

const Header = () => {


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





  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  useEffect(() => {
    // Simular obtención de datos del usuario desde el backend
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        setUserName(data.firstName);
        setUserLastName(data.lastName);
        setIsLoggedIn(true); // Establecer isLoggedIn a true después de obtener los datos del usuario
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setUserLastName('');
  };

  const getInitials = () => {
    const firstInitial = userName.charAt(0).toUpperCase();
    const lastInitial = userLastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <header className='header'>
      <div className='header__left'>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
  
      <div className="animation-container">
        <img src={frames[currentFrame]} alt="Animación" />
      </div>

      <SlidingImage />
      <SlidingImage_1/>

      <div className='header__right'>
        {isLoggedIn ? (
          <>
            <div className="header__user">
              <Link to={"/Perfil"}>
                <div className="header__user-initials">
                  {getInitials()}
                </div>
              </Link>
              <button className="header__logout" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to={"/Register"}>
              <button className='header__button b2'>Crear cuenta</button>
            </Link>
            <Link to={"/Login"}>
              <button className='header__button b1'>Iniciar sesión</button>
            </Link>
            <button className='header__hamburger' onClick={toggleMenu}>
              <img src={isOpen ? closeIcon : menuIcon} alt="Menu" />
            </button>
          </>
        )}
      </div>
      {isOpen && !isLoggedIn && (
        <div className='header__menu'>
          <Link to="/Register" className='header__menu-item'>Crear cuenta</Link>
          <Link to="/Login" className='header__menu-item'>Iniciar sesión</Link>
        </div>
      )}
    </header>
  );
};

export default Header;