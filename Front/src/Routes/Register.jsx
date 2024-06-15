import { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import AnimationComponent from '../Components/AnimationComponent/AnimationComponent';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!nombre) {
      errors.nombre = 'El nombre es requerido';
    }
    if (!apellido) {
      errors.apellido = 'El apellido es requerido';
    }
    if (!email || !emailRegex.test(email)) {
      errors.correo = 'El correo electrónico es inválido';
    }
    if (!password || password.length < 8) {
      errors.contrasena = 'La contraseña debe tener al menos 8 caracteres';
    }

    if (Object.keys(errors).length === 0) {
      try {
        // Enviar datos al servidor
        const response = await fetch('http://localhost:8081/usuario/registrar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, apellido, email, password }),
        });

        if (response.ok) {
          // Registro exitoso
          setSuccessMessage('Registro exitoso');
          // Limpiar campos del formulario
          setNombre('');
          setApellido('');
          setEmail('');
          setPassword('');
          setErrors({});
        } else {
          // Error en el registro
          const errorData = await response.json();
          setErrors(errorData);
        }
      } catch (error) {
        console.error('Error en el registro:', error);
        setErrors({ general: 'Error en el servidor' });
      }
    } else {
      setErrors(errors);
    }
  };

  //<AnimationComponent effect="cicloInfinito" framesFolder="Thor" framePrefix="Thor" />


  return (
    <div className="register-wrapper">


    
      <div className="registerAnimationComponent" >
        <AnimationComponent 
        effect="repetirUna"S
        framesFolder="DarkVader"
        framePrefix="DarkVader"
        frameQuantity={40}
        frameForSecond={40} />
      </div>
      

      <div className="register-container">
        <h2 className="register-title">REGISTRATE</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="form-input"
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="apellido"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
              className="form-input"
            />
            {errors.apellido && <span className="error-message">{errors.apellido}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              id="correo"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
            {errors.correo && <span className="error-message">{errors.correo}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="contrasena"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
            {errors.contrasena && <span className="error-message">{errors.contrasena}</span>}
          </div>
          <div className="checkbox-group">
            <label htmlFor="TerminosYCondiciones" className="checkbox-label">
              <input
                type="checkbox"
                id="TerminosYCondiciones"
                className="checkbox-input"
                required
              />
              Acepto los términos y la política de privacidad
            </label>
          </div>
          <button type="submit" className="register-button">
            Registrar Cuenta
          </button>
          <label htmlFor="AlreadyRegistered" className="register-link">
  ¿Ya tienes cuenta? <Link to={"/Login"} className="login-link">Inicia Sesion!</Link>
</label>
        </form>
        {errors.general && <p className="error-message">{errors.general}</p>}
      </div>
    </div>
  );
};

export default Register;