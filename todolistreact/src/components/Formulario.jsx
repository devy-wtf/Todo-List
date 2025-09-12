import React, {useState} from 'react'

function Formulario({crearTarea}) {
    const [nombreTarea, setNombreTarea] = useState('')
    const [descTarea, setDescTarea] = useState('')

    const manejarEnvio = async (e) => {
        e.preventDefault()
        const nuevaTarea = {nombreTarea, descTarea}
        await crearTarea(nuevaTarea)
        setNombreTarea('')
        setDescTarea('')

    }
  return (
     <form className="formularioTarea" onSubmit={handleSubmit}>
      <label htmlFor="nombreTarea">Nombre de la tarea:</label>
      <input
        id="nombreTarea"
        type="text"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Ingrese el nombre de su tarea"
        required
      />

      <label htmlFor="descTarea">Descripción de la tarea:</label>
      <textarea
        id="descTarea"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        placeholder="Escriba la descripción de la tarea"
        required
      />

      <button className="enviarBtn" type="submit">
        Enviar
      </button>
    </form>
  )
}

export default Formulario