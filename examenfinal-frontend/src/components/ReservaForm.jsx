import React, { useState } from "react";
import axios from "axios";

const ReservaForm = () => {
  const [reserva, setReserva] = useState({
    nombreCliente: "",
    fechaInicio: "",
    fechaFin: "",
    tipoHabitacion: "Sencilla",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReserva({ ...reserva, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/reservas", reserva);
      setMensaje("Su reserva fue registrada.");
      setReserva({
        nombreCliente: "",
        fechaInicio: "",
        fechaFin: "",
        tipoHabitacion: "Sencilla",
      });
    } catch (error) {
      setMensaje("Error al registrar intente nuevamente.");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Registrar Nueva Reserva</h2>
      {mensaje && <p>{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombreCliente">Nombre del Cliente:</label>
          <input
            type="text"
            id="nombreCliente"
            name="nombreCliente"
            value={reserva.nombreCliente}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaInicio">Fecha de Inicio:</label>
          <input
            type="date"
            id="fechaInicio"
            name="fechaInicio"
            value={reserva.fechaInicio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaFin">Fecha de Fin:</label>
          <input
            type="date"
            id="fechaFin"
            name="fechaFin"
            value={reserva.fechaFin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipoHabitacion">Tipo de Habitación:</label>
          <select
            id="tipoHabitacion"
            name="tipoHabitacion"
            value={reserva.tipoHabitacion}
            onChange={handleChange}
            required
          >
            <option value="Sencilla">Sencilla</option>
            <option value="Doble">Doble</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Registrar Reserva</button>
      </form>
    </div>
  );
};

export default ReservaForm;