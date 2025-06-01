import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {

    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item?.id}`);
    }

    return (
        <div className='product-card' onClick={showDetail}>
            <img width={250} 
            src={item?.img} />
            <div>{item?.choice ? "*Conscious Choice*" : ""}</div>
            <div>{item?.title}</div>
            <div>₩{item?.price}</div>
            <div>{item?.new ? "신제품" : ""}</div>
        </div>
    )
}

export default ProductCard