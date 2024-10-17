import React from 'react'
import { useState, useEffect } from 'react' // useState sería un hook de estado
import ContadorView from './ContadorView'
import Titulo from './Titulo'

const Contador = () => {

  console.log("Se montó o se actualizó el componente")
  const [toggle, setToggle] =useState(true)//un toggle es una casilla de verificación que le permite al usuario cambiar un opción a prendido o apagado.

const [contador, setContador] = useState(0)//aquí dentro del array el primer valor "contador" tiene el valor inicial de la variable de estado, el segundo valor será la función para actualiar el estado la cual por convensión lelva el prefijo set al principio. 0 en useState es el valor inicial.

//Los hooks se colocan en la árte de arriba pegado del nombre de la función. Todos los hooks comienzan con el prefijo "use"

const aumentarContador = () => {

 
if (contador<10) {

    setContador(contador +1)

}


}

useEffect(()=> {

  const fetchApi = () => {//cada vez que presione el contador se mostrará de nuevo el llamado a la apI y no se quiere eso, para evitar esto se utiliza useEffect que servirá para ejecutar funciones en algunas etapas. Al colocar el fetch dentro de useEffect se ejecutará una sola vez y no cada vez que se actualice la variable setContador. Siempre que se le haga fetch a una Api se usara useEffect.
    //Ejemplos de uso: llamadas a Api, suscripciones a eventListener

    fetch( "https://fakestoreapi.com/products" )
    .then((respuesta)=>respuesta.json())
    .then((data)=> console.log(data))
    
    
    }
    
    fetchApi()

}, [])// el array vacio indica que useEffect se ejecutará solo en el montaje, se podrían incluir variables dentro del arreglo, si por ejemplo coloco la variable "contador" cada vez que se se modifique la variable se ejecutará useEffect



const alternarToggle = () => {


setToggle(!toggle)//negará el valor de toggle

}

useEffect(()=> {

  console.log("1er useEffect")

}, [])

useEffect(()=> {
console.log("2do useEffect")
//se ejecuta cada vez que  contador cambie
//Ejemplo de uso: para realizar acciones específicas cuando una variable dependiente cambie

},[contador])



useEffect(()=>{

  // al no colocar corchetes [] se ejecuta en el montaje y cada vez que se actualice cada estado del componente
  //ejemplo de uso: operaciones globales de monitoreo o de registro, acyualizaciones geenrales del componente

console.log("3er useEffect")


})

  return ( //antes en donde estaba ContadorView había un código el cual se está importando ahora del componente ContadorView. 

    

  <>
  <div>
    <p>valor toggle:{toggle.toString()}</p>{//toggle se debe convertir a string utilizando .toString(), al no hacerlo se leera como un objeto.
    }
    <button onClick={alternarToggle}>Alternar valor del toggle </button>

    {

      toggle === true && <Titulo/> //equivalente a un if  ya que if es una expresión que es de javascript y no de react 


    }
  </div>
<ContadorView contador2 = {contador} aumentarContador2 ={aumentarContador}/>
</>
  )
}

export default Contador