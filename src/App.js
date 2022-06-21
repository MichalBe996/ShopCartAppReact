import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
///musimy zdefiniować state w funkcjonalnym komponencie a aby to zrobić używamy useState, które jest hookiem
/// naciskając tab możesz szybko zaimportować coś co akurat piszesz a nie zaimportowałeś tego wcześniej 


///// W A Ż N E useState const[cartItems, setCartItems] = useState([]) -- useState zwraca obecny stan i funkcję zmieniającą go
/// na końcu podajesz stan początkowy/domyślny 


function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist){
      setCartItems(
        cartItems.map(x =>
           x.id === product.id ? {...exist, qty: exist.qty + 1} : x 
           )
        );
    } else {
        setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x)=> x.id !== product.id))

    } else {
      setCartItems(
        cartItems.map(x =>
           x.id === product.id ? {...exist, qty: exist.qty - 1} : x 
           )
        );
    }
  }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}></Basket>
      </div>
      

      
    </div>
  );
}

export default App;
