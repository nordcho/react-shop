import React, {useState} from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Like = ({className, colorHeart}) => {

    const [like, setLike] = useState(() => {
        return 'not like'
    })

    const handleClickLike = () => {
        like === 'not like' ? setLike('like') : setLike('not like')
    }


    return (
        <div className={className}>
            {like === 'not like' ? <FaRegHeart onClick={handleClickLike}/> : <FaHeart color={colorHeart} onClick={handleClickLike} />}
        </div>
    );
};

export default Like;