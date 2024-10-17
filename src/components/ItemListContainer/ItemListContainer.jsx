import React from 'react'
import "./ItemListContainer.css"
import ItemList from './ItemList.jsx';
import { useState, useEffect } from 'react';
import { getProducts } from '../../data/data.js';
const ItemListContainer = ({saludo}) => { // lo que se introduzca dentro del paréntesis se recibe como objeto y para obtener información del objeto se desestructura, esto lo hacemos usando llaves {saludos}

//En JavaScript, un Promise (promesa) es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante. Es una forma de manejar operaciones que toman tiempo, como llamadas a servidores o temporizadores, sin bloquear el flujo de ejecución del código.

//Una nueva promesa se crea usando la palabra clave new Promise(), que acepta una función con dos parámetros: resolve y reject. Estos representan las dos posibles resoluciones de la promesa:

//resolve: Se llama cuando la operación asíncrona se completa con éxito.
//reject: Se llama cuando la operación falla.

const [products, setProducts] =useState([])

  const condicion = false;

  /*
  const promesa = new Promise((resolve, reject)=> {

if (condicion) {

  resolve("se resolvió la promesa")

} else {

reject("Se rechazó la promesa")

}

  })

  */

useEffect(()=>{
//useEffect se usa para que solo se ejecute durante el montaje
  getProducts()
  
  .then((data)=>{

setProducts(data)//se actualiza el estado se guarda en la variable products dentro del corchete arriba  donde esta useState
  })
  
  .catch((error)=>{

console.log(error)

  })

  .finally(()=> {

console.log("finalizó la promesa")

  })

},[])

 

//siempre que usemos código javascript dentro de return se usarán llaves
//Se usa key para evitar un error de react, ocuure que al colocar key se le ayuda a react a identificar cada cart creada

//Se usa la syntaxis <ItemList products = {products}/> porque products no está definido en el componente ItemList

  return (
    <div>

    <h2>{saludo}</h2>

<ItemList products = {products}/>
    </div>
    
  )
}

export default ItemListContainer