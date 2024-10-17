const products = [
    {
      id:"Grt223",
      name:"remera Extreme",
      description:"",
      stock: 10,
      price:400,
      image: "/img/remeraroja.png",
      category: "remeras" 
    },
  
    {
      id:"Grt224",
      name:"Remera Fitz boy",
      description:"",
      stock: 4,
      price:420,
      image: "/img/remeraroja.png",
      category: "remeras" 
    },

    {
      id:"Gt2233",
      name:"Gorra kike",
      description:"",
      stock: 2,
      price:1000,
      image: "/img/gorranike.jfif",
      category: "gorras" 
    },

    {
      id:"Hff556",
      name:"Pantalón Dorian",
      description:"",
      stock: 17,
      price:720,
      image: "/img/gorranike.jfif",
      category: "pantalones" 
    },
    
  
    {
      id:"Wre442",
      name:"zapatillas cloudfield",
      description:"",
      stock: 2,
      price:800,
      image: "/img/zapatillaverde.jfif",
      category: "zapatillas" 
    },

    {
      id:"Wre443",
      name:"zapatillas Space",
      description:"",
      stock: 6,
      price:820,
      image: "/img/zapatillaverde.jfif",
      category: "zapatillas" 
    }
  ]
  
  const getProducts = ()=> {

    return new Promise((resolve, reject)=> {

setTimeout(()=>{
resolve(products)

}, 2000)


    }) 


  }

  export { getProducts } //haremos el export de esta forma porque quizás esta archivo tendrá muchos productos para cargar