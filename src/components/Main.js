import React from 'react'
//// ważne, przelatujesz mapą po wszystkich elementach listy, a jeżeli mapujesz w react to każdemu elementowi
/// musisz nadać klucz, stąd key={product.id}
import Product from './Product';
function Main(props) {
    const {products, onAdd} = props;
  return (
    <main className="block col-2">
        <h2>Products</h2>
        <div className="row">
            {products.map((product)=>(
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
            ))}
        </div>
    </main>
  )
}

export default Main