import React from 'react'

const ContadorView = ({contador2, aumentarContador2}) => {
  return (
    <div>
    <p>Contador: {contador2}</p>
    <button onClick={aumentarContador2}>+</button>
    
    
    
        </div>
  )
}

export default ContadorView