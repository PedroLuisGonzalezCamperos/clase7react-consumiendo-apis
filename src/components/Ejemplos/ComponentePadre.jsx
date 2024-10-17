import React from 'react'

const ComponentePadre = ({ children }) => {//children es una palabra reservada no se puede cambiar de valor, usar children es para recibir y mostrar lo que este dentro del componente padre, para hacer layouts y footer es recomendable usar children
  return (
    <div>
        <div>NavBar</div>
        {children}
        <div>Footer</div>
        </div>
  )
}

export default ComponentePadre