import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import AnimationComponent from '../Components/AnimationComponent/AnimationComponent';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch('http://localhost:8081/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Inicio de sesión exitoso
        // Aquí puedes redirigir al usuario a otra página o realizar alguna acción adicional
        console.log('Inicio de sesión exitoso');
      } else if (response.status === 401) {
        // Credenciales incorrectas
        setError('Algunos de los datos ingresados son incorrectos');
      } else {
        // Otro error
        setError('Ha ocurrido un error inesperado');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      setError('Ha ocurrido un error inesperado');
    }
  };

  return (
    <div className="login-wrapper">



      <div >
        <AnimationComponent 
        effect="cicloInfinito"
        framesFolder="Thor"
        framePrefix="Thor"
        frameQuantity={50}
        frameForSecond={100} />
      </div>
      







      <div className="login-container">
        <div className="login-content">
          <h2 className="login-title">ACCESO</h2>
          {error && <p className="error-message">{error}</p>}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input type="checkbox" id="mantenerConectado" className="checkbox-input" />
              <label htmlFor="mantenerConectado" className="checkbox-label">
                Mantenerme Conectado
              </label>
              <label htmlFor="Olvidaste tu contraseña" className="forgot-password-label">
                <Link to={"#"} className="forgot-password-link">
                  ¿Olvidaste tu contraseña?
                </Link>
              </label>
            </div>
            <button type="submit" className="login-button">
              Acceder
            </button>
            <p className="register-link">
              ¿No tienes una cuenta? <Link to="/Register" className="register-link-text">Regístrate!</Link>
            </p>
          </form>
        </div>
      </div>










    </div>
  );
};

export default Login;


