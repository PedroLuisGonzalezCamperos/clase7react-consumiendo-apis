import React from 'react'

import carritoVariable from "../../assets/carrito.jpg" //la imagen se guardara en la variable carritoVariable

const Cartwidget = () => {
  return (
    <div>

<img src={carritoVariable} alt="" width={100}/> {// las imágenes fijas que no cambian se guardarán en la carpeta assets y las imágenes dinámicas en la carpeta public


}

    </div>
  )
}

export default Cartwidget