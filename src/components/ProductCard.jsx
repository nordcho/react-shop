import React, {useState} from 'react';
import Stars from './Stars';
import Like from './Like';

const ProductCard = React.memo(({title, image, price, count, rate}) => {

    // input
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
  
    console.log('ProductCard Render')

    return (
        <div className='product-card'>
            <Like
                className={'product-card-like'}
                colorHeart={'red'}
            />
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
                <span><Stars
                    numTotalStars = {'5'}
                    initialRating = {rate}
                />
                </span>
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
                    <button onClick={minus} disabled = {purchaseCount === 0}>
                        <span>-</span>
                    </button>
                    <input id='counter' type='number' value={purchaseCount} onChange={(e) => {e.target.value <= count ? setPurchaseCount(e.target.value) : setPurchaseCount(count)}}/>
                    <button onClick={plus} disabled = {purchaseCount >= count}>
                        <span>+</span>
                    </button>
                </div>
            }
        </div>
    );
});

export default ProductCard;