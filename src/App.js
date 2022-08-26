import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Filters from './components/Filters';
import Products from './components/Products';
import {createContext, useRef} from 'react';

export const ProductContext = createContext(null)

function App() {

const AppRef = useRef(null)

   return (
    <div ref={AppRef} className='light'>
        <Header AppRef={AppRef}/>
        <Main>
          <Filters />
          <Products/>
        </Main>
    </div>
  );
}

export default App;
