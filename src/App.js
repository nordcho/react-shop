import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Filters from './components/Filters';
import Products from './components/Products';
import ProductCard from './components/ProductCard';
import { useEffect, useState, createContext } from 'react';




function App() {

  const [productData, setProductData] = useState(() => {
    return []
  })

  const [theme, setTheme] = useState(() => {
    'light'
  })

  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(data => data.json())
    .then(response => setProductData(response))
    .then(() => {setIsOn(true)})
    .then(() => {console.log('2')})
  }, isOn)



  return (
    <>
        <Header />
        <Main>
          <Filters />
          <Products>
              {productData.map((productData)=> {
                return <ProductCard
                        title={productData?.title}
                        description={productData?.description}
                        image={productData?.image}
                        price={productData?.price}
                        count={productData?.rating.count}
                        rate={productData?.rating.rate}
                />
              })}
          </Products>
        </Main>
      </>
  );
}

export default App;
