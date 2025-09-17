import React  from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaTareas from './components/ListaTareas'
import { useTareas } from './hooks/useTareas';


function App() {
    const {
    tareas,
    error,
    handleCrear,
    handleEditar,
    handleEliminar,
    handleToggle
  } = useTareas();

  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
    <Header />
      <main>
        <Formulario crearTarea={handleCrear} />
        <ListaTareas
          tareas={tareas}
          onEditar={handleEditar}
          onEliminar={handleEliminar}
          onToggle={handleToggle} 
        />
      </main>
    </>
  )
}

export default App
