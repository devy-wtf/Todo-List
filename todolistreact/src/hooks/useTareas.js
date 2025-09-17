import { useState, useEffect } from 'react';
import {
  obtenerTareas,
  crearTarea as apiCrear,
  editarTarea as apiEditar,
  eliminarTarea as apiEliminar,
  togglearCompletada,
} from '../api/CRUD'

export function useTareas() {
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    (async () => {
      try {
        const lista = await obtenerTareas();
        setTareas(lista);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  const handleCrear = async tarea => {
    try {
      const nueva = await apiCrear(tarea);
      setTareas(prev => [...prev, nueva]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggle = async (id, current) => {
  const actualizada = await togglearCompletada(id, !current);
  setTareas(prev =>
    prev.map(t => (t.id === id ? actualizada : t))
  );
};
  const handleEditar = async (id, cambios) => {
    try {
      const actualizada = await apiEditar(id, cambios);
      setTareas(prev =>
        prev.map(t => (t.id === id ? actualizada : t))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleEliminar = async id => {
    try {
      await apiEliminar(id);
      setTareas(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return {
    tareas,
    error,
    handleCrear,
    handleEditar,
    handleEliminar,
    handleToggle
  };
}