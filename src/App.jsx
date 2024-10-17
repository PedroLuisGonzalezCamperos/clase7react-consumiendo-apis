import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'


function App() {
  //En esta sección se coloca lógica
//Los hooks son funciones propias de react, los hooks de estado sirven para guardar información que en algún momento se va a actualizar y que qeramos que se actualice la interfaz del usuario
  return ( //abajo todo deberá estar dentro de con contendor padre, no pueden haber dos contenedores padres separados
   <div> 

<NavBar/>
<ItemListContainer saludo = {"Hola mundo"}/>



   </div>
   
  )
}

export default App
