import React, {useContext, useState} from 'react';
import { UserContext, CartContext } from '../../App';
import Stars from '../Stars';
import Like from '../Like';
import { useEffect } from 'react';

const ProductCard = React.memo(({id, title, image, price, count, rate, discount}) => {

    let isAuth = useContext(UserContext)
    isAuth = isAuth.isAuth

    const setCart = useContext(CartContext)

    console.log(setCart)

    console.log('Рендер продуктовой карточки' + id)

    const [purchaseCount, setPurchaseCount] = useState(() => {
        return 0;
    })

    const setProductToCart = (whatToDo, quantity, purchaseCount) => {
        let result = purchaseCount
        if (whatToDo === 'plus') {
            result+=quantity
        }
        else if (whatToDo === 'minus') {
            result-=quantity
        }
        else {
            result = quantity
        }
        setPurchaseCount(result);
    }

    useEffect(() => {
        let productId = id
        if(purchaseCount > 0) {
            setCart.setCart((prevState) => ({
                ...prevState,
                [productId] : purchaseCount,
                }))
        }
        else if (purchaseCount === 0 && setCart?.cart[productId]) {
                let newProducts = setCart.cart.filter((p) => p[productId] !== productId)
                setCart.setCart(newProducts)
            }        
        }
    , [purchaseCount])

    const getNewPrice = (price) => {
        let result = parseInt(price) - parseInt(price) * (parseInt(discount) / 100)
        return result.toFixed(2)
    }

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
                    numTotalStars = {5}
                    initialRating = {rate}
                />
                </span>
            </div>
            <div className="product-price">
                {isAuth && discount > 0?
                <>
                    <span className='product-price__old-price deactive'>{price} ₽</span>
                    <span className='product-price__old-price'>{getNewPrice(price)} ₽</span>
                    <span className='product-price__sale'>-{discount}%</span>
                </>
                : <span className='product-price__old-price'>{price} ₽</span> 
            }

            </div>
            {purchaseCount <= 0
            ?
                <div className="product-purchase-button">
                    <button 
                        id='purchase-button'
                        onClick={() => {setProductToCart('null', 1, purchaseCount)}}
                    >
                        Купить
                    </button>
                </div>
            : 
                <div className='product-purchase-counter'>
                    <button onClick={() => {setProductToCart('minus', 1, purchaseCount)}} disabled = {purchaseCount === 0}>
                        <span>-</span>
                    </button>
                    <input id='counter' type='number' value={purchaseCount} onChange={(e) => {e.target.value <= count ? setProductToCart('null', e.target.value, purchaseCount) : setProductToCart('null', count, purchaseCount)}}/>
                    <button onClick={() => {setProductToCart('plus', 1, purchaseCount)}} disabled = {purchaseCount >= count}>
                        <span>+</span>
                    </button>
                </div>
            }
        </div>
    );
});

export default ProductCard;