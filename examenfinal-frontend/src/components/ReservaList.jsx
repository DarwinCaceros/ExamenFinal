import React, { useEffect, useState } from "react";
import axios from "axios";

const ReservaList = () => {
  const [reservas, setReservas] = useState([]);
  const [mensaje, setMensaje] = useState("");

  
  useEffect(() => {
    fetchReservas();
  }, []);

  const fetchReservas = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/reservas");
      setReservas(response.data);
    } catch (error) {
      setMensaje("Error al cargar las reservas");
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/reservas/${id}`);
      setMensaje("Reserva eliminada ");
      fetchReservas(); 
    } catch (error) {
      setMensaje("Error al eliminar ");
      console.error(error);
    }
  };

  return (
    <div className="list-container">
      <h2>Lista de Reservas</h2>
      {mensaje && <p>{mensaje}</p>}
      <table className="reservas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Cliente</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Tipo de Habitación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.length > 0 ? (
            reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.id}</td>
                <td>{reserva.nombreCliente}</td>
                <td>{reserva.fechaInicio}</td>
                <td>{reserva.fechaFin}</td>
                <td>{reserva.tipoHabitacion}</td>
                <td>
                  <button
                    className="btn-update"
                    onClick={() => alert("Actualizacion")}
                  >
                    Actualizar
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(reserva.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No hay reservas registradas.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReservaList;