import React, { useContext, useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../App';

const Products = (props) => {

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

    const productData = useContext(ProductContext)

    const memoizedProductCard = useMemo(() => {
        return (
            <ProductCard/>
        )
      }, [productData])

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
            <ProductContext.Provider value={productData}>
            {memoizedProductCard}
            </ProductContext.Provider>) : sortArrAsc(productData).map(productData => 
            <ProductContext.Provider value={productData}>
            {memoizedProductCard}
            </ProductContext.Provider>)
            }
            </div>
        </div>
    );
};




export default Products;