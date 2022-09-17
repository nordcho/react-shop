import React, {useState} from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Like = ({className, colorHeart}) => {

    const [like, setLike] = useState(() => {
        return true
    })

    const handleClickLike = () => {
        like ? setLike(false) : setLike(true)
    }

    return (
        <div className={className}>
            {like ? <FaRegHeart onClick={handleClickLike}/> : <FaHeart color={colorHeart} onClick={handleClickLike} />}
        </div>
    );
};

export default Like;