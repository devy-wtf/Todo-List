const BASE_URL = 'http://localhost:3001/tareas';


export const obtenerTareas = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error(`Error al obtener tareas: ${res.status}`);
  return res.json();
};

export const crearTarea = async tarea => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tarea),
  });
  if (!res.ok) throw new Error(`Error al crear tarea: ${res.status}`);
  return res.json();
};

export const editarTarea = async (id, cambios) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cambios),
  });
  if (!res.ok) throw new Error(`Error al editar tarea: ${res.status}`);
  return res.json();
};

export const eliminarTarea = async id => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error(`Error al eliminar tarea: ${res.status}`);
  return id;
};
export const togglearCompletada = async (id, completada) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completada }),
  });
  if (!res.ok) throw new Error(`Error al togglear: ${res.status}`);
  return res.json();
};