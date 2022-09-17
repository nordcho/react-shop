import './App.css';
import './components/Filters/Filters.css'
import './components/Header/Header.css'
import './components/Main/Main.css'
import './components/Modal/Modal.css'
import './components/ProductCard/ProductCard.css'
import './components/Products/Products.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products';
import React, {createContext, useEffect, useRef, useState} from 'react';

export const UserContext = createContext(null)
export const CartContext = createContext(null)

function App() {

const AppRef = useRef(null)
const [isAuth, setAuth] = useState(false)
const [login, setLogin] = useState(false)
const [cart, setCart] = useState({})

useEffect(() => {
  if(document.cookie.split('; ').find(cookie => cookie.startsWith('react-shop'))) {
    let cookie = document.cookie.split('; ').find(cookie => cookie.startsWith('react-shop')).split('=')[1]
    console.log(document.cookie)
    console.log(cookie)
    if(cookie === 'qwerty') {
      setAuth(true);
      setLogin('Nordcho')
    }
  }
  else {
    setAuth(false)
  }
}, [isAuth])

   return (
    <div ref={AppRef} className='light'>
      <UserContext.Provider value={{isAuth, login}}>
      <CartContext.Provider value={{cart, setCart}}>
          <Header AppRef={AppRef} isAuth={isAuth} setAuth={setAuth} login={login} setLogin={setLogin}/>
          <Main>
            <Filters />
            <Products/>
          </Main>
        </CartContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
