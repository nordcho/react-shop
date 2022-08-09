import React from 'react';

const Filters = () => {
    return (
        <div className='filter'>
            <div className="filter-price">
                <div className='filter-price-header'>
                <span className='filter-price-header-title'>
                    Цена:
                </span>
                </div>
                <div className="filter-price-wrapper">
                    <input type="nubmer" id="min-price" />
                    <input type="nubmer" id="max-price" />
                </div> 
            </div>     
        </div>
    );
};

export default Filters;