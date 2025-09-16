import React, { useState } from 'react';

export default function ListaTareas({ tareas, onEditar, onEliminar }) {
  const [editTarget, setEditTarget] = useState(null);
  const [editNombre, setEditNombre] = useState('');
  const [editDesc, setEditDesc] = useState('');

  const iniciarEdicion = tarea => {
    setEditTarget(tarea);
    setEditNombre(tarea.nombre);
    setEditDesc(tarea.descripcion);
  };

  const cancelarEdicion = () => {
    setEditTarget(null);
    setEditNombre('');
    setEditDesc('');
  };

  const manejarEdicion = async e => {
    e.preventDefault();
    await onEditar(editTarget.id, {
      nombre: editNombre,
      descripcion: editDesc,
    });
    cancelarEdicion();
  };

  if (!tareas.length) {
    return <p>No hay tareas disponibles.</p>;
  }

  return (
    <ul className="listaTareas">
      {tareas.map(tarea =>
        editTarget?.id === tarea.id ? (
          <li key={tarea.id}>
            <form className="formEdicion" onSubmit={manejarEdicion}>
              <input
                type="text"
                value={editNombre}
                onChange={e => setEditNombre(e.target.value)}
                required
              />
              <textarea
                value={editDesc}
                onChange={e => setEditDesc(e.target.value)}
                required
              />
              <button type="submit">Guardar</button>
              <button type="button" onClick={cancelarEdicion}>
                Cancelar
              </button>
            </form>
          </li>
        ) : (
          <li key={tarea.id} className="tareaItem">
            <h3>{tarea.nombre}</h3>
            <p>{tarea.descripcion}</p>
            <button onClick={() => onEliminar(tarea.id)}>Borrar</button>
            <button onClick={() => iniciarEdicion(tarea)}>Editar</button>
          </li>
        )
      )}
    </ul>
  );
}
