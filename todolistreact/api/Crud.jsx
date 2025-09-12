const BASE_URL = 'http://localhost:3001/tareas'

export const obtenerTareas = async () =>  {
    const respuesta = await fetch(BASE_URL)

    if (!respuesta.ok) {
        throw new Error(`Error al obtener tareas: ${response.status}`)
    }
    const tareas = await respuesta.json()
    return tareas
    try {
        const tareas = await obtenerTareas()
    } catch (error) {
        console.error(error)
    }
}


export const crearTarea = async (tarea) => {
    const respuesta = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarea)
    }) 
    if (!respuesta.ok){
        throw new Error(`Error al obtener tareas: ${response.status}`)
    }
        const nuevaTarea = await respuesta.json()
        return nuevaTarea
        try {
      const tareaGuardada = await crearTarea({
         nombre: 'Mi nueva tarea',
         descripcion: 'Detalles…'
  });
     setTareas(prev => [...prev, tareaGuardada]);
} catch (error) {
    console.error('No se pudo crear la tarea:', error);
}
}