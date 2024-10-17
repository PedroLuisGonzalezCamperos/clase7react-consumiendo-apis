import React from 'react'
import { useEffect } from 'react'

const Titulo = () => {

    const mostrarAnchoVentana = () => {

        console.log("Ancho de la Ventana", window.innerWidth)

    }
    window.addEventListener("resize", mostrarAnchoVentana)//el evento resize pertenece al objeto window por eso se usa el window.
    //resize es redimensionar

useEffect(()=>{

return () => {

    window.removeEventListener("resize",mostrarAnchoVentana)//estoy desuscribiendo un evento manual, esto siempre se hará cada vez que creemos un evento manual 
}

},[])

  return (
    <div>Titulo</div>
  )
}

export default Titulo