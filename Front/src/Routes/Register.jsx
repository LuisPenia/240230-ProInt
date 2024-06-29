import { useEffect, useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import AnimationComponent from '../Components/AnimationComponent/AnimationComponent';


const Register = () => {
  /*
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  */

  const [losdatos, setLosdatos] = useState([]);

  useEffect(() => {
    console.log(losdatos);
    console.log("Register")
  }, [losdatos]);
    
    function Submit(e) {
      e.preventDefault();
      const formEle = document.querySelector("form");
      const formDatab = new FormData(formEle);

      setLosdatos(formDatab);

      fetch(
        "https://script.google.com/macros/s/AKfycbwJCA0KZPHtTZONu7MUonjv2csv-CaY_Dvm1CUqHDSJoWcNJh4ndn0mYPHm7RbczoYdtw/exec",
     //"https://script.google.com/macros/s/AKfycbwz8KW1dVjbE6V4t_QhyQSQGKXDGMyj_nPpL-BLbY_JQxk5et08sHCYH04iSHgmVppfcA/exec",
     //"https://script.google.com/macros/s/AKfycbydoaXmkqBz7KoNStTQTHZEfRF-n7XuxzkyrazYc36jjX30_bE8hiHknxR9Ef3pDSGofg/exec",
      //si "https://script.google.com/macros/s/AKfycbxKi2W0RCAq_uaGNzwyia8XfSYjfzyAPcFkg4u4qgaeTLXekVG9IlehkC59qzQqm0yexw/exec",
      // "https://script.google.com/macros/s/AKfycbxNFh_Bo75PMeqglc73H-gLajbaDNI2OGFuAR_fgT3QzQLz4LIuCEjfESnW-IFQwaii/exec",
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
    }

  return (
    <div className="register-wrapper">

      <div className="registerAnimationComponent" >
        <AnimationComponent 
        effect="repetirUna"
        framesFolder="DarkVader"
        framePrefix="DarkVader"
        frameQuantity={48}
        frameForSecond={50} />
      </div>
      
      <div className="register-container">
        <h2 className="register-title">REGISTRATE</h2>

        <form className="register-form"  onSubmit={(e) => Submit(e)}>
          <input placeholder="nombre"   name="Name"     type="text" />
          <input placeholder="apellido" name="LastName" type="text" />
          <input placeholder="email"    name="Email"    type="text" />
          <input placeholder="clave"    name="Message"  type="text" />

          <input name="Name" type="submit" />
        </form>

      </div>
    </div>
  );
};

export default Register;