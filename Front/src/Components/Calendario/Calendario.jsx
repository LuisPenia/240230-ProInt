import React from 'react';
import './Calendario.css';

const Calendario = ({ diaInicio, nombreMes }) => {
  const diasDeLaSemana = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  const diasDelMes = Array.from({ length: 30 }, (_, i) => i + 1); // Suponiendo un mes de 30 días

  // Crear espacios vacíos para los días antes del inicio
  const espaciosVacios = Array.from({ length: diaInicio }, (_, i) => <div key={`empty-${i}`} className="dia-mes"></div>);

  return (
    <div className="calendario">
      <h2 className="mes-nombre">{nombreMes}</h2>
      <div className="dias-semana">
        {diasDeLaSemana.map(dia => (
          <div key={dia} className="dia-semana">{dia}</div>
        ))}
      </div>
      <div className="dias-mes">
        {espaciosVacios}
        {diasDelMes.map(dia => (
          <div key={dia} className="dia-mes">{dia}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendario;
