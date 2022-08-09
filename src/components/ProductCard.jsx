import {React, useState, useEffect} from 'react';

const ProductCard = ({title, description, image, price, count, rate}) => {

    const [purchaseCount, setPurchaseCount] = useState(() => {
        return 0;
    })

    const plus = () => {
        let result = setPurchaseCount(parseInt(purchaseCount) + 1);
        return result;
    }

    const minus = () => {
        let result = setPurchaseCount(parseInt(purchaseCount) - 1);
        return result;
    }

    return (
        <div className='product-card'>
            <div className="product-image">
                <img src={image} alt={title}></img>
            </div>
            <div className="product-name">
                <span>{title}</span>
            </div>
            {/* <div className='product-description'>
                {description}
            </div> */}
            <div className='product-rating'>
                <span>В наличии: {count}</span>
                <span>Оценка: {rate}</span>
            </div>
            <div className="product-price">
                <span>{price} ₽</span>
            </div>
            {purchaseCount <= 0
            ?
                <div className="product-purchase-button">
                    <button 
                        id='purchase-button'
                        onClick={() => {setPurchaseCount(1)}}
                    >
                        Купить
                    </button>
                </div>
            : 
                <div className='product-purchase-counter'>
                    <button onClick={() => minus()} disabled = {purchaseCount === 0}>
                        <span>-</span>
                    </button>
                    <input id='counter' type='number' value={purchaseCount} onChange={(e) => {setPurchaseCount(e.target.value)}}/>
                    <button onClick={() => plus()} disabled = {purchaseCount === count}>
                        <span>+</span>
                    </button>
                </div>
            }
        </div>
    );
};

export default ProductCard;