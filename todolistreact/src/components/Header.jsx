import React, { useEffect, useState } from 'react';

function Header() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {                        
    const timer = setInterval(() => {
      setHora(new Date());                
    }, 1000);

    return () => clearInterval(timer);
  }, []);                                  

  const formatoHora = hora.toLocaleTimeString();
  
  return (
    <header>
        <h1>
            Gestor de tareas.
        </h1>
        <button className='switchTema'></button>
        <div className='hora'>
          {formatoHora}
        </div>
        </header>
  )
} 

export default Header