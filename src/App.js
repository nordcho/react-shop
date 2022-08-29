import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Filters from './components/Filters';
import Products from './components/Products';
import React, {createContext, useEffect, useRef, useState} from 'react';

export const UserContext = createContext(null)

function App() {

const AppRef = useRef(null)

const [isAuth, setAuth] = useState(false)

// useEffect(() => {
//   let cookie = document.cookie.split('; ').find(cookie => cookie.startsWith('react-shop')).split('=')[1]
//   if(cookie == 'qwerty') {
//     setAuth(true)
//   }
//   else {
//     setAuth(false)
//   }
// }, [])

   return (
    <div ref={AppRef} className='light'>
      <UserContext.Provider value={isAuth}>
        <Header AppRef={AppRef} isAuth={isAuth} setAuth={setAuth}/>
        <Main>
          <Filters />
          <Products/>
        </Main>
      </UserContext.Provider>
    </div>
  );
}

export default App;
