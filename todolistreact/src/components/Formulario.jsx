
import React, { useState } from 'react';
import '../styles/Formulario.css';


export default function Formulario({ crearTarea }) {
  const [nombreTarea, setNombreTarea] = useState('');
  const [descTarea, setDescTarea] = useState('');

  const manejarEnvio = async e => {
    e.preventDefault();
    await crearTarea({ nombre: nombreTarea, descripcion: descTarea, completada: false});
    setNombreTarea('');
    setDescTarea('');
  };


  

  return (
    <form className="formularioTarea" onSubmit={manejarEnvio}>
      <label htmlFor="nombreTarea">Nombre de la tarea:</label>
      <input
        id="nombreTarea"
        type="text"
        value={nombreTarea}
        onChange={e => setNombreTarea(e.target.value)}
        placeholder="Ingrese el nombre de su tarea"
        required
      />

      <label htmlFor="descTarea">Descripción de la tarea:</label>
      <textarea
        id="descTarea"
        value={descTarea}
        onChange={e => setDescTarea(e.target.value)}
        placeholder="Escriba la descripción de la tarea"
        required
      />

      <button className="enviarBtn" type="submit">
        Enviar
      </button>
    </form>
  );
}