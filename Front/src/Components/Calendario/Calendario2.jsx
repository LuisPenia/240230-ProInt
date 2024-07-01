import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Calendario2.css";
import es from "date-fns/locale/es";

function Calendario2({ onDateRangeChange, reservas }) {
  const [monthsToShow, setMonthsToShow] = useState(
    window.innerWidth <= 768 ? 1 : 2
  );

  useEffect (() => {
    console.log(reservas);
  }, [reservas]); // comprobando existencia de dato

  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;

  const startDate = new Date(now - offset - 3 * 60 * 60 * 1000);
  const endDate = new Date(now - offset - 3 * 60 * 60 * 1000);

  const [selectionRange, setSelectionRange] = useState({
    startDate,
    endDate,
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    onDateRangeChange(ranges.selection);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMonthsToShow(1);
      } else {
        setMonthsToShow(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 
  const disabledDates = [];

  if (reservas) {
    const arrayReservas = reservas.split("||"); // crear un array de tuplas de fecha

    arrayReservas.forEach((reserva) => {
      const [start, end] = reserva.split(",").map(date => new Date(date.trim()));
      const currentDate = new Date(start);

      while (currentDate <= end) {
        disabledDates.push(new Date(currentDate)); // Agregar una copia de la fecha actual al array
        currentDate.setDate(currentDate.getDate() + 1); // Mover al siguiente día
      }
    });
  }

  return (
    <div className="calendario-card">
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        rangeColors={["#FFFF00"]}
        showDateDisplay={false}
        months={monthsToShow}
        direction="horizontal"
        locale={es}
        minDate={new Date()}
        disabledDates={disabledDates}
      />
    </div>
  );
}

export default Calendario2;
