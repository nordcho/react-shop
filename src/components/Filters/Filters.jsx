import React, {useEffect, useState} from 'react';

const Filters = () => {

    const [getCategories, setGetCategories] = useState([]);
    
    const [requiest, setRequest] = useState(false);

    const [category, setCategory] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(data => data.json())
        .then(response => setGetCategories(response))
        .then(() => setRequest(true))
        .then(() => {console.log('запрос категорий')})
    }, [requiest])


    return (
        <div className='filter'>
            <div className="filter-price">
                <div className='filter-price-header'>
                <div className='filter-price-header-title'>
                    Цена:
                </div>
                <div className="filter-price-wrapper">
                    <input type="nubmer" id="min-price" />
                    <input type="nubmer" id="max-price" />
                </div>
                </div>
                <div className='filter-category-header'>
                    <div className='filter-category-title'>
                        Категории:
                    </div>
                    <div className='filter-category-wrapper'>
                    {getCategories.map((categories, key) => {
                        return (
                            <div key={key + 1} className='filter-category-category'>
                                <input key={key + 2} type="checkbox" onClick={() => {setCategory(categories)} }/>
                                <span className={'category-' + categories} key={key + 3}>{categories} </span>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <button 
                        id='purchase-button'
                    >
                        Применить
                    </button>
            </div>     
        </div>
    );
};

export default Filters;