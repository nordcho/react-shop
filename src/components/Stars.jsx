import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

const Stars = ({numTotalStars, initialRating}) => {

    const getColor = (i, initialRating) => {
        let getInitialRating = parseInt(initialRating)
        return i < getInitialRating ? 'gold': 'gold'
    }

    return (
        <div className='product-card-stars-rating'>
            <span>
            {Array.from({ length: numTotalStars }).map((e, i) => {
                    let starNum = initialRating - (i)
                    if ( (starNum) > 0 && (starNum) < 1) {
                        return (<FaStarHalfAlt
                            key={i}
                            fill={getColor(i, initialRating)}
                        />);
                    }
                    if ( (starNum) <= 0) {
                        return (<FaRegStar
                            key={i}
                            fill={getColor(i, initialRating)}
                        />);
                    }
                    else { return (
                        <FaStar
                            key={i}
                            fill={getColor(i, initialRating)}
                        />
                    );
                    }
            })}
            {initialRating}
            </span>
        </div>
    );
};

export default Stars;