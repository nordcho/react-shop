import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';
import {FaSortAmountDown, FaSortAmountUp, FaTh, FaThList} from 'react-icons/fa';

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

    const changeProductListView = () => {
        setProductListView('product-list__list');
        setProductListViewSwitcherColor('black');
        setProductGridViewSwitcherColor('gray');
    }

    const changeProductGridView = () => {
        setProductListView('product-list__grid');
        setProductListViewSwitcherColor('gray');
        setProductGridViewSwitcherColor('black');
    }

    const [productListViewSwitcherColor, setProductListViewSwitcherColor] = useState(() => {
        return 'gray'
    })

    const [productGridViewSwitcherColor, setProductGridViewSwitcherColor] = useState(() => {
        return 'black'
    })

    const [sortState, setsortState] = useState(() => {
        return 'desc'
    })

    const [sortVisible, setsortVisible] = useState(() => {
        return 'product-card-sort-choose'
    })

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
                <span className="product-view__sort">
                    Сортировка <FaSortAmountDown />
                    <div class="product-view__sort_dropdown">
                        <div className='product-view__sort_desc'
                        onClick={() => {setsortState('desc')}}
                        ><FaSortAmountDown /> По убыванию </div>
                        <div className='product-view__sort_asc'
                        onClick={() => {setsortState('asc')}}
                        ><FaSortAmountUp />По возрастанию</div>
                    </div>
                </span>
                <div className="product-view__switcher">
                <FaThList
                    onClick={changeProductListView}
                    color = {productListViewSwitcherColor}
                    size={20}
                />
                <FaTh
                    onClick={changeProductGridView}
                    color = {productGridViewSwitcherColor}
                    size={20}
                />
                </div>
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