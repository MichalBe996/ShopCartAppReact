import React from 'react'
/// dodawaj alt do obrazków, tutaj na przykład jako product.name
function Product(props) {
    const {product, onAdd} = props;
  return (
    <div>
        <img className="small" src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
            <button onClick={()=>onAdd(product)}>Add to cart</button>
        </div>
    </div>
  )
}

export default Product