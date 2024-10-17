import React from 'react'

const Item = ({product}) => {
  return (
    <div >
<img src={product.image} className="img-item" alt="" width={100} />
      <p className="text-item">{product.name}</p>
      <p className="text-item">${product.price}</p>
  </div>
  )
}

export default Item