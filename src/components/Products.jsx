import React, { useEffect, useState } from 'react';

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

    return (
        <div className='product-container'>
            <div className="product-view">
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
                {props.children}
            </div>
        </div>
    );
};

export default Products;