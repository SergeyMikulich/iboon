import React, { useState } from 'react';
import './Product.scss';
import Loft from '../../assets/imgs/best_sales/2.jpg';
import ProductInfo from '../../Pages/ProductInfo/ProductInfo';

export default function Product({ title, price, main_url, additional_urls, parameters, description }) {
    const [showInfo, setShowInfo] = useState(false);

    const handleBuyClick = () => {
        setShowInfo(true);
    };

    const handleCloseInfo = () => {
        setShowInfo(false);
    };

    return (
        <div className="product">
            <div className="product_img">
                <img src={main_url} alt="" />
            </div>
            <p onClick={handleBuyClick} className="title">
                {title}
            </p>
            <p className="price"><span>{price}</span></p>
            <button className="btn btn-primary-filled" onClick={handleBuyClick}>Купить</button>
            {showInfo && (
                <div className="overlay">
                    <ProductInfo urls={additional_urls} parameters={parameters} title={title} price={price} description = {description} onClose={handleCloseInfo} setShowInfo = {setShowInfo} />
                </div>
            )}
        </div>
    )
}
