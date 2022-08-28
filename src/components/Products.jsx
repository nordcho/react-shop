import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';

const Products = () => {

    const [productData, setProductData] = useState(() => {
        return []
      })
    
    const [isOn, setIsOn] = useState(false);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(data => data.json())
        .then(response => setProductData(response))
        .then(() => {setIsOn(true)})
        .then(() => {console.log('2')})
    }, [isOn])

    const [productListView, setProductListView] = useState(() => {
        return 'product-list__grid'
    })

    const [buttonListStyle, setButtonListStyle] = useState(() => {
        return 'product-view-list-button'
    })

    const [buttonGridStyle, setButtonGridStyle] = useState(() => {
        return 'product-view-grid-button__cheked'
    })

    const [sortState, setsortState] = useState(() => {
        return 'desc'
    })

    const handleClickListButton = () => {
        setButtonListStyle('product-view-list-button__cheked');
        setButtonGridStyle('product-view-grid-button')
    }

    const handleClickGridButton = () => {
        setButtonGridStyle('product-view-grid-button__cheked');
        setButtonListStyle('product-view-list-button');
    }

    const changeGridState = () => {
        handleClickGridButton();
        setProductListView('product-list__grid');
    }

    const changeListState = () => {
        handleClickListButton();
        setProductListView('product-list__list');
    }

    const sortArrDesc = (arr) => {
        return arr.sort((a, b) => {return b.price - a.price})
    }
    
    const sortArrAsc = (arr) => {
        return arr.sort((a, b) => {return a.price - b.price })
    }

    const sortAsc = () => {
        setsortState('asc')
    }

    const sortDesc = () => {
        setsortState('desc')
    }

    return (
        <div className='product-container'>
            <div className="product-view">
                <button className={buttonListStyle}
                        onClick={sortAsc}
                >
                Сортировка по возрастанию
                </button>
                <button className={buttonListStyle}
                        onClick={sortDesc}
                >
                Сортировка по убыванию
                </button>
                <button className={buttonListStyle}
                        onClick={changeListState}
                >
                Список
                </button>
                <button className={buttonGridStyle}
                        onClick={changeGridState}
                >
                Сетка
                </button>
            </div>
            <div className={productListView}>
            {sortState === 'desc' ? sortArrDesc(productData).map(productData => 
            <ProductCard
                key={productData?.id}
                title={productData?.title}
                image={productData?.image}
                price={productData?.price}
                count={productData?.rating.count}
                rate={productData?.rating.rate}
            />
            ) : sortArrAsc(productData).map(productData => 
                <ProductCard
                key={productData?.id}
                title={productData?.title}
                image={productData?.image}
                price={productData?.price}
                count={productData?.rating.count}
                rate={productData?.rating.rate}
            />)
            }
            </div>
        </div>
    );
};

export default Products;