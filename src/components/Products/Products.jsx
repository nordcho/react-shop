import React, {useEffect, useState} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import {FaSortAmountDown, FaSortAmountUp, FaTh, FaThList} from 'react-icons/fa';

const Products = () => {

    const [productData, setProductData] = useState(() => {
        return []
      })

    const [sortState, setSortState] = useState('');
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/?' + sortState)
        .then(data => data.json())
        .then(response => setProductData(response))
    }, [sortState])

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

    return (
        <div className='product-container'>
            <div className="product-view">
                <span className="product-view__sort">
                    Сортировка <FaSortAmountDown size={20}/>
                    <div className="product-view__sort_dropdown">
                        <div className='product-view__sort_desc'
                        onClick={() => {setSortState('sort=desc')}}
                        ><FaSortAmountDown/> По убыванию </div>
                        <div className='product-view__sort_asc'
                        onClick={() => {setSortState('sort=asc')}}
                        ><FaSortAmountUp/>По возрастанию</div>
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
            {productData.map(productData => 
            <ProductCard
                key={productData?.id}
                id={productData?.id}
                title={productData?.title}
                image={productData?.image}
                price={productData?.price}
                count={productData?.rating.count}
                rate={productData?.rating.rate}
                discount={10}
            />
            )
            }
            </div>
        </div>
    );
};

export default Products;