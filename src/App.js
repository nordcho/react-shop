import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Filters from './components/Filters';
import Products from './components/Products';
import ProductCard from './components/ProductCard';
import {useEffect, useState, createContext, useRef, useMemo} from 'react';

export const ProductContext = createContext(null)

function App() {

  const AppRef = useRef(null)

  const [productData, setProductData] = useState(() => {
    return []
  })

  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(data => data.json())
    .then(response => setProductData(response))
    .then(() => {setIsOn(true)})
  }, isOn)

   return (
    <div ref={AppRef} className='light'>
        <Header AppRef={AppRef}/>
        <Main>
          <Filters />
          <ProductContext.Provider value={productData}>
          <Products />
          </ProductContext.Provider>
        </Main>
    </div>
  );
}

export default App;
