import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from "../../assets/HamburguesaIcon/menu.svg";
import closeIcon from "../../assets/HamburguesaIcon/close.svg";
import './Header.css';
import SlidingImage from '../Miku/SlidingImage';  // Asegúrate de ajustar la ruta según tu estructura de proyecto
import SlidingImage_1 from '../Miku/SlidingImage_1';
import AnimationComponent from '../AnimationComponent/AnimationComponent';

const Header = () => {

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
          <AnimationComponent
          effect="repetirUna"
          framesFolder="LogoMov"
          framePrefix="LogoMov"
          frameQuantity={30}
          frameForSecond={15}/>
        </Link>
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